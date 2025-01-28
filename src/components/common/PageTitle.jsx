import React from "react";
import { Helmet } from "react-helmet";

const PageTitle = ({ title, description }) => {
  return (
    <Helmet>
      <title>
        {" "}
        {title
          ? ` ${title} | setrrox : React eCommerce Admin Dashboard`
          : "setrrox : React eCommerce Admin Dashboard"}
      </title>
      <meta
        name="description"
        content={
          description
            ? ` ${description} `
            : "setrrox : React Grocery & Organic Food Store e-commerce Admin Dashboard"
        }
      />
    </Helmet>
  );
};

export default PageTitle;
