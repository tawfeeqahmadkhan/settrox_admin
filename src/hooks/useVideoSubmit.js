import { useState, useEffect,useContext } from "react";
import { useForm } from "react-hook-form";
import VideoServices from "@/services/VideoServices";
import { notifyError, notifySuccess } from "@/utils/toast";
import { SidebarContext } from "@/context/SidebarContext";
const useVideoSubmit = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const [status, setStatus] = useState("active");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, setValue } = useForm();
  const { isDrawerOpen, closeDrawer, setIsUpdate, lang } =
    useContext(SidebarContext);
  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await VideoServices.getVideo();
        if (res.video) {
          setVideoUrl(res.video.videoUrl);
          setValue("videoUrl", res.video.videoUrl);
        }
      } catch (error) {
        notifyError(error.message);
      }
    };
    loadData();
  }, [setValue]);

  const onSubmit = async () => {
    try {
      setIsSubmitting(true);
      await VideoServices.updateVideo({
        videoUrl,
      });
      setIsUpdate(true);
      closeDrawer();
      notifySuccess("Video updated successfully");
    } catch (error) {
      notifyError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    videoUrl,
    setVideoUrl,
    status,
    setStatus,
    isSubmitting,
  };
};

export default useVideoSubmit;
