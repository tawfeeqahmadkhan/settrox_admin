import React from "react";
import {
  Button,
  Card,
  CardBody,
  Grid,
  GridItem,
} from "@windmill/react-ui";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { FiEdit } from "react-icons/fi";
import useAsync from "@/hooks/useAsync";
import { SidebarContext } from "@/context/SidebarContext";
import MainDrawer from "@/components/drawer/MainDrawer";
import PageTitle from "@/components/Typography/PageTitle";
import AnimatedContent from "@/components/common/AnimatedContent";
import NewArrivalForm from "../drawer/NewArrivalForm";
import NotFound from "@/components/table/NotFound";
import NewArrivalServices from "@/services/NewArrivalServices";

const NewArrivals = () => {
  const { toggleDrawer } = useContext(SidebarContext);
  const { t } = useTranslation();
  const { data, loading, error } = useAsync(NewArrivalServices.getNewArrival);

  return (
    <div className="min-h-screen">
      <MainDrawer>
        <NewArrivalForm />
      </MainDrawer>

      <AnimatedContent>
        <Card className="min-w-0 shadow-xs overflow-hidden bg-white dark:bg-gray-800 mb-5">
          <CardBody className="flex justify-between items-center">
            <PageTitle>{t("New Arrivals Section")}</PageTitle>
            <Button
              onClick={toggleDrawer}
              className="rounded-md h-12"
              iconLeft={FiEdit}
            >
              {t("Edit Content")}
            </Button>
          </CardBody>
        </Card>

        {loading ? (
          <div className="text-center py-8">{t("Loading...")}</div>
        ) : error ? (
          <div className="text-center text-red-500 py-8">{error}</div>
        ) : data?.data ? (
          <div className="p-4">
            {data.data.videoUrl && (
              <div className="mb-8">
                <video
                  controls
                  className="w-full rounded-lg"
                  src={data.data.videoUrl}
                >
                  {t("Your browser does not support video playback")}
                </video>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {data.data.images?.map((img, index) => (
                <div
                  key={index}
                  className="aspect-square bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden"
                >
                  {img ? (
                    <img
                      src={img}
                      alt={`New arrival ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      {t("No image")}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <NotFound title={t("No content found. Please add new arrivals.")} />
        )}
      </AnimatedContent>
    </div>
  );
};

export default NewArrivals;