import React from "react";

export default function Cards({ title, description, url, urlToImage }) {
  return (
    <div className="col-md-4 col-12 mb-4">
      <div className="card h-100" style={{ width: "100%" }}>
        <img src={urlToImage} className="card-img-top" alt="images" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={url} className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}

