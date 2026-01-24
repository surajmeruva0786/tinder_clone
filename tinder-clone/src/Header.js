import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "./Header.css";
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();
  const backButton = location.pathname === '/chat';

  return (
    <div className='header'>
      {backButton ? (
        <Link to="/">
          <IconButton>
            <ArrowBackIcon className='header_icon' fontSize='large' />
          </IconButton>
        </Link>
      ) : (
        <IconButton>
          <PersonIcon className='header_icon' fontSize='large' />
        </IconButton>
      )}

      <Link to="/">
        <img src="https://1000logos.net/wp-content/uploads/2018/07/Tinder-logo.png" alt="Tinder Logo" className='header__logo' />
      </Link>

      <Link to="/chat">
        <IconButton>
          <ForumIcon className='header_icon' fontSize='large' />
        </IconButton>
      </Link>
    </div>
  )
}

export default Header