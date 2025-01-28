import { useState, useEffect,useContext } from "react";
import { useForm } from "react-hook-form";
import NewArrivalServices from "@/services/NewArrivalServices";
import { notifyError, notifySuccess } from "@/utils/toast";
import { SidebarContext } from "@/context/SidebarContext";
const useNewArrivalSubmit = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const [images, setImages] = useState(Array(4).fill(""));
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { isDrawerOpen, closeDrawer, setIsUpdate } = useContext(SidebarContext);
  const { register, handleSubmit, setValue } = useForm();

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await NewArrivalServices.getNewArrival();
        console.log(res,"getNewArrival");
        
        if (res.data) {
          setVideoUrl(res.data.videoUrl || "");
          setImages(res.data.images || Array(4).fill(""));
        }
      } catch (error) {
        notifyError(error.message);
      }
    };
    loadData();
  }, []);

  const onSubmit = async () => {
    console.log(videoUrl);
    
    try {
      setIsSubmitting(true);
      await NewArrivalServices.updateNewArrival({
        videoUrl,
        images
      });
      notifySuccess("New arrival section updated successfully");
      closeDrawer();
      setIsUpdate(true);
      
    } catch (error) {
      notifyError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleImageUpload = (index, url) => {
    const newImages = [...images];
    newImages[index] = url;
    setImages(newImages);
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    videoUrl,
    setVideoUrl,
    images,
    handleImageUpload,
    isSubmitting
  };
};

export default useNewArrivalSubmit;