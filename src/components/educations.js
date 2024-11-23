import React from "react";
import Slider from "react-slick";
import { Image, Card, Col } from "react-bootstrap";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../src/Style/landingpage.css";

import PythonIMG from "../assets/pyimg.jpeg";
import JsIMG from "../assets/jslogo.jpeg";
import CppIMG from "../assets/cpplogo.jpeg";
import TsIMG from "../assets/TSlogo.jpeg";
import PhpIMG from "../assets/phplogo.jpeg";
import ReactIMG from "../assets/reactlogo.jpeg";

function CenterMode() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "10px",
    slidesToShow: 3,
    speed: 500,
    autoplay: true, // Tambahkan autoplay
    autoplaySpeed: 3000, // Durasi per slide
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: "10px",
        },
      },
    ],
  };

  return (
    <>
      {/* Pembungkus menggunakan React.Fragment */}
      <h1
        className="text-center mt-2"
        style={{ color: "rgb(14, 13, 13)" }}
        id="edusection"
      >
        Lorem Ipsum
      </h1>
      <h1 className="text-white text-center">BEROTAK SENKU SECTION</h1>
      <p className="text-white text-center">Langsung KLIK pada gambar untuk mulai belajar</p>

      <div className="slider-container">
        <Slider {...settings}>
          <div className="slider-item">
            <Col>
              <Card className="movieImg bg-dark">
                <a
                  href="https://youtu.be/Td2fKp1fFjU?si=2CBIEocR8ek6NsOz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={PythonIMG} />
                </a>
              </Card>
            </Col>
          </div>
  
          <div className="slider-item">
            <Col>
              <Card className="movieImg bg-dark">
                <a
                  href="https://youtu.be/mOLglF_8UNc?si=eefVbJFbRx58EUSm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={JsIMG} />
                </a>
              </Card>
            </Col>
          </div>
  
          <div className="slider-item">
            <Col>
              <Card className="movieImg bg-dark">
                <a
                  href="https://youtu.be/IkD2y4ubFdw?si=7mEBbHpGbzmZosXK"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={PhpIMG} />
                </a>
              </Card>
            </Col>
          </div>
  
          <div className="slider-item">
            <Col>
              <Card className="movieImg bg-dark">
                <a
                  href="https://youtu.be/utT0uY6loVg?si=Rvighh9TLwPAsN4_"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={CppIMG} />
                </a>
              </Card>
            </Col>
          </div>
  
          <div className="slider-item">
            <Col>
              <Card className="movieImg bg-dark">
                <a
                  href="https://youtu.be/agthXaDpAQU?si=VwaMAAc_TB7R_PXQ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={TsIMG} />
                </a>
              </Card>
            </Col>
          </div>
  
          <div className="slider-item">
            <Col>
              <Card className="movieImg bg-dark">
                <a
                  href="https://youtu.be/jcm068zIzy8?si=4f4FZsVMz3fD1o5_"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={ReactIMG} />
                </a>
              </Card>
            </Col>
          </div>
        </Slider>
      </div>
    </>
  );
}

export default CenterMode;
