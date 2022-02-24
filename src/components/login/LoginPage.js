import LoginModal from "./LoginModal";
import { useState } from "react";
import LoginWithEmail from "./LoginWithEmail";

export default function LoginPage() {

  // const [state, setState] = useState("");

  const handleSelect = () => console.log("Hello");

  return (
    <div className="login-page">
      <LoginModal handleSelect={handleSelect}/>
      <div className="centered-text">Or create an account</div>
    </div>
  );
}
