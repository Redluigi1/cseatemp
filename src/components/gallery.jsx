import { Image } from "./image";
import React, { useEffect, useRef, useState } from "react";
import Zoom from 'react-reveal/Zoom';

export const Gallery = (props) => {
  const [inView, setInView] = useState(false);
  const galleryRef = useRef(null);

  const handleScroll = () => {
    const element = galleryRef.current;
    if (element) {
      const rect = element.getBoundingClientRect();
      setInView(rect.top <= window.innerHeight && rect.bottom >= 0);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>
            <Zoom cascade when={!inView}>
              Upcoming/Past Events
            </Zoom>
          </h2>
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
                    <div ref={galleryRef}>
                      <Image
                        title={d.title}
                        Image={d.Image}
                      />
                    </div>
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
    </div>
  );
};
