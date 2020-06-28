import React from 'react';
import '../assets/styles/components/Login.scss';
import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';
import { Link } from 'react-router-dom';
import { loginRequest } from '../actions/index'
import { useState } from 'react';
import { connect } from 'react-redux';

const Login = (props) => {
  const [form, setForm] = useState({
    email: ''
  })

  const handleInput = event => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }
  const handleSubmit = event =>{
    event.preventDefault();
   
    props.loginRequest(form)
    props.history.push('/')
    
  }

  return (
    <section className="login">
      <section className="login__container">
        <h2>Inicia sesión</h2>
        <form className="login__container--form" onSubmit={handleSubmit}>
          <input
            name="email"
            className="input"
            type="text"
            placeholder="Correo"
            onChange={handleInput} />
          <input
            name="password"
            className="input"
            type="password"
            placeholder="Contraseña"
            onChange={handleInput}

          />
          <button className="button">Iniciar sesión</button>
          <div className="login__container--remember-me">
            <label>
              <input type="checkbox" id="cbox1" value="first_checkbox" />
              Recuérdame
            </label>
            <a href="/">Olvidé mi contraseña</a>
          </div>
        </form>
        <section className="login__container--social-media">
          <div>
            <img src={googleIcon} alt="" />
            Inicia sesión con Google
          </div>
          <div>
            <img src={twitterIcon} alt="" />
              Inicia sesión con Twitter
          </div>
        </section>
        <p className="login__container--register">
          No tienes nunguna cuenta
          <Link to="/register">
            Registrate
          </Link>
        </p>
      </section>
    </section>
  );
};

const mapDispatchToProps = {
  loginRequest,
}

export default connect(null,mapDispatchToProps)(Login)
