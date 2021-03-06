import React from 'react';
import './SwipButtons.css';
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashIcon from '@material-ui/icons/FlashOn'
import IconButton from '@material-ui/core/IconButton';


export default function SwipButtons() {
  return (
    <div className="swipButtons">
        <IconButton  className="swiped__repaet">
            <ReplayIcon fontSize="medium"/>
        </IconButton>

        <IconButton  className="swiped__left">
            <CloseIcon fontSize="medium"/>
        </IconButton>

        <IconButton  className="swiped__star">
            <StarRateIcon fontSize="lmedium"/>
        </IconButton>

        <IconButton  className="swiped__right">
            <FavoriteIcon fontSize="medium"/>
        </IconButton>

        <IconButton  className="swiped__lightning">
            <FlashIcon fontSize="medium"/>
        </IconButton>
    </div>
  )
}
