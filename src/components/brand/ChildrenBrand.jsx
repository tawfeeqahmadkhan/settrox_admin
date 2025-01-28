import React, { useEffect, useState } from "react";

// Internal imports
import useAsync from "@/hooks/useAsync";
import BrandServices from "@/services/BrandServices";

const ChildrenBrand = ({ value }) => {
  const [brands, setBrands] = useState([]);

  const { data } = useAsync(BrandServices.getAllBrand);

  useEffect(() => {
    if (value) {
      const result = data.filter((parent) =>
        parent.parentName.toLowerCase().includes(value.toLowerCase())
      );
      setBrands(result);
    } else {
      setBrands(data);
    }
  }, [data, value]);

  return (
    <>
      {brands.map((brand) => (
        <option key={brand.parentName} value={brand.parentName}>
          {brand.parentName}
        </option>
      ))}
    </>
  );
};

export default ChildrenBrand;
