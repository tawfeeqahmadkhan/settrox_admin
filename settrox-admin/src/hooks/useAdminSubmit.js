import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { SidebarContext } from "@/context/SidebarContext";
import AdminServices from "@/services/AdminServices";
import RoleServices from "@/services/RoleServices";
import { notifyError, notifySuccess } from "@/utils/toast";

const useAdminSubmit = (id) => {
  const { isDrawerOpen, closeDrawer, setIsUpdate } = useContext(SidebarContext);
  const [roles, setRoles] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("Active");
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    clearErrors,
    formState: { errors },
  } = useForm(

  );

  useEffect(() => {
    const fetchRoles = async () => {
      const res = await RoleServices.getAllRoles();
      console.log(res);
      
      setRoles(res.data);
    };
    fetchRoles();
  }, []);

  useEffect(() => {
    if (!isDrawerOpen) {
      reset();
      return;
    }

    if (id) {
      (async () => {
        try {
          const res = await AdminServices.getStaffById(id);
          console.log(res);
          
          setValue("name", res?.name);
          setValue("email", res?.email);
          setValue("role", res?.role?._id);
          setValue("status", res?.status);
          setValue("password", "");
        } catch (error) {
            console.error(error);
          notifyError(error.message);
        }
      })();
    }
  }, [id, isDrawerOpen, setValue, reset]);

  const onSubmit = async (data) => {
    try {
      setIsSubmitting(true);
      const adminData = {
        ...data,
        password: data.password || undefined ,// Only send if provided
        status: status ? "Active" : "Inactive",
      };

      if (id) {
        await AdminServices.updateStaff(id, adminData);
        notifySuccess("Admin updated successfully");
      } else {
        await AdminServices.addStaff(adminData);
        notifySuccess("Admin created successfully");
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
    errors,
    roles,
    isSubmitting,
    status,
    setStatus,
  };
};

export default useAdminSubmit;