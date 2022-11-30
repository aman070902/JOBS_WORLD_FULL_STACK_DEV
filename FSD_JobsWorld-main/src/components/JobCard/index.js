import "./index.css";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBusinessTime,
  faFileAlt,
  faMapMarkerAlt,
  faRupeeSign,
} from "@fortawesome/free-solid-svg-icons";

const JobCard = (props) => {
  const { jobDetails } = props;
  const {
    id,
    jobTitle,
    companyName,
    reviews = 7999,
    salary,
    jobDescription,
    companyLocation,
    jobType,
    posted = "2 days ago",
  } = jobDetails;

  const contractIcon = <FontAwesomeIcon icon={faBusinessTime} />;
  const rupeeIcon = <FontAwesomeIcon icon={faRupeeSign} />;
  const locationIcon = <FontAwesomeIcon icon={faMapMarkerAlt} />;
  const descriptionIcon = <FontAwesomeIcon icon={faFileAlt} />;

  return (
    <>
      <div className="job-card-container">
        <div className="job-card-container-header">
          <h1 className="job-card-role">{jobTitle}</h1>
          <i className="far fa-star job-card-save-btn"></i>
        </div>
        <div className="job-card-company-reviews">
          <p className="job-card-company">{companyName}</p>
          <p className="job-card-reviews">{reviews} Reviews</p>
        </div>
        <div className="job-card-features-container">
          <div className="job-card-feature">
            {contractIcon}
            <p className="job-card-feature-value">{jobType}</p>
          </div>
          <div className="job-card-feature">
            {rupeeIcon}
            <p className="job-card-feature-value">{salary}</p>
          </div>
          <div className="job-card-feature">
            {locationIcon}
            <p className="job-card-feature-value">{companyLocation}</p>
          </div>
        </div>
        <div className="job-card-description-container">
          {descriptionIcon}
          <p className="job-card-description">
            {jobDescription.slice(0, 120)} ...
          </p>
        </div>
        <div className="job-card-footer">
          <p className="job-card-posted">{posted}</p>
          <div>
            <Link to={`jobs/${id}`}>
              <button className="job-card-view-details-btn" type="button">
                View Details
              </button>
            </Link>
            <button className="job-card-apply-btn" type="button">
              Apply
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobCard;
