import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Input } from "@windmill/react-ui";
import Error from "@/components/form/others/Error";
import Title from "@/components/form/others/Title";
import LabelArea from "@/components/form/selectOption/LabelArea";
import SwitchToggle from "@/components/form/switch/SwitchToggle";
import Uploader from "@/components/image-uploader/Uploader";
import DrawerButton from "@/components/form/button/DrawerButton";
import useFeaturedProductSubmit from "@/hooks/useFeaturedProductSubmit";

const AddFeaturedProductDrawer = ({ id }) => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    onSubmit,
    imageUrl,
    setImageUrl,
    status,
    setStatus,
    isSubmitting,
    errors,
  } = useFeaturedProductSubmit(id);

  console.log(errors);

  const [btladoing, setbtladoing] = useState(false);

  return (
    <>
      <div className="w-full relative p-6 border-b border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
        <Title
          title={id ? t("Update Product") : t("Add Product")}
          description={t("Manage featured products")}
        />
      </div>

      <div className="w-full h-full relative dark:bg-gray-700 dark:text-gray-200">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="p-6 flex-grow scrollbar-hide w-full max-h-full pb-40">
            {/* Image Upload */}
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label={t("Image")} required />
              <div className="col-span-8 sm:col-span-4">
                <Uploader
                  imageUrl={imageUrl}
                  setImageUrl={setImageUrl}
                  folder="featured-products"
                  setbtladoing={setbtladoing}
                />
                {/* <input
                  type="hidden"
                  {...register("image", { required: "Image is required" })}
                /> */}
                <Error errorName={errors.image} />
              </div>
            </div>

            {/* Title */}
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label={t("Title")} required />
              <div className="col-span-8 sm:col-span-4">
                <Input
                  {...register("title", {
                    required: "Title is required",
                    minLength: {
                      value: 3,
                      message: "Title must be at least 3 characters",
                    },
                  })}
                  placeholder={t("Enter title")}
                />
                <Error errorName={errors.title} />
              </div>
            </div>

            {/* Description */}
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label={t("Description")} required />
              <div className="col-span-8 sm:col-span-4">
                <Input
                  {...register("description", { required: "Description is required" })}
                  placeholder={t("Enter description")}
                />
                <Error errorName={errors.description} />
              </div>
            </div>

            {/* Product URL */}
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label={t("Product URL")} required />
              <div className="col-span-8 sm:col-span-4">
                <Input
                  {...register("productUrl", { required: "Product URL is required" })}
                  placeholder="https://example.com/product"
                />
                <Error errorName={errors.productUrl} />
              </div>
            </div>

            {/* Status Toggle */}
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label={t("Status")} />
              <div className="col-span-8 sm:col-span-4">
                <SwitchToggle
                  handleProcess={setStatus}
                  processOption={status}

                  checked = {status === "active" ? true : false}
                />
              </div>
            </div>
          </div>

          <DrawerButton title="Featured Product" isSubmitting={isSubmitting} />
        </form>
      </div>
    </>
  );
};

export default AddFeaturedProductDrawer;
