import React from 'react'
import './SwipeButtons.css'
import RepeatIcon from "@mui/icons-material/Repeat";
import CloseIcon from "@mui/icons-material/Close";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import IconButton from "@mui/material/IconButton";


const SwipeButtons = () => {
  return (
    <div className="swipeButtons">
        <IconButton>
            <RepeatIcon fontSize="large" />
        </IconButton>
        <IconButton>
            <CloseIcon fontSize="large" />
        </IconButton>
        <IconButton>
            <FavoriteIcon fontSize="large" />
        </IconButton>
        <IconButton>
            <StarIcon fontSize="large" />
        </IconButton>
        <IconButton>
            <FlashOnIcon fontSize="large" />
        </IconButton>
    </div> 
  )
}

export default SwipeButtons