import React, { useState, useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import data from "../data.json";
import "./ControlledCarousel.css";

import { connect } from "react-redux";
import { getHomePage } from "../store/actions/layoutAction";

const ControlledCarousel = props => {
  const [slide, setSlide] = useState([]);
  useEffect(() => {
    props.getHomePage();
    // setSlide(data.images.slideImages);
  }, []);

  useEffect(() => {
    setSlide(props.layout.slider);
  }, [props.layout]);

  const options = {
    items: 1,
    nav: false,
    loop: true,
    autoplay: true,
    slideBy: 1,
    dots: true,
    dotsEach: true,
    dotData: true,
    smartSpeed: 1500
  };

  return (
    <div className="slide">
      <h1 className="carouselHeader">Входные и межкомнатные двери</h1>
      {!slide.length ? (
        <h2>Loading...</h2>
      ) : (
        <OwlCarousel className="owl-theme" {...options}>
          {slide.map(res => {
            return (
              <div className="item" key={res}>
                <img alt="" src={res} />
              </div>
            );
          })}
        </OwlCarousel>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    layout: state.layout
  };
};

export default connect(mapStateToProps, { getHomePage })(ControlledCarousel);
