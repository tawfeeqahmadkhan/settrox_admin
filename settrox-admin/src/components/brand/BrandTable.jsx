import { Avatar, TableBody, TableCell, TableRow } from "@windmill/react-ui";
import { Link } from "react-router-dom";
import { IoRemoveSharp } from "react-icons/io5";

// Internal imports
import CheckBox from "@/components/form/others/CheckBox";
import useToggleDrawer from "@/hooks/useToggleDrawer";
import DeleteModal from "@/components/modal/DeleteModal";
import MainDrawer from "@/components/drawer/MainDrawer";
import BrandDrawer from "@/components/drawer/BrandDrawer";
import ShowHideButton from "@/components/table/ShowHideButton";
import EditDeleteButton from "@/components/table/EditDeleteButton";
import useUtilsFunction from "@/hooks/useUtilsFunction";

const BrandTable = ({ data, lang, isCheck, brands, setIsCheck, useParamId }) => {
  const { title, serviceId, handleModalOpen, handleUpdate } = useToggleDrawer();
  const { showingTranslateValue } = useUtilsFunction();

  const handleClick = (e) => {
    const { id, checked } = e.target;
    setIsCheck([...isCheck, id]);
    if (!checked) {
      setIsCheck(isCheck.filter((item) => item !== id));
    }
  };
console.log(brands,"ttttttttttttttttttttttttttttttt");
  return (
    <>
      {isCheck?.length < 1 && <DeleteModal useParamId={useParamId} id={serviceId} title={title} />}

      <MainDrawer>
        <BrandDrawer id={serviceId} data={data} lang={lang} />
      </MainDrawer>

      <TableBody>
        {brands?.map((brand) => (
          <TableRow key={brand._id}>
            <TableCell>
              <CheckBox
                type="checkbox"
                name="brand"
                id={brand._id}
                handleClick={handleClick}
                isChecked={isCheck?.includes(brand._id)}
              />
            </TableCell>

            <TableCell className="font-semibold uppercase text-xs">
              {brand?._id?.substring(20, 24)}
            </TableCell>
            <TableCell>
              {brand?.logo ? (
                <Avatar
                  className="hidden mr-3 md:block bg-gray-50 p-1"
                  src={brand?.logo}
                  alt={brand?.name}
                />
              ) : (
                <Avatar
                  src="https://res.cloudinary.com/ahossain/image/upload/v1655097002/placeholder_kvepfp.png"
                  alt="brand"
                  className="hidden p-1 mr-2 md:block bg-gray-50 shadow-none"
                />
              )}
            </TableCell>

            <TableCell className="font-medium text-sm">
              <Link to={`/brands/${brand?._id}`} className="text-blue-700">
                {showingTranslateValue(brand?.name)}
              </Link>
            </TableCell>

            <TableCell className="text-sm">
              {showingTranslateValue(brand?.description)}
            </TableCell>

            <TableCell className="text-center">
              <ShowHideButton id={brand._id} status={brand.status} />
            </TableCell>

            <TableCell>
              <EditDeleteButton
                id={brand?._id}
                parent={brand}
                isCheck={isCheck}
                handleUpdate={handleUpdate}
                handleModalOpen={handleModalOpen}
                title={showingTranslateValue(brand?.name)}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </>
  );
};

export default BrandTable;
