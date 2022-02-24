export default function LoginWithEmail({ handleBack }) {
  return (
    <div className="login-modal">
      <h1>Welcome Back</h1>
      <h2>Login with email</h2>
      <input type="text" placeholder="Email" />
      <input type="text" placeholder="Password" />
      <button onClick={handleBack}>Back</button>
    </div>
  );
}
