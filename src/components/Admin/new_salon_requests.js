import React, { useEffect, useState } from 'react';
import "./admin.css";
import logoo from '../../images/icon.png';
import { useParams, Link } from 'react-router-dom';


const new_salon_requests = () => {
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
                                <Link to='./admin_categories'>
                                    <button className='btn salon-services-btn px-4 py-2 mt-3'>
                                        Categories
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
            <h1 className='orange text-center'>New Salon Requets</h1>
                <div className='mt-5'>
                <div className='mt-5'>
                <table className='mensal-table'>
                        <thead>
                            <tr>
                                <th className='th1'>Salon Name</th>
                                <th className='th2'>Salon Address</th>
                                <th className='th3'>Salon Phone Number</th>
                                <th className='th3'>Salon Description</th>
                                <th className='th4'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Trimmers-Johar</td>
                                <td>Johar Block 1, opposite continental bakery</td>
                                <td>0321-0001112</td>
                                <td>Best in Hair Cutting and Trimming Since 1999</td>
                                <td>
                                    <button className='salreq-complete-btn'>Accept </button>
                                    <button className='salreq-reject-btn'>Reject</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                </div>
            </div>
        </>
    );
};
export default new_salon_requests;