import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Uploader from "@/components/image-uploader/Uploader";
import useGallerySubmit from "@/hooks/useGallerySubmit";
import DrawerButton from "@/components/form/button/DrawerButton";
import { Input } from "@windmill/react-ui";
import Title from "@/components/form/others/Title";
const GalleryForm = () => {
  const { t } = useTranslation();
  const {
    handleSubmit,
    onSubmit,
    largeImage,
    setLargeImage,
    smallImages,
    handleSmallImage,
    isSubmitting,
    register
  } = useGallerySubmit();

  const [btladoing, setbtladoing] = useState(false)

  return (
    <>
       <div className="w-full relative p-6 border-b border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
        <Title
          title={t("Gallery")}
          description={t("Manage gallery")}
        />
      </div>
    <div className="p-6 bg-gray-800">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-8">
          <Input
            label={t("Gallery Title")}
            {...register("title", { required: true })}
            placeholder="Enter gallery title"
          />
        </div>

        <div className="mb-8">
          <h3 className="text-lg text-white font-semibold mb-4">
            {t("Large Image")}
          </h3>
          <Uploader
            imageUrl={largeImage}
            setImageUrl={setLargeImage}
            folder="gallery/large"
            setbtladoing={setbtladoing}
          />
        </div>

        <div className="mb-24">
          <h3 className="text-lg font-semibold text-white mb-4">
            {t("Small Images (4 required)")}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[0, 1, 2, 3].map((index) => (
              <div key={index} className="border rounded-lg p-4">
                <label className="block text-sm text-white font-medium mb-2">
                  {t("Image")} {index + 1}
                </label>
                <Uploader
                  folder="gallery/small"
                  setbtladoing={setbtladoing}
                  imageUrl={smallImages[index]}
                  setImageUrl={(url) => handleSmallImage(index, url)}
                />
              </div>
            ))}
          </div>
        </div>

        <DrawerButton
          title="Update Gallery"
          isSubmitting={isSubmitting}
          className="max-w-xs"
        />
      </form>
    </div>
    </>

  );
};

export default GalleryForm;