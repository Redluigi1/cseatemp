import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import stuff from "../data/data.json";

const images = stuff.Testimonials;


export const Testimonials = (props) => {






  return (
    <div id="testimonials">
      <div className="container">
        <div className="section-title text-center">
          <h2 className="gall">Gallery</h2>
        </div>
       <div>
       
        <ImageGallery items={images} />
        </div>
      </div>
    </div>
  );
};
