import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

// Components
import Error from "@/components/form/others/Error";
import Title from "@/components/form/others/Title";
import LabelArea from "@/components/form/selectOption/LabelArea";
import SwitchToggle from "@/components/form/switch/SwitchToggle";
import DrawerButton from "@/components/form/button/DrawerButton";
import useMostPurchasedProductHook from "@/hooks/useMostPurchasedProductHook";
import ProductServices from "@/services/ProductServices";
import MostPurchasedProductsService from "@/services/MostPurchasedProductsService";

const AddMostPurchasedDrawer = ({ id, data }) => {
  const { t } = useTranslation();

  const [products, setProducts] = useState([]);
  const [usedOrders, setUsedOrders] = useState([]);
  const [availableOrders, setAvailableOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const {
    register,
    onSubmit,
    handleSubmit,
    errors,
    status,
    setStatus,
    isSubmitting,
    setValue,
    watch,
  } = useMostPurchasedProductHook(id, data);

  // Fetch initial data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [productsRes, ordersRes] = await Promise.allSettled([
          ProductServices.getAllProducts({ page: 1, limit: 1000,category:null,search:null,title:null,price:null }),
          MostPurchasedProductsService.getUsedOrders()
        ]);
        console.log(ordersRes);
        
        setProducts(productsRes?.value?.products || []);
        setUsedOrders(ordersRes?.value?.usedOrders || []);
      } catch (err) {
        console.error("Failed to load data:", err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);

  // Generate order options
  useEffect(() => {
    const orders = Array.from({ length: 10 }, (_, i) => i + 1);
    const currentOrder = watch("order");
    
    setAvailableOrders(orders.map(order => ({
      value: order,
      disabled: usedOrders.includes(order) && order !== currentOrder
    })));
  }, [usedOrders, watch("order")]);

  // Set initial values for edit
  useEffect(() => {
    if (id && data) {
      setValue("product", data.product);
      setValue("order", data.order);
      setStatus(data.status);
    }
  }, [id, data, setValue]);

  return (
    <>
      <div className="w-full relative p-6 border-b border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
        <Title
          title={id ? t("Update Entry") : t("Add Entry")}
          description={t("Manage most purchased products")}
        />
      </div>

      <div className="w-full h-full relative dark:bg-gray-700 dark:text-gray-200">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="p-6 flex-grow scrollbar-hide w-full max-h-full pb-40">
            {/* Product Selection */}
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label={t("Product")} required />
              <div className="col-span-8 sm:col-span-4">
                {loading ? (
                  <div className="text-gray-500">{t("Loading products...")}</div>
                ) : (
                  <select
                    {...register("product", { required: "Product is required" })}
                    className="w-full px-3 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-700"
                    // disabled={!!id}
                  >
                    <option value="">{t("Select Product")}</option>
                    {products.map(product => (
                      <option key={product._id} value={product._id}>
                        {product.title?.en} (${product.price})
                      </option>
                    ))}
                  </select>
                )}
                <Error errorName={errors.product} />
              </div>
            </div>

            {/* Order Selection */}
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label={t("Display Order")} required />
              <div className="col-span-8 sm:col-span-4">
                <select
                  {...register("order", { required: "Order is required" })}
                  className="w-full px-3 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-700"
                >
                  <option value="">{t("Select Position")}</option>
                  {availableOrders.map(({ value, disabled }) => (
                    <option 
                      key={value} 
                      value={value}
                      disabled={disabled}
                      className={disabled ? "text-gray-400" : ""}
                    >
                      {t("Position")} {value} {disabled && `(${t("Occupied")})`}
                    </option>
                  ))}
                </select>
                <Error errorName={errors.order} />
              </div>
            </div>

            {/* Status Toggle */}
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label={t("Status")} />
              <div className="col-span-8 sm:col-span-4">
                <SwitchToggle
                  handleProcess={setStatus}
                  processOption={status==="active"}
                  checked={status === "active"}
                  options={["active", "inactive"]}
                />
              </div>
            </div>
          </div>

          <DrawerButton
            id={id}
            title="Most Purchased Entry"
            isSubmitting={isSubmitting}
          />
        </form>
      </div>
    </>
  );
};

export default AddMostPurchasedDrawer;