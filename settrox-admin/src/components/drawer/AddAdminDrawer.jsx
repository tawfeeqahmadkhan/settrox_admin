import React from "react";
import { useTranslation } from "react-i18next";
import { Input, Select } from "@windmill/react-ui";
import Title from "@/components/form/others/Title";
import LabelArea from "@/components/form/selectOption/LabelArea";
import DrawerButton from "@/components/form/button/DrawerButton";
import useAdminSubmit from "@/hooks/useAdminSubmit";
import SwitchToggle from "@/components/form/switch/SwitchToggle";
import Error from "@/components/form/others/Error";
const AddAdminDrawer = ({ id }) => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    onSubmit,
    errors,
    roles,
    isSubmitting,
    status,
    setStatus,
  } = useAdminSubmit(id);

  console.log("here");
  console.log(errors);

  return (
    <>
      <div className="w-full relative p-6 border-b border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
        <Title
          title={id ? t("Update Admin") : t("Add Admin")}
          description={t("Manage administrator accounts")}
        />
      </div>

      <div className="w-full h-full relative dark:bg-gray-700 dark:text-gray-200">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="p-6 flex-grow scrollbar-hide w-full max-h-full pb-40">
            {/* Name */}
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label={t("Name")} required />
              <div className="col-span-8 sm:col-span-4">
                <Input
                  {...register("name", { required: "Name is required" })}
                  placeholder="Enter name"
                />
                <Error errorName={errors.name} />
              </div>
            </div>

            {/* Email */}
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label={t("Email")} required />
              <div className="col-span-8 sm:col-span-4">
                <Input
                  type="email"
                  {...register("email", { required: "Email is required" })}
                  placeholder="admin@example.com"
                />
                <Error errorName={errors.email} />
              </div>
            </div>

            {/* Role */}
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label={t("Role")} required />
              <div className="col-span-8 sm:col-span-4">
                <Select
                  {...register("role", { required: "Role is required" })}
                  className="w-full px-3 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-700"
                >
                  <option value="">{t("Select Role")}</option>
                  {roles?.map((role) => (
                    <option key={role._id} value={role._id}>
                      {role?.name}
                    </option>
                  ))}
                </Select>
                <Error errorName={errors.role} />
              </div>
            </div>

            {/* Password */}
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label={id ?t("Change Password"):t("Password")} />
              <div className="col-span-8 sm:col-span-4">
                <Input
                  type="password"
                  {...register(
                    "password",
                    id
                      ? {
                        required:false
                      }
                      : {
                         
                          required: "Password is required",
                          minLength: {
                            value: 8,
                            message: "Password must be at least 8 characters",
                          },
                        }
                  )}
                  placeholder={id ? "Change Password" : "Enter password"}
                />
                 <Error errorName={errors.password} />
              </div>
            </div>

            {/* Status */}
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label={t("Status")} />
              <div className="col-span-8 sm:col-span-4">
                <SwitchToggle
                  handleProcess={setStatus}
                  processOption={status}
                  checked={status === "Active" ? true : false}
                />
              </div>
            </div>
          </div>

          <DrawerButton title="Admin" isSubmitting={isSubmitting} />
        </form>
      </div>
    </>
  );
};

export default AddAdminDrawer;
