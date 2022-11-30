import "./index.css";
import { Component } from "react";

import FiltersGroup from "../FiltersGroup";
import JobCard from "../JobCard/";
import JobsHeader from "../JobsHeader";

const sortByOptions = [
  {
    optionId: "PRICE_HIGH",
    displayText: "Salary (High-Low)",
  },
  {
    optionId: "PRICE_LOW",
    displayText: "Salary (Low-High)",
  },
];

const salaryFilters = [
  {
    salaryId: "2500000+",
    displayText: "25 Lakhs+",
  },
  {
    salaryId: "2000000+",
    displayText: "20 Lakhs+",
  },
  {
    salaryId: "1500000+",
    displayText: "15 Lakhs+",
  },
  {
    salaryId: "1000000+",
    displayText: "10 Lakhs+",
  },
  {
    salaryId: "500000+",
    displayText: "5 Lakhs+",
  },
  {
    salaryId: "300000",
    displayText: "3 Lakhs+",
  },
];

const locationFilters = [
  {
    locationId: "Hyderabad",
    location: "Hyderabad",
  },
  {
    locationId: "Bangalore",
    location: "Bangalore",
  },
  {
    locationId: "Chennai",
    location: "Chennai",
  },
  {
    locationId: "Trivandrum",
    location: "Trivandrum",
  },
  {
    locationId: "Khammam",
    location: "Khammam",
  },
  {
    locationId: "Mumbai",
    location: "Mumbai",
  },
  {
    locationId: "Delhi",
    location: "Delhi",
  },
  {
    locationId: "Pune",
    location: "Pune",
  },
  {
    locationId: "Kolkata",
    location: "Kolkata",
  },
];

const jobTypeFilters = [
  {
    jobTypeId: "FullTime",
    jobType: "FullTime",
  },
  {
    jobTypeId: "Contract",
    jobType: "Contract",
  },
  {
    jobTypeId: "Temporary",
    jobType: "Temporary",
  },
  {
    jobTypeId: "Fresher",
    jobType: "Fresher",
  },
  {
    jobTypeId: "Internship",
    jobType: "Internship",
  },
];

const skillFilters = [
  {
    skillId: "C++",
    skill: "C++",
  },
  {
    skillId: "Java",
    skill: "Java",
  },
  {
    skillId: "Python",
    skill: "Python",
  },
  {
    skillId: "Javascript",
    skill: "JavaScript",
  },
  {
    skillId: "Angular",
    skill: "Angular",
  },
  {
    skillId: "ReactJS",
    skill: "ReactJS",
  },
  {
    skillId: "SQL",
    skill: "SQL",
  },
  {
    skillId: "JQuery",
    skill: "JQuery",
  },
];

const educationLevelFilters = [
  {
    educationLevelId: "Bachelor's Degree",
    displayText: "Bachelor's Degree",
  },
  {
    educationLevelId: "Master's Degree",
    displayText: "Master's Degree",
  },
  {
    educationLevelId: "Doctoral Degree",
    displayText: "Doctoral Degree",
  },
  {
    educationLevelId: "Diploma",
    displayText: "Diploma",
  },
  {
    educationLevelId: "12th Pass",
    displayText: "12th Pass",
  },
  {
    educationLevelId: "10th pass",
    displayText: "10th pass",
  },
];

const companyFilters = [
  {
    companyId: "1",
    companyName: "Oracle",
  },
  {
    companyId: "2",
    companyName: "ICS Consultancy Services",
  },
  {
    companyId: "3",
    companyName: "IBM",
  },
  {
    companyId: "4",
    companyName: "Microsoft",
  },
  {
    companyId: "5",
    companyName: "Deloitte",
  },
  {
    companyId: "6",
    companyName: "Meta",
  },
  {
    companyId: "7",
    companyName: "Swiggy",
  },
  {
    companyId: "8",
    companyName: "Uber",
  },
  {
    companyId: "9",
    companyName: "Dell",
  },
];

class Jobs extends Component {
  state = {
    jobs: [],
    searchInput: "",
    activeOptionId: "",
    activeSalaryId: "",
    activeLocationId: "",
    activeJobTypeId: "",
    activeSkillId: "",
    activeEducationLevelId: "",
    activeCompanyId: "",
  };

  componentDidMount() {
    this.getJobs();
  }

  getJobs = async () => {
    const apiUrl = "http://localhost:3004/jobs";
    const response = await fetch(apiUrl);
    const fetchedData = await response.json();
    const updatedData = fetchedData.map((eachObject) => ({
      companyDescription: eachObject.company_description,
      companyLocation: eachObject.company_location,
      companyName: eachObject.company_name,
      educationLevel: eachObject.education_level,
      id: eachObject.id,
      jobDescription: eachObject.job_description,
      jobTitle: eachObject.job_title,
      jobType: eachObject.job_type,
      numberOfPostings: eachObject.number_of_postings,
      roleCategory: eachObject.role_category,
      salary: eachObject.salary,
      skills: eachObject.skills,
      workExperience: eachObject.work_experience,
    }));
    this.setState({ jobs: [...updatedData] });
  };

  changeSearchInput = (value) => {
    this.setState({ searchInput: value });
  };

  enterSearchInput = () => {
    this.getJobs();
  };

  clickSalaryId = (salaryId) => {
    this.setState({ activeSalaryId: salaryId });
  };

  changeLocation = (locationId) => {
    this.setState({ activeLocationId: locationId });
  };

  changeJobType = (jobTypeId) => {
    this.setState({ activeJobTypeId: jobTypeId });
  };

  changeSkill = (skillId) => {
    this.setState({ activeSkillId: skillId });
  };

  changeEducationLevel = (educationLevelId) => {
    this.setState({ activeEducationLevelId: educationLevelId });
  };

  changeCompany = (companyId) => {
    this.setState({ activeCompanyId: companyId });
  };

  changeOptionId = (optionId) => {
    this.setState({ activeOptionId: optionId });
  };

  clearAllFilters = () => {
    this.setState({
      searchInput: "",
      activeOptionId: "",
      activeSalaryId: "",
      activeLocationId: "",
      activeJobTypeId: "",
      activeSkillId: "",
      activeEducationLevelId: "",
      activeCompanyId: "",
    });
  };

  renderAllJobs = () => {
    const { activeOptionId, jobs } = this.state;
    return (
      <div className="jobs-container">
        <JobsHeader
          sortByOptions={sortByOptions}
          activeOptionId={activeOptionId}
          changeOptionId={this.changeOptionId}
        />
        <div>
          {jobs.map((eachJob) => (
            <JobCard jobDetails={eachJob} key={eachJob.id} />
          ))}
        </div>
      </div>
    );
  };

  render() {
    const {
      searchInput,
      activeSalaryId,
      activeLocationId,
      activeJobTypeId,
      activeSkillId,
      activeEducationLevelId,
      activeCompanyId,
    } = this.state;
    return (
      <div className="all-jobs-section">
        <FiltersGroup
          searchInput={searchInput}
          changeSearchInput={this.changeSearchInput}
          enterSearchInput={this.enterSearchInput}
          salaryFilters={salaryFilters}
          clickSalaryId={this.clickSalaryId}
          activeSalaryId={activeSalaryId}
          locationFilters={locationFilters}
          activeLocationId={activeLocationId}
          changeLocation={this.changeLocation}
          jobTypeFilters={jobTypeFilters}
          activeJobTypeId={activeJobTypeId}
          changeJobType={this.changeJobType}
          skillFilters={skillFilters}
          activeSkillId={activeSkillId}
          changeSkill={this.changeSkill}
          educationLevelFilters={educationLevelFilters}
          activeEducationLevelId={activeEducationLevelId}
          changeEducationLevel={this.changeEducationLevel}
          companyFilters={companyFilters}
          activeCompanyId={activeCompanyId}
          changeCompany={this.changeCompany}
          clearAllFilters={this.clearAllFilters}
        />
        {this.renderAllJobs()}
      </div>
    );
  }
}

export default Jobs;
