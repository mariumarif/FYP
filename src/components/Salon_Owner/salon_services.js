import React, { useEffect, useState } from 'react';
import "./salon_owner.css";
import logoo from '../../images/icon.png';
import { useParams, Link } from 'react-router-dom';


const salon_services = () => {
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
                <h1 className='orange pt-5 text-center'>Saloon Services</h1>
                <div className='mt-3   '>
                    <h4>Add Service</h4>
                    <form className='add-service-form'>
                        <input type="text" className="form-input"  name="serviceName" required placeholder="Enter Service Name..."/>
                        
                        <input type="text" className="form-input"  name="serviceDescription" required placeholder="Enter Service Details"/>
                        
                        <input type="number" className="form-input"  name="servicePrice" required  placeholder="Enter Price" />
                        
                        <button type="submit" className='add-service-btn'>Add</button>
                    </form>
                </div>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th className='th1'>Service Name</th>
                                <th className='th2'>Service Description</th>
                                <th className='th3'>Service Price</th>
                                <th className='th4'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Hair Cut</td>
                                <td>Simple Hair Cut by our professional barber</td>
                                <td>Rs.<span> 100</span></td>
                                <td>
                                    <button className='edit-btn'>Edit </button>
                                    <button className='delete-btn'> Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
};
export default salon_services;