import LoginModal from "./LoginModal";
import "../../styles/Login.css";
import { useState } from "react";
import LoginWithEmail from "./LoginWithEmail";

export default function LoginPage() {
    const [loggingState, setLoggingState] = useState("default");
    const handleSelect = newState => setLoggingState(newState);
    const loggingComponent = loggingState === "email" ? <LoginWithEmail /> : <LoginModal handleSelect={handleSelect}/>

  return (
    <div className="login-page">
      {loggingComponent}
      <div className="centered-text">Or create an account</div>
    </div>
  );
}
