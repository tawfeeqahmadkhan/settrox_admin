import { Input } from "@windmill/react-ui";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

// Internal imports
import { notifyError } from "@/utils/toast";
import Error from "@/components/form/others/Error";
import Title from "@/components/form/others/Title";
import InputArea from "@/components/form/input/InputArea";
import LabelArea from "@/components/form/selectOption/LabelArea";
import SwitchToggle from "@/components/form/switch/SwitchToggle";
import Uploader from "@/components/image-uploader/Uploader";
import DrawerButton from "@/components/form/button/DrawerButton";
import useBannerSubmit from "@/hooks/useBannerSubmit";

const AddBannerDrawer = ({ id, data }) => {
  const { t } = useTranslation();

  // Custom hook for managing form state and submission logic
  const {
    register,
    onSubmit,
    handleSubmit,
    errors,
    imageUrl,
    setImageUrl,
    published,
    setPublished,
    isSubmitting,
  } = useBannerSubmit(id, data);

  const [btloading, setBtLoading] = useState(false);

  return (
    <>
      <div className="w-full relative p-6 border-b border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
        {id ? (
          <Title
            register={register}
            title={t("Update Banner")}
            description={""}
          />
        ) : (
          <Title register={register} title={t("Add Banner")} description={""} />
        )}
      </div>

      <div className="w-full h-full relative dark:bg-gray-700 dark:text-gray-200">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="p-6 flex-grow scrollbar-hide w-full max-h-full pb-40">
            {/* Banner Title */}
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label={t("Title")} />
              <div className="col-span-8 sm:col-span-4">
                <InputArea
                  required={true}
                  register={register}
                  label="Banner Title"
                  name="title"
                  type="text"
                  placeholder={t("Enter Banner Title")}
                />
                <Error errorName={errors.title} />
              </div>
            </div>

            {/* Banner Subtitle */}
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label={t("Subtitle")} />
              <div className="col-span-8 sm:col-span-4">
                <InputArea
                  register={register}
                  label="Banner Subtitle"
                  name="subtitle"
                  type="text"
                  placeholder={t("Enter Banner Subtitle")}
                />
                <Error errorName={errors.subtitle} />
              </div>
            </div>

            {/* Banner URL */}
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label={t("RedirectURL")} />
              <div className="col-span-8 sm:col-span-4">
                <InputArea
                  required={true}
                  register={register}
                  label="Redirect URL"
                  name="url"
                  type="text"
                  placeholder={t("Enter Banner Redirect URL")}
                />
                <Error errorName={errors.url} />
              </div>
            </div>

            {/* Banner Image */}
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label={t("BannerImage")} />
              <div className="col-span-8 sm:col-span-4">
                <Uploader
                  imageUrl={imageUrl}
                  setImageUrl={setImageUrl}
                  folder="banner"
                  setbtladoing={setBtLoading}
                />
              </div>
            </div>

            {/* Published Status */}
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label={t("Published")} />
              <div className="col-span-8 sm:col-span-4">
                <SwitchToggle
                  handleProcess={setPublished}
                  processOption={published}
                />
              </div>
            </div>
          </div>

          <DrawerButton
            id={id}
            title="Banner"
            isSubmitting={isSubmitting || btloading}
          />
        </form>
      </div>
    </>
  );
};

export default AddBannerDrawer;
