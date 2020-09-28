import React, { useContext, useState } from "react";
import UserContext from "../contexts/userContext";

const RegesterComponent = ({ history }) => {
  const userContext = useContext(UserContext);
  const [username, setUsername] = useState("");
  const regester = (event, username) => {
    event.preventDefault();
    userContext.onRegester(username);
    history.push("/quiz");
  };
  return (
    <form>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={(e) => regester(e, username)}>Regester</button>
    </form>
  );
};

export default RegesterComponent;
