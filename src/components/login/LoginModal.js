import { Facebook, Google, MailOutline } from "@mui/icons-material";

export default function LoginModal() {
  const loginWays = [
    { name: "Facebook", icon: <Facebook /> },
    { name: "Google", icon: <Google /> },
    { name: "Email", icon: <MailOutline /> },
  ];

  const style = {
    backgroundColor: "#ffffff",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#e1e4eb",
    padding: 38,
    margin: 28,
    borderRadius: 5, 

  };

  const styleButton = {
    width: "388px",
    height: "48px",
    borderRadius: 5, 
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#e1e4eb",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    marginBottom: 10,
    backgroundColor: "#ffffff",
    display: "flex",
    flexDirection: "row",
}

  const loginButtons = loginWays.map((way) => (
    <button style={styleButton}>
      {way.icon}
      <div style={{marginRight: 10}}/>
      {`Continue with ${way.name}`}
    </button>
  ));

  return (
    <div style={style}>
      <h1>Welcome Back</h1>
      <h2>Login to continue</h2>
      {loginButtons}
    </div>
  );
}
