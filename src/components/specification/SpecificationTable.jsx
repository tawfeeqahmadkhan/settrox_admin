import { Avatar, TableBody, TableCell, TableRow } from "@windmill/react-ui";
import { Link } from "react-router-dom";
import { IoRemoveSharp } from "react-icons/io5";

//internal import

import CheckBox from "@/components/form/others/CheckBox";
import useToggleDrawer from "@/hooks/useToggleDrawer";
import DeleteModal from "@/components/modal/DeleteModal";
import MainDrawer from "@/components/drawer/MainDrawer";
import SpecificationDrawer from "@/components/drawer/SpecificationDrawer";
import ShowHideButton from "@/components/table/ShowHideButton";
import EditDeleteButton from "@/components/table/EditDeleteButton";
import useUtilsFunction from "@/hooks/useUtilsFunction";

const SpecificationTable = ({
  data,
  lang,
  isCheck,
  specificationArray,
  setIsCheck,
  useParamId,
  showChild,
}) => {
  const { title, serviceId, handleModalOpen, handleUpdate } = useToggleDrawer();
  const { showingTranslateValue } = useUtilsFunction();

  const handleClick = (e) => {
    const { id, checked } = e.target;
    setIsCheck([...isCheck, id]);
    if (!checked) {
      setIsCheck(isCheck.filter((item) => item !== id));
    }
  };

  return (
    <>
      {isCheck?.length < 1 && (
        <DeleteModal useParamId={useParamId} id={serviceId} title={title} />
      )}

      <MainDrawer>
        <SpecificationDrawer id={serviceId} data={data} lang={lang} />
      </MainDrawer>

      <TableBody>
        {specificationArray && specificationArray?.map((specification) => (
          <TableRow key={specification._id}>
            <TableCell>
              <CheckBox
                type="checkbox"
                name="specification"
                id={specification._id}
                handleClick={handleClick}
                isChecked={isCheck?.includes(specification._id)}
              />
            </TableCell>

            <TableCell className="font-semibold uppercase text-xs">
              {specification?._id?.substring(20, 24)}
            </TableCell>
             

            <TableCell className="font-medium text-sm ">
            <span>{showingTranslateValue(specification?.title)}</span>
            </TableCell>
            <TableCell className="text-sm">
              {showingTranslateValue(specification?.categoryName)}
            </TableCell>

            <TableCell className="text-center">
              <ShowHideButton
                id={specification._id}
                specification
                status={specification.status}
              />
            </TableCell>
            <TableCell>
              <EditDeleteButton
                id={specification?._id}
                parent={specification}
                isCheck={isCheck} 
                handleUpdate={handleUpdate}
                handleModalOpen={handleModalOpen}
                title={showingTranslateValue(specification?.title)}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </>
  );
};

export default SpecificationTable;
