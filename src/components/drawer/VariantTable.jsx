import React, { useEffect, useState } from "react";
import { Button } from "@windmill/react-ui";
import ProductServices from "@/services/ProductServices";
import { notifyError, notifySuccess } from "@/utils/toast";

export default function VariantTable({ id,handleSubmitVariantref }) {
  const [variants, setAllVariantions] = useState([]);
  const [allImages, setAllImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await ProductServices.getProductById(id);
      setAllVariantions(res?.variants);
      setAllImages(res?.image || []);
    };
    fetchData();
  }, [id,handleSubmitVariantref]);

  const handleFieldChange = (variantId, fieldName, value) => {
    setAllVariantions((prev) =>
      prev.map((variant) =>
        variant._id === variantId ? { ...variant, [fieldName]: value } : variant
      )
    );
  };

  const handleDeleteVariant = async (variantId) => {
    const confirmed = window.confirm("Are you sure you want to delete this variant?");
    if (confirmed) {
      await ProductServices.deleteVariantProduct({variantId,productId:id})
      setAllVariantions((prev) => prev.filter((variant) => variant._id !== variantId));
    }
  };

  const handleSaveChanges = async () => {
    for (const variant of variants) {
      if (variant.preOrder) {
        if (!variant.preOrderPrice || !variant.preOrderDate) {
          notifyError("Pre-Order Price and Pre-Order Date are required for Pre-Order items.");
          return;
        }
      }
    }

    try {

      await ProductServices.updateVariantProduct({productId:id,data:variants});
      notifySuccess("Variants updated successfully!");
    } catch (error) {
      console.error("Error saving changes:", error);
      notifyError("Failed to update variants. Please try again.");
    }
  };

  return (
  <>
     {variants?.length > 0 && 
    <div className="flex items-start flex-col ml-5">
      <table className=" min-w-auto border-collapse border border-gray-300 text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-2 py-1 w-auto">Attribute</th>
         
            <th className="border border-gray-300 px-2 py-1 w-[10rem]">Original Price</th>
            <th className="border border-gray-300 px-2 py-1 w-[2rem]">Price</th>
            <th className="border border-gray-300 px-2 py-1 w-2">Stock</th>
       
            <th className="border border-gray-300 px-2 py-1 w-auto">Select Image</th>
            <th className="border border-gray-300 px-2 py-1 w-[2rem]">Actions</th>
            {variants?.some((v) => v.quantity === 0) && (
              <>
                <th className="border border-gray-300 px-2 py-1 w-[2rem]">Pre-Order</th>
                {variants?.some((v) => v.preOrder == true) &&(<>
                <th className="border border-gray-300 px-2 py-1 w-[2rem]">Pre-Order Price</th>
                <th className="border border-gray-300 px-2 py-1 w-[2rem]">Pre-Order Date</th>
                </>)}
              </>
            )}
          </tr>
        </thead>
        <tbody>
          {variants.map((variant) => (
            <tr key={variant._id}>
              <td className="border border-gray-300 px-2 py-1 w-auto">{variant.attributeName?.split('-')[0]}, {variant?.subAttribute?.split('-')[0]}</td>
             
              <td className="border border-gray-300 px-2 py-1 w-auto">
                <input
                  type="number"
                  value={variant.originalPrice}
                  onChange={(e) =>
                    handleFieldChange(variant._id, "originalPrice", parseFloat(e.target.value))
                  }
                  className="border border-gray-300 p-1 rounded text-xs w-[7rem]"
                />
              </td>
              <td className="border border-gray-300 px-2 py-1 w-auto">
                <input
                  type="number"
                  value={variant.price}
                  onChange={(e) =>
                    handleFieldChange(variant._id, "price", parseFloat(e.target.value))
                  }
                  className="border border-gray-300 p-1 rounded text-xs w-[5rem]"
                />
              </td>
              <td className="border border-gray-300 px-2 py-1 w-[1rem]">
                <input
                  type="number"
                  value={variant.quantity}
                  onChange={(e) => {
                    const quantity = parseInt(e.target.value);
                    handleFieldChange(variant._id, "quantity", quantity);
                    if (quantity === 0) {
                      handleFieldChange(variant._id, "preOrder", true);
                    }
                  }}
                  className="border border-gray-300 p-1 rounded text-xs w-[5rem]"
                />
              </td>
             
              <td className="border border-gray-300 px-2 py-1 w-auto">
                <div className="flex flex-wrap gap-2 w-[10rem]">
                  {allImages?.map((img, index) => (
                    <img
                      src={img || ""}
                      key={index}
                      className={`w-16 h-16 p-1 ${
                        variant?.attributeImage === img ? "border border-black" : ""
                      }`}
                      onClick={() => handleFieldChange(variant._id, "attributeImage", img)}
                    />
                  ))}
                </div>
              </td>
              <td className="border border-gray-300 px-2 py-1 w-auto">
                <Button
                  className="bg-red-500 text-white px-2 py-1 rounded text-xs"
                  onClick={() => handleDeleteVariant(variant._id)}
                >
                  Delete
                </Button>
              </td>
              {variant.quantity === 0 && (
                <>
                  <td className="border border-gray-300 px-2 py-1 w-auto">
                    <select
                      value={variant.preOrder}
                      onChange={(e) =>
                        handleFieldChange(variant._id, "preOrder", e.target.value === "true")
                      }
                      className="border border-gray-300 p-1 rounded text-xs"
                    >
                      <option value={false}>Disable</option>
                      <option value={true}>Enable</option>
                    </select>
                  </td>
                  {variant.preOrder ? (
                    <>
                      <td className="border border-gray-300 px-2 py-1 w-auto">
                        <input
                          type="number"
                          value={variant.preOrderPrice || ""}
                          onChange={(e) =>
                            handleFieldChange(variant._id, "preOrderPrice", parseFloat(e.target.value))
                          }
                          className="border border-gray-300 p-1 rounded text-xs w-[7rem]"
                        />
                      </td>
                      <td className="border border-gray-300 px-2 py-1 w-auto">
                        <input
                          type="date"
                          value={variant.preOrderDate || ""}
                          onChange={(e) =>
                            handleFieldChange(variant._id, "preOrderDate", e.target.value)
                          }
                          className="border border-gray-300 p-1 rounded text-xs"
                        />
                      </td>
                    </>
                  ) : (
                    <>
                      
                    </>
                  )}
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end mt-4 mb-4">
        <Button
          className="bg-blue-500 text-white px-4 py-2 rounded text-xs"
          onClick={handleSaveChanges}
        >
          Save Changes
        </Button>
      </div>
    </div>}
  </>
  );
}
