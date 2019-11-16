import React, { useState } from "react";
import styled from "styled-components";

// Bootstrap
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ProductImageGallery = ({ gallery }) => {
  const [mainImage, setMainImage] = useState(gallery[0].src);

  return (
    <Styled>
      <div className="image-container">
        <img src={mainImage} className={"main-image"} alt="" />
      </div>
      <Row className="mt-3">
        {gallery.map((image, idx) => {
          return (
            <Col xs={3} key={idx}>
              <img
                src={image.src}
                className="gallery-image"
                alt=""
                onClick={() => setMainImage(image.src)}
              />
            </Col>
          );
        })}
      </Row>
    </Styled>
  );
};

export default ProductImageGallery;

const Styled = styled.div`
  .main-image,
  .gallery-image {
    border-radius: 2px;
    zoom: 1.2;
    max-width: 100%;
    max-height: 100%;
  }

  .gallery-image {
    cursor: pointer;

    &:hover {
      border: 1px solid #dad6d6;
      opacity: 0.5;
    }
  }
`;
