import Register from "./RegisterAndLoginForm.jsx";
import { useContext } from "react";
import { UserContext } from "./UserContext.jsx";
import RegisterAndLoginForm from "./RegisterAndLoginForm.jsx";

export default function Routes() {
  const { username, id } = useContext(UserContext);

  if (username) {
    return 'logged in!' + username;
  }

  return (
    <RegisterAndLoginForm />
  );
}
