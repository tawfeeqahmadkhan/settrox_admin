import { useState, useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import GalleryServices from "@/services/GalleryServices";
import { notifyError, notifySuccess } from "@/utils/toast";
import { SidebarContext } from "@/context/SidebarContext";

const useGallerySubmit = () => {
  const [largeImage, setLargeImage] = useState("");
  const [smallImages, setSmallImages] = useState(Array(4).fill(""));
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { closeDrawer, setIsUpdate } = useContext(SidebarContext);
  const { register, handleSubmit, setValue } = useForm();

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await GalleryServices.getGallery();
        if (res.data) {
          setLargeImage(res.data.largeImage || "");
          setSmallImages(res.data.smallImages || Array(4).fill(""));
          setValue("title", res.data.title || "");
        }
      } catch (error) {
        notifyError(error.message);
      }
    };
    loadData();
  }, []);

  const onSubmit = async (data) => {
    try {
      setIsSubmitting(true);
      await GalleryServices.updateGallery({
        ...data,
        largeImage,
        smallImages
      });
      notifySuccess("Gallery updated successfully");
      closeDrawer();
      setIsUpdate(true);
    } catch (error) {
      notifyError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSmallImage = (index, url) => {
    const newImages = [...smallImages];
    newImages[index] = url;
    setSmallImages(newImages);
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    largeImage,
    setLargeImage,
    smallImages,
    handleSmallImage,
    isSubmitting
  };
};

export default useGallerySubmit;