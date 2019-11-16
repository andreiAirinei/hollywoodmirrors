import React, {
  Fragment,
  useState,
  useEffect,
  useContext,
  lazy,
  Suspense
} from "react";
import { ClientContext } from "../providers/client/client.provider";
import styled from "styled-components";

import Spinner from "../components/Spinner";
import ProductFeatures from "../components/ProductFeatures";
// import ProductDetails from "../components/ProductDetails";
import InnerProductPage from "./InnerProductPage";

// Bootstrap
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ProductImageGallery = lazy(() =>
  import("../components/ProductImageGallery")
);

const ProductPage = ({ match }) => {
  const { client } = useContext(ClientContext);
  const { productHandle } = match.params;
  const [state, setState] = useState({ product: [], isFetching: true });

  const { product, isFetching } = state;
  console.log(product);

  // Make a list of props we need to send to ProductFeatures component so that we do not send unnecessary data to the component
  let featuresProps;
  if (!isFetching) {
    featuresProps = {
      productId: product.id,
      available: product.availableForSale,
      title: product.title,
      currentPrice: product.variants[0].price,
      oldPrice: product.variants[0].compareAtPrice
    };
  }

  // Fetch product by handle
  useEffect(() => {
    client &&
      client.product.fetchByHandle(productHandle).then(res => {
        setState({ product: res, isFetching: false });
      });
  }, [client, productHandle]);

  return isFetching ? (
    <Spinner />
  ) : (
    <Fragment>
      <RowStyled>
        <Col xs={12} md={6}>
          <Suspense fallback={<Spinner />}>
            <ProductImageGallery gallery={product.images} />
          </Suspense>
        </Col>
        <Col xs={12} md={6}>
          <ProductFeatures {...featuresProps} />
        </Col>
      </RowStyled>
      {/* <ProductDetails /> */}
      <InnerProductPage productDescription={product.descriptionHtml} />
    </Fragment>
  );
};

export default ProductPage;

const RowStyled = styled(Row)`
  // border-bottom: 1px solid lightgrey;
  padding: 20px 0;
`;
