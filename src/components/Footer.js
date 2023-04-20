import React from 'react'
import InstagramIcon  from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { IconButton } from "@mui/material";
import '../styles/Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
          <IconButton href="https://www.instagram.com/sudhakar_siva_/">
            <InstagramIcon/>
            </IconButton>
            <IconButton href="https://github.com/Sudhakarsiva18">
            <GitHubIcon/>
            </IconButton>
            <span>
              <IconButton href="https://www.linkedin.com/in/sudhakar-s-711aa524b/">
          <LinkedInIcon />
          </IconButton>
          </span>
        </div>
        <p> &copy; 2023 sssportpolio.com</p>
    </div>
  )
}

export default Footer