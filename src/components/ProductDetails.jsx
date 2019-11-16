import React from "react";

const ProductDetails = ({ productDescription }) => (
  <div dangerouslySetInnerHTML={{ __html: productDescription }}></div>
);
export default ProductDetails;
