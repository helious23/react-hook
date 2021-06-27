import { useContext } from "react";
import { UserContext } from "./context";

export default function Header() {
  const {
    user: { name, loggedIn },
  } = useContext(UserContext);
  return (
    <header>
      <a href="#">Home</a> Hello, {name}. You are{" "}
      {loggedIn ? "logged in." : "anonymous."}
    </header>
  );
}
