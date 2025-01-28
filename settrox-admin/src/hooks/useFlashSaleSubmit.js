import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { SidebarContext } from "@/context/SidebarContext";
import FlashSaleServices from "@/services/FlashSaleServices";
import { notifyError, notifySuccess } from "@/utils/toast";

const useFlashSaleSubmit = (id) => {
  const { isDrawerOpen, closeDrawer, setIsUpdate } = useContext(SidebarContext);
  const [imageUrl, setImageUrl] = useState("");
  const [status, setStatus] = useState("active");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    clearErrors,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (!isDrawerOpen) {
      reset();
      setImageUrl("");
      return;
    }

    if (id) {
      FlashSaleServices.getFlashSaleById(id)
        .then((res) => {
          setValue("productUrl", res?.data?.productUrl);
          setImageUrl(res?.data?.image);
          setStatus(res?.data?.status === "active" ? true : false);
        })
        .catch((err) => notifyError(err.message));
    }
  }, [id, isDrawerOpen, setValue, reset]);

  const onSubmit = async (data) => {
    try {
      setIsSubmitting(true);
      const bannerData = {
        ...data,
        image: imageUrl,
        status: status ? "active" : "inactive",
      };

      if (id) {
        await FlashSaleServices.updateFlashSale(id, bannerData);
        notifySuccess("Banner updated");
        closeDrawer();
        setIsUpdate(true);
      } else {
        await FlashSaleServices.addFlashSale(bannerData);
        notifySuccess("Banner added");
      }

      closeDrawer();
      setIsUpdate(true);
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
    imageUrl,
    setImageUrl,
    status,
    setStatus,
    isSubmitting,
    errors
  };
};

export default useFlashSaleSubmit;
