import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Header() {
    return (
        <div >
            <hr className='headerFile' />

            <div className='leftText'>
                <EmailIcon className='emailIcon' fontSize='small' />
                organic@support.com |
            </div>

            <div className='middleText'>
                Free Shipping for all order over $99
            </div>

            <div className='row1 socialPlatform'>
                <FacebookIcon fontSize='small' />&nbsp;&nbsp;&nbsp;
                <TwitterIcon fontSize='small' />&nbsp;&nbsp;&nbsp;
                <PinterestIcon fontSize='small' />&nbsp;&nbsp;&nbsp;
                <LinkedInIcon fontSize='small' />&nbsp;&nbsp;&nbsp;
            </div>

            <div className='line2'>
                |
            </div>

            <div className='profileIcon'>
                <AccountCircleIcon fontSize='small' />
                <span className='loginText'>Login</span>
            </div>

        </div>
    )
}
