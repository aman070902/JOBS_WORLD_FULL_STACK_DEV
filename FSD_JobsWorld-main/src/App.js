import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import AllJobsSection from "./components/AllJobsSection";
import JobItemDetails from "./components/JobItemDetails";
import PostJobForm from "./components/PostJobForm";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Resume from "./components/Resume";
import ResetPassword from "./components/ResetPassword";
import ProtectedRoute from "./components/ProtectedRoute";
import ScrollToTop from "./components/ScrollToTop";

// const jobDetails = {
//   role: "Java Software Developer",
//   jobDescription:
//     "Looking for candidates with below expertise who can join immediately: 1.Experience in JAVA and J2EE.2.Experience in Spring boot framework.3.Multi threading and web methods,4.OOPs knowledge,5.Good understanding of RDBMS, JPA / Hibernate,6.Writing Optimized SQL queries ",
//   company: "MANIPAL SOFTWARE PRIVATE LIMITED",
//   reviews: 2999,
//   salary: 1200000,
//   workExperience: 2,
//   location: "Hyderabad, Secunderabad",
//   posted: "2 days ago",
//   postings: 229,
//   employmentType: "Full Time",
//   roleCategory: "Software Development",
//   education: "Bachelor's",
//   keySkills: ["HTML", "CSS", "JS", "ReactJS"],
//   aboutCompany:
//     "AIR Worldwide Corporation (AIR), USA, specializing in the field of catastrophe modeling and risk management, invites software professionals with a passion for challenge to develop IT-enabled software solutions for organizations across the world. AIR, headquartered in Boston, is one of the leading providers of analytical tools and software systems that help insurers, reinsures, and financial institutions manage their catastrophic risk due to natural and man-made disasters.",
// };

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <ProtectedRoute exact path="/postjobs" component={PostJobForm} />
        <ProtectedRoute exact path="/profile" component={Profile} />
        <Route exact path="/reset" component={ResetPassword} />
        <ProtectedRoute exact path="/uploadresume" component={Resume} />
        <Route exact path="/jobs" component={AllJobsSection} />
        <Route exact path="/jobs/:id" component={JobItemDetails} />
        <Route exact path="/register" component={SignUp} />
        <Route exact path="/login" component={Login} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
