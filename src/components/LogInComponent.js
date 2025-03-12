import "./LogInComponent.css"


const LogInComponent = () => {
    return (
        <div className="login-container">
            <h1 className="title">LOGIN</h1>
            
            <label htmlFor="email1">Email</label>
            <input id="email1" name="email" type="email" placeholder="Enter Email" required />
            
            <label htmlFor="password1">Password</label>
            <input id="password1" name="password" type="password" placeholder="Enter Password" required />
            
            <button className="btn2" id="submitButton">LOGIN</button>
            
            <p className="forgot-password">Forgot password?</p>
        </div>
    );
}
export default LogInComponent;
