import React from "react";
import { Link } from "react-router-dom";
import main_banner1 from "../../images/main-banner-1.jpg";
import cat_banner1 from "../../images/catbanner-01.jpg";
import cat_banner2 from "../../images/catbanner-02.jpg";
import cat_banner3 from "../../images/catbanner-03.jpg";
import cat_banner4 from "../../images/catbanner-04.jpg";
import laptop from "../../images/laptop.jpg";
import camera from "../../images/camera.jpg";
import tv from "../../images/tv.jpg";
import smartwatch from "../../images/watch.jpg";
import gaming from "../../images/gaming.jpeg";
import mobile from "../../images/applephone.png";
import headphone from "../../images/headphone.jpg";
import accessorie from "../../images/acc.jpg";
import portabledevice from "../../images/speaker.jpg";
import home_appliance from "../../images/homeapp.jpg";
import BlogCard from "../../components/BlogCard";
import ProductCard from "../../components/ProductCard";
import SpecialProduct from "../../components/SpecialProduct";
import famous1 from "../../images/APPLE WATCH SERIES 8.jpeg";
import famous2 from "../../images/iphone-14.jpeg";
import famous3 from "../../images/macbook-pro.jpeg";
import famous4 from "../../images/ipad-202210.jpeg";
import Container from "../../components/Container";
import { services } from "../../utils/Data";

