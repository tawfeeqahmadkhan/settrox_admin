import React,{useState} from "react";
import { useTranslation } from "react-i18next";
import Uploader from "@/components/image-uploader/Uploader";
import useNewArrivalSubmit from "@/hooks/useNewArrivalSubmit";
import DrawerButton from "@/components/form/button/DrawerButton";

const NewArrivalForm = () => {
  const { t } = useTranslation();
  const {
    handleSubmit,
    onSubmit,
    videoUrl,
    setVideoUrl,
    images,
    handleImageUpload,
    isSubmitting
  } = useNewArrivalSubmit();
  const [btloading, setBtLoading] = useState(false);

  return (
    <div className="p-6 bg-gray-800">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Video Section */}
        <div className="mb-8">
          <h3 className="text-lg text-white font-semibold mb-4">{t("Video Upload")}</h3>
          <Uploader
            fileType="video"
            imageUrl={videoUrl}
            setImageUrl={setVideoUrl}
            folder="new-arrivals/videos"
            setbtladoing={setBtLoading}
          />
        </div>

        {/* Images Section */}
        <div className="mb-24">
          <h3 className="text-lg font-semibold text-white mb-4">{t("Product Images")}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[0, 1, 2, 3].map((index) => (
              <div key={index} className="border rounded-lg p-4">
                <label className="block text-sm text-white font-medium mb-2">
                  {t("Image")} {index + 1}
                </label>
                <Uploader
                  folder="new-arrivals/images"
                  imageUrl={images[index]}
                  setImageUrl={(url) => handleImageUpload(index, url)}
                  setbtladoing={setBtLoading}
                />
              </div>
            ))}
          </div>
        </div>

        <DrawerButton
          title="Update New Arrivals"
          isSubmitting={isSubmitting}
          className="max-w-xs"
        />
      </form>
    </div>
  );
};

export default NewArrivalForm;