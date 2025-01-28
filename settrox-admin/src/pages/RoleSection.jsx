import React from "react";
import {
  Button,
  Card,
  CardBody,
  Table,
  TableCell,
  TableContainer,
  TableHeader,
  TableBody,
  TableRow,
  Badge,
} from "@windmill/react-ui";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { FiEdit, FiPlus, FiTrash2 } from "react-icons/fi";
import Switch from "react-switch";
import useAsync from "@/hooks/useAsync";
import { SidebarContext } from "@/context/SidebarContext";
import useToggleDrawer from "@/hooks/useToggleDrawer";
import DeleteModal from "@/components/modal/DeleteModal";
import PageTitle from "@/components/Typography/PageTitle";
import MainDrawer from "@/components/drawer/MainDrawer";
import TableLoading from "@/components/preloader/TableLoading";
import NotFound from "@/components/table/NotFound";
import AnimatedContent from "@/components/common/AnimatedContent";
import RoleServices from "@/services/RoleServices";
import AddRoleDrawer from "@/components/drawer/AddRoleDrawer";
import Tooltip from "@/components/tooltip/Tooltip";

const RoleSection = () => {
  const { toggleDrawer, setIsUpdate } = useContext(SidebarContext);
  const { t } = useTranslation();
  const { data, loading, error } = useAsync(RoleServices.getAllRoles);
  const { title, serviceId, handleModalOpen, handleUpdate } = useToggleDrawer();

  const handleStatusUpdate = (id, status) => {
    RoleServices.updateStatus(id, status)
      .then(() => {
        setIsUpdate(true);
        notifySuccess("Status updated successfully");
      })
      .catch((err) => notifyError(err.message));
  };

  return (
    <>
      <PageTitle>{t("Roles and Permission")}</PageTitle>
      <DeleteModal id={serviceId} title={title} siteSettingsSection="Roles" />
      <MainDrawer>
        <AddRoleDrawer id={serviceId} />
      </MainDrawer>

      <AnimatedContent>
        <Card className="min-w-0 shadow-xs overflow-hidden bg-white dark:bg-gray-800 mb-5">
          <CardBody className="w-full justify-end flex">
            <div className="lg:flex w-full md:flex xl:justify-end xl:w-1/2 md:w-full md:justify-end flex-grow-0">
              <div className="w-full md:w-48 lg:w-48 xl:w-48">
                <Button
                  onClick={toggleDrawer}
                  className="rounded-md h-12 w-full"
                >
                  <span className="mr-2">
                    <FiPlus />
                  </span>
                  {t("Add Role")}
                </Button>
              </div>
            </div>
          </CardBody>
        </Card>
      </AnimatedContent>

      {loading ? (
        <TableLoading row={12} col={6} width={190} height={20} />
      ) : error ? (
        <span className="text-center mx-auto text-red-500">{error}</span>
      ) : data?.data?.length > 0 ? (
        <TableContainer className="mb-8">
          <Table>
            <TableHeader>
              <tr>
                <TableCell>{t("Role Name")}</TableCell>
                <TableCell>{t("Permissions")}</TableCell>
                <TableCell className="text-center">{t("Status")}</TableCell>
                <TableCell className="text-right">{t("Actions")}</TableCell>
              </tr>
            </TableHeader>
            <TableBody>
              {data?.data?.map((role) => (
                <TableRow key={role._id}>
                  <TableCell className="font-semibold">{role.name}</TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-2">
                      {role.permissions?.map((perm) => (
                        <Badge key={perm.module} color="purple">
                          {perm.module}: {perm.actions.join(", ")}
                        </Badge>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell className="text-center">
                    {role?.name !== "Super Admin" && (
                      <Switch
                        onChange={() =>
                          handleStatusUpdate(
                            role?._id,
                            role?.status === "active" ? "inactive" : "active"
                          )
                        }
                        checked={role?.status === "active"}
                        className="react-switch md:ml-0"
                        uncheckedIcon={
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              height: "100%",
                              width: 120,
                              fontSize: 14,
                              color: "white",
                              paddingRight: 22,
                              paddingTop: 1,
                            }}
                          ></div>
                        }
                        width={30}
                        height={15}
                        handleDiameter={13}
                        offColor="#E53E3E"
                        onColor={"#2F855A"}
                        checkedIcon={
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              width: 73,
                              height: "100%",
                              fontSize: 14,
                              color: "white",
                              paddingLeft: 20,
                              paddingTop: 1,
                            }}
                          ></div>
                        }
                      />
                    )}
                  </TableCell>
                  <TableCell className="flex justify-center gap-2">
                    {role?.name!=="Super Admin" && (
                      <>
                         <button
                      onClick={() => handleUpdate(role._id)}
                      className="p-2 text-gray-400 hover:text-blue-600"
                    >
                      <Tooltip
                        id="edit"
                        Icon={FiEdit}
                        title={t("Edit")}
                        bgColor="#10B981"
                      />
                    </button>
                    <button
                      onClick={() => handleModalOpen(role._id, role.name)}
                      className="p-2 text-gray-400 hover:text-red-600"
                    >
                      <Tooltip
                        id="delete"
                        Icon={FiTrash2}
                        title={t("Delete")}
                        bgColor="#EF4444"
                      />
                    </button>
                      </>
                    )}
                 
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <NotFound title={t("No roles found")} />
      )}
    </>
  );
};

export default RoleSection;
