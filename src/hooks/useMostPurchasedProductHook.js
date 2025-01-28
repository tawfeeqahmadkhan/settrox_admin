import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { SidebarContext } from "@/context/SidebarContext";
import MostPurchasedProductsService from "@/services/MostPurchasedProductsService";
import { notifyError, notifySuccess } from "@/utils/toast";

const useMostPurchasedProductHook = (id, data) => {
  const { isDrawerOpen, closeDrawer, setIsUpdate } = useContext(SidebarContext);
  const [status, setStatus] = useState("active");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    clearErrors,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (!isDrawerOpen) {
      reset();
      setStatus("active");
      clearErrors();
      return;
    }

    if (id) {
      const initializeForm = async () => {
        try {
          const res = await MostPurchasedProductsService.getMostPurchasedProductById(id);
          if (res) {
            setValue("product", res?.product?.product?._id);
            setValue("order", res?.product?.order);
            setStatus(res?.product?.status);
          }
        } catch (err) {
          notifyError(err?.response?.data?.message || err?.message);
        }
      };
      initializeForm();
    }
  }, [id, isDrawerOpen, setValue, clearErrors, reset]);

  const onSubmit = async (formData) => {
    try {
      setIsSubmitting(true);
      const payload = {
        ...formData,
        status:status==="active" ? "active" : "inactive",
        order: Number(formData.order),
      };

      if (id) {
        await MostPurchasedProductsService.updateMostPurchasedProduct(
          id,
          payload
        );
        notifySuccess("Product updated successfully");
      } else {
        await MostPurchasedProductsService.addMostPurchasedProduct(payload);
        notifySuccess("Product added successfully");
        reset();
        setStatus("active");
      }
      setIsUpdate(true);
      setIsSubmitting(false);
      closeDrawer();
    } catch (err) {
      setIsSubmitting(false);
      notifyError(err?.response?.data?.message || err?.message);
    }
  };

  return {
    register,
    handleSubmit,
    watch,
    errors,
    onSubmit,
    status,
    setStatus,
    isSubmitting,
    setValue,
  };
};

export default useMostPurchasedProductHook;
