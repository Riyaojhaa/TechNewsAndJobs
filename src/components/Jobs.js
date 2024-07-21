import React from "react";
import ApiCall3 from "./ApiCall3";

export default function Jobs() {
  return (
    <>
      <div className="row">
        <div className="col-11 mx-auto">
          <div className="row">
            <div className="col-md-6 pt-5 pt-lg-5 order-2 order-lg-1 d-flex justify-content-center flex-column">
              Your Jobs Here
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-11 mx-auto">
          <div className="row">
            <div className="col-md-12 pt-5 pt-lg-5 order-2 order-lg-1 ">
              <ApiCall3 />
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}
