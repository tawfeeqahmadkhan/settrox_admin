import {
  Button,
  Card,
  CardBody,
  Input,
  Pagination,
  Table,
  TableCell,
  TableContainer,
  TableFooter,
  TableHeader,
} from "@windmill/react-ui";
import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { FiEdit, FiPlus, FiTrash2 } from "react-icons/fi";

// Internal imports
import useAsync from "@/hooks/useAsync";
import { SidebarContext } from "@/context/SidebarContext";

import useToggleDrawer from "@/hooks/useToggleDrawer";
import useFilter from "@/hooks/useFilter";
import DeleteModal from "@/components/modal/DeleteModal";
import BulkActionDrawer from "@/components/drawer/BulkActionDrawer";
import PageTitle from "@/components/Typography/PageTitle";
import MainDrawer from "@/components/drawer/MainDrawer";
import BrandDrawer from "@/components/drawer/BrandDrawer"; // Updated drawer
import UploadMany from "@/components/common/UploadMany";
import SwitchToggleChildBrand from "@/components/form/switch/SwitchToggleChildBrand"; // Updated switch component
import TableLoading from "@/components/preloader/TableLoading";
import CheckBox from "@/components/form/others/CheckBox";

import NotFound from "@/components/table/NotFound";
import AnimatedContent from "@/components/common/AnimatedContent";
import BrandServices from "@/services/BrandServices";
import BrandTable from "@/components/brand/BrandTable";


const Brand = () => {
  const { toggleDrawer, lang } = useContext(SidebarContext);

  const { data, loading, error } = useAsync(BrandServices.getAllBrands);
  const { data: getAllBrands } = useAsync(BrandServices.getAllBrands);

  const { handleDeleteMany, allId, handleUpdateMany, serviceId } = useToggleDrawer();

  const { t } = useTranslation();

  const {
    handleSubmitBrand,
    brandRef,
    totalResults,
    resultsPerPage,
    dataTable,
    serviceData,
    handleChangePage,
    filename,
    isDisabled,
    setBrandType,
    handleSelectFile,
    handleUploadMultiple,
    handleRemoveSelectFile,
  } = useFilter(data);

  // React hooks
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);
  const [showChild, setShowChild] = useState(false);
  const handleSelectAll = () => {
    setIsCheckAll(!isCheckAll);
    setIsCheck(data[0]?.children.map((li) => li._id));
    if (isCheckAll) {
      setIsCheck([]);
    }
  };

  // Handle reset field function
  const handleResetField = () => {
    setBrandType("");
    brandRef.current.value = "";
  };

  return (
    <>
      <PageTitle>{t("Brands")}</PageTitle>
      <DeleteModal ids={allId} setIsCheck={setIsCheck} />

      <BulkActionDrawer ids={allId} title="Brands" lang={lang} data={data} isCheck={isCheck} />

      <MainDrawer>
        <BrandDrawer id={serviceId} data={data} lang={lang} />
      </MainDrawer>

      <AnimatedContent>
        <Card className="min-w-0 shadow-xs overflow-hidden bg-white dark:bg-gray-800 mb-5">
          <CardBody>
            <form
              onSubmit={handleSubmitBrand}
              className="py-3 grid gap-4 lg:gap-6 xl:gap-6 xl:flex"
            >
              <div className="flex justify-start w-1/2 xl:w-1/2 md:w-full">
                <UploadMany
                  title="Brands"
                  exportData={getAllBrands}
                  filename={filename}
                  isDisabled={isDisabled}
                  handleSelectFile={handleSelectFile}
                  handleUploadMultiple={handleUploadMultiple}
                  handleRemoveSelectFile={handleRemoveSelectFile}
                />
              </div>

              <div className="lg:flex md:flex xl:justify-end xl:w-1/2 md:w-full md:justify-start flex-grow-0">
                <div className="w-full md:w-40 lg:w-40 xl:w-40 mr-3 mb-3 lg:mb-0">
                  <Button
                    disabled={isCheck.length < 1}
                    onClick={() => handleUpdateMany(isCheck)}
                    className="w-full rounded-md h-12 text-gray-600 btn-gray"
                  >
                    <span className="mr-2">
                      <FiEdit />
                    </span>
                    {t("BulkAction")}
                  </Button>
                </div>
                <div className="w-full md:w-32 lg:w-32 xl:w-32 mr-3 mb-3 lg:mb-0">
                  <Button
                    disabled={isCheck.length < 1}
                    onClick={() => handleDeleteMany(isCheck)}
                    className="w-full rounded-md h-12 bg-red-500 btn-red"
                  >
                    <span className="mr-2">
                      <FiTrash2 />
                    </span>
                    {t("Delete")}
                  </Button>
                </div>
                <div className="w-full md:w-48 lg:w-48 xl:w-48">
                  <Button onClick={toggleDrawer} className="rounded-md h-12 w-full">
                    <span className="mr-2">
                      <FiPlus />
                    </span>
                    {t("AddBrand")}
                  </Button>
                </div>
              </div>
            </form>
          </CardBody>
        </Card>

        <Card className="min-w-0 shadow-xs overflow-hidden bg-white dark:bg-gray-800 rounded-t-lg mb-4">
          <CardBody>
            <form onSubmit={handleSubmitBrand} className="py-3 grid gap-4 md:flex">
              <div className="flex-grow">
                <Input ref={brandRef} type="search" placeholder={t("SearchBrand")} />
              </div>
              <div className="flex items-center gap-2">
                <Button type="submit" className="h-12 w-full bg-blue-700">
                  {t("Filter")}
                </Button>
                <Button
                  layout="outline"
                  onClick={handleResetField}
                  type="reset"
                  className="h-12"
                >
                  {t("Reset")}
                </Button>
              </div>
            </form>
          </CardBody>
        </Card>
      </AnimatedContent>

      {/* <SwitchToggleChildBrand
        title=" "
        handleProcess={setShowChild}
        processOption={showChild}
        name={showChild}
      /> */}

      {loading ? (
        <TableLoading row={12} col={6} width={190} height={20} />
      ) : error ? (
        <span className="text-center mx-auto text-red-500">{error}</span>
      ) : serviceData?.length !== 0 ? (
        <TableContainer className="mb-8">
          <Table>
            <TableHeader>
              <tr>
                <TableCell>
                  <CheckBox
                    type="checkbox"
                    name="selectAll"
                    id="selectAll"
                    handleClick={handleSelectAll}
                    isChecked={isCheckAll}
                  />
                </TableCell>
                <TableCell>{t("brandIdTbl")}</TableCell>
                <TableCell>{t("brandIconTbl")}</TableCell>
                <TableCell>{t("BrandName")}</TableCell>
                <TableCell>{t("BrandDescription")}</TableCell>
                <TableCell className="text-center">{t("brandPublishedTbl")}</TableCell>
                <TableCell className="text-right">{t("brandActionsTbl")}</TableCell>
              </tr>
            </TableHeader>

            <BrandTable
              data={data}
              lang={lang}
              isCheck={isCheck}
              brands={dataTable}
              setIsCheck={setIsCheck}
              showChild={showChild}
            />
          </Table>

          <TableFooter>
            <Pagination
              totalResults={totalResults}
              resultsPerPage={resultsPerPage}
              onChange={handleChangePage}
              label="Table navigation"
            />
          </TableFooter>
        </TableContainer>
      ) : (
        <NotFound title="Sorry, There are no brands right now." />
      )}
    </>
  );
};

export default Brand;
