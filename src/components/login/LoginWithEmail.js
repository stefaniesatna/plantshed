export default function LoginWithEmail({ handleBack }) {
  return (
    <div className="login-modal">
      <button className="back-btn" onClick={handleBack}>
        Back
      </button>
      <h1>Welcome Back</h1>
      <h2>Login with email</h2>
      <form className="login-form">
        <div className="section">
        <label>
          Email
          <input type="text" placeholder="Email" />
        </label>
        </div>
        <div className="section">
        <label>
          Password
          <input
            type="text"
            placeholder="Password"
          />
        </label>
        </div>
        <button className="login-page login-button">Log in</button>
      </form>
    </div>
  );
}
