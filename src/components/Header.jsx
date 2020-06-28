import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import gravatar from '../utils/gravatar'
import { logoutRequest } from '../actions/index'
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';

const Header = (props) => {
  const { user } = props;
  const hasUser = Object.keys(user).length > 0;

  const handleLogout = event => {
    props.logoutRequest({});
    props.history.push('/login')
  } 
  return (
    <header className="header">
      <Link to="/">
        <img className="header__img" src={logo} alt="Platzi Video" />
      </Link>

      <div className="header__menu">
        <div className="header__menu--profile">
          {
            hasUser?
              <img src={ gravatar(user.email) } alt={user.email}/>
              :
              <img src={userIcon} alt="" />
          }
          
        </div>
        <ul>
          {
            hasUser ? 
              <li> <a href="/">{user.name}</a></li>
            :
              null
          }
          {
            hasUser ? 
              <li> <a href="#logout" onClick={handleLogout}>Cerrar Sesión</a> </li>
            :
              <li>
                <Link to="/login">
                  Inicias sesión 
                </Link>
              </li>
          }
        </ul>
      </div>
    </header>
  )
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};
const mapDispatchToProps = {
  logoutRequest,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
