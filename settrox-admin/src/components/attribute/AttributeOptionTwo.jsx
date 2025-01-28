import React, { useEffect, useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import useUtilsFunction from "@/hooks/useUtilsFunction";

const AttributeOptionTwo = ({
  attributes,
  values,
  setValues,
  name,
  setVariantData,
  variantData,
  isPrimary,
  onPrimaryChange,
}) => {
  const [attributeOptions, setAttributeOptions] = useState([]);
  const [selected, setSelected] = useState([]);
  const { showingTranslateValue } = useUtilsFunction();

  const handleSelectValue = (items) => {
    setSelected(items);

    // Update the values state
    setValues({
      ...values,
      [attributes._id]: items?.map((el) => el._id),
    });

    // Filter out existing items with the same type
    const updatedData = variantData?.filter((i) => i.type !== name);
console.log(isPrimary);

    // Map new items and set primary if this instance is marked as primary
    const newItems = items?.map((i) => ({
      type: name,
      name: showingTranslateValue(i.name),
      value: showingTranslateValue(i.name),
      image: "",
      primary: isPrimary, 
    }));

    // Update variant data
    setVariantData([...updatedData, ...newItems]);
  };

  useEffect(() => {
    const options = attributes?.variants?.map((val) => {
      return {
        ...val,
        label: showingTranslateValue(val?.name),
        value: val?._id,
      };
    });
    setAttributeOptions(options);
  }, [attributes?.variants]);

  return (
    <div className="w-[20rem]">
      <MultiSelect
        options={attributeOptions}
        value={selected}
        onChange={(v) => handleSelectValue(v)}
        labelledBy="Select"
      />
      <div className="mt-2 flex items-center">
        <input
          type="checkbox"
          checked={isPrimary} 
          onChange={onPrimaryChange} 
          className="mr-2"
        />
        <label>Set as Primary</label>
      </div>
    </div>
  );
};

export default AttributeOptionTwo;
