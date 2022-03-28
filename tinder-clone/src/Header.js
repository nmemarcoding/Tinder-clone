import React from 'react';
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import FormIcon from  '@material-ui/icons/Forum';

export default function Header() {
  return (
    <div className="header">
        <IconButton>
        <PersonIcon fontSize="large" className="header__icon"/>
        </IconButton>
        <img 
            className="header__logo"
            src="https://cdn-icons.flaticon.com/png/512/2584/premium/2584680.png?token=exp=1648492677~hmac=bbb88d6fc1c41f2fc96e1664f096e74e"
            alt=""
        />
        <IconButton>
        <FormIcon fontSize="large" className="header__icon"/>
        </IconButton>

    </div>
  )
}
