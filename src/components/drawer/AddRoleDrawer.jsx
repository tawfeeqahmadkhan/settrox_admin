import React from "react";
import { useTranslation } from "react-i18next";
import { Input } from "@windmill/react-ui";
import Error from "@/components/form/others/Error";
import Title from "@/components/form/others/Title";
import LabelArea from "@/components/form/selectOption/LabelArea";
import DrawerButton from "@/components/form/button/DrawerButton";
import useRoleSubmit from "@/hooks/useRoleSubmit";

const MODULES = [
  "dashboard",
  "categories",
  "brand",
  "specification",
  "product",
  "siteSettings",
  "customers",
  "orders",
  "settings"
];

const ACTIONS = ["view", "add", "edit", "delete"];

const AddRoleDrawer = ({ id }) => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    onSubmit,
    permissions,
    setPermissions,
    isSubmitting,
    errors,
  } = useRoleSubmit(id);

  const handlePermissionChange = (module, action, checked) => {
    const newPermissions = [...permissions];
    const moduleIndex = newPermissions.findIndex(p => p.module === module);
    
    if (checked) {
      if (moduleIndex === -1) {
        newPermissions.push({ module, actions: [action] });
      } else {
        newPermissions[moduleIndex].actions = [
          ...newPermissions[moduleIndex].actions,
          action
        ];
      }
    } else {
      if (moduleIndex !== -1) {
        newPermissions[moduleIndex].actions = newPermissions[moduleIndex].actions
          .filter(a => a !== action);
        
        if (newPermissions[moduleIndex].actions.length === 0) {
          newPermissions.splice(moduleIndex, 1);
        }
      }
    }
    
    setPermissions(newPermissions);
  };

  return (
    <>
      <div className="w-full relative p-6 border-b border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
        <Title
          title={id ? t("Update Role") : t("Add Role")}
          description={t("Manage role permissions")}
        />
      </div>

      <div className="w-full h-full relative dark:bg-gray-700 dark:text-gray-200">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="p-6 flex-grow scrollbar-hide w-full max-h-full pb-40">
            {/* Role Name */}
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label={t("Role Name")} required />
              <div className="col-span-8 sm:col-span-4">
                <Input
                  {...register("name", {
                    required: "Role name is required",
                    minLength: {
                      value: 3,
                      message: "Name must be at least 3 characters",
                    },
                  })}
                  placeholder={t("Admin, Manager, etc.")}
                />
                <Error errorName={errors.name} />
              </div>
            </div>

            {/* Permissions Grid */}
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label={t("Permissions")} required />
              <div className="col-span-8 sm:col-span-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {MODULES.map((module) => (
                    <div key={module} className="card p-4">
                      <h4 className="font-semibold mb-3 capitalize">{module}</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {ACTIONS.map((action) => {
                          const current = permissions.find(p => p.module === module);
                          const isChecked = current?.actions.includes(action);

                          return (
                            <label key={action} className="flex items-center space-x-2">
                              <input
                                type="checkbox"
                                checked={isChecked}
                                onChange={(e) => 
                                  handlePermissionChange(
                                    module,
                                    action,
                                    e.target.checked
                                  )
                                }
                                className="form-checkbox rounded text-purple-600"
                              />
                              <span className="capitalize">{action}</span>
                            </label>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
                <Error errorName={errors.permissions} />
              </div>
            </div>
          </div>

          <DrawerButton title="Role" isSubmitting={isSubmitting} />
        </form>
      </div>
    </>
  );
};

export default AddRoleDrawer;