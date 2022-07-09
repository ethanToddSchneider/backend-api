import React, { Component } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';


export default class NavbarBS extends Component {
    render() {


        return (
            <div className='header'>
                <img src="./assets/organic.png" alt="logo" width="5%" className="organicLogo" />

                <div className='container'>
                    <div className='row'>
                        <div className="col-lg-6">
                            <div className='col-lg-6'>
                                <nav className='header__menu'>
                                    <ul>
                                        <li className='active'>
                                            <a href="#action1">HOME</a>
                                        </li>
                                        <li>
                                            <a href="#action2">SHOP</a>
                                        </li>
                                        <li>
                                            <a href="#action3">CONTACT</a>
                                        </li>

                                        <div className='icons'>
                                            <a href="#action1"><FavoriteIcon className="Icon" /></a>
                                            <a href="#action2"><ShoppingBasketIcon className="Icon" /></a>
                                        </div>

                                        <div className='price'>
                                            <p>items: $150.00</p>
                                        </div>
                                    </ul><br /><br />
                                    <div class="container-fluid container1">
                                        <form class="d-flex search search2" role="search">
                                            <input class="form-control me-2 search" type="search1" placeholder="What do you need?" aria-label="Search" />
                                            <button class="btn btn-outline-success search1" type="submit">SEARCH</button>
                                        </form>
                                    </div>
                                    <div className='phone'>
                                        <div className='phoneIcon'>
                                            <LocalPhoneIcon fontSize='small' />

                                        </div>
                                        <div className='row phoneNumber'>
                                            <h5>+65 11.188.888 </h5>
                                        </div>
                                        <div className='row supportText'>
                                            <p>support 24/7 time</p>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div >

            </div >
        )
    }
}
