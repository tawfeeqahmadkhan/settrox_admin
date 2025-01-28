import React from "react";
import Multiselect from "multiselect-react-dropdown";
import Tree from "rc-tree";

// Internal imports
import useAsync from "@/hooks/useAsync";
import { notifySuccess } from "@/utils/toast";
import BrandServices from "@/services/BrandServices";
import useUtilsFunction from "@/hooks/useUtilsFunction";

const ParentBrand = ({ selectedBrand, setSelectedBrand, setDefaultBrand }) => {
  const { data, loading } = useAsync(BrandServices?.getAllBrands);
  const { showingTranslateValue } = useUtilsFunction();

  const STYLE = `
  .rc-tree-child-tree {
    display: block;
  }
  .node-motion {
    transition: all .3s;
    overflow-y: hidden;
  }
`;

  const motion = {
    motionName: "node-motion",
    motionAppear: false,
    onAppearStart: (node) => {
      return { height: 0 };
    },
    onAppearActive: (node) => ({ height: node.scrollHeight }),
    onLeaveStart: (node) => ({ height: node.offsetHeight }),
    onLeaveActive: () => ({ height: 0 }),
  };

  const renderBrands = (brands) => {
    let myBrands = [];
    for (let brand of brands) {
      myBrands.push({
        title: showingTranslateValue(brand.name),
        key: brand._id,
        children:
          brand?.children?.length > 0 && renderBrands(brand.children),
      });
    }

    return myBrands;
  };

  const findObject = (obj, target) => {
    return obj._id === target
      ? obj
      : obj?.children?.reduce(
          (acc, obj) => acc ?? findObject(obj, target),
          undefined
        );
  };

  const handleSelect = (key) => {
    const obj = data[0];
	let selectedDataObj = {};
      for (const item of data) { 
        if (item._id === key) {          
          selectedDataObj = item; 
        }
	}
    const result = findObject(selectedDataObj, key);
	
    if (result !== undefined) {
      const getBrand = selectedBrand.filter(
        (value) => value._id === result._id
      );

      if (getBrand.length !== 0) {
        return notifySuccess("This brand is already selected!");
      }

      setSelectedBrand((pre) => [
        ...pre,
        {
          _id: result?._id,
          name: showingTranslateValue(result?.name),
        },
      ]);
      setDefaultBrand(() => [
        {
          _id: result?._id,
          name: showingTranslateValue(result?.name),
        },
      ]);
    }
  };

  const handleRemove = (v) => {
    setSelectedBrand(v);
  };

  return (
    <>
      <div className="mb-2">
        <Multiselect
          displayValue="name"
          groupBy="name"
          isObject={true}
          hidePlaceholder={true}
          onKeyPressFn={function noRefCheck() {}}
          onRemove={(v) => handleRemove(v)}
          onSearch={function noRefCheck() {}}
          onSelect={(v) => handleSelect(v)}
          selectedValues={selectedBrand}
          placeholder={"Select Brand"}
        ></Multiselect>
      </div>

      {!loading && data !== undefined && (
        <div className="draggable-demo capitalize">
          <style dangerouslySetInnerHTML={{ __html: STYLE }} />
          <Tree
            expandAction="click"
            treeData={renderBrands(data)}
            onSelect={(v) => handleSelect(v[0])}
            motion={motion}
            animation="slide-up"
          />
        </div>
      )}
    </>
  );
};

export default ParentBrand;