function Home() {
  return (
    <>
      <Container class1="home-wrapper-1 py-5">
        <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative  p-3">
              <img src={main_banner1} alt="" className="img-fluid rounded-3" />
              <div className="main-banner-content position-absolute">
                <h4>SUPERCHARGED FOR PROS.</h4>
                <h5>iPad S13+ Pro.</h5>
                <p>From ₹999.00 or ₹41.62/mo.</p>
                <Link className="button">Buy Now</Link>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
              <div className="small-banner position-relative  p-3">
                <img src={cat_banner1} alt="" className="img-fluid rounded-3" />
                <div className="small-banner-content position-absolute">
                  <h4>Best Sale</h4>
                  <h5>MacBook Pro</h5>
                  <p>
                    From ₹129900.00 <br /> or ₹20317.00/mo.
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative  p-3">
                <img src={cat_banner2} alt="" className="img-fluid rounded-3" />
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL</h4>
                  <h5>Apple Watch SE</h5>
                  <p>
                    From ₹29900.00 <br /> or ₹4733.00/mo.
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative  p-3">
                <img src={cat_banner3} alt="" className="img-fluid rounded-3" />
                <div className="small-banner-content position-absolute">
                  <h4>Mover. Maker</h4>
                  <h5>iPad Air</h5>
                  <p>
                    From ₹59900.00 <br /> or ₹9483.00/mo.
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative  p-3">
                <img src={cat_banner4} alt="" className="img-fluid rounded-3" />
                <div className="small-banner-content position-absolute">
                  <h4>Free Engraving</h4>
                  <h5>AirPods Max</h5>
                  <p>
                    From ₹59900.00 <br /> or ₹10425.00/mo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="servies d-flex align-items-center justify-content-between">
              {services.map((index, key) => {
                return (
                  <div className="d-flex align-items-center gap-15" key={key}>
                    <img src={index.imageUrl} alt="services" />
                    <div>
                      <h6>{index.title}</h6>
                      <p className="mb-0">{index.tagline}</p>
                    </div>
                  </div>
                );
              })}

              {/* <div className="d-flex align-items-center gap-15">
                <img src={service} alt="services" />
                <div className="">
                  <h6>Free Shipping</h6>
                  <p className="mb-0">From all order above ₹500</p>
                </div>
              </div>

              <div className="d-flex align-items-center gap-15">
                <img src={service2} alt="services" />
                <div className="">
                  <h6>Daily Surprise offer</h6>
                  <p className="mb-0">Save upto 20% off</p>
                </div>
              </div>

              <div className="d-flex align-items-center gap-15">
                <img src={service3} alt="services" />
                <div className="">
                  <h6>Support 24/7</h6>
                  <p className="mb-0">Shop with an expert</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-15">
                <img src={service4} alt="services" />
                <div className="">
                  <h6>Affortable Prices</h6>
                  <p className="mb-0">Get factory direct price</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-15">
                <img src={service5} alt="services" />
                <div className="">
                  <h6>Secure Payments</h6>
                  <p className="mb-0">100% protected payment</p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex align-items-center justify-content-between  flex-wrap">
              <div className="d-flex gap align-items-center ">
                <div>
                  <h6>Computers & Laptop</h6>
                  <p>10 items </p>
                </div>
                <img src={laptop} alt="" width="110px" height="110px" />
              </div>
              <div className="d-flex gap align-items-center ">
                <div>
                  <h6>Camera & Videos</h6>
                  <p>8 items </p>
                </div>
                <img src={camera} alt="" width="110px" height="110px" />
              </div>
              <div className="d-flex gap align-items-center ">
                <div>
                  <h6>Smart Televisions</h6>
                  <p>15 items </p>
                </div>
                <img src={tv} alt="" width="110px" height="110px" />
              </div>
              <div className="d-flex gap align-items-center ">
                <div>
                  <h6>SmartWatches</h6>
                  <p>18 items </p>
                </div>
                <img src={smartwatch} alt="" width="110px" height="110px" />
              </div>
              <div className="d-flex gap align-items-center ">
                <div>
                  <h6>Music & Gaming</h6>
                  <p>14 items </p>
                </div>
                <img src={gaming} alt="" width="110px" height="110px" />
              </div>
              <div className="d-flex gap align-items-center ">
                <div>
                  <h6>Mobiles & Tablet</h6>
                  <p>20 items </p>
                </div>
                <img src={mobile} alt="" width="110px" height="110px" />
              </div>
              <div className="d-flex gap align-items-center ">
                <div>
                  <h6>Headphones</h6>
                  <p>16 items </p>
                </div>
                <img src={headphone} alt="" width="110px" height="110px" />
              </div>
              <div className="d-flex gap align-items-center ">
                <div>
                  <h6>Accessories</h6>
                  <p>22 items </p>
                </div>
                <img src={accessorie} alt="" width="110px" height="110px" />
              </div>
              <div className="d-flex gap align-items-center ">
                <div>
                  <h6>Portable Devices</h6>
                  <p>25 items </p>
                </div>
                <img src={portabledevice} alt="" width="110px" height="110px" />
              </div>
              <div className="d-flex gap align-items-center ">
                <div>
                  <h6>Home Appliances</h6>
                  <p>30 items </p>
                </div>
                <img src={home_appliance} alt="" width="110px" height="110px" />
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="features-wrapper home-wrapper-2  py-5">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Featured Collection</h3>
          </div>
        </div>
        <div className="row">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
      <Container class1="famous-wrapper  py-5  home-wrapper-2">
        <div className="row">
          <div className="col-3">
            <div className="famous-card position-relative">
              <img src={famous1} alt="" className="img-fluid" />
              <div className="famous-content position-absolute">
                <h6>APPLE WATCH SERIES 8</h6>
                <h4>A healthy leap ahead. </h4>
                <p>₹45900.00 From ₹7233.00/mo.</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img src={famous2} alt="" className="img-fluid" />
              <div className="famous-content position-absolute">
                <h6 className="text-black">IPHONE 14</h6>
                <h4 className="text-black">Wonderfull.</h4>
                <p className="text-black">₹79900.00 From ₹12483.00/mo.</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img src={famous3} alt="" className="img-fluid" />
              <div className="famous-content position-absolute">
                <h6>MACBOOK PRO 14” AND 16”</h6>
                <h4>Mover. Maker. Boundary breker.</h4>
                <p>₹199900.00 From ₹31983.00/mo.</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img src={famous4} alt="" className="img-fluid" />
              <div className="famous-content position-absolute">
                <h6 className="text-black">IPAD</h6>
                <h4 className="text-black">Loveable. Drawable. Magical. </h4>
                <p className="text-black">₹44900.00 From ₹6983.00/mo.</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="special-wrapper home-wrapper-2  py-5">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Special Products</h3>
          </div>
        </div>
        <div className="row">
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
        </div>
      </Container>
      <Container class1="popular-wrapper home-wrapper-2  py-5">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>
        </div>
        <div className="row">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
      <Container class1="marquee-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-warpper card-wrapper">
              <marquee className="marquee-main">
                <div className="d-flex">
                  <div className="mx-4 w-25">
                    <img src={laptop} alt="" width="110px" height="110px" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src={camera} alt="" width="110px" height="110px" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src={tv} alt="" width="110px" height="110px" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src={smartwatch} alt="" width="110px" height="110px" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src={gaming} alt="" width="110px" height="110px" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src={mobile} alt="" width="110px" height="110px" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src={headphone} alt="" width="110px" height="110px" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src={accessorie} alt="" width="110px" height="110px" />
                  </div>
                  <div className="mx-4 w-25">
                    <img
                      src={portabledevice}
                      alt=""
                      width="110px"
                      height="110px"
                    />
                  </div>
                  <div className="mx-4 w-25">
                    <img
                      src={home_appliance}
                      alt=""
                      width="110px"
                      height="110px"
                    />
                  </div>
                </div>
              </marquee>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="blog-wrapper home-wrapper-2  py-5">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Latest Blogs</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
        </div>
      </Container>
    </>
  );
}

export default Home;
