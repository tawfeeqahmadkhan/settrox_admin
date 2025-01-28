import React, { useContext } from "react";
import { Select } from "@windmill/react-ui";

//internal import
import OrderServices from "@/services/OrderServices";
import { notifySuccess, notifyError } from "@/utils/toast";
import { SidebarContext } from "@/context/SidebarContext";

const SelectStatus = ({ id, order }) => {
  // console.log('id',id ,'order',order)
  const { setIsUpdate } = useContext(SidebarContext);
  const handleChangeStatus = (id, status) => {
    // return notifyError("This option disabled for this option!");
    OrderServices.updateOrder(id, { status: status })
      .then((res) => {
        notifySuccess(res.message);
        setIsUpdate(true);
      })
      .catch((err) => notifyError(err.message));
  };

  return (
    <>
      <Select
        onChange={(e) => handleChangeStatus(id, e.target.value)}
        className="h-8"
      >
        <option value="status" defaultValue hidden>
          {order?.status}
        </option>
        <option defaultValue={order?.status === "delivered"} value="completed">
          Delivered
        </option>
        <option defaultValue={order?.status === "pending"} value="pending">
         {order?.status == 'preOrder' ? 'Available': 'Pending'}
        </option>
        <option
          defaultValue={order?.status === "shipped"}
          value="shipped"
        >
          shipped
        </option>
        <option defaultValue={order?.status === "cancelled"} value="cancelled">
          Cancel
        </option>
      </Select>
    </>
  );
};

export default SelectStatus;
