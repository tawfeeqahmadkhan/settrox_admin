import React, { useEffect, useState } from "react";
import { Button } from "@windmill/react-ui";
import ProductServices from "@/services/ProductServices";

export default function VariantTable({ id }) {
  const [variants, setAllVariantions] = useState([]);
  const [allImages, setAllImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await ProductServices.getProductById(id);
      setAllVariantions(res?.variants);
      setAllImages(res?.image || []);
    };
    fetchData();
  }, [id]);

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
      await ProductServices.deleteVariant(variantId);
      setAllVariantions((prev) => prev.filter((variant) => variant._id !== variantId));
    }
  };

  const handleSaveChanges = async () => {
    for (const variant of variants) {
      if (variant.preOrder) {
        if (!variant.preOrderPrice || !variant.preOrderDate) {
          alert("Pre-Order Price and Pre-Order Date are required for Pre-Order items.");
          return;
        }
      }
    }

    try {
      await ProductServices.updateVariants(variants);
      alert("Variants updated successfully!");
    } catch (error) {
      console.error("Error saving changes:", error);
      alert("Failed to update variants. Please try again.");
    }
  };

  return (
    <div className="overflow-x-auto m-4">
      <table className="table-auto min-w-full border-collapse border border-gray-300 text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-2 py-1 w-auto">Attribute</th>
            <th className="border border-gray-300 px-2 py-1 w-auto">Sub-Attributes</th>
            <th className="border border-gray-300 px-2 py-1 w-auto">Original Price</th>
            <th className="border border-gray-300 px-2 py-1 w-auto">Price</th>
            <th className="border border-gray-300 px-2 py-1 w-auto">Stock</th>
            {variants.some((v) => v.quantity === 0) && (
              <>
                <th className="border border-gray-300 px-2 py-1 w-auto">Pre-Order</th>
                <th className="border border-gray-300 px-2 py-1 w-auto">Pre-Order Price</th>
                <th className="border border-gray-300 px-2 py-1 w-auto">Pre-Order Date</th>
              </>
            )}
            <th className="border border-gray-300 px-2 py-1 w-auto">Image</th>
            <th className="border border-gray-300 px-2 py-1 w-auto">Actions</th>
          </tr>
        </thead>
        <tbody>
          {variants.map((variant) => (
            <tr key={variant._id}>
              <td className="border border-gray-300 px-2 py-1 w-auto">{variant.attributeName}</td>
              <td className="border border-gray-300 px-2 py-1 w-auto">
                {variant.subAttributes.map((sub) => sub.name).join(", ")}
              </td>
              <td className="border border-gray-300 px-2 py-1 w-auto">
                <input
                  type="number"
                  value={variant.originalPrice}
                  onChange={(e) =>
                    handleFieldChange(variant._id, "originalPrice", parseFloat(e.target.value))
                  }
                  className="border border-gray-300 p-1 rounded text-xs"
                />
              </td>
              <td className="border border-gray-300 px-2 py-1 w-auto">
                <input
                  type="number"
                  value={variant.price}
                  onChange={(e) =>
                    handleFieldChange(variant._id, "price", parseFloat(e.target.value))
                  }
                  className="border border-gray-300 p-1 rounded text-xs"
                />
              </td>
              <td className="border border-gray-300 px-2 py-1 w-auto">
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
                  className="border border-gray-300 p-1 rounded text-xs"
                />
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
                      <option value={false}>False</option>
                      <option value={true}>True</option>
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
                          className="border border-gray-300 p-1 rounded text-xs"
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
                      <td className="border border-gray-300 px-2 py-1 w-auto">N/A</td>
                      <td className="border border-gray-300 px-2 py-1 w-auto">N/A</td>
                    </>
                  )}
                </>
              )}
              <td className="border border-gray-300 px-2 py-1 w-auto">
                <div className="flex flex-wrap gap-2 w-[10rem]">
                  {allImages?.map((img, index) => (
                    <img
                      src={img || ""}
                      key={index}
                      className={`w-16 h-16 p-1 ${
                        variant?.attributeImage === img ? "border border-red-500" : ""
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
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end mt-4">
        <Button
          className="bg-blue-500 text-white px-4 py-2 rounded text-xs"
          onClick={handleSaveChanges}
        >
          Save Changes
        </Button>
      </div>
    </div>
  );
}
