import {
  Pagination,
  Table,
  TableCell,
  TableContainer,
  TableFooter,
  TableHeader,
  WindmillContext,
} from "@windmill/react-ui";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import isToday from "dayjs/plugin/isToday";
import isYesterday from "dayjs/plugin/isYesterday";
import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FiCheck, FiRefreshCw, FiShoppingCart, FiTruck } from "react-icons/fi";
import { ImCreditCard, ImStack } from "react-icons/im";

//internal import
import useAsync from "@/hooks/useAsync";
import useFilter from "@/hooks/useFilter";
 
import CardItem from "@/components/dashboard/CardItem";
import CardItemTwo from "@/components/dashboard/CardItemTwo";
import ChartCard from "@/components/chart/ChartCard";
import OrderTable from "@/components/order/OrderTable";
import TableLoading from "@/components/preloader/TableLoading";
import NotFound from "@/components/table/NotFound";
import PageTitle from "@/components/Typography/PageTitle";
import { SidebarContext } from "@/context/SidebarContext";
import OrderServices from "@/services/OrderServices";
import AnimatedContent from "@/components/common/AnimatedContent";

const Dashboard = () => {
  const { t } = useTranslation();
  const { mode } = useContext(WindmillContext);

  dayjs.extend(isBetween);
  dayjs.extend(isToday);
  dayjs.extend(isYesterday);

  const { currentPage, handleChangePage } = useContext(SidebarContext);

  // react hook
 
  const [salesReport, setSalesReport] = useState([]);
 

 
 
  const { data: dashboardOrderCount, loading: loadingOrderCount } = useAsync(
    OrderServices.getDashboardCount
  );

  const { data: dashboardOrderAmount, loading: loadingOrderAmount } = useAsync(
    OrderServices.getDashboardAmount
  );

  // console.log("dashboardOrderCount", dashboardOrderCount);
  

  useEffect(() => {
     
 

    // today order payment method
    dashboardOrderAmount?.ordersData?.filter((item, value) => {
      if (dayjs(item.updatedAt).isToday()) {
        if (item.paymentMethod === "Cash") {
          let cashMethod = {
            paymentMethod: "Cash",
            total: item.total,
          };
          todayPaymentMethodData.push(cashMethod);
        }

        if (item.paymentMethod === "Credit") {
          const cashMethod = {
            paymentMethod: "Credit",
            total: item.total,
          };

          todayPaymentMethodData.push(cashMethod);
        }

        if (item.paymentMethod === "Card") {
          const cashMethod = {
            paymentMethod: "Card",
            total: item.total,
          };

          todayPaymentMethodData.push(cashMethod);
        }
      }

      return item;
    });
    // yesterday order payment method
    dashboardOrderAmount?.ordersData?.filter((item, value) => {
      if (dayjs(item.updatedAt).set(-1, "day").isYesterday()) {
        if (item.paymentMethod === "Cash") {
          let cashMethod = {
            paymentMethod: "Cash",
            total: item.total,
          };
          yesterDayPaymentMethodData.push(cashMethod);
        }

        if (item.paymentMethod === "Credit") {
          const cashMethod = {
            paymentMethod: "Credit",
            total: item?.total,
          };

          yesterDayPaymentMethodData.push(cashMethod);
        }

        if (item.paymentMethod === "Card") {
          const cashMethod = {
            paymentMethod: "Card",
            total: item?.total,
          };

          yesterDayPaymentMethodData.push(cashMethod);
        }
      }

      return item;
    });
 
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dashboardOrderAmount]);

  return (
    <>
      <PageTitle>{t("DashboardOverview")}</PageTitle>

      <AnimatedContent>
        
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <CardItem
            title="Total Order"
            Icon={FiShoppingCart}
            loading={loadingOrderCount}
            quantity={dashboardOrderCount?.totalOrder || 0}
            className="text-orange-600 dark:text-orange-100 bg-orange-100 dark:bg-orange-500"
          />
          <CardItem
            title={t("OrderPending")}
            Icon={FiRefreshCw}
            loading={loadingOrderCount}
            quantity={dashboardOrderCount?.totalPendingOrder?.count || 0}
            amount={dashboardOrderCount?.totalPendingOrder?.total || 0}
            className="text-blue-600 dark:text-blue-100 bg-blue-100 dark:bg-blue-500"
          />
          <CardItem
            title={t("OrderProcessing")}
            Icon={FiTruck}
            loading={loadingOrderCount}
            quantity={dashboardOrderCount?.totalProcessingOrder || 0}
            className="text-teal-600 dark:text-teal-100 bg-teal-100 dark:bg-teal-500"
          />
          <CardItem
            title={t("OrderDelivered")}
            Icon={FiCheck}
            loading={loadingOrderCount}
            quantity={dashboardOrderCount?.totalDeliveredOrder || 0}
            className="text-blue-600 dark:text-blue-100 bg-blue-100 dark:bg-blue-500"
          />
		  
		  <CardItem
            title={t("TotalProductSale")}
            Icon={FiCheck}
            loading={loadingOrderCount}
            quantity={dashboardOrderCount?.totalDeliveredOrder || 0}
            className="text-blue-600 dark:text-blue-100 bg-blue-100 dark:bg-blue-500"
          />
		  
		  <CardItem
            title={t("TodayProductOrder")}
            Icon={FiCheck}
            loading={loadingOrderCount}
            quantity={dashboardOrderCount?.totalDeliveredOrder || 0}
            className="text-blue-600 dark:text-blue-100 bg-blue-100 dark:bg-blue-500"
          />
		  
		  <CardItem
            title={t("ThisMonthSale")}
            Icon={FiCheck}
            loading={loadingOrderCount}
            quantity={dashboardOrderCount?.totalDeliveredOrder || 0}
            className="text-blue-600 dark:text-blue-100 bg-blue-100 dark:bg-blue-500"
          />
		  
		  <CardItem
            title={t("ThisYearProduct")}
            Icon={FiCheck}
            loading={loadingOrderCount}
            quantity={dashboardOrderCount?.totalDeliveredOrder || 0}
            className="text-blue-600 dark:text-blue-100 bg-blue-100 dark:bg-blue-500"
          />
		  
		  <CardItem
            title={t("TotalProducts")}
            Icon={FiCheck}
            loading={loadingOrderCount}
            quantity={dashboardOrderCount?.totalDeliveredOrder || 0}
            className="text-blue-600 dark:text-blue-100 bg-blue-100 dark:bg-blue-500"
          />
		  
		  <CardItem
            title={t("TotalCustomers")}
            Icon={FiCheck}
            loading={loadingOrderCount}
            quantity={dashboardOrderCount?.totalDeliveredOrder || 0}
            className="text-blue-600 dark:text-blue-100 bg-blue-100 dark:bg-blue-500"
          />
		  
		  <CardItem
            title={t("TotalCategories")}
            Icon={FiCheck}
            loading={loadingOrderCount}
            quantity={dashboardOrderCount?.totalDeliveredOrder || 0}
            className="text-blue-600 dark:text-blue-100 bg-blue-100 dark:bg-blue-500"
          />
		  
		  <CardItem
            title={t("TotalBrands")}
            Icon={FiCheck}
            loading={loadingOrderCount}
            quantity={dashboardOrderCount?.totalDeliveredOrder || 0}
            className="text-blue-600 dark:text-blue-100 bg-blue-100 dark:bg-blue-500"
          />
		  
		  <CardItem
            title={t("TotalSubcribers")}
            Icon={FiCheck}
            loading={loadingOrderCount}
            quantity={dashboardOrderCount?.totalDeliveredOrder || 0}
            className="text-blue-600 dark:text-blue-100 bg-blue-100 dark:bg-blue-500"
          />
		  
		  <CardItem
            title={t("TotalSystemUser")}
            Icon={FiCheck}
            loading={loadingOrderCount}
            quantity={dashboardOrderCount?.totalDeliveredOrder || 0}
            className="text-blue-600 dark:text-blue-100 bg-blue-100 dark:bg-blue-500"
          />
		  
        </div>

      </AnimatedContent>

    </>
  );
};

export default Dashboard;
