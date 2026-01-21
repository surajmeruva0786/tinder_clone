import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import "./Header.css";
function Header() {
  return (
    <div className='header'>
        <PersonIcon />
        <h2>header</h2>
        <ForumIcon />
    </div>
  )
}

export default Header