import './Login.css'

function Login() {
  return (
    <div className="body">
    <div className="box">
      <span className='borderLine'></span>
      <form >
        <h2>Login</h2>
        <div className="inputBox">
          <input type="text" required="required" />
          <span>Username</span>
          <i></i>
        </div>
        <div className="inputBox">
          <input type="password" required="required"/>
          <span>Password</span>
          <i></i>
        </div>
        <div className="links">
          <a href="#">Forgot Password?</a>
          <a href="#">Sign up</a>
        
        </div>
        <input type="submit" value="  Register" />
      </form>
    </div>
    </div>
  )
}

export default Login