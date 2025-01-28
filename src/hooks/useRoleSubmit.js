import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { SidebarContext } from "@/context/SidebarContext";
import RoleServices from "@/services/RoleServices";
import { notifyError, notifySuccess } from "@/utils/toast";

const useRoleSubmit = (id) => {
  const { isDrawerOpen, closeDrawer, setIsUpdate } = useContext(SidebarContext);
  const [permissions, setPermissions] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      permissions: []
    }
  });

  useEffect(() => {
    if (!isDrawerOpen) {
      reset();
      setPermissions([]);
      return;
    }

    if (id) {
      (async () => {
        try {
          const res = await RoleServices.getRoleById(id);
          if (res) {
            setValue("name", res?.data?.name);
            setPermissions(res?.data?.permissions || []);
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
      
      if (!permissions.length) {
        notifyError("At least one permission is required");
        return;
      }

      const roleData = {
        ...data,
        permissions
      };

      if (id) {
        await RoleServices.updateRole(id, roleData);
        notifySuccess("Role updated successfully");
      } else {
        await RoleServices.createRole(roleData);
        notifySuccess("Role created successfully");
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
    permissions,
    setPermissions,
    isSubmitting,
  };
};

export default useRoleSubmit;