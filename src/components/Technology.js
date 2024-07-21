import React from "react";
import backgroundimg from "../images/img3.jpg";
import ApiCall2 from "./ApiCall2";


export default function Technology() {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundimg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: 'fixed',
    height: "600px",
    width: "100%",
    position: "relative",
    opacity: "0.8",
  };

  return (
    <>
    <div className="container-fluid nav_bg">
      <div className="row">
        <div className="col-10 mx-auto ">
          <div style={backgroundStyle} className="text-start">
            <div className="content ps-4 pt-3">
              <h3
                className="display-5 "
                style={{ fontweight: "bolder", color: "white" }}
              >
                TechNews
              </h3>
              <h5
                className="display-7"
                style={{ fontweight: "bold", color: "black" }}
              >
                <b>Latest Updates and News</b>
              </h5>
            </div>
          </div>
        </div>        
      </div>
    </div>
    <div className="container-fluid pt-5 mb-5">
            <div className="row">
              <div className="mx-auto">
                <div className="row gy-4">
                  <ApiCall2 />
                </div>
              </div>
            </div>
          </div>
      </>
  );
}
