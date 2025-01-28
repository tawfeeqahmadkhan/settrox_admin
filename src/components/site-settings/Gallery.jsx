import React from "react";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { FiEdit } from "react-icons/fi";
import useAsync from "@/hooks/useAsync";
import { SidebarContext } from "@/context/SidebarContext";
import MainDrawer from "@/components/drawer/MainDrawer";
import PageTitle from "@/components/Typography/PageTitle";
import AnimatedContent from "@/components/common/AnimatedContent";
import GalleryForm from "../drawer/GalleryForm";
import NotFound from "@/components/table/NotFound";
import GalleryServices from "@/services/GalleryServices";
import {
    Button,
    Card,
    CardBody,
    Grid,
    GridItem,
  } from "@windmill/react-ui";
const Gallery = () => {
  const { toggleDrawer } = useContext(SidebarContext);
  const { t } = useTranslation();
  const { data, loading, error } = useAsync(GalleryServices.getGallery);

  return (
    <div className="min-h-screen">
      <MainDrawer>
        <GalleryForm />
      </MainDrawer>

      <AnimatedContent>
        <div className="flex justify-between items-center mb-8">
          <PageTitle>{t("Gallery Management")}</PageTitle>
          <Button
            onClick={toggleDrawer}
            className="rounded-md h-12"
            iconLeft={FiEdit}
          >
            {t("Edit Gallery")}
          </Button>
        </div>

        {loading ? (
          <div className="text-center py-8">{t("Loading...")}</div>
        ) : error ? (
          <div className="text-center text-red-500 py-8">{error}</div>
        ) : data?.data ? (
          <div className="p-4">
            <h2 className="text-2xl font-semibold mb-6 dark:text-white">{data.data.title}</h2>
            
            <div className="mb-8">
              <img
                src={data.data.largeImage}
                alt="Large gallery"
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {data.data.smallImages?.map((img, index) => (
                <div
                  key={index}
                  className="aspect-square bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden"
                >
                  {img ? (
                    <img
                      src={img}
                      alt={`Gallery ${index + 1}`}
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
          <NotFound title={t("No gallery content found")} />
        )}
      </AnimatedContent>
    </div>
  );
};

export default Gallery;