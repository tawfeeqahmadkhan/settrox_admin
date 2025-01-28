import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

//internal import
import { SidebarContext } from "@/context/SidebarContext";
import SpecificationServices from "@/services/SpecificationServices";
import { notifyError, notifySuccess } from "@/utils/toast";
// import useTranslationValue from "./useTranslationValue";

const useSpecificationSubmit = (id, data) => {
  
  const { isDrawerOpen, closeDrawer, setIsUpdate, lang } =
    useContext(SidebarContext);
  const [resData, setResData] = useState({});
  const [checked, setChecked] = useState(""); 
  const [children, setChildren] = useState([]);
  const [language, setLanguage] = useState(lang);
  const [published, setPublished] = useState(true);
  const [selectCategoryName, setSelectCategoryName] = useState(""); 
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [attributes, setAttributes] = useState([
    { label: "", value: "" },
  ]);
  // const { handlerTextTranslateHandler } = useTranslationValue();

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
    // console.log("obj", obj);
    return obj;
  };

  // console.log("lang", lang, language);

  // console.log("resData", resData);
console.log("selectCategoryName:", selectCategoryName);
  const onSubmit = async ({ title }) => {
    console.log("Submitting data:", title);
    try {
      setIsSubmitting(true);

      const specificationData = {
        title: handleRemoveEmptyKey({
          [language]: title,
        }),
        attributes: attributes,
        categoryId: checked ? checked : undefined,
        parentName: selectCategoryName ? selectCategoryName : "Home",  
        status: published ? "show" : "hide",
        lang: language,
      };

      // console.log("specification submit", specificationData);
      // setIsSubmitting(false);
      // return;

      if (id) {
        const res = await SpecificationServices.updateSpecification(id, specificationData);
        setIsUpdate(true);
        setIsSubmitting(false);
        notifySuccess(res.message);
        closeDrawer();
        reset();
      } else {
        console.log('specificationData',specificationData)
        const res = await SpecificationServices.addSpecification(specificationData);
        setIsUpdate(true);
        setIsSubmitting(false);
        notifySuccess(res.message);
        closeDrawer();
      }
    } catch (err) {
      setIsSubmitting(false);
      notifyError(err ? err?.response?.data?.message : err?.message);
      closeDrawer();
    }
  };

  const handleSelectLanguage = (lang) => {
    setLanguage(lang);
    if (Object.keys(resData).length > 0) {
      setValue("title", resData.name[lang ? lang : "en"]); 
    }
  };

  useEffect(() => {
    if (!isDrawerOpen) {
      setResData({});
      setValue("title");
      setValue("parentId");
      setValue("parentName");
      setValue("label");
      setValue("value"); 
      setPublished(true);
      clearErrors("title");
      clearErrors("parentId");
      clearErrors("parentName");
      clearErrors("label");
      clearErrors("value");
      setSelectCategoryName("Home");
      setLanguage(lang);
      setValue("language", language);

      if (data !== undefined && data[0]?._id !== undefined) {
        setChecked(data[0]._id);
      }
      return;
    }
    if (id) {
      (async () => {
        try {
          const res = await SpecificationServices.getSpecificationById(id);
          // console.log("res specification", res);

          if (res) {
            setResData(res);
            setValue("title", res.title[language ? language : "en"]); 
            setValue("language", language);
            setValue("parentId", res.categoryId);
            setValue("parentName", res.parentName); 
            setSelectCategoryName(res.parentName);
            setAttributes(res.attributes)
            setChecked(res.categoryId); 
            setPublished(res.status);
          }
        } catch (err) {
          notifyError(err ? err.response.data.message : err.message);
        }
      })();
    }
  }, [id, setValue, isDrawerOpen, language, clearErrors, data, lang]);

  return {
    register,
    handleSubmit,
    onSubmit,
    errors, 
    children,
    setChildren,
    published,
    setPublished,
    checked,
    setChecked,
    isSubmitting,
    selectCategoryName,
    attributes,
    setSelectCategoryName,
    setAttributes,
    handleSelectLanguage,
  };
};

export default useSpecificationSubmit;
