import React, { Component } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
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
                                <nav className='header__menu justify-content-center'>
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
                                            <FavoriteIcon />
                                            <ShoppingBasketIcon />
                                        </div>

                                        <div className='price'>
                                            <p>Total: $150.00</p>
                                        </div>
                                    </ul><br /><br />
                                    <div class="container-fluid container1">
                                        <form class="d-flex search" role="search">
                                            <input class="form-control me-2 search" type="search" placeholder="Search" aria-label="Search" />
                                            <button class="btn btn-outline-success search" type="submit">Search</button>
                                        </form>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>

            </div >
        )
    }
}
