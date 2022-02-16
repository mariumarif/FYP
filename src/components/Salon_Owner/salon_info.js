import React, { useEffect, useState } from 'react';
import "./salon_owner.css";
import logoo from '../../images/icon.png';
import mansal from '../../images/men-salon-2.jpg'
import { useParams, Link } from 'react-router-dom';


const salon_info = () => {
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
                                <Link to='./salon_services'>
                                    <button className='btn salon-services-btn px-4 py-2 mt-3'>
                                        Salon Services
                                    </button>
                                </Link>
                            </div>

                            {/* <!-- Join Us --> */}
                            <div className='join-btn my-3 mr-3'>
                                <Link to='./salon_orders'>
                                    <button className='btn salon-orders-btn px-5 py-2 mr-2'>
                                        Salon Orders
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </nav>
                </div>
        </header>

            <div className='container mt-5 pt-5'>
            <h1 className='orange text-center'>Salon Details</h1>
                <div className='mt-4'>
                <table>
                        <tbody>
                            {/* <tr>
                                <th colspan="3"></th>
                            </tr> */}
                            <tr>
                                <th>Salon Name:</th>
                                <td>The Barber Shop</td>
                                <td>
                                    <button className='sal-update-btn'>Update</button>
                                </td>
                            </tr>
                            <tr>
                                <th>Salon Address:</th>
                                <td>Shop#2, The Barber Shop, Gulshan Chorangi, Karachi</td>
                                <td>
                                    <button className='sal-update-btn'>Update</button>
                                </td>
                            </tr>
                            <tr>
                                <th>Salon Phone Number:</th>
                                <td>(+92) 300-111-1234</td>
                                <td>
                                    <button className='sal-update-btn'>Update</button>
                                </td>
                            </tr>
                            <tr>
                                <th>Salon Description:</th>
                                <td>The Barber Shop, Best Hair Dressers, Certified by CPK Pakistan</td>
                                <td>
                                    <button className='sal-update-btn'>Update</button>
                                </td>
                            </tr>
                            <tr>
                                <th>Salon Image:</th>
                                <td><img src={mansal} alt='' width={500} height={300}/></td>
                                <td>
                                    <button className='sal-update-btn'>Update</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>





                {/* <div className='container mt-5'>
                    <div className='row'>
                        <h5>Salon Name:</h5>
                        <p className='para'>The Barber Shop</p> 
                        <button className='sal-update-btn'>Update</button>
                    </div>
                    <hr />
                    <div className='row'>
                        <h5>Salon Address:</h5>
                        <p className='para'>Shop#2, The Barber Shop, Gulshan Chorangi, Karachi</p>
                        <button className='sal-update-btn'>Update</button>
                    </div>
                    <hr />
                    <div className='row'>
                        <h5>Salon Phone Number:</h5>
                        <p className='para'>(+92) 300-111-1234</p>
                        <button className='sal-update-btn'>Update</button>
                    </div>
                    <hr />
                    <div className='row'>
                        <h5>Salon Description:</h5>
                        <p className='para'>The Barber Shop, Best Hair Dressers, Certified by CPK Pakistan</p>
                        <button className='sal-update-btn'>Update</button>
                    </div>
                    <hr />
                    <div className='row mt-4 mb-5'>
                        <h5>SalonImage:</h5>
                        <img src={mansal} alt='' width={300} height={200}  className='mt-1 ml-1'/>
                        <button className='sal-update-btn'>Update</button>
                    </div>
                </div> */}

                
            </div>
        </>
    );
};
export default salon_info;