import React, { useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import { LOAD_PRODUCTS } from "./GraphQL/Queries";

const GetProducts = () => {
  const { error, loading, data } = useQuery(LOAD_PRODUCTS);

  useEffect(() => {
    console.log(data);
  }, [data]);
  return <div></div>;
};

export default GetProducts;
