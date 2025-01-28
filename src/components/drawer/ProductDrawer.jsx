import ReactTagInput from "@pathofdev/react-tag-input";
import {
  Button,
  Input,
  Select,
  TableCell,
  TableContainer,
  TableHeader,
  Textarea,
  Table,
} from "@windmill/react-ui";
import Multiselect from "multiselect-react-dropdown";
import React from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import { MultiSelect } from "react-multi-select-component";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FiX } from "react-icons/fi";
import TextAreaCom from "../form/input/TextAreaCom";
//internal import
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Title from "@/components/form/others/Title";
import Error from "@/components/form/others/Error";
import InputArea from "@/components/form/input/InputArea";
import useUtilsFunction from "@/hooks/useUtilsFunction";
import LabelArea from "@/components/form/selectOption/LabelArea";
import DrawerButton from "@/components/form/button/DrawerButton";
import InputValue from "@/components/form/input/InputValue";
import useProductSubmit from "@/hooks/useProductSubmit";
import ActiveButton from "@/components/form/button/ActiveButton";
import InputValueFive from "@/components/form/input/InputValueFive";
import Uploader from "@/components/image-uploader/Uploader";
import ParentCategory from "@/components/category/ParentCategory";
import UploaderThree from "@/components/image-uploader/UploaderThree";
import AttributeOptionTwo from "@/components/attribute/AttributeOptionTwo";
import AttributeListTable from "@/components/attribute/AttributeListTable";
import SwitchToggleForCombination from "@/components/form/switch/SwitchToggleForCombination";
import ParentBrand from "../brand/ParentCategory";

