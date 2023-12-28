import React from "react";

export const Team = (props) => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Meet the Team</h2>
          <p></p>
        </div>
        <div className="team-scroll-container">
          {props.data ? (
            <div id="row" className="team-scroll-row">
              {props.data.map((d, i) => (
                <div
                  key={`${d.name}-${i}`}
                  className="card_team"
                >
                  <div className="thumbnail">
                    {" "}
                    <img src={d.img} alt="..." className="team-img" />
                    <div class="ag-courses_box">
    <div class="ag-courses_item">
      <a href="#" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
          <p>{d.name}</p>
          <p>{d.job}</p>

        </div>
      </a>
    </div>
</div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            "loading"
          )}
        </div>
      </div>
    </div>
  );
};
