import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Axios from "axios";
import { useForm } from "react-hook-form";
import './Register.css'
import { AiOutlineMail } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';
import { FaUserCircle } from 'react-icons/fa';
import { apiDomain } from "../../utils/utilsDomain";



export default function Register() {
  const navigate = useNavigate();

  const schema = yup.object().shape({
    username: yup.string().required("Username is required"),
    email: yup.string().required("Email is required"),
    password: yup.string().required("Password is required"),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    Axios.post(apiDomain + "auth/register", data)
      .then((response) => {
        response.data.message && alert(response.data.message)
        navigate("/login")
      })
      .catch((error) => {
        console.log(error);
      })
  }

  return (
    <section>
      <div className="login-box">
        <form onSubmit={handleSubmit(onSubmit)} >
          <h2>  Register</h2>
          <div className="input-box">
            <span className='icon'><FaUserCircle /></span>
            <input type="username" required="required"  {...register("username")} />
            <label> Username:</label>
          </div>
          <p className="error">{errors.username?.message}</p>

          <div className="input-box">
            <span className='icon'> <RiLockPasswordLine /></span>
            <input type="password" required="required"   {...register("password")} />
            <label> Password:</label>
          </div>
          <p className="error">{errors.password?.message}</p>

          <div className="input-box">
            <span className='icon'>< AiOutlineMail /></span>
            <input type="email" required="required"  {...register("email")} />
            <label> Email:</label>
          </div>
          <p className="error">{errors.email?.message}</p>


          <div className="remember-forgot">
            <label ><input type="checkbox" />Remember Me</label>
            <a href="#">Forgot Password</a>
          </div>
          <button type='submit' value='Submit'>Register</button>
          <div className="register-link">
            <p>Dont have an account <a href="#">Register</a></p>
          </div>


        </form>
      </div>
    </section>


  )
}