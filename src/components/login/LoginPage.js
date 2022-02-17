import LoginModal from "./LoginModal";

export default function LoginPage(){
    const style = {
        height: 'calc(100vh - 70px)',
        display: "grid",
        placeContent: "center",
        placeItems: "center",
    }

    return (
        <div style={style}>
            <LoginModal/>
            Or create an account
        </div>
    )
}