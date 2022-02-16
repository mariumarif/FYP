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
                    </nav>
                </div>
            </header>

            <div className='container mt-5'>
                <h1 className='orange pt-5 text-center'>Salon Details</h1>
                <div className='container mt-5'>
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
                </div>
            </div>
        </>
    );
};
export default salon_info;