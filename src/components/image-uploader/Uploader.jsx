import React, { useEffect, useState } from "react";
import { t } from "i18next";
import axios from "axios";
import { useDropzone } from "react-dropzone";
// import cloudinary from "cloudinary/lib/cloudinary";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { FiUploadCloud, FiXCircle } from "react-icons/fi";

//internal import
import useAsync from "@/hooks/useAsync";
import SettingServices from "@/services/SettingServices";
import { notifyError, notifySuccess } from "@/utils/toast";
import Container from "@/components/image-uploader/Container";
import useBrandSubmit from "@/hooks/useBrandSubmit";

// cloudinary?.config({
//   cloud_name: import.meta.env.VITE_APP_CLOUD_NAME,
//   api_key: import.meta.env.VITE_APP_CLOUDINARY_API_KEY,
//   api_secret: import.meta.env.VITE_APP_CLOUDINARY_API_SECRET,
// });

const Uploader = ({ setImageUrl, imageUrl, product, folder,setbtladoing,fileType='image' }) => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setError] = useState("");
const {imageupload}=useBrandSubmit()
  const { data: globalSetting } = useAsync(SettingServices.getGlobalSetting);

  // console.log("data", data);
  
  const { getRootProps, getInputProps, fileRejections } = useDropzone({
    accept: fileType === "image"
    ? {
        "image/*": [".jpeg", ".jpg", ".png", ".webp"],
      }
    : {
        "video/*": [".mp4", ".avi", ".mov"],
      },
    multiple: product ? true : false,
    maxSize: 100000000,
    //maxFiles: globalSetting?.number_of_image_per_product || 10,
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  useEffect(() => {
   
    if (fileRejections) {
      fileRejections.map(({ file, errors }) => (
        <li key={file.path}>
          {file.path} - {file.size} bytes
          <ul>
            {errors.map((e) => (
              <li key={e.code}>
                {e.code === "too-many-files"
                  ? notifyError(
                      `Maximum ${globalSetting?.number_of_image_per_product} Image Can be Upload!`
                    )
                  : notifyError(e.message)}
              </li>
            ))}
          </ul>
        </li>
      ));
    }

    if (files) {
      files.forEach((file) => {
        if (
          product &&
          imageUrl?.length + files?.length >
            globalSetting?.number_of_image_per_product
        ) {
          return notifyError(
            `Maximum ${globalSetting?.number_of_image_per_product} Image Can be Upload!`
          );
        }
         setbtladoing(true)
        setLoading(true);
        setError("Uploading....");

        if (product) {
          const result = imageUrl?.find(
            (img) => img === `${import.meta.env.VITE_APP_CLOUDINARY_URL}`
          );

          if (result){ 
             setLoading(false) 
            setbtladoing(false)
            return}
        }

        const name = file.name.replaceAll(/\s/g, "");
        const public_id = name?.substring(0, name.lastIndexOf("."));

        const formData = new FormData();
        formData.append("file", file);
        formData.append(
          "upload_preset",
          import.meta.env.VITE_APP_CLOUDINARY_UPLOAD_PRESET
        );
        formData.append("cloud_name", import.meta.env.VITE_APP_CLOUD_NAME);
        formData.append("folder", folder);
        formData.append("public_id", public_id);

        axios({
          url: fileType === "video" ? import.meta.env.VITE_APP_CLOUDINARY_URL_VIDEO : import.meta.env.VITE_APP_CLOUDINARY_URL,
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          data: formData,
        })
          .then((res) => { 
            notifySuccess(`${fileType==="image"?"Image":"Video"} Uploaded successfully!`);
            setLoading(false);
            setbtladoing(false)
            if (product) {
              setImageUrl((imgUrl) => [...imgUrl, res.data.secure_url]);
            } else {
              setImageUrl(res.data.secure_url);
            }
          })
          .catch((err) => {
            console.error("err", err);
            console.log(err.Message);
            notifyError(err.Message);
            setLoading(false);
            setbtladoing(false)
          });
      });
    }
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [files]);

  const thumbs = files.map((file) => (
    <div key={file.name}>
      <div>
      {fileType === "image" ? (
              <img
                src={file.preview}
                alt={file.name}
                className="w-24 max-h-24 border rounded"
              />
            ) : (
              <video
                src={file.preview}
                controls
                className="w-24 max-h-24 border rounded"
              />
            )}
      </div>
    </div>
  ));

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  const handleRemoveImage = async (img) => {
    try {
      // const url = img.substring(img.length - 25);
      // const url = img.split("/").pop().split(".")[0];
      // const public_id = `${folder}/${url}`;

      // const res = await cloudinary.v2.uploader.destroy(public_id);

      setLoading(false);
      // notifyError(
      //   res.result === "ok" ? "Image delete successfully!" : res.result
      // );
      notifyError("Image delete successfully!");
      if (product) {
        const result = imageUrl?.filter((i) => i !== img);
        setImageUrl(result);
      } else {
        setImageUrl("");
      }
    } catch (err) {
      console.error("err", err);
      notifyError(err.Message);
      setLoading(false);
    }
  };

  return (
    <div className="w-full text-center">
      <div
        className="border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-md cursor-pointer px-6 pt-5 pb-6"
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        <span className="mx-auto flex justify-center">
          <FiUploadCloud className="text-3xl text-blue-500" />
        </span>
        {fileType==="image"?(
          <p className="text-sm mt-2">{t("DragYourImage")}</p>
        ):(
          <p className="text-sm mt-2">{t("Drag Your Video here")}</p>
        )}

        {fileType==="image" ? (
          <em className="text-xs text-gray-400">{t("imageFormat")}</em>

        ):(
          <em className="text-xs text-gray-400">{t("(Only *.mp4, *.avi and *.mov videos will be accepted)")}</em>
        )}
      </div>

      <div className="text-blue-500">{loading && err}</div>
      <aside className="flex flex-row flex-wrap mt-4">
        {product ? (
          <DndProvider backend={HTML5Backend}>
            <Container
              setImageUrl={setImageUrl}
              imageUrl={imageUrl}
              handleRemoveImage={handleRemoveImage}
            />
          </DndProvider>
        ) : !product && imageUrl ? (
          <div className="relative">
            {" "}
            {fileType==="image" ? (
              <img
                className="inline-flex border rounded-md border-gray-100 dark:border-gray-600 w-24 max-h-24 p-2"
                src={imageUrl}
                alt="product"
              />
            ):(
              <video
                className="inline-flex border rounded-md border-gray-100 dark:border-gray-600 w-24 max-h-24 p-2"
                src={imageUrl}
                controls
              />
            )}
        
            <button
              type="button"
              className="absolute top-0 right-0 text-red-500 focus:outline-none"
              onClick={() => handleRemoveImage(imageUrl)}
            >
              <FiXCircle />
            </button>
          </div>
        ) : (
          thumbs
        )}
      </aside>
    </div>
  );
};

export default Uploader;
