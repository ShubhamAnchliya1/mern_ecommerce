import React from "react";
import Meta from "../../components/Meta";
import BreadCrumb from "../../components/BreadCrumb";
import cross from "../../images/cross.svg";
import watch from "../../images/watch.jpg";
import Color from "../../components/Color";
import Container from "../../components/Container";

function CompareProduct() {
  return (
    <>
      <Meta title={"Compare Product"} />
      <BreadCrumb title="Compare Product" />
      <Container class1="compare-wrapper home-wrapper-2  py-5">
        <div className="row">
          <div className="col-3">
            <div className="compare-product-card position-relative">
              <img
                src={cross}
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <div className="product-card-image">
                <img src={watch} alt="watch" />
              </div>
              <div className="compare-product-details">
                <h5 className="title">
                  Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-Fi+3G Tablet
                </h5>
                <h6 className="price mb-3 mt-3">₹999</h6>

                <div>
                  <div className="product-detail">
                    {/* <div className="product-detail-inner"> */}
                    <h5>Brand:</h5>
                    <p>dadasdasdasd</p>
                    {/* </div> */}
                  </div>
                  <div className="product-detail">
                    {/* <div className="product-detail-inner"> */}
                    <h5>Type:</h5>
                    <p>aererwe</p>
                    {/* </div> */}
                  </div>
                  <div className="product-detail">
                    {/* <div className="product-detail-inner"> */}
                    <h5>Availabilty:</h5>
                    <p>In Stock</p>
                    {/* </div> */}
                  </div>
                  <div className="product-detail">
                    {/* <div className="product-detail-inner"> */}
                    <h5>Color:</h5>
                    <Color />
                    {/* </div> */}
                  </div>
                  <div className="product-detail">
                    {/* <div className="product-detail-inner"> */}
                    <h5>Size:</h5>
                    <div className="d-flex gap-10">
                      <p>S</p>
                      <p>M</p>
                      {/* </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="compare-product-card position-relative">
              <img
                src={cross}
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <div className="product-card-image">
                <img src={watch} alt="watch" />
              </div>
              <div className="compare-product-details">
                <h5 className="title">
                  Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-Fi+3G Tablet
                </h5>
                <h6 className="price mb-3 mt-3">₹999</h6>

                <div>
                  <div className="product-detail">
                    <h5>Brand:</h5>
                    <p>dadasdasdasd</p>
                  </div>
                  <div className="product-detail">
                    <h5>Type:</h5>
                    <p>aererwe</p>
                  </div>
                  <div className="product-detail">
                    <h5>Availabilty:</h5>
                    <p>In Stock</p>
                  </div>
                  <div className="product-detail">
                    <h5>Color:</h5>
                    <Color />
                  </div>
                  <div className="product-detail">
                    <h5>Size:</h5>
                    <div className="d-flex gap-10">
                      <p>S</p>
                      <p>M</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="compare-product-card position-relative">
              <img
                src={cross}
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <div className="product-card-image">
                <img src={watch} alt="watch" />
              </div>
              <div className="compare-product-details">
                <h5 className="title">
                  Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-Fi+3G Tablet
                </h5>
                <h6 className="price mb-3 mt-3">₹999</h6>

                <div>
                  <div className="product-detail">
                    <h5>Brand:</h5>
                    <p>dadasdasdasd</p>
                  </div>
                  <div className="product-detail">
                    <h5>Type:</h5>
                    <p>aererwe</p>
                  </div>
                  <div className="product-detail">
                    <h5>Availabilty:</h5>
                    <p>In Stock</p>
                  </div>
                  <div className="product-detail">
                    <h5>Color:</h5>
                    <Color />
                  </div>
                  <div className="product-detail">
                    <h5>Size:</h5>
                    <div className="d-flex gap-10">
                      <p>S</p>
                      <p>M</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="compare-product-card position-relative">
              <img
                src={cross}
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <div className="product-card-image">
                <img src={watch} alt="watch" />
              </div>
              <div className="compare-product-details">
                <h5 className="title">
                  Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-Fi+3G Tablet
                </h5>
                <h6 className="price mb-3 mt-3">₹999</h6>

                <div>
                  <div className="product-detail">
                    <h5>Brand:</h5>
                    <p>dadasdasdasd</p>
                  </div>
                  <div className="product-detail">
                    <h5>Type:</h5>
                    <p>aererwe</p>
                  </div>
                  <div className="product-detail">
                    <h5>Availabilty:</h5>
                    <p>In Stock</p>
                  </div>
                  <div className="product-detail">
                    <h5>Color:</h5>
                    <Color />
                  </div>
                  <div className="product-detail">
                    <h5>Size:</h5>
                    <div className="d-flex gap-10">
                      <p>S</p>
                      <p>M</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default CompareProduct;
