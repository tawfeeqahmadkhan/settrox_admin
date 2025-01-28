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
  
  //internal import
  
  import useAsync from "@/hooks/useAsync";
  import { SidebarContext } from "@/context/SidebarContext";
  import SpecificationServices from "@/services/SpecificationServices";
  import useToggleDrawer from "@/hooks/useToggleDrawer";
  import useFilter from "@/hooks/useFilter";
  import DeleteModal from "@/components/modal/DeleteModal"; 
  import PageTitle from "@/components/Typography/PageTitle";
  import MainDrawer from "@/components/drawer/MainDrawer";
  import SpecificationDrawer from "@/components/drawer/SpecificationDrawer";
  import UploadMany from "@/components/common/UploadMany";
  import SwitchToggleChildCat from "@/components/form/switch/SwitchToggleChildCat";
  import TableLoading from "@/components/preloader/TableLoading";
  import CheckBox from "@/components/form/others/CheckBox";
  import SpecificationTable from "@/components/specification/SpecificationTable";
  import NotFound from "@/components/table/NotFound";
  import AnimatedContent from "@/components/common/AnimatedContent";
  

  const Specification = () => {
    const { toggleDrawer, lang } = useContext(SidebarContext);
  
    const { data, loading, error } = useAsync(SpecificationServices.getAllSpecification);
    const { data: getAllCategories } = useAsync(
      SpecificationServices.getAllCategories
    );
    
    const { handleDeleteMany, allId, handleUpdateMany, serviceId } =
      useToggleDrawer();
  
    const { t } = useTranslation();
  
    const {
      handleSubmitSpecification,
      specificationRef,
      totalResults,
      resultsPerPage,
      dataTable,
      serviceData,
      handleChangePage,
      filename,
      isDisabled,
      setSpecificationType,
      handleSelectFile,
      handleUploadMultiple,
      handleRemoveSelectFile,
    } = useFilter(data);
  
    // react hooks
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
  
    // handle reset field function
    const handleResetField = () => {
      setSpecificationType("");
      specificationRef.current.value = "";
    };
  
     console.log("serviceData", serviceData, "tableData", dataTable);
  
     


    return (
      <>
        <PageTitle>{t("Specification")}</PageTitle>
        <DeleteModal ids={allId} setIsCheck={setIsCheck} />
  
        
  
        <MainDrawer>
          <SpecificationDrawer id={serviceId} data={data}  lang={lang} />
        </MainDrawer>
  
        <AnimatedContent>
          <Card className="min-w-0 shadow-xs overflow-hidden bg-white dark:bg-gray-800 mb-5">
            <CardBody className="">
              {/* <div className="flex md:flex-row flex-col gap-3 justify-end items-end"> */}
              <form
                onSubmit={handleSubmitSpecification}
                className="py-3  grid gap-4 lg:gap-6 xl:gap-6  xl:flex"
              >
                {/* </div> */}
                <div className="flex justify-start w-1/2 xl:w-1/2 md:w-full">
                   
                </div>
  
                <div className="lg:flex  md:flex xl:justify-end xl:w-1/2  md:w-full md:justify-start flex-grow-0">
                   
                  <div className="w-full md:w-32 lg:w-32 xl:w-32  mr-3 mb-3 lg:mb-0">
                    <Button
                      disabled={isCheck.length < 1}
                      onClick={() => handleDeleteMany(isCheck)}
                      className="w-full rounded-md h-12 bg-red-500 disabled  btn-red"
                    >
                      <span className="mr-2">
                        <FiTrash2 />
                      </span>
  
                      {t("Delete")}
                    </Button>
                  </div>
                  <div className="w-full md:w-48 lg:w-48 xl:w-48">
                    <Button
                      onClick={toggleDrawer}
                      className="rounded-md h-12 w-full"
                    >
                      <span className="mr-2">
                        <FiPlus />
                      </span>
  
                      {t("AddSpecification")}
                    </Button>
                  </div>
                </div>
              </form>
            </CardBody>
          </Card>
  
          <Card className="min-w-0 shadow-xs overflow-hidden bg-white dark:bg-gray-800 rounded-t-lg rounded-0 mb-4">
            <CardBody>
              <form
                onSubmit={handleSubmitSpecification}
                className="py-3 grid gap-4 lg:gap-6 xl:gap-6 md:flex xl:flex"
              >
                <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
                  <Input
                    ref={specificationRef}
                    type="search"
                    placeholder={t("SearchSpecification")}
                  />
                </div>
                <div className="flex items-center gap-2 flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
                  <div className="w-full mx-1">
                    <Button type="submit" className="h-12 w-full bg-blue-700">
                      Filter
                    </Button>
                  </div>
  
                  <div className="w-full mx-1">
                    <Button
                      layout="outline"
                      onClick={handleResetField}
                      type="reset"
                      className="px-4 md:py-1 py-2 h-12 text-sm dark:bg-gray-700"
                    >
                      <span className="text-black dark:text-gray-200">Reset</span>
                    </Button>
                  </div>
                </div>
              </form>
            </CardBody>
          </Card>
        </AnimatedContent>
  
      
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
  
                  <TableCell>{t("catIdTbl")}</TableCell> 
                  <TableCell>{t("specification")}</TableCell> 
                  <TableCell>{t("category")}</TableCell> 
                  <TableCell className="text-center">
                    {t("catPublishedTbl")}
                  </TableCell>
                  <TableCell className="text-right">
                    {t("catActionsTbl")}
                  </TableCell>
                </tr>
              </TableHeader>
  
              <SpecificationTable
                data={data}
                lang={lang}
                isCheck={isCheck}
                specificationArray={dataTable}
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
          <NotFound title="Sorry, There are no specificationArray right now." />
        )}
      </>
    );
  };
  
  export default Specification;
  