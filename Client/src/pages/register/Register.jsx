import './Register.css'
import { AiOutlineMail } from 'react-icons/ai';


function  Register() {
  return (
    <section>
    <div className="login-box">
      <form >
        <h2>  Register</h2>
        <div className="input-box">
          <span className='icon'></span>
          <input type="username" required="required" />
          <label> Username:</label>
          </div>
        <div className="input-box">
          <span className='icon'>< AiOutlineMail/></span>
          <input type="email" required="required" />
          <label> Email:</label>
        </div>
        <div className="input-box">
          <span className='icon'></span>
          <input type="password" required="required" />
          <label> Password:</label>
        </div>  
        
        <div className="remember-forgot">
          <label ><input type="checkbox" />Remember Me</label>
          <a href="#">Forgot Password</a>
        </div>
        <button type='submit'>Register</button>
      <div className="register-link">
          <p>Dont have an account <a href="#">Register</a></p>
        </div>
      

      </form>
    </div>
    </section>
    

  )
}

export default  Register