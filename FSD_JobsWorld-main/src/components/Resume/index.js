import React, { useState, useEffect } from "react";
import "./index.css";

function Resume(props) {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    currentCity: "",
    postalCode: "",
    email: "",
    phone: "",
    degree: "",
    fieldOfStudy: "",
    college: "",
    year: "",
    jobTitle: "",
    company: "",
    jobCity: "",
    jobYear: "",
    jobDesc: "",
    skills: {
      c: false,
      cpp: false,
      python: false,
      java: false,
    },
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleFirstNameInputChange = (event) => {
    setValues({ ...values, firstName: event.target.value });
  };
  const handleLastNameInputChange = (event) => {
    setValues({ ...values, lastName: event.target.value });
  };
  const handleCurrentCityInputChange = (event) => {
    setValues({ ...values, currentCity: event.target.value });
  };
  const handlePostalCodeInputChange = (event) => {
    setValues({ ...values, postalCode: event.target.value });
  };
  const handleEmailInputChange = (event) => {
    setValues({ ...values, email: event.target.value });
  };
  const handlePhoneInputChange = (event) => {
    setValues({ ...values, phone: event.target.value });
  };
  const handleDegreeInputChange = (event) => {
    setValues({ ...values, degree: event.target.value });
  };
  const handleFieldOfStudyInputChange = (event) => {
    setValues({ ...values, fieldOfStudy: event.target.value });
  };
  const handleCollegeInputChange = (event) => {
    setValues({ ...values, college: event.target.value });
  };
  const handleYearInputChange = (event) => {
    setValues({ ...values, year: event.target.value });
  };
  const handleJobTitleInputChange = (event) => {
    setValues({ ...values, jobTitle: event.target.value });
  };
  const handleCompanyInputChange = (event) => {
    setValues({ ...values, company: event.target.value });
  };
  const handleJobCityInputChange = (event) => {
    setValues({ ...values, jobCity: event.target.value });
  };
  const handleJobYearInputChange = (event) => {
    setValues({ ...values, jobYear: event.target.value });
  };
  const handleJobDescInputChange = (event) => {
    setValues({ ...values, jobDesc: event.target.value });
  };
  const handleSkillsInputChange = (event) => {
    let skill = values.skills;
    skill[event.target.value] = event.target.checked;
    setValues({ ...values, skills: skill });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormErrors(validate(values));

    setIsSubmit(true);
  };

  useEffect(async () => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      const options = {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-type": "application/json",
        },
      };
      const response = await fetch("http://localhost:3004/resumes", options);
      // setValues({
      //   ...values,
      //   firstName: "",
      //   lastName: "",
      //   currentCity: "",
      //   postalCode: "",
      //   email: "",
      //   phone: "",
      //   degree: "",
      //   fieldOfStudy: "",
      //   college: "",
      //   year: "",
      //   jobTitle: "",
      //   company: "",
      //   jobCity: "",
      //   jobYear: "",
      //   jobDesc: "",
      //   skills: {
      //     c: false,
      //     cpp: false,
      //     python: false,
      //     java: false,
      //   },
      // });
      if (response.ok === true) {
        const { history } = props;
        alert(
          "Resume submitted successfully, You will be redirected to home page..."
        );
        history.push("/");
      }
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.firstName) {
      errors.firstName = "*first name is required";
    }
    if (!values.lastName) {
      errors.lastName = "*last name is required";
    }
    if (!values.currentCity) {
      errors.currentCity = "*current city is required";
    }
    if (!values.postalCode) {
      errors.postalCode = "*pincode is required";
    }
    if (!values.firstName) {
      errors.firstName = "*first name is required";
    }
    if (!values.email) {
      errors.email = "*email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "*required a valid email format";
    }
    if (!values.phone) {
      errors.phone = "*contact number is required";
    }
    if (!values.degree) {
      errors.degree = "*degree is required";
    }
    if (!values.fieldOfStudy) {
      errors.fieldOfStudy = "*field of study is required";
    }
    if (!values.college) {
      errors.college = "*college name is required";
    }
    if (!values.year) {
      errors.year = "*year of study is required";
    }
    if (!values.jobTitle) {
      errors.jobTitle = "*job title is required";
    }
    if (!values.company) {
      errors.company = "*company name is required";
    }
    if (!values.jobCity) {
      errors.jobCity = "*job city is required";
    }
    if (!values.jobYear) {
      errors.jobYear = "*job year is required";
    }
    if (!values.jobDesc) {
      errors.jobDesc = "*description about job is required";
    }
    return errors;
  };

  return (
    <div className="grad">
      <form method="" onSubmit={handleSubmit}>
        {Object.keys(formErrors).length === 0 && isSubmit ? (
          <div className="resume-submit-msg">Submitted successfully</div>
        ) : (
          ""
        )}
        <div className="resume-card-container">
          <h1 className="resume-card-container-heading">
            Upload your Resume...
          </h1>
          <div className="resumeCard">
            <div className="resume-card-column">
              <div className="">
                <h3>Personal information</h3>
                <div className="resume-card-name">
                  <div className="resume-card-name-in">
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className=" resume-fname-input"
                      value={values.firstName}
                      onChange={handleFirstNameInputChange}
                      placeholder="First Name"
                    />
                    <p className="resumeErrormsg">{formErrors.firstName}</p>
                  </div>
                  <div className="resume-card-name-in">
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="resume-fname-input"
                      value={values.lastName}
                      onChange={handleLastNameInputChange}
                      placeholder="Last Name"
                    />
                    <p className="resumeErrormsg">{formErrors.lastName} </p>
                  </div>
                </div>
                <div className="resume-card-name">
                  <div className="resume-card-city">
                    <input
                      type="text"
                      id="currentCity"
                      name="currentCity"
                      className="resume-fname-input"
                      placeholder="City"
                      value={values.currentCity}
                      onChange={handleCurrentCityInputChange}
                    />
                    <p className="resumeErrormsg">{formErrors.currentCity} </p>
                  </div>
                  <div className="resume-card-pincode">
                    <input
                      type="text"
                      id="postalCode"
                      name="postalCode"
                      placeholder="PinCode"
                      className="resume-fname-input"
                      value={values.postalCode}
                      onChange={handlePostalCodeInputChange}
                    />
                    <p className="resumeErrormsg">{formErrors.postalCode} </p>
                  </div>
                </div>
                <div className="resume-card-marginbottom">
                  <label htmlFor="email" className="resume-label-marginbottom">
                    Email address
                  </label>{" "}
                  <br />
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="resume-email-input"
                    value={values.email}
                    onChange={handleEmailInputChange}
                  />
                  <p className="resumeErrormsg">{formErrors.email} </p>
                </div>
                <div className="resume-card-marginbottom">
                  <label htmlFor="phone" className="resume-label-marginbottom">
                    Contact Number
                  </label>
                  <br />
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    className="resume-email-input"
                    value={values.phone}
                    onChange={handlePhoneInputChange}
                  />
                  <p className="resumeErrormsg">{formErrors.phone} </p>
                </div>
              </div>
              <div className="">
                <h3>Educational information</h3>
                <div className="resume-card-marginbottom">
                  <label htmlFor="degree" className="resume-label-marginbottom">
                    Degree
                  </label>
                  <br />
                  <select
                    className="form-select  resume-email-input"
                    aria-label="Default select example"
                    id="degree"
                    name="degree"
                    value={values.degree}
                    onChange={handleDegreeInputChange}
                  >
                    <option value="none">None</option>
                    <option value="10">Secondary (10th Pass)</option>
                    <option value="12">Higher Secondary(12th Pass)</option>
                    <option value="diplomo">Diplomo</option>
                    <option value="bachelor">Bachelor's</option>
                    <option value="master">Master's</option>
                    <option value="doctorate">Doctorate</option>
                  </select>
                  <p className="resumeErrormsg">{formErrors.degree} </p>
                </div>
                <div className="resume-card-marginbottom">
                  <label
                    htmlFor="fieldOfStudy"
                    className="resume-label-marginbottom"
                  >
                    Field Of Study
                  </label>
                  <br />
                  <input
                    type="text"
                    name="fieldOfStudy"
                    id="fieldOfStudy"
                    className="resume-email-input"
                    value={values.fieldOfStudy}
                    onChange={handleFieldOfStudyInputChange}
                  />
                  <p className="resumeErrormsg">{formErrors.fieldOfStudy} </p>
                </div>
                <div className="resume-card-marginbottom">
                  <label
                    htmlFor="college"
                    className="resume-label-marginbottom"
                  >
                    College or University
                  </label>
                  <br />
                  <input
                    type="text"
                    name="college"
                    id="college"
                    className="resume-email-input"
                    value={values.college}
                    onChange={handleCollegeInputChange}
                  />
                  <p className="resumeErrormsg">{formErrors.college} </p>
                </div>
                <div className="resume-card-marginbottom">
                  <label htmlFor="year" className="resume-label-marginbottom">
                    Year of study (mention as from XXXX to XXXX)
                  </label>
                  <br />
                  <input
                    type="text"
                    name="year"
                    id="year"
                    className="resume-email-input"
                    value={values.year}
                    onChange={handleYearInputChange}
                  />
                  <p className="resumeErrormsg">{formErrors.year} </p>
                </div>
              </div>
            </div>

            <div className="resume-card-column">
              <div className="">
                <h3>Work Experience</h3>
                <div className="resume-card-marginbottom">
                  <label
                    htmlFor="jobTitle"
                    className="resume-label-marginbottom"
                  >
                    Job Title
                  </label>
                  <br />
                  <input
                    type="text"
                    name="jobTitle"
                    id="jobTitle"
                    className="resume-email-input"
                    value={values.jobTitle}
                    onChange={handleJobTitleInputChange}
                  />
                  <p className="resumeErrormsg">{formErrors.jobTitle} </p>
                </div>
                <div className="resume-card-marginbottom">
                  <label
                    htmlFor="company"
                    className="resume-label-marginbottom"
                  >
                    Company
                  </label>
                  <br />
                  <input
                    type="text"
                    name="company"
                    id="company"
                    className="resume-email-input"
                    value={values.company}
                    onChange={handleCompanyInputChange}
                  />
                  <p className="resumeErrormsg">{formErrors.company} </p>
                </div>
                <div className="resume-card-marginbottom">
                  <label
                    htmlFor="jobCity"
                    className="resume-label-marginbottom"
                  >
                    Job City
                  </label>
                  <br />
                  <input
                    type="text"
                    id="jobCity"
                    name="jobCity"
                    className="resume-email-input"
                    value={values.jobCity}
                    onChange={handleJobCityInputChange}
                  />
                  <p className="resumeErrormsg">{formErrors.jobCity} </p>
                </div>
                <div className="resume-card-marginbottom">
                  <label
                    htmlFor="jobYear"
                    className="resume-label-marginbottom"
                  >
                    Year of work (mention as from XXXX to XXXX)
                  </label>
                  <br />
                  <input
                    type="text"
                    name="jobYear"
                    id="jobYear"
                    className="resume-email-input"
                    value={values.jobYear}
                    onChange={handleJobYearInputChange}
                  />
                  <p className="resumeErrormsg">{formErrors.jobYear} </p>
                </div>
                <div className="resume-card-marginbottom">
                  <label
                    htmlFor="jobDesc"
                    className="resume-label-marginbottom"
                  >
                    Job Description
                  </label>
                  <br />
                  <textarea
                    name="jobDesc"
                    id="jobDesc"
                    cols="30"
                    rows="3"
                    className="resume-email-input"
                    value={values.jobDesc}
                    onChange={handleJobDescInputChange}
                  ></textarea>
                  <p className="resumeErrormsg">{formErrors.jobDesc} </p>
                </div>
              </div>
              <div className="resume-card-marginbottom">
                <h4>Skills</h4>
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="c"
                    name="c"
                    value="c"
                    onChange={handleSkillsInputChange}
                    checked={values.skills.c}
                  />
                  <label className="form-check-label" htmlFor="c">
                    C Language
                  </label>
                </div>
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="cpp"
                    name="cpp"
                    value="cpp"
                    onChange={handleSkillsInputChange}
                    checked={values.skills.cpp}
                  />
                  <label className="form-check-label" htmlFor="cpp">
                    C++ Language
                  </label>
                </div>
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="python"
                    name="python"
                    value="python"
                    onChange={handleSkillsInputChange}
                    checked={values.skills.python}
                  />
                  <label className="form-check-label" htmlFor="python">
                    Python Language
                  </label>
                </div>
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="java"
                    name="java"
                    value="java"
                    onChange={handleSkillsInputChange}
                    checked={values.skills.java}
                  />
                  <label className="form-check-label" htmlFor="java">
                    Java Language
                  </label>
                </div>
              </div>
              <div className="mb-3 offset-5 resume-sub-btn-div">
                <button className="resumebtn btn btn-outline-primary">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Resume;
