import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import IconButton  from '@mui/material/IconButton';
import "./Header.css";
function Header() {
  return (
    <div className='header'>
      <IconButton>
        <PersonIcon className='header_icon' fontSize='large'/>
      </IconButton>
        <img src="https://1000logos.net/wp-content/uploads/2018/07/Tinder-logo.png" alt="Tinder Logo" className='header__logo' />
        <IconButton>
          <ForumIcon className='header_icon' fontSize='large'/>
        </IconButton>
    </div>
  )
}

export default Header