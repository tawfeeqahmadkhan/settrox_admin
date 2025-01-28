import { Badge } from "@windmill/react-ui";

const Status = ({ status }) => {
  return (
    <>
      <span className="font-serif">
        {(status === "pending" || status === "Inactive") && (
          <Badge type="warning">{status}</Badge>
        )}
        {status === "shipped" && (
          <Badge type="warning">{status}</Badge>
        )}
        {status === "preOrder" && (
          <Badge type="primary">{status}</Badge>
        )}
        {status === "processing" && <Badge>{status}</Badge>}
        {(status === "delivered" || status === "Active") && (
          <Badge type="success">{status}</Badge>
        )}
        {status === "cancelled" && <Badge type="danger">{status}</Badge>}
        {status === `POS-Completed` && (
          <Badge className="dark:bg-teal-900 bg-teal-100">{status}</Badge>
        )}
      </span>
    </>
  );
};

export default Status;
