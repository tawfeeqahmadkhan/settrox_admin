import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

// Internal imports
import { SidebarContext } from "@/context/SidebarContext";
import BannerServices from "@/services/BannerServices";
import { notifyError, notifySuccess } from "@/utils/toast";

const useBannerSubmit = (id, data) => {
  const { isDrawerOpen, closeDrawer, setIsUpdate, lang } =
    useContext(SidebarContext);

  console.log(lang, "lang");

  const [resData, setResData] = useState({});
  const [imageUrl, setImageUrl] = useState("");
  const [published, setPublished] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    clearErrors,
    formState: { errors },
  } = useForm();

  const handleRemoveEmptyKey = (obj) => {
    for (const key in obj) {
      if (obj[key].trim() === "") {
        delete obj[key];
      }
    }
    return obj;
  };

  const onSubmit = async ({ title, subtitle, url }) => {
    console.log(title, subtitle, url);

    try {
      setIsSubmitting(true);

      const bannerData = {
        title,
        subtitle,
        url: url || "",
        image: imageUrl,
        status: published ? "active" : "inactive",
      };

      if (id) {
        const res = await BannerServices.updateBanner(id, bannerData);
        setIsUpdate(true);
        notifySuccess(res.message);
      } else {
        const res = await BannerServices.addBanner(bannerData);
        setIsUpdate(true);
        notifySuccess(res.message);
      }

      setIsSubmitting(false);
      closeDrawer();
      reset();
    } catch (err) {
      console.log(err);
      
      setIsSubmitting(false);
      notifyError(err?.response?.data?.message || err?.message);
    }
  };

  useEffect(() => {
    if (!isDrawerOpen) {
      reset();
      setImageUrl("");
      setPublished(true);
      clearErrors();
      return;
    }

    if (id) {
      (async () => {
        try {
          const res = await BannerServices.getBannerById(id);
          console.log(res);

          if (res?.banner) {
            setResData(res?.banner);
            setValue("title", res?.banner?.title || "");
            setValue("subtitle", res?.banner?.subtitle || "");
            setValue("url", res?.banner?.url || "");
            setImageUrl(res?.banner?.image || "");
            setPublished(res?.banner?.status === "active");
          }
        } catch (err) {
          notifyError(err?.response?.data?.message || err?.message);
        }
      })();
    }
  }, [id, isDrawerOpen, lang, setValue, clearErrors]);

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
    imageUrl,
    setImageUrl,
    published,
    setPublished,
    isSubmitting,
  };
};

export default useBannerSubmit;
