import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { SidebarContext } from "@/context/SidebarContext";
import FeaturedProductServices from "@/services/FeaturedProductServices";
import { notifyError, notifySuccess } from "@/utils/toast";

const useFeaturedProductSubmit = (id) => {
  const { isDrawerOpen, closeDrawer, setIsUpdate } = useContext(SidebarContext);
  const [imageUrl, setImageUrl] = useState("");
  const [status, setStatus] = useState("active");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      description: "",
      productUrl: "",
      image: ""
    }
  });

  useEffect(() => {
    if (!isDrawerOpen) {
      reset();
      setImageUrl("");
      setStatus("active");
      return;
    }

    if (id) {
      (async () => {
        try {
          const res = await FeaturedProductServices.getFeaturedProductById(id);
          if (res) {
            setValue("title", res?.data?.title);
            setValue("description", res?.data?.description);
            setValue("productUrl", res?.data?.productUrl);
            setImageUrl(res?.data?.image);
            setStatus(res?.status);
          }
        } catch (error) {
          notifyError(error.message);
        }
      })();
    }
  }, [id, isDrawerOpen, setValue, reset]);

  const onSubmit = async (data) => {
    try {
      setIsSubmitting(true);
      
      // Manual validation for image URL
      if (!imageUrl) {
        notifyError("Image is required");
        return;
      }

      const productData = {
        ...data,
        image: imageUrl,
       status:status?"active":"inactive"
      };

      if (id) {
        await FeaturedProductServices.updateFeaturedProduct(id, productData);
        notifySuccess("Featured product updated successfully");
        closeDrawer();
        setIsUpdate(true);
      } else {
        await FeaturedProductServices.addFeaturedProduct(productData);
        notifySuccess("Featured product added successfully");
        closeDrawer();
        setIsUpdate(true);
      }

      closeDrawer();
      setIsUpdate(true);
      reset();
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
    errors,
    imageUrl,
    setImageUrl,
    status,
    setStatus,
    isSubmitting,
  };
};

export default useFeaturedProductSubmit;