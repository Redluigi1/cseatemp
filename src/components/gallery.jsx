import { Image } from "./image";
import React from "react";

export const Gallery = (props) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Upcoming/Past Events</h2>
          
        </div>
        <div className="row">
          <div className="portfolio-items">
    <div>
          <a
                  href="#about"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  View more events
          </a>

    </div>
    <div><p></p></div>
  

            {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-4"
                  >
                    <Image
                      title={d.title}
                      Image={d.Image}
                      
                    />
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
    </div>
  );
};