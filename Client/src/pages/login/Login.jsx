import { useContext } from 'react';
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Axios from "axios";
import { Context } from "../../context/Context";
import './Login.css';
import { apiDomain } from '../../utils/utilsDomain';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const { dispatch } = useContext(Context);
  const navigate = useNavigate();
  const schema = yup.object().shape({
    username: yup.string().required("Username is required"),
    password: yup.string().required("Password is required"),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    Axios.post(apiDomain + "auth/login", data)
      .then(({data}) => {
        // console.log(data);
        if (data.token) {
          dispatch({ type: "LOGIN_SUCCESS", payload: data.token });
          localStorage.setItem("user", JSON.stringify(data.token));
          navigate('/')
        }
      })
      .catch(({ response }) => {
        console.log(response);
        alert(response.data.error);
      });
  };

  return (
    <div className="body">
      <div className="box">
        <span className='borderLine'></span>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Login</h2>
          <div className="inputBox">
            <input type="text" required {...register("username")} />
            <span>Username</span>
            <i></i>
          </div>
          <p>{errors.username?.message}</p>
          <div className="inputBox">
            <input type="password" required {...register("password")} />
            <span>Password</span>
            <i></i>
          </div>
          <p>{errors.password?.message}</p>
          <div className="links">
            <Link to="/forgot-password">Forgot Password?</Link>
            <Link to="/register">Sign up</Link>
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  )
}
