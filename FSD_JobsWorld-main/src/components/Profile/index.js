import "./index.css";
import profile from "./Images/profile.png";
import { logout } from "../../firebase";

const Profile = (props) => {
  const { history } = props;

  const onCLickLogOutBtn = () => {
    logout();
    history.push("/");
  };

  return (
    <div className="profile-container">
      <img src={profile} className="profile-image" alt="profile-img" />
      <button className="profile-page-logout-btn" onClick={onCLickLogOutBtn}>
        Logout
      </button>
    </div>
  );
};

export default Profile;
