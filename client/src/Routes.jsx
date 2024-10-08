import Register from "./RegisterAndLoginForm.jsx";
import { useContext } from "react";
import { UserContext } from "./UserContext.jsx";
import RegisterAndLoginForm from "./RegisterAndLoginForm.jsx";
import Chat from "./Chat.jsx";

export default function Routes() {
  const { username, id } = useContext(UserContext);

  if (username) {
    return <Chat />
  }

  return (
    <RegisterAndLoginForm />
  );
}
