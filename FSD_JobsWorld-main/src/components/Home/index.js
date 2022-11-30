import "./index.css";
import { useEffect } from "react";

import { Link } from "react-router-dom";

import img3 from "./Images/img3.webp";
import FeatureCard from "../FeatureCard";
import {
  faCloud,
  faCode,
  faDatabase,
  faGamepad,
  faLaptopCode,
  faServer,
  faSitemap,
  faUserShield,
} from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";

const features = [
  {
    id: 1,
    featureIcon: faDatabase,
    featureHeading: "Data Analyst",
    featureDescription: "Lets explore data...",
  },
  {
    id: 2,
    featureIcon: faUserShield,
    featureHeading: "Security Analyst",
    featureDescription: "Let us help you...",
  },
  {
    id: 3,
    featureIcon: faSitemap,
    featureHeading: "IT Analyst",
    featureDescription: "Let us help you...",
  },
  {
    id: 4,
    featureIcon: faLaptopCode,
    featureHeading: "Web Developer",
    featureDescription: "Let us help you...",
  },
  {
    id: 5,
    featureIcon: faServer,
    featureHeading: "Network Engineer",
    featureDescription: "Let us help you...",
  },
  {
    id: 6,
    featureIcon: faCode,
    featureHeading: "Software Developer",
    featureDescription: "Let us help you...",
  },
  {
    id: 7,
    featureIcon: faCloud,
    featureHeading: "Cloud Engineer",
    featureDescription: "Let us help you...",
  },
  {
    id: 8,
    featureIcon: faGamepad,
    featureHeading: "Game Developer",
    featureDescription: "Let us help you...",
  },
];

const renderCards = () => {
  return (
    <>
      <div className="home-container">
        <div className="home-best-company-card">
          <div className="home-best-company-card-text">
            <h1 className="home-best-company-card-heading">
              Let us Help you Find the best company that suites you..
            </h1>
            <Link to="/jobs">
              <button type="button" className="home-page-card-button">
                Find jobs
              </button>
            </Link>
          </div>
        </div>

        <div
          className="home-post-job-card"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="home-post-job-card-text">
            <h1 className="home-post-job-card-heading">
              Fill a sample form and start your hassle-free recruitment journey
              now!
            </h1>
            <Link to="/postjobs">
              <button type="button" className="home-page-card-button">
                Post Job
              </button>
            </Link>
          </div>
        </div>

        <div
          className="home-resume-card"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="home-resume-card-text">
            <h1 className="home-resume-card-heading">
              Tell us what you are good at by uploading your resume..
            </h1>
            <Link to="/uploadresume">
              <button type="button" className="home-page-card-button">
                Upload
              </button>
            </Link>
          </div>

          <img src={img3} className="home-image-3" alt="" />
        </div>
      </div>
    </>
  );
};

const renderFeatures = () => {
  return (
    <div className="home-features-container">
      <h1 className="home-categories-heading">Categories</h1>
      <ul
        className="home-features-list-container"
        data-aos="fade-left"
        data-aos-delay="300"
      >
        {features.map((eachFeature) => (
          <FeatureCard featureDetails={eachFeature} key={eachFeature.id} />
        ))}
      </ul>
    </div>
  );
};

const Home = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <>
      {renderCards()}
      {renderFeatures()}
    </>
  );
};

export default Home;
