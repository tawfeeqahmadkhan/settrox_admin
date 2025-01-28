import React from "react";
import {
  Button,
  Card,
  CardBody,
  Table,
  TableCell,
  TableContainer,
  TableFooter,
  TableHeader,
  TableBody,
  TableRow,
} from "@windmill/react-ui";
import { useContext, useState } from "react";
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
import FlashSaleServices from "@/services/FlashSaleServices";
import AddFlashSaleDrawer from "../drawer/AddFlashSaleDrawer";
import Tooltip from "@/components/tooltip/Tooltip";
import { notifySuccess, notifyError } from "@/utils/toast";

const FlashSaleSection = () => {
  const { toggleDrawer, setIsUpdate } = useContext(SidebarContext);
  const { t } = useTranslation();
  const { data, loading, error } = useAsync(FlashSaleServices.getAllFlashSales);

  const [isCheck, setIsCheck] = useState([]);
  const { title, serviceId, handleModalOpen, handleUpdate } = useToggleDrawer();

  const handleStatusUpdate = (id, status) => {
    console.log(status);

    FlashSaleServices.updateStatus(id, { status })
      .then((res) => {
        setIsUpdate(true);
        notifySuccess("Flash Sale Status Updated Successfully");
      })
      .catch((err) => notifyError(err.message));
  };

  return (
    <>
      <DeleteModal
        id={serviceId}
        title={"this Banner"}
        siteSettingsSection="Flash Sales"
      />
      <MainDrawer>
        <AddFlashSaleDrawer id={serviceId} data={data?.flashSales} />
      </MainDrawer>
      <AnimatedContent>
        <Card className="min-w-0 shadow-xs overflow-hidden bg-white dark:bg-gray-800 mb-5">
          <CardBody className="w-full justify-end flex">
            <div className="lg:flex w-full md:flex xl:justify-end xl:w-1/2  md:w-full md:justify-end flex-grow-0">
              <div className="w-full md:w-48 lg:w-48 xl:w-48">
                <Button
                  onClick={toggleDrawer}
                  className="rounded-md h-12 w-full"
                >
                  <span className="mr-2">
                    <FiPlus />
                  </span>
                  {t("Add Flash Sale")}
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
      ) : data?.flashSales?.length !== 0 ? (
        <TableContainer className="mb-8">
          <Table>
            <TableHeader>
              <tr>
                <TableCell>{t("Image")}</TableCell>
                <TableCell>{t("Product URL")}</TableCell>
                <TableCell className="text-center">
                  {t("catPublishedTbl")}
                </TableCell>
                <TableCell className="text-right">
                  {t("catActionsTbl")}
                </TableCell>
              </tr>
            </TableHeader>
            <TableBody>
              {data?.data?.map((flashSale, i) => (
                <TableRow key={flashSale?._id}>
                  <TableCell className="text-center text-xs">
                    <img
                      src={flashSale?.image}
                      alt="Flash Sale"
                      className="w-20 h-12 object-cover mx-auto"
                    />
                  </TableCell>
                  <TableCell className="text-center text-xs">
                    <a
                      href={flashSale?.productUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {flashSale?.productUrl}
                    </a>
                  </TableCell>
                  <TableCell className="text-center">
                    <Switch
                      onChange={() =>
                        handleStatusUpdate(
                          flashSale?._id,
                          flashSale?.status === "active" ? "inactive" : "active"
                        )
                      }
                      checked={flashSale?.status === "active" ? true : false}
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
                  <TableCell className="flex items-center justify-center gap-2">
                    <button
                      onClick={() => handleUpdate(flashSale?._id)}
                      className="p-2 cursor-pointer text-gray-400 hover:text-blue-600 focus:outline-none"
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
                        handleModalOpen(
                          flashSale?._id,
                          flashSale?.productUrl,
                          flashSale
                        )
                      }
                      className="p-2 cursor-pointer text-gray-400 hover:text-red-600 focus:outline-none"
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
          <TableFooter>{/* Add pagination if needed */}</TableFooter>
        </TableContainer>
      ) : (
        <NotFound title="Sorry, There are no flash sales right now." />
      )}
    </>
  );
};

export default FlashSaleSection;
