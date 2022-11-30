import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";

import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = (props) => {
  const [user] = useAuthState(auth);
  if (!user) {
    return <Redirect to="/login" />;
  }
  return <Route {...props} />;
};

export default ProtectedRoute;
