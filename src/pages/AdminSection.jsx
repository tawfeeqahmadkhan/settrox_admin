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
import AdminServices from "@/services/AdminServices";
import AddAdminDrawer from "@/components/drawer/AddAdminDrawer";
import Tooltip from "@/components/tooltip/Tooltip";
import { notifySuccess, notifyError } from "@/utils/toast";

const AdminSection = () => {
  const { toggleDrawer, setIsUpdate } = useContext(SidebarContext);
  const { t } = useTranslation();
  const { data, loading, error } = useAsync(AdminServices.getAllStaff);
  const { title, serviceId, handleModalOpen, handleUpdate } = useToggleDrawer();

  console.log(data);

  const handleStatusUpdate = (id, status) => {
    AdminServices.updateStaffStatus(id, {status:status})
      .then(() => {
        setIsUpdate(true);
        notifySuccess("Status updated successfully");
      })
      .catch((err) => notifyError(err.message));
  };

  return (
    <>
      <PageTitle>{t("Manage Users")}</PageTitle>
      <DeleteModal id={serviceId} title={title} siteSettingsSection="Admins" />
      <MainDrawer>
        <AddAdminDrawer id={serviceId} />
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
                  {t("Add Admin")}
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
      ) : data?.length > 0 ? (
        <TableContainer className="mb-8">
          <Table>
            <TableHeader>
              <tr>
                <TableCell>{t("Name")}</TableCell>
                <TableCell>{t("Email")}</TableCell>
                <TableCell>{t("Role")}</TableCell>
                <TableCell className="text-center">{t("Status")}</TableCell>
                <TableCell className="text-right">{t("Actions")}</TableCell>
              </tr>
            </TableHeader>
            <TableBody>
              {data?.map((admin) => (
                <TableRow key={admin._id}>
                  <TableCell className="font-semibold">{admin.name}</TableCell>
                  <TableCell>{admin.email}</TableCell>
                  <TableCell>
                    <Badge color="blue">
                      {admin.role?.name || "No role assigned"}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-center">
                    {admin?.email !== "admin@gmail.com" && (
                      <Switch
                        onChange={() =>
                          handleStatusUpdate(
                            admin?._id,
                            admin?.status === "Active" ? "Inactive" : "Active"
                          )
                        }
                        checked={admin?.status === "Active"}
                        className="react-switch md:ml-0"
                        uncheckedIcon={false}
                        checkedIcon={false}
                        width={30}
                        height={15}
                        handleDiameter={13}
                        offColor="#E53E3E"
                        onColor="#2F855A"
                      />
                    )}
                  </TableCell>

                  <TableCell className="flex justify-center gap-2">
                    {admin.email !== "admin@gmail.com" && (
                      <>
                        <button
                          onClick={() => handleUpdate(admin._id)}
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
                          onClick={() => handleModalOpen(admin._id, admin.name)}
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
        <NotFound title={t("No admins found")} />
      )}
    </>
  );
};

export default AdminSection;
