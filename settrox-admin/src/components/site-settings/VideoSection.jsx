import React from "react";
import {
  Button,
  Card,
  CardBody,
} from "@windmill/react-ui";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { FiEdit } from "react-icons/fi";
import useAsync from "@/hooks/useAsync";
import { SidebarContext } from "@/context/SidebarContext";
import MainDrawer from "@/components/drawer/MainDrawer";
import PageTitle from "@/components/Typography/PageTitle";
import AnimatedContent from "@/components/common/AnimatedContent";
import VideoForm from "../drawer/VideoForm";
import NotFound from "@/components/table/NotFound";
import VideoServices from "@/services/VideoServices";

const VideoSection = () => {
  const { toggleDrawer } = useContext(SidebarContext);
  const { t } = useTranslation();
  const { data, loading, error } = useAsync(VideoServices.getVideo);

  return (
    <div className="min-h-screen">
      <MainDrawer>
        <VideoForm />
      </MainDrawer>

      <AnimatedContent>
        <Card className="min-w-0 shadow-xs overflow-hidden bg-white dark:bg-gray-800 mb-5">
          <CardBody className="flex justify-between items-center">
            <PageTitle>{t("Video Section")}</PageTitle>
            <Button
              onClick={toggleDrawer}
              className="rounded-md h-12"
              iconLeft={FiEdit}
            >
              {t("Edit Video")}
            </Button>
          </CardBody>
        </Card>

        {loading ? (
          <div className="text-center py-8">{t("Loading...")}</div>
        ) : error ? (
          <div className="text-center text-red-500 py-8">{error}</div>
        ) : data?.video?.videoUrl ? (
          <div className="p-4">
            <div className="mb-8 max-w-4xl mx-auto">
              <video
                controls
                className="w-full rounded-lg shadow-lg"
                src={data.video.videoUrl}
              >
                {t("Your browser does not support video playback")}
              </video>
            </div>
          </div>
        ) : (
          <NotFound title={t("No video found. Please upload a video.")} />
        )}
      </AnimatedContent>
    </div>
  );
};

export default VideoSection;