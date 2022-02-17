export default function LoginWithEmail(){

    const credentials = ["Email", "Password"]; 

    const credentialComponents = credentials.forEach(credential => <input type="text" placeholder={credential} />)
    return (
        <div className="login-modal">
            <h1>Welcome Back</h1>
            <h2>Login with email</h2>
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Password" />
        </div>
    )
}