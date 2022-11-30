import "./index.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusSquare, faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import postjob from "./Images/job-offer.webp";

const PostCompanyDetails = (props) => {
  const onChangeCompanyName = (event) => {
    const { changeCompanyName } = props;
    changeCompanyName(event.target.value);
  };

  const renderCompanyNameInput = () => {
    const { companyName, validateCompanyName, isCompanyNameValid } = props;
    return (
      <>
        <label
          className="post-job-form-company-name-label"
          htmlFor="company-name"
        >
          Company Name
        </label>
        <input
          id="company-name"
          type="text"
          placeholder="Company Name"
          className="post-company-details-name"
          value={companyName}
          onChange={onChangeCompanyName}
          onBlur={validateCompanyName}
          required
        />
        {!isCompanyNameValid && (
          <p className="post-job-form-error-msg">
            *Company name can not be empty
          </p>
        )}
      </>
    );
  };

  const onChangeRoleInHiringProcess = (event) => {
    const { changeRoleInHiringProcess } = props;
    changeRoleInHiringProcess(event.target.value);
  };

  const renderRoleInHiringProcessInput = () => {
    const { roleInHiringProcess, activeRoleInHiringProcessId } = props;
    return (
      <>
        <label className="post-job-form-label" htmlFor="role-in-hiring-process">
          Your role in the hiring process
        </label>
        <select
          id="role-in-hiring-process"
          className="select-role-in-hiring-process"
          value={activeRoleInHiringProcessId}
          onChange={onChangeRoleInHiringProcess}
        >
          {roleInHiringProcess.map((eachObject) => {
            const { id, role } = eachObject;
            return (
              <option
                className="option-role-in-hiring-process"
                key={id}
                value={role}
              >
                {role}
              </option>
            );
          })}
        </select>
      </>
    );
  };

  const onChangeCompanyDescription = (event) => {
    const { changeCompanyDescription } = props;
    changeCompanyDescription(event.target.value);
  };

  const renderCompanyDescriptionInput = () => {
    const {
      companyDescription,
      validateCompanyDescription,
      isCompanyDescriptionValid,
    } = props;
    return (
      <>
        <label className="post-job-form-label" htmlFor="company-description">
          Company Description
        </label>
        <textarea
          rows="15"
          cols="60"
          id="company-description"
          placeholder="Company Description ..."
          className="post-company-details-description"
          value={companyDescription}
          onChange={onChangeCompanyDescription}
          onBlur={validateCompanyDescription}
          required
        />
        {!isCompanyDescriptionValid && (
          <p className="post-job-form-error-msg">
            *Company description should be atleast 30 characters
          </p>
        )}
      </>
    );
  };

  const onChangeCompanyLocation = (event) => {
    const { changeCompanyLocation } = props;
    changeCompanyLocation(event.target.value);
  };

  const renderCompanyLocationInput = () => {
    const { companyLocation, validateCompanyLocation, isCompanyLocationValid } =
      props;
    return (
      <>
        <label className="post-job-form-label" htmlFor="company-location">
          Company Location
        </label>
        <input
          id="company-location"
          type="text"
          placeholder="Company Location"
          className="post-company-details-location"
          value={companyLocation}
          onChange={onChangeCompanyLocation}
          onBlur={validateCompanyLocation}
          required
        />
        {!isCompanyLocationValid && (
          <p className="post-job-form-error-msg">
            *Company location cannot be empty
          </p>
        )}
      </>
    );
  };

  const onIncrementNumberOfPostings = () => {
    const { incrementNumberOfPostings } = props;
    incrementNumberOfPostings();
  };

  const onDecrementNumberOfPostings = () => {
    const { decrementNumberOfPostings } = props;
    decrementNumberOfPostings();
  };

  const renderNumberOfPostingsInput = () => {
    const { numberOfPostings } = props;

    const plusIcon = (
      <FontAwesomeIcon
        icon={faPlusSquare}
        onClick={onIncrementNumberOfPostings}
      />
    );

    const minusIcon = (
      <FontAwesomeIcon
        icon={faMinusSquare}
        onClick={onDecrementNumberOfPostings}
      />
    );

    return (
      <>
        <label className="post-job-form-label" htmlFor="number-of-postings">
          Number of postings
        </label>
        <div className="number-of-postings-container">
          {minusIcon}
          <p className="number-of-postings">{numberOfPostings}</p>
          {plusIcon}
        </div>
      </>
    );
  };

  const renderNextButton = () => {
    const { nextStep } = props;
    return (
      <div className="post-job-form-next-btn-container">
        <button
          type="button"
          className="post-job-form-next-btn"
          onClick={nextStep}
        >
          Next
        </button>
      </div>
    );
  };

  return (
    <>
      <div className="post-company-details-container">
        <div className="post-company-details-form-container">
          <h1 className="post-company-details-heading">
            JobsWorld For Employers
          </h1>
          {renderCompanyNameInput()}
          {renderRoleInHiringProcessInput()}
          {renderCompanyDescriptionInput()}
          {renderCompanyLocationInput()}
          {renderNumberOfPostingsInput()}
          {renderNextButton()}
        </div>
        <img className="post-job-image" src={postjob} alt="post-job" />
      </div>
    </>
  );
};

export default PostCompanyDetails;
