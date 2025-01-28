import { Input } from "@windmill/react-ui";

import Tree from "rc-tree";
import React, { useState } from "react";
import Scrollbars from "react-custom-scrollbars-2";
import { useTranslation } from "react-i18next";

//internal import
import { notifyError } from "@/utils/toast";
import Error from "@/components/form/others/Error";
import Title from "@/components/form/others/Title";
import InputArea from "@/components/form/input/InputArea";
import LabelArea from "@/components/form/selectOption/LabelArea";
import SwitchToggle from "@/components/form/switch/SwitchToggle"; 
import useSpecificationSubmit from "@/hooks/useSpecificationSubmit";
import SpecificationServices from "@/services/SpecificationServices";
import DrawerButton from "@/components/form/button/DrawerButton";
import useUtilsFunction from "@/hooks/useUtilsFunction";

import CategoryServices from "@/services/CategoryServices";
import { useEffect } from "react";


const SpecificationDrawer = ({ id, data }) => {
  const { t } = useTranslation();

  const {
    checked,
    register,
    onSubmit, 
    handleSubmit,
    errors, 
    published,
    setPublished,
    setChecked,  
    handleSelectLanguage, 
    isSubmitting,
    selectCategoryName,
    setSelectCategoryName,
    attributes, 
    setAttributes
  } = useSpecificationSubmit(id, data);
  const [btloading,setbtladoing]=useState(false)
  const { showingTranslateValue } = useUtilsFunction(); 
 
   
  const findObject = (obj, target) => {
    return obj._id === target
      ? obj
      : obj?.children?.reduce(
          (acc, obj) => acc ?? findObject(obj, target),
          undefined
        );
  };
  
  

  const handleAdd = () => {
    setAttributes([...attributes, { label: "", value: "" }]);
  };

  const handleRemove = (index) => {
    const updatedAttributes = attributes.filter((_, i) => i !== index);
    setAttributes(updatedAttributes);
  };

  const handleChange = (index, field, value) => {
    const updatedAttributes = [...attributes]; // Copy the attributes array
    updatedAttributes[index][field] = value; // Update the specific field
    console.log('updatedAttributes',updatedAttributes);
    setAttributes(updatedAttributes); // Update state
  };
 
 
  const STYLE = `
  .rc-tree-child-tree {
    display: hidden;
  }
  .node-motion {
    transition: all .3s;
    overflow-y: hidden;
  }
`;

  const motion = {
    motionName: "node-motion",
    motionAppear: false,
    onAppearStart: (node) => {
      return { height: 0 };
    },
    onAppearActive: (node) => ({ height: node.scrollHeight }),
    onLeaveStart: (node) => ({ height: node.offsetHeight }),
    onLeaveActive: () => ({ height: 0 }),
  };

  const renderCategories = (categories) => {
    let myCategories = []; 
    if(typeof categories !== 'undefined'){
        for (let category of categories) {
          myCategories.push({
            title: showingTranslateValue(category.name),
            key: category._id,
            children:
              category.children.length > 0 && renderCategories(category.children),
          });
        }
    }
    

    return myCategories;
  };

  const handleSelect = async (key) => {
     console.log('key', key, 'id', id);
    if (key === undefined) return;
    if (id) {
      //const parentCategoryId = await CategoryServices.getCategoryById(key);

       
      if (key === undefined) return;
      setChecked(key); 
      let selectedDataObj = {};
      for (const item of categorydata) { 
        if (item._id === key) {          
          selectedDataObj = item; 
        }
        if (item.children && item.children.length > 0) {
          for (const itemObj of item.children) { 
            if (itemObj._id === key) {          
              selectedDataObj = itemObj; 
            }
          }
        }
      }
      console.log('selectedDataObj',selectedDataObj)
 
      setSelectCategoryName(showingTranslateValue(selectedDataObj?.name));
       
    } else {
      
      if (key === undefined) return;
      setChecked(key); 
      let selectedDataObj = {};
      for (const item of categorydata) { 
        if (item._id === key) {          
          selectedDataObj = item; 
        }
        if (item.children && item.children.length > 0) {
          for (const itemObj of item.children) { 
            if (itemObj._id === key) {          
              selectedDataObj = itemObj; 
            }
          }
        }
      }
      console.log('selectedDataObj',selectedDataObj)
 
      setSelectCategoryName(showingTranslateValue(selectedDataObj?.name));
    }
  };

  const [categorydata, setCategorydata] = useState(null);

useEffect(() => {
  const fetchCategories = async () => {
    try {
      const data = await CategoryServices.getAllCategory();
      setCategorydata(data);
      console.log("Fetched categorydata:", data);
    } catch (error) {
      console.error("Error fetching categorydata:", error);
    }
  };

  fetchCategories();
}, []);
  
  return (
    <>
      <div className="w-full relative p-6 border-b border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
        {id ? (
          <Title
            register={register}
            handleSelectLanguage={handleSelectLanguage}
            title={t("UpdateSpecification")}
            description={t("Update Specification Description")}
          />
        ) : (
          <Title
            register={register}
            handleSelectLanguage={handleSelectLanguage}
            title={t("AddSpecificationTitle")}
            description={t("Add Specification Description")}
          />
        )}
      </div>

      <Scrollbars className="w-full md:w-7/12 lg:w-8/12 xl:w-8/12 relative dark:bg-gray-700 dark:text-gray-200">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="p-6 flex-grow scrollbar-hide w-full max-h-full pb-40">
            
             <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label={t("ParentCategory")} />
              <div className="col-span-8 sm:col-span-4 relative">
                <Input
                  readOnly
                  {...register(`parent`, {
                    required: false,
                  })}
                  name="parent"
                  value={selectCategoryName ? selectCategoryName : ""}
                  placeholder={t("ParentCategory")}
                  type="text"
                />

                <div className="draggable-demo capitalize">
                  <style dangerouslySetInnerHTML={{ __html: STYLE }} />
                  {categorydata && categorydata.length > 0 ? (
                          <Tree
                            expandAction="click"
                            treeData={renderCategories(categorydata)}
                            selectedKeys={[checked]}
                            onSelect={(v) => handleSelect(v[0])}
                            motion={motion}
                            animation="slide-up"
                          />
                        ) : (
                          <p>No categories available</p>
                        )}
                </div>
              </div>
            </div> 
              
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label={t("Title")} />
              <div className="col-span-8 sm:col-span-4">
                <InputArea
                  required={true}
                  register={register}
                  label="Specification title"
                  name="title"
                  type="text"
                  placeholder={t("Title")}
                />
                <Error errorName={errors.title} />
              </div>
            </div>

            {attributes && attributes.map((attr, index) => (
          <div
            key={index}  
          >
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              {/* Label Field */} 
              <LabelArea label={t("Label")} />
              <div className="col-span-8 sm:col-span-4">
                <Input
                  required={true}
                  register={register}
                  label="Label"
                  name="label[]"
                  type="text"
                  placeholder={t("Label")}
                  value={attr.label}
                  onChange={(e) => {
                    console.log(`Input Changed: Field - ${"label"}, Value - ${e.target.value}`);
                    handleChange(index, "label", e.target.value);
                  }}
                />
                <Error errorName={errors.label} />
              </div> 

               
            </div>
             
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
            <LabelArea label={t("Value")} />
              <div className="col-span-8 sm:col-span-4">
                <Input
                  required={true}
                  register={register}
                  label="Value"
                  name="value[]"
                  type="text"
                  placeholder={t("value")}
                  value={attr.value}
                  onChange={(e) => handleChange(index, "value", e.target.value)}
                />
                <Error errorName={errors.value} />
              </div>
              {index != 0 && attributes.length > 1 && (
                <button
                  type="button"
                  onClick={() => handleRemove(index)}
                  className="px-3 py-2 text-white bg-red-500 rounded-md hover:bg-red-600 float-right"
                >
                  Remove
                </button>
              )} 
            </div>
            
           
              
          </div>
        ))}

        {/* Add Button */}
        <div>
          <button
            type="button"
            onClick={handleAdd}
            className="mt-4 px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
          >
            Add Attribute
          </button>
        </div>

           
            <div className="mt-6 grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label={t("Published")} />
              <div className="col-span-8 sm:col-span-4">
                <SwitchToggle
                  handleProcess={setPublished}
                  processOption={published}
                />
              </div>
            </div>
          </div>

          <DrawerButton id={id} title="Specification" isSubmitting={isSubmitting || btloading} />
        </form>
      </Scrollbars>
    </>
  );
};

export default SpecificationDrawer ;
