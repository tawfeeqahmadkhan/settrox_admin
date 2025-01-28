import { Select } from "@windmill/react-ui";
import { Input } from "@windmill/react-ui";
import { t } from "i18next";
import { Scrollbars } from "react-custom-scrollbars-2";

// Internal imports
import Title from "@/components/form/others/Title";
import Error from "@/components/form/others/Error";
import InputArea from "@/components/form/input/InputArea";
import Uploader from "@/components/image-uploader/Uploader";
import useBrandSubmit from "@/hooks/useBrandSubmit";
import DrawerButton from "@/components/form/button/DrawerButton";
import SwitchToggle from "@/components/form/switch/SwitchToggle";
import { useState } from "react";
import LabelArea from "../form/selectOption/LabelArea";
import TextAreaCom from "../form/input/TextAreaCom";
import CategoryServices from "@/services/CategoryServices";
import { useEffect } from "react";
import { Controller } from "react-hook-form";
import ParentCategory from "@/components/brand/ParentCategoryTree";

const BrandDrawer = ({ id }) => {
  const {
    register,
    handleSubmit,
    onSubmit,
    errors,
    setImageUrl,
    imageUrl,
    published,
    setPublished,
    isSubmitting,
    setIsSubmitting,
    handleSelectLanguage,
    language,
    selectedCategory,
    setSelectedCategory,
    setDefaultCategory,
  } = useBrandSubmit(id);
  const [btloading,setbtladoing]=useState(false)
console.log(isSubmitting,"dddddddddddddddddddd");

const [categorydata, setCategorydata] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await CategoryServices.getAllCategories();
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
            title={t("UpdateBrand")}
            description={t("UpdateBrandDescription")}
          />
        ) : (
          <Title
            register={register}
            handleSelectLanguage={handleSelectLanguage}
            title={t("AddBrand")}
            description={t("AddBrandDescription")}
          />
        )}
      </div>

      <Scrollbars className="w-full md:w-7/12 lg:w-8/12 xl:w-8/12 relative dark:bg-gray-700 dark:text-gray-200">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="px-6 pt-8 flex-grow scrollbar-hide w-full max-h-full pb-40">
            {/* Brand Image Upload */}
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <label className="block text-gray-700 dark:text-gray-300 col-span-2">
                {t("BrandImage")}
              </label>
              <div className="col-span-8 sm:col-span-4">
                <Uploader
                  imageUrl={imageUrl}
                  setImageUrl={setImageUrl}
                  setbtladoing={setbtladoing}
                  folder="brand"
                />
              </div>
            </div>

            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label={t("Category")} />
              <div className="col-span-8 sm:col-span-4">
                <ParentCategory
                  lang={language}
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                  setDefaultCategory={setDefaultCategory}
                />
              </div>
            </div>

              

            {/* Brand Name */}
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <label className="block text-gray-700 dark:text-gray-300 col-span-2">
                {t("BrandName")}
              </label>
              <div className="col-span-8 sm:col-span-4">
                <InputArea
                  required={true}
                  register={register}
                  label="Brand Name"
                  name="name"
                  type="text"
                  placeholder={t("EnterBrandName")}
                />
                <Error errorName={errors.brandName} />
              </div>
            </div>
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label={t("Description")} />
              <div className="col-span-8 sm:col-span-4">
                <TextAreaCom
                  register={register}
                  label="Description"
                  name="description"
                  type="text"
                  placeholder="brand Description"
                />
                <Error errorName={errors.description} />
              </div>
            </div>
            {/* Published Switch */}
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <label className="block text-gray-700 dark:text-gray-300 col-span-2">
                {t("Published")}
              </label>
              <div className="col-span-8 sm:col-span-4">
                <SwitchToggle
                  handleProcess={setPublished}
                  processOption={published}
                />
                <Error errorName={errors.published} />
              </div>
            </div>
          </div>

          <DrawerButton id={id} title="Brand" isSubmitting={isSubmitting||btloading} />
        </form>
      </Scrollbars>
    </>
  );
};

export default BrandDrawer;
