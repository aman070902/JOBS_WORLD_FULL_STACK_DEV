import "./index.css";
import { Component } from "react";

import JobItem from "../JobItem";

class JobItemDetails extends Component {
  state = {
    jobDetails: {
      skills: [],
    },
  };

  componentDidMount() {
    this.getJobDetails();
  }

  getJobDetails = async () => {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;

    const apiUrl = `http://localhost:3004/jobs/${id}`;
    const response = await fetch(apiUrl);
    const fetchedData = await response.json();
    const updatedData = {
      companyDescription: fetchedData.company_description,
      companyLocation: fetchedData.company_location,
      companyName: fetchedData.company_name,
      educationLevel: fetchedData.education_level,
      id: fetchedData.id,
      jobDescription: fetchedData.job_description,
      jobTitle: fetchedData.job_title,
      jobType: fetchedData.job_type,
      numberOfPostings: fetchedData.number_of_postings,
      roleCategory: fetchedData.role_category,
      salary: fetchedData.salary,
      skills: fetchedData.skills,
      workExperience: fetchedData.work_experience,
    };
    this.setState({ jobDetails: updatedData });
  };

  render() {
    const { jobDetails } = this.state;
    return <JobItem jobDetails={jobDetails} />;
  }
}

export default JobItemDetails;
