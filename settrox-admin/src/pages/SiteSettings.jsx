import React, { useContext, useState } from "react";
import {
  Table,
  TableHeader,
  TableCell,
  TableFooter,
  TableContainer,
  Select,
  Input,
  Button,
  Card,
  CardBody,
  Pagination,
} from "@windmill/react-ui";
import { useTranslation } from "react-i18next";
import { FiPlus } from "react-icons/fi";
import { FiEdit, FiTrash2 } from "react-icons/fi";

import useAsync from "@/hooks/useAsync";
import useToggleDrawer from "@/hooks/useToggleDrawer";
import NotFound from "@/components/table/NotFound";
import PageTitle from "@/components/Typography/PageTitle";
import { SidebarContext } from "@/context/SidebarContext";
import MainDrawer from "@/components/drawer/MainDrawer";
import DeleteModal from "@/components/modal/DeleteModal";
import TableLoading from "@/components/preloader/TableLoading";
import Banner from "@/components/site-settings/Banner";
import BulkActionDrawer from "@/components/drawer/BulkActionDrawer";
import MostPurchasedProducts from "@/components/site-settings/MostPurchasedProducts";
import NewArrivals from "@/components/site-settings/NewArrivals";
import VideoSection from "@/components/site-settings/VideoSection";
import FlashSaleSection from "@/components/site-settings/FlashSaleSection";
import FeaturedProductSection from "@/components/site-settings/FeaturedProductSection";
import Gallery from "@/components/site-settings/Gallery";
const sections = [
  "Banners",
  "Most Purchased Products",
  "Video",
  "New Arrivals",
  "Flash Sale Banners",
  "Featured Products",
  "Gallery",
];

const SiteSettings = () => {
  const { t } = useTranslation();
  const { title, allId, serviceId, handleDeleteMany, handleUpdateMany } =
    useToggleDrawer();

  const [selectedSection, setSelectedSection] = useState(sections[0]);

  const {
    toggleDrawer,
    lang,
    currentPage,
    handleChangePage,
    searchText,
    category,
    setCategory,
    searchRef,
    handleSubmitForAll,
    sortedField,
    setSortedField,
    limitData,
  } = useContext(SidebarContext);

  return (
    <>
      <div className="w-full p-2 flex flex-col">
        <div className="w-full flex items-center gap-2">
          {sections.map((section, index) => {
            return (
              <p
                onClick={() => setSelectedSection(section)}
                className={`px-4 py-1 cursor-pointer text-gray-700 dark:text-gray-300 text-sm ${
                  selectedSection === section && "border-b-2 border-blue-400"
                }`}
                key={index}
              >
                {section}
              </p>
            );
          })}
        </div>
        <div className="w-full shadow-sm dark:bg-gray-800 p-6">
          {selectedSection === "Banners" && <Banner />}
          {selectedSection==="Most Purchased Products" && <MostPurchasedProducts />}
          {selectedSection==="Video" && <VideoSection />}
          {selectedSection==="New Arrivals" && <NewArrivals />}
          {selectedSection==="Flash Sale Banners" && <FlashSaleSection />}
          {selectedSection==="Featured Products" && <FeaturedProductSection />}
          {selectedSection==="Gallery" && <Gallery />}
        </div>
      </div>
    </>
  );
};

export default SiteSettings;
