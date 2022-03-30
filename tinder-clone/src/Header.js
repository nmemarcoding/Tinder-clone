import React from 'react';
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import FormIcon from  '@material-ui/icons/Forum';
import WhatshotIcon from '@material-ui/icons/Whatshot';
export default function Header() {
  return (
    <div className="header">
        <IconButton>
        <PersonIcon fontSize="large" className="header__icon"/>
        </IconButton>
        
        <WhatshotIcon fontSize="large" className="logo" />
        <IconButton>
        <FormIcon fontSize="large" className="header__icon"/>
        </IconButton>

    </div>
  )
}
