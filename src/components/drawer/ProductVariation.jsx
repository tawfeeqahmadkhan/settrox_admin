import useProductSubmit from '@/hooks/useProductSubmit';
import React, { useEffect, useState } from 'react'
import { useTranslation } from "react-i18next";
import { MultiSelect } from "react-multi-select-component";
import {
    Button,
 
  } from "@windmill/react-ui";
import useUtilsFunction from '@/hooks/useUtilsFunction';
import AttributeOptionTwo from '../attribute/AttributeOptionTwo';
import ProductServices from '@/services/ProductServices';
import VariantTable from './VariantTable';
import { notifySuccess } from '@/utils/toast';
export default function ProductVariation({id}) {
  const {
    handleProductTap,
    values,
    language,
    attribue,
    setValues,
    variantTitle,
    attributes,
    attTitle,
    handleAddAtt,

  } = useProductSubmit(id);
   
      
      const { t } = useTranslation();
    const handleClearVariant = ()=>{
    }
    const { currency, showingTranslateValue } = useUtilsFunction();
    const [variantData,setVariantData] = useState([]);
    const [handleSubmitVariantref,setHandleSubmitVariantref] = useState(false);
    const handleSubmitVariant = async() => {
    const res = await ProductServices.addVariantProduct({id,data:variantData});
    if(res.success){
      setHandleSubmitVariantref(!handleSubmitVariantref)
    }
    notifyError(notifySuccess('Somethin is wrong'))     
    };
    const [primaryIndex, setPrimaryIndex] = useState(0)
  return (
    <div>
                  {
            (attribue.length < 1 ? (
              <div
                className="bg-teal-100 border border-teal-600 rounded-md text-teal-900 px-4 py-3 m-4"
                role="alert"
              >
                <div className="flex">
                  <div className="py-1">
                    <svg
                      className="fill-current h-6 w-6 text-teal-500 mr-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                    </svg>
                  </div>
                  {/* <div>
                    <p className="text-sm">
                      {t("AddCombinationsDiscription")}{" "}
                      <Link to="/attributes" className="font-bold">
                        {t("AttributesFeatures")}
                      </Link>
                      {t("AddCombinationsDiscriptionTwo")}
                    </p>
                  </div> */}
                </div>
              </div>
            ) : (
              <div className="p-6">
                {/* <h4 className="mb-4 font-semibold text-lg">Variants</h4> */}
                <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-3 md:gap-3 xl:gap-3 lg:gap-2 mb-3">
                  <MultiSelect
                    options={attTitle}
                    value={attributes}
                    onChange={(v) => {handleAddAtt(v);handleChange(v)}}
                    labelledBy="Select"
                  />
                </div>
                <div className='flex flex-row flex-wrap gap-10 mb-10'>
                 {attributes?.map((attribute, i) => (
        <div key={attribute._id}>
          <div className="flex w-[20rem] h-10 justify-between font-sans rounded-tl rounded-tr bg-gray-200 px-4 py-3 text-left text-sm font-normal text-gray-700 hover:bg-gray-200">
            {"Select "}
            {showingTranslateValue(attribute?.title)}
          </div>

          <AttributeOptionTwo
            id={i + 1}
            values={values}
            lang={language}
            attributes={attribute}
            setValues={setValues}
            name={showingTranslateValue(attribute?.title)}
            setVariantData={setVariantData}
            variantData={variantData}
            isPrimary={primaryIndex === i} // Pass whether this is the primary checkbox
            onPrimaryChange={() => setPrimaryIndex(primaryIndex === i ? null : i)} // Toggle primary state
          />
        </div>
      ))}
                  </div>
                <div className="flex justify-end mb-6">
                

                  {variantTitle.length > 0 && (
                    <Button onClick={handleClearVariant} className="mx-2">
                      <span className="text-xs">{t("ClearVariants")}</span>
                    </Button>
                  )}
                    {attributes?.length > 0 && (
                    <Button
                      onClick={handleSubmitVariant}
                      type="button"
                      className="mx-2"
                    >
                      <span className="text-xs">{t("Add Variant")}</span>
                    </Button>
                  )}
                </div>
              </div>
            ))}
            <VariantTable id={id} handleSubmitVariantref={handleSubmitVariantref} />
    </div>
  )
}
