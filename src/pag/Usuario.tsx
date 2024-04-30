import React from "react";
import "../App.css";
import { useForm } from "react-hook-form";
import axios from "axios";

import { useNavigate } from "react-router-dom";

interface User {
  username: string;
  password: string;
}

const Usuario: React.FC = () => {
 
  const { register, handleSubmit } = useForm<User>();
  const navigate = useNavigate();
  
  const submit = (data: User) => {
    axios.post("https://fakestoreapi.com/auth/login", data)
        .then(res => {
            localStorage.setItem('token', res.data.token);
            navigate('/');
        })
        .catch(error => {
            if (error.response.status === 401) {
                alert('Usuário ou senha incorretos');
            } else {
                alert("Error");
            }
        });

   
};


  return (
    <div className="flex h-[100vh] w-full items-center justify-start">
      <div className="wrapper mx-auto">
        <div className="card-switch">
          <label className="switch">
            <label htmlFor="" className="flex gap-2 transition-all duration-200 hover:text-blue-400 ">
              <b className="text-black">username: </b><label htmlFor="" className="cursor-text">johnd</label>
            </label>
            <label htmlFor="" className="flex gap-2 transition-all duration-200 hover:text-blue-400 ">
              <b className="text-black">Password: </b><label htmlFor="" className="cursor-text">m38rmF$</label>
            </label>
            <div className="flip-card__inner">
              <div className="flip-card__front">
                <div className="title">Log in</div>
                <form className="flip-card__form" onSubmit={handleSubmit(submit)}>
                  <input
                    {...register("username")}
                    className="flip-card__input"
                    name="username"
                    placeholder="username"
                    type="text"
                  />
                  <input
                    {...register("password")}
                    className="flip-card__input"
                    name="password"
                    placeholder="Password"
                    type="password"
                  />
                  <button className="flip-card__btn">Let's go!</button>
                </form>
              </div>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Usuario;

