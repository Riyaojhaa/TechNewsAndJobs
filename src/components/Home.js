import React from "react";
import web from "../images/img2.svg";
import ApiCall1 from './ApiCall1';


export default function Home() {
  return (
    <div>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-11 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-5 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                     Welcome to 
                    <strong className="brand-name">  News Live Website</strong>
                    
                  </h1>
                  <h3 className="my-3 text-muted">
                  Breaking News & Job Openings
                  </h3>
                  <h4 className="my-3">
                  Stay informed with the latest updates and breaking news from around the world. Our real-time coverage brings you the most current events as they unfold, and don’t miss out on exciting job opportunities with our curated job openings section. We deliver news and career prospects that matter, all day, every day.
                  </h4>
                  {/* <div className="mt-3">
                    <a href="/technology" className="btn btn-outline-primary rounded-pill">
                      Get started
                    </a>
                  </div> */}
                </div>
                <div className="col-lg-6 pt-5 order-1 order-lg-2 header-img">
                  <img
                    src={web}
                    className="img-fluid animated animated-move"
                    alt="home img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-11 pt-5 mx-auto">
              <h6>BROWSE AND READ THE LATEST NEWS</h6>
              <h1>LIVE NEWS</h1>
            </div>
          </div>
          <div className="container-fluid pt-5 mb-5">
            <div className="row">
              <div className="mx-auto">
                <div className="row gy-4">
                  {/* {searchVal ? <SearchApi4 searchVal={searchVal} /> : <ApiCall1 />} */}
                  <ApiCall1 />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
