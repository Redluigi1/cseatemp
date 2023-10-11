import React from "react";

export const Image = ({ title, Image }) => {
  return (
    <div className="portfolio-item">
      <div className="hover-bg">
        {" "}
        
          <div className="hover-text">
            <h4>{title}</h4>
          </div>
          <img src={Image} className="img-responsive" alt={title} />{" "}
        {" "}
      </div>
    </div>
  );
};
