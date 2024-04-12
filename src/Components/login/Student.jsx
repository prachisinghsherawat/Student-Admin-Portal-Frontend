import { useState } from "react";
import axios from "axios";
import Button from "../base/Button";
import TextInput from "../base/TextInput";

export default function StudentLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {

    axios.post("http://localhost:5000/login", {
        email,
        password
      })
      .then((response) => {
        if (response.status === 200) {
          window.location.href = "/student";
        }
      })
  };

  return (
    <div className="my-16 p-9 space-y-8">
      <TextInput
        label={"Email*"}
        placeholder={"Enter student email"}
        value={email}
        onChange={handleEmailChange}
      />

      <TextInput
        label={"Password*"}
        placeholder={"Enter a password"}
        type="password"
        value={password}
        onChange={handlePasswordChange}
      />

      <Button onClick={handleSubmit}>Submit</Button>
    </div>
  );
}
