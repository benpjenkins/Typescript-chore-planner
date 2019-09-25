import React, { useState } from "react";

const StartForm = () => {
  //TODO: How to make sure the values on useState are explicitly typed?

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");

  const handleUserNameChange = (event: any) => {
    setUserName(event.target.value);
  };

  const handleEmailChange = (event: any) => {
    setEmail(event.target.value);
  };

  return (
    <div>
      <form>
        Name:
        <br />
        <input
          type="text"
          name="name"
          placeholder="Type your name here"
          value={userName}
          onChange={handleUserNameChange}
        />
        <br />
        Email:
        <br />
        <input
          type="text"
          name="email"
          placeholder="Type your email here"
          value={email}
          onChange={handleEmailChange}
        />
      </form>
    </div>
  );
};

export default StartForm;