import SpecificationServices from "@/services/SpecificationServices";
import { useEffect, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import ProductVariation from "./ProductVariation";
//internal import

const ProductDrawer = ({ id }) => {
  const { t } = useTranslation();

  const {
    tag,
    setTag,
    values,
    language,
    register,
    onSubmit,
    errors,
    slug,
    openModal,
    attribue,
    setValues,
    variants,
    imageUrl,
    setImageUrl,
    videoUrlFeature,
    setVideoUrlFeature,
    handleSubmit,
    isCombination,
    variantTitle,
    attributes,
    attTitle,
    handleAddAtt,
    // productId,
    onCloseModal,
    isBulkUpdate,
    globalSetting,
    isSubmitting,
    tapValue,
    setTapValue,
    resetRefTwo,
    handleSkuBarcode,
    handleProductTap,
    selectedCategory,
    setSelectedCategory,
    setDefaultCategory,
    defaultCategory,
    handleProductSlug,
    handleSelectLanguage,
    handleIsCombination,
    handleEditVariant,
    handleRemoveVariant,
    handleClearVariant,
    handleQuantityPrice,
    handleSelectImage,
    handleSelectInlineImage,
    handleGenerateCombination,
    selectedBrand,
    defaultBrand,
    setSelectedBrand,
    setDefaultBrand,
    handleDescriptionChange,
    handleProductFeatureChange,
    selectedSpecifications,
    handleSelectSpecification,
    handleRemoveSpecification,
    description,
    setFeatures,
    features,
    product_feature,
  } = useProductSubmit(id);

  const { currency, showingTranslateValue } = useUtilsFunction();





  const [specificationlistdata, setSpecificationListData] = useState([]);

  const [btloading, setbtladoing] = useState(false)
  useEffect(() => {
    const fetchSpecification = async () => {
      try {
        const specdata = await SpecificationServices.getAllSpecification();
        setSpecificationListData(
          specdata.map((spec) => ({
            id: spec._id,
            name: spec?.title?.en,
          }))); // Format the data for Multiselect
      } catch (error) {
        console.error("Error fetching Specification Data:", error);
      }
    };

    fetchSpecification();
  }, []);



  const handleChange = (index, field, value) => {
    const updatedFeatures = [...features]; // Copy the attributes array
    updatedFeatures[index][field] = value; // Update the specific field
    console.log('updatedFeatures', updatedFeatures);
    setFeatures(updatedFeatures); // Update state
  };

  const addFeature = () => {
    setFeatures([...features, { feature_title: "", feature_subtitle: "", feature_description: "", image: "" }]);
  };

  const removeFeature = (index) => {
    const updatedFeatures = features.filter((_, i) => i !== index);
    setFeatures(updatedFeatures);
  };

  const updateFeatureImages = (index, newImageUrls) => {
    const updatedFeatures = [...features];
    updatedFeatures[index].image = newImageUrls;
    console.log('updatedFeatures', updatedFeatures)
    setFeatures(updatedFeatures);
  };


  return (
    <>
      <Modal
        open={openModal}
        onClose={onCloseModal}
        center
        closeIcon={
          <div className="absolute top-0 right-0 text-red-500  active:outline-none text-xl border-0">
            <FiX className="text-3xl" />
          </div>
        }
      >
        <div className="cursor-pointer">
          <UploaderThree
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            handleSelectImage={handleSelectImage}
          />
        </div>
      </Modal>

      <div className="w-full relative p-6 border-b border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
        {id ? (
          <Title
            register={register}
            handleSelectLanguage={handleSelectLanguage}
            title={t("UpdateProduct")}
            description={t("UpdateProductDescription")}
          />
        ) : (
          <Title
            register={register}
            handleSelectLanguage={handleSelectLanguage}
            title={t("DrawerAddProduct")}
            description={t("AddProductDescription")}
          />
        )}
      </div>

      <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-700">
        <SwitchToggleForCombination
          product
          handleProcess={handleIsCombination}
          processOption={isCombination}
        />

        <ul className="flex flex-wrap -mb-px">
          <li className="mr-2">
            <ActiveButton
              tapValue={tapValue}
              activeValue="Basic Info"
              handleProductTap={handleProductTap}
            />
          </li>
          <li className="mr-2">
            <ActiveButton
              tapValue={tapValue}
              activeValue="Feature"
              handleProductTap={handleProductTap}
            />
          </li>
          <li className="mr-2">
            <ActiveButton
              tapValue={tapValue}
              activeValue="Shipping Info"
              handleProductTap={handleProductTap}
            />
          </li>
          {isCombination && (
            <li className="mr-2">
              <ActiveButton
                tapValue={tapValue}
                activeValue="Combination"
                handleProductTap={handleProductTap}
              />
            </li>
          )}

        </ul>
      </div>

      <Scrollbars className="track-horizontal thumb-horizontal w-full md:w-7/12 lg:w-8/12 xl:w-8/12 relative dark:bg-gray-700 dark:text-gray-200">
        <form onSubmit={handleSubmit(onSubmit)} className="block" id="block">
          {tapValue === "Basic Info" && (
            <div className="px-6 pt-8 flex-grow w-full h-full max-h-full pb-40 md:pb-32 lg:pb-32 xl:pb-32">
              {/* <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <LabelArea label={t("ProductID")} />
                <div className="col-span-8 sm:col-span-4">{productId}</div>
              </div> */}
              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <LabelArea label={t("ProductTitleName")} />
                <div className="col-span-8 sm:col-span-4">
                  <Input
                    {...register(`title`, {
                      required: "TItle is required!",
                    })}
                    name="title"
                    type="text"
                    placeholder={t("ProductTitleName")}
                    onBlur={(e) => handleProductSlug(e.target.value)}
                  />
                  <Error errorName={errors.title} />
                </div>
              </div>
             {/* Product Description */}
      <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
        <LabelArea label="Product Description" />
        <div className="col-span-8 sm:col-span-4">
          <Input
            {...register("description", { required: "Description is required!" })}
            name="description"
            type="text"
            placeholder="Product Description"
            onChange={(e) => handleDescriptionChange(e.target.value)}
          />
          <Error errorName={errors.description} />
        </div>
      </div>

      {/* Product Feature */}
      <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
        <LabelArea label="Product Feature" />
        <div className="col-span-8 sm:col-span-4">
          <Input
            {...register("product_feature", { required: "Product feature is required!" })}
            name="product_feature"
            type="text"
            placeholder="Product Feature"
            onChange={(e) => handleProductFeatureChange(e.target.value)}
          />
          <Error errorName={errors.product_feature} />
        </div>
      </div>
              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <LabelArea label={t("ProductImage")} />
                <div className="col-span-8 sm:col-span-4">
                  <Uploader
                    product
                    folder="product"
                    imageUrl={imageUrl}
                    setImageUrl={setImageUrl}
                    setbtladoing={setbtladoing}
                  />
                </div>
              </div>

              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <LabelArea label={t("ProductSKU")} />
                <div className="col-span-8 sm:col-span-4">
                  <InputArea
                    register={register}
                    label={t("ProductSKU")}
                    name="sku"
                    type="text"
                    placeholder={t("ProductSKU")}
                  />
                  <Error errorName={errors.sku} />
                </div>
              </div>

              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <LabelArea label={t("ProductBarcode")} />
                <div className="col-span-8 sm:col-span-4">
                  <InputArea
                    register={register}
                    label={t("ProductBarcode")}
                    name="barcode"
                    type="text"
                    placeholder={t("ProductBarcode")}
                  />
                  <Error errorName={errors.barcode} />
                </div>
              </div>

              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <LabelArea label={t("brand")} />
                <div className="col-span-8 sm:col-span-4">
                  <ParentBrand
                    lang={language}
                    selectedBrand={selectedBrand}
                    setDefaultBrand={setDefaultBrand}
                    setSelectedBrand={setSelectedBrand}
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
              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <LabelArea label={t("DefaultCategory")} />
                <div className="col-span-8 sm:col-span-4">
                  <Multiselect
                    displayValue="name"
                    isObject={true}
                    singleSelect={true}
                    ref={resetRefTwo}
                    hidePlaceholder={true}
                    onKeyPressFn={function noRefCheck() { }}
                    onRemove={function noRefCheck() { }}
                    onSearch={function noRefCheck() { }}
                    onSelect={(v) => setDefaultCategory(v)}
                    selectedValues={defaultCategory}
                    options={selectedCategory}
                    placeholder={"Default Category"}
                  ></Multiselect>
                </div>
              </div>

              {/* Specification */}
              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <LabelArea label={t("Specification")} />
                <div className="col-span-8 sm:col-span-4 ">
                  <Multiselect
                    options={specificationlistdata} // Options to display
                    selectedValues={selectedSpecifications} // Preselected values
                    onSelect={handleSelectSpecification} // On item select
                    onRemove={handleRemoveSpecification} // On item remove
                    displayValue="name" // Property to display in the dropdown
                    placeholder="Select specifications"
                    style={{
                      searchBox: { border: "1px solid #ccc", borderRadius: "4px", padding: "10px" },
                      chips: { background: "#007bff", color: "white" },
                    }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <LabelArea label="Product Price" />
                <div className="col-span-8 sm:col-span-4">
                  <InputValue
                    disabled={isCombination}
                    register={register}
                    minValue={1}
                    label="Original Price"
                    name="originalPrice"
                    type="number"
                    placeholder="OriginalPrice"
                    defaultValue={0.0}
                    required={true}
                    product
                    currency={currency}
                  />
                  <Error errorName={errors.originalPrice} />
                </div>
              </div>

              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <LabelArea label={t("SalePrice")} />
                <div className="col-span-8 sm:col-span-4">
                  <InputValue
                    disabled={isCombination}
                    product
                    register={register}
                    minValue={0}
                    defaultValue={0.0}
                    required={true}
                    label="Sale price"
                    name="price"
                    type="number"
                    placeholder="Sale price"
                    currency={currency}
                  />
                  <Error errorName={errors.price} />
                </div>
              </div>

              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6 relative">
                <LabelArea label={t("ProductQuantity")} />
                <div className="col-span-8 sm:col-span-4">
                  <InputValueFive
                    required={true}
                    disabled={isCombination}
                    register={register}
                    minValue={0}
                    defaultValue={0}
                    label="Quantity"
                    name="stock"
                    type="number"
                    placeholder={t("ProductQuantity")}
                  />
                  <Error errorName={errors.stock} />
                </div>
              </div>

              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <LabelArea label={t("ProductSlug")} />
                <div className="col-span-8 sm:col-span-4">
                  <Input
                    {...register(`slug`, {
                      required: "slug is required!",
                    })}
                    className=" mr-2 p-2"
                    name="slug"
                    type="text"
                    defaultValue={slug}
                    placeholder={t("ProductSlug")}
                    onBlur={(e) => handleProductSlug(e.target.value)}
                  />
                  <Error errorName={errors.slug} />
                </div>
              </div>

              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <LabelArea label={t("ProductTag")} />
                <div className="col-span-8 sm:col-span-4">
                  <ReactTagInput
                    placeholder={t("ProductTagPlaseholder")}
                    tags={tag}
                    onChange={(newTags) => setTag(newTags)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <LabelArea label={t("MetaTitle")} />
                <div className="col-span-8 sm:col-span-4">
                  <Input
                    {...register(`meta_title`)}
                    name="meta_title"
                    type="text"
                    placeholder={t("MetaTitle")}
                  />
                </div>
              </div>
              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <LabelArea label={t("MetaDescription")} />
                <div className="col-span-8 sm:col-span-4">
                  <Textarea
                    className="border text-sm  block w-full bg-gray-100 border-gray-200"
                    {...register("meta_description", {
                      required: false,
                    })}
                    name="meta_description"
                    placeholder={t("MetaDescription")}
                    rows="4"
                    spellCheck="false"
                  />
                </div>
              </div>


            </div>
          )}

          {tapValue === "Feature" && (
            <div className="px-6 pt-8 flex-grow w-full h-full max-h-full pb-40 md:pb-32 lg:pb-32 xl:pb-32">
              {/* Image Upload */}
              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <label className="block text-gray-700 dark:text-gray-300 col-span-2">
                  {t("Feature Video")}
                </label>
                <div className="col-span-8 sm:col-span-4">
                  <Uploader
                    imageUrl={videoUrlFeature}
                    setImageUrl={setVideoUrlFeature}
                    setbtladoing={setbtladoing}
                    folder="feature"
                    fileType="video"
                  />
                </div>
              </div>

              {features && features.map((feature, index) => (
                <>
                  <div
                    key={index}
                  >
                    {index != 0 && features.length > 1 && (
                      <button type="button" onClick={() => removeFeature(index)} style={{ backgroundColor: "#d30e0e", position: "absolute", right: "25px", border: "1px solid #ddd", padding: "10px" }}>
                        <p data-tip="true" data-for="delete" class="text-xl"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg></p>
                      </button>
                    )}
                    <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                      <LabelArea label={t("Feature Title")} />
                      <div className="col-span-8 sm:col-span-4">
                        <Input
                          required={true}
                          label="feature_title"
                          register={register}
                          name="feature_title[]"
                          type="text"
                          value={feature.feature_title}
                          placeholder={t("Feature Title")}
                          onChange={(e) => {
                            handleChange(index, "feature_title", e.target.value);
                          }}
                        />
                        <Error errorName={errors.feature_title} />
                      </div>
                    </div>


                    <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                      <LabelArea label={t("Feature Sub Title")} />
                      <div className="col-span-8 sm:col-span-4">
                        <Input
                          required={true}
                          register={register}
                          label="feature_subtitle"
                          name="feature_subtitle[]"
                          type="text"
                          value={feature.feature_subtitle}
                          placeholder={t("Feature Sub Title")}
                          onChange={(e) => {
                            handleChange(index, "feature_subtitle", e.target.value);
                          }}
                        />
                        <Error errorName={errors.feature_subtitle} />
                      </div>
                    </div>

                    <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                      <LabelArea label={t("Feature Description")} />
                      <div className="col-span-8 sm:col-span-4">
                        <Textarea
                          required={true}
                          register={register}
                          label="feature_description"
                          name="feature_description[]"
                          value={feature.feature_description}
                          type="text"
                          placeholder="Feature Description"
                          onChange={(e) => {
                            handleChange(index, "feature_description", e.target.value);
                          }}
                        />
                        <Error errorName={errors.feature_description} />
                      </div>
                    </div>

                    {/* Image Upload */}
                    <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                      <label className="block text-gray-700 dark:text-gray-300 col-span-2">
                        {t("Feature Image")} {index + 1}
                      </label>
                      <div className="col-span-8 sm:col-span-4">

                        <Uploader
                          setImageUrl={(newImageUrls) =>
                            updateFeatureImages(index, newImageUrls)
                          }
                          imageUrl={feature.image}
                          folder="feature"
                          setbtladoing={setbtladoing}
                        />
                      </div>
                    </div>

                  </div>



                </>
              ))}


              <Button
                onClick={addFeature}
                type="button"
                className="mx-2"
              >
                <span className="text-xs">{t("Add Feature")}</span>
              </Button>
            </div>
          )}


{tapValue !== "Combination" &&  <DrawerButton id={id} title="Product" isSubmitting={isSubmitting} />}
        
        </form>
        {tapValue === "Shipping Info" && (
          <div className="px-6 pt-2 flex-grow w-full h-full max-h-full pb-40 md:pb-32 lg:pb-32 xl:pb-32">
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label={t("Package weight")} />

              <div className="col-span-8 sm:col-span-4">
                <Input
                  {...register(`packageWeight`, {
                    required: "Package weight is required!",
                  })}
                  name="packageWeight"
                  type="text"
                  placeholder={t("Package weight")}
                />
                <Error errorName={errors.PackageWeight} />
              </div>
            </div>
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">


              <LabelArea label={t("Package Length")} />
              <div className="col-span-8 sm:col-span-4">
                <Input
                  {...register(`packageLength`, {
                    required: "Package Length is required!",
                  })}
                  name="packageLength"
                  type="text"
                  placeholder={t("Package Length")}
                />
                <Error errorName={errors.packageLength} />
              </div>
            </div>
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">

              <LabelArea label={t("Package height")} />
              <div className="col-span-8 sm:col-span-4">
                <Input
                  {...register(`packageHeight`, {
                    required: "Package height is required!",
                  })}
                  name="packageHeight"
                  type="text"
                  placeholder={t("Package height")}
                />
                <Error errorName={errors.packageHeight} />
              </div>
            </div>
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label={t("Dimension unit")} />
              <div className="col-span-8 sm:col-span-4">
                <Input
                  {...register(`dimensionUnit`, {
                    required: "Dimension unit is required!",
                  })}
                  name="dimensionUnit"
                  type="text"
                  placeholder={t("Dimension unit")}
                />
                <Error errorName={errors.dimensionUnit} />
              </div>
            </div>
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">

              <LabelArea label={t("Width")} />
              <div className="col-span-8 sm:col-span-4">
                <Input
                  {...register(`width`, {
                    required: "Width is required!",
                  })}
                  name="width"
                  type="text"
                  placeholder={t("Width")}
                />
                <Error errorName={errors.Width} />
              </div>
            </div>

          </div>
        )}

{tapValue == "Combination" &&(
  <ProductVariation id ={id}/>
)}

      </Scrollbars>
    </>
  );
};

export default React.memo(ProductDrawer);
