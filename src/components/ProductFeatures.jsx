import React, { Fragment } from "react";
import styled from "styled-components";

const ProductFeatures = ({
  productId,
  title,
  available,
  currentPrice,
  oldPrice
}) => {
  return (
    <Styled>
      <div className="section-top">
        <h2>{title}</h2>
        <div className="payment-instalments mt-3 mb-5">
          <p className="mb-0">
            Pay in 3 instalments of £85.00. No fees.{" "}
            <span className="logo">Klarna. </span>
            <span className="learn-more">Learn more</span>
          </p>
        </div>
        {oldPrice && <p className="price price-old">£{oldPrice}</p>}
        <p className="price price-current">£{currentPrice}</p>
      </div>
      <div className="section-bottom">
        {available ? (
          <button className="shop-btn mb-3">BUY NOW</button>
        ) : (
          <button className="shop-btn mb-3">PRE-ORDER NOW</button>
        )}

        <div className="delivery">
          <p className="delivery-title">DELIVERY TIME</p>
          <div className="delivery-stock">
            {/* Render according to product availability for sale */}
            {available ? (
              <Fragment>
                <span>In stock</span>
                <p>Order Before 2PM for Free Next Day Delivery.</p>
                <p>1 Hour Delivery Timeslot Given By Text Message.</p>
                <p>
                  Weekend Delivery available if you order before 2PM Friday.
                </p>
              </Fragment>
            ) : (
              <Fragment>
                <p>Pre-Order</p>
                <p>PRE ORDER FOR 3 - 4 WEEKS DELIVERY</p>
              </Fragment>
            )}
          </div>
        </div>
      </div>
    </Styled>
  );
};

export default ProductFeatures;

const Styled = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .section-top {
    h2 {
      font-size: 1.8rem;
      font-weight: bold;
      letter-spacing: 1px;
    }

    .payment-instalments {
      width: 100%;
      text-align: center;
      padding: 15px 0;
      border: 1px solid #dad6d6;
      border-radius: 5px;
      // max-width: 330px;

      .logo {
        font-weight: bold;
      }

      .learn-more {
        cursor: pointer;
        text-decoration: underline;
      }
    }

    .price {
      text-align: right;
      font-style: italic;

      &-current {
        font-size: 2rem;
        color: green;
      }

      &-old {
        color: gray;
        font-size: 1.5rem;
        text-decoration: line-through;
      }
    }
  }

  .section-bottom {
    .shop-btn {
      font-size: 1rem;
      font-weight: bold;
      width: 100%;
      border: none;
      padding: 10px 0;
      background: #2ba84a;
      color: #fff;
      border-radius: 5px;

      &:hover {
        opacity: 0.9;
      }
    }

    .delivery {
      background: #f9f4f1;
      padding: 20px;

      &-title {
        color: red;
        font-weight: bold;
        letter-spacing: 1px;
      }

      &-stock {
        span {
          font-weight: bold;
        }

        p {
          margin-bottom: 2px;
        }
      }
    }
  }
`;
