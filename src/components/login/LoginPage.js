import LoginModal from "./LoginModal";
import { useState } from "react";
import LoginWithEmail from "./LoginWithEmail";

export default function LoginPage() {
  const [state, setState] = useState("");

  const handleSelect = (buttonName) => setState(buttonName);
  const handleBack = () => setState("");

  const loginComponent =
    state === "Email" ? (
      <LoginWithEmail handleBack={handleBack} />
    ) : (
      <LoginModal handleSelect={handleSelect} />
    );

  return (
    <div className="login-page">
      {loginComponent}
      <div className="centered-text">Or create an account</div>
    </div>
  );
}
