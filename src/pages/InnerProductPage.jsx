import React, { Fragment, useState, lazy, Suspense } from "react";

// Bootstrap
import Nav from "react-bootstrap/Nav";

import Spinner from "../components/Spinner";

const ProductDetails = lazy(() => import("../components/ProductDetails"));

const InnerProductPage = ({ productDescription }) => {
  const [page, setPage] = useState("details");

  const pageSwitch = () => {
    switch (page) {
      case "details":
        return <ProductDetails productDescription={productDescription} />;

      case "reviews":
        return <h1>Reviews</h1>;

      case "ask":
        return <h1>Ask a Question</h1>;

      default:
        return <h1>No such option!</h1>;
    }
  };

  const handleSelect = eventKey => {
    setPage(eventKey);
  };

  return (
    <Fragment>
      <Nav
        className="mt-5 mb-3"
        variant="tabs"
        defaultActiveKey="details"
        onSelect={handleSelect}
      >
        <Nav.Item>
          <Nav.Link eventKey="details">Details</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="reviews">Reviews</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="ask">Ask a Question</Nav.Link>
        </Nav.Item>
      </Nav>
      <Suspense fallback={<Spinner />}>{pageSwitch()}</Suspense>
    </Fragment>
  );
};

export default InnerProductPage;
