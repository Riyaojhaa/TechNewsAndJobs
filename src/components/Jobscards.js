import React from "react";

export default function Jobscards({jobTitle , companyName ,location, linkedInJobLink  }) {
  return (
    <div>
      <div class="card">
        <h5 class="card-header">{companyName}</h5>
        <div class="card-body">
          <h6 class="card-title">{jobTitle}</h6>
          <p class="card-text">
            {location}
          </p>
          {/* <p class="card-text">
            {jobDescription}
          </p> */}
          {/* <h6 >{salaryMin}</h6>
          <h6>{salaryMax}</h6> */}
          <a href={linkedInJobLink} class="btn btn-primary">
            Apply
          </a>
        </div>
      </div>
    </div>
  );
}
