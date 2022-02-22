import React, { useEffect, useState } from 'react';
import "./admin.css";
import logoo from '../../images/icon.png';
import { useParams, Link } from 'react-router-dom';
import background1 from '../../images/mencategory.jpg';


const admin_categories = () => {
    return (
        <>
            <header className="fixed fixed-top">
                <div className="navbar-div">
                    <nav className="navbar navbar-light">
                        {/* <!-- Brand --> */}
                        <Link to='./'>
                            <a className="navbar-brand ml-5" href="">

                                <img src={logoo} alt="" />

                            </a>
                        </Link>

                        <div className='navbar-btns'>
                            {/* <!-- Login/Signup --> */}
                            <div className='login-signup mr-2'>
                                <Link to='./new_salon_requests'>
                                    <button className='btn salon-services-btn px-4 py-2 mt-3'>
                                        New Salon Requets
                                    </button>
                                </Link>
                            </div>

                            {/* <!-- Join Us --> */}
                                {/* <div className='join-btn my-3 mr-3'>
                                    <Link to='./salon_orders'>
                                        <button className='btn salon-orders-btn px-5 py-2 mr-2'>
                                            Salon Orders
                                        </button>
                                    </Link>
                                </div> */}
                        </div>
                    </nav>
                </div>
            </header>


            <div className='container mt-5 pt-5'>
            <h1 className='orange text-center'>Salon Categories</h1>
                <div className='mt-5'>
                <div className='row mb-5'>
                    <div className='col-lg-6 col-sm-12 cardimg'>
                        <Link to="/admin_men_sal">
                            <h1 className='mycard  men-cat-card' style={{ backgroundImage: `url(${background1})` }}>
                                MEN
                            </h1>
                        </Link>
                    </div>

                    <div className='col-lg-6 col-sm-12'>
                    <Link to='./admin_women_sal'>
                        <h1 className='text-center mycard women-cat-card'style={{ backgroundImage: `url(${background1})` }}>WOMEN</h1>
                    </Link>
                    </div>
                </div>
                </div>
            </div>
        </>
    );
};
export default admin_categories;