import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

// Internal imports
import { SidebarContext } from "@/context/SidebarContext";
import BrandServices from "@/services/BrandServices";
import { notifyError, notifySuccess } from "@/utils/toast"; 
import useUtilsFunction from "./useUtilsFunction";
const useBrandSubmit = (id, data) => {
  const { isDrawerOpen, closeDrawer, setIsUpdate, lang } =
    useContext(SidebarContext);
  const [resData, setResData] = useState({});
  const [checked, setChecked] = useState(""); // Replace or remove if parent-child hierarchy is not needed
  const [imageUrl, setImageUrl] = useState("");
  const [language, setLanguage] = useState(lang);
  const [published, setPublished] = useState(true);
  const [selectParentBrandName, setSelectParentBrandName] = useState(""); // Replace or adjust
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [defaultCategory, setDefaultCategory] = useState([]);
  const { showingTranslateValue, getNumber, getNumberTwo } = useUtilsFunction();

const imageupload=()=>{
  setIsSubmitting(!isSubmitting)
  console.log("upload Image");
  console.log(isSubmitting,"ssssssssssssssssssssss");
}
  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    reset,
    formState: { errors },
  } = useForm();

  const handleRemoveEmptyKey = (obj) => {
    for (const key in obj) {
      if (obj[key].trim() === "") {
        delete obj[key];
      }
    }
    return obj;
  };

  const onSubmit = async ({ name, description,subcategory }) => { 
    console.log("&&&&&&&&&",name);
    try {
      setIsSubmitting(true);

      const brandData = {
        name: handleRemoveEmptyKey({
          [language]: name,
        }),
        description:description?handleRemoveEmptyKey({
          [language]: description || "",
        }):"",
        categories: selectedCategory.map((item) => item._id),
        parentId: checked ? checked : undefined,
        parentName: selectParentBrandName || "Main",
        logo: imageUrl,
        status: published ? "active" : "inactive",
        lang: language,
        subcategory: subcategory ? subcategory : undefined,
      };

      if (id) {
        console.log(brandData,"fffffffffffffffffffff");
        const res = await BrandServices.updateBrand(id, brandData);
        setIsUpdate(true);
        setIsSubmitting(false);
        notifySuccess(res.message);
        closeDrawer();
        reset();
      } else {
        const res = await BrandServices.addBrand(brandData);
        setIsUpdate(true);
        setIsSubmitting(false);
        notifySuccess(res.message);
        closeDrawer();
      }

    } catch (err) {
      setIsSubmitting(false);
      console.log("*******************",err);
      notifyError(err?.response?.data?.message || err?.message);
      closeDrawer();
    }
  };

  const handleSelectLanguage = (lang) => {
    setLanguage(lang);
    if (Object.keys(resData).length > 0) {
      setValue("name", resData.name[lang || "en"]);
      setValue("description", resData.description[lang || "en"]);
    }
  };

  useEffect(() => {
    if (!isDrawerOpen) {
      setResData({});
      setValue("name");
      setValue("parentId");
      setValue("parentName");
      setValue("description");
      setValue("logo");
      setImageUrl("");
      setPublished(true);
      clearErrors("name");
      clearErrors("parentId");
      clearErrors("parentName");
      clearErrors("description");
      setSelectParentBrandName("Main");
      setLanguage(lang);
      setValue("language", language);
      setSelectedCategory([]);

      if (data && data[0]?._id) {
        setChecked(data[0]._id);
      }
      return;
    }
    if (id) {
      (async () => {
        try {
          const res = await BrandServices.getBrandById(id);

          if (res) {
           
            setResData(res);
            setValue("name", res.name[language || "en"]);
            console.log(res,res.logo,"uuuuuuuuuuuuuuuuuuuuuuu");
             setValue("description",res.hasOwnProperty("description")?res?.description[language || "en"]:"");
            setValue("language", language);
            res.categories.map((category) => {
              category.name = showingTranslateValue(category?.name, lang);

              return category;
            });
            setSelectedCategory(res.categories);
            setValue("parentId", res.parentId);
            setValue("parentName", res.parentName);
            setSelectParentBrandName(res.parentName);
            setChecked(res.parentId);
            setImageUrl(res.logo);
            setPublished(res.status === "active");
           
          }
        } catch (err) {
console.log(err?.response?.data?.message || err?.message);

          notifyError(err?.response?.data?.message || err?.message);
        }
      })();
    }
  }, [id, setValue, isDrawerOpen, language, clearErrors, data, lang]);

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
    imageUrl,
    setImageUrl,
    published,
    setPublished,
    checked,
    setChecked,
    isSubmitting,
    setIsSubmitting,
    selectParentBrandName,
    setSelectParentBrandName,
    handleSelectLanguage,
    imageupload,
    language,
    selectedCategory,
    setSelectedCategory,
    setDefaultCategory
  };
};

export default useBrandSubmit;
