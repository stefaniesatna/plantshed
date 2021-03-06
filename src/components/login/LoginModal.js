import { Facebook, Google, MailOutline } from "@mui/icons-material";

export default function LoginModal({ handleSelect }) {
  const loginWays = [
    { name: "Facebook", icon: <Facebook /> },
    { name: "Google", icon: <Google /> },
    { name: "Email", icon: <MailOutline /> },
  ];

  const loginButtons = loginWays.map((way) => (
    <button key={way.name} className="login-button" onClick={() => handleSelect(way.name)}>
      {way.icon}
      <div style={{ marginRight: "1em" }} />
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
