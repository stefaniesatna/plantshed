<<<<<<< HEAD
import { Facebook, Google, MailOutline } from "@mui/icons-material";
import "../../styles/Login.css";

export default function LoginModal({handleSelect}) {
  const loginWays = [
    { name: "Facebook", icon: <Facebook /> },
    { name: "Google", icon: <Google /> },
    { name: "Email", icon: <MailOutline /> },
  ];

  const loginButtons = loginWays.map((way) => (
    <button className="login-button" onClick={() => handleSelect("email")}>
      {way.icon}
      <div style={{marginRight: "1em"}}/>
      {`Continue with ${way.name}`}
    </button>
  ));

  return (
    <div className="login-modal">
      <h1>Welcome Back</h1>
      <h2>Login to continue</h2>
      {loginButtons}
    </div>
  );
}
=======
import LoginButton from "./LoginButton"

export default function LoginModal(){

    const loginWays = [{name: "Facebook", icon: "FacebookIcon"}, {name: "Google", icon: "GoogleIcon"}, {name: "Email", icon: "MailOutlineIcon"}];

    const style = {
        width: "460px", 
        backgroundColor: "#ffffff",
        borderColor: "red",
        borderStyle: "solid",
        borderWidth: 1,
        padding: 38,
    }

    const loginButtons = loginWays.map(way => <LoginButton way={way.name} icon={way.icon} />)

    return (
        <div style={style}>
            <h1>Welcome Back</h1>
            <h2>Login to continue</h2>
            {loginButtons}
        </div>
    )
}
>>>>>>> cde5a8c3b5ed51a296aea8ee933e90a32a169c43
