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
import FeaturedProductServices from "@/services/FeaturedProductServices";
import AddFeaturedProductDrawer from "../drawer/AddFeaturedProductDrawer";
import Tooltip from "@/components/tooltip/Tooltip";

const FeaturedProductSection = () => {
  const { toggleDrawer, setIsUpdate } = useContext(SidebarContext);
  const { t } = useTranslation();
  const { data, loading, error } = useAsync(
    FeaturedProductServices.getAllFeaturedProducts
  );
  const { title, serviceId, handleModalOpen, handleUpdate } = useToggleDrawer();

  const handleStatusUpdate = (id, status) => {
    FeaturedProductServices.updateStatus(id, status)
      .then(() => {
        setIsUpdate(true);
        notifySuccess("Status updated successfully");
      })
      .catch((err) => notifyError(err.message));
  };

  return (
    <>
      <DeleteModal
        id={serviceId}
        title={title}
        siteSettingsSection="Featured Products"
      />
      <MainDrawer>
        <AddFeaturedProductDrawer id={serviceId} />
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
                  {t("Add Featured Product")}
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
                <TableCell>{t("Image")}</TableCell>
                <TableCell>{t("Title")}</TableCell>
                <TableCell>{t("Description")}</TableCell>
                <TableCell>{t("Product URL")}</TableCell>
                <TableCell className="text-center">{t("Status")}</TableCell>
                <TableCell className="text-right">{t("Actions")}</TableCell>
              </tr>
            </TableHeader>
            <TableBody>
              {data?.data?.map((product) => (
                <TableRow key={product._id}>
                  <TableCell>
                    <img
                      src={product.image}
                      alt="Featured Product"
                      className="w-20 h-12 object-cover"
                    />
                  </TableCell>
                  <TableCell className="text-xs">{product.title}</TableCell>
                  <TableCell className="text-xs">
                    {product.description}
                  </TableCell>
                  <TableCell className="text-xs">
                    <a
                      href={product.productUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {product.productUrl}
                    </a>
                  </TableCell>
                  <TableCell className="text-center">
                    <Switch
                      onChange={() =>
                        handleStatusUpdate(
                          product?._id,
                          product?.status === "active" ? "inactive" : "active"
                        )
                      }
                      checked={product?.status === "active" ? true : false}
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
                  </TableCell>
                  <TableCell className="flex justify-center gap-2">
                    <button
                      onClick={() => handleUpdate(product._id)}
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
                      onClick={() =>
                        handleModalOpen(product._id, product.title)
                      }
                      className="p-2 text-gray-400 hover:text-red-600"
                    >
                      <Tooltip
                        id="delete"
                        Icon={FiTrash2}
                        title={t("Delete")}
                        bgColor="#EF4444"
                      />
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <NotFound title={t("No featured products found")} />
      )}
    </>
  );
};

export default FeaturedProductSection;
