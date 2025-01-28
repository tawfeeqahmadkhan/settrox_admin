import React from "react";
import { useTranslation } from "react-i18next";
import { Input } from "@windmill/react-ui";

// Components
import Error from "@/components/form/others/Error";
import Title from "@/components/form/others/Title";
import LabelArea from "@/components/form/selectOption/LabelArea";
import SwitchToggle from "@/components/form/switch/SwitchToggle";
import Uploader from "@/components/image-uploader/Uploader";
import DrawerButton from "@/components/form/button/DrawerButton";
import useVideoSubmit from "@/hooks/useVideoSubmit";
import { useState } from "react";

const VideoForm = () => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    onSubmit,
    videoUrl,
    setVideoUrl,
    status,
    setStatus,
    isSubmitting
  } = useVideoSubmit();
  const [btloading, setBtLoading] = useState(false);

  return (
    <>
      <div className="w-full relative p-6 border-b border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
        <Title
          title={t("Video Section")}
          description={t("Manage website video section")}
        />
      </div>

      <div className="w-full h-full relative dark:bg-gray-700 dark:text-gray-200">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="p-6 flex-grow scrollbar-hide w-full max-h-full pb-40">
            {/* Video Upload */}
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label={t("Video Upload")} required />
              <div className="col-span-8 sm:col-span-4">
                <Uploader
                  video={true}
                  folder="videos"
                  imageUrl={videoUrl}
                  setImageUrl={setVideoUrl}
                  fileType="video"
                  setbtladoing={setBtLoading}
                />
            
                
               
              </div>
            </div>

    
          </div>

          <DrawerButton
            title="Video"
            isSubmitting={isSubmitting}
          />
        </form>
      </div>
    </>
  );
};

export default VideoForm;