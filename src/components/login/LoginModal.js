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