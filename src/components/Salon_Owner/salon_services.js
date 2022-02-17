import React, { useEffect, useState } from 'react';
import Modal from '../Modal';
import "./salon_owner.css";
import logoo from '../../images/icon.png';
import { useParams, Link } from 'react-router-dom';


const salon_services = () => {
    const [isOpen, setIsOpen] = useState(false)
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
                                <Link to='./salon_info'>
                                    <button className='btn salon-info-btn px-4 py-2 mt-3'>
                                        Salon Info
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


            <div className='container mt-5'>
                <h1 className='orange pt-5 text-center'>Salon Services</h1>
                <div className='mt-3 mb-5'>
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
                                    <button className='edit-btn' onClick={()=>setIsOpen(true)}>Edit </button>
                                        <Modal open={isOpen} onClose={()=>setIsOpen(false)}>
                                            <form>
                                                <input type='text' class="form-control mb-2" id='sal-service-name' name='sal-service-name' placeholder='Service Name'/>
                                                <input type='text' class="form-control mb-2" id='sal-service-description' name='sal-service-description' placeholder='Service Description'/>
                                                <input type='number' class="form-control mb-2" id='sal-service-price' name='sal-service-price' placeholder='Service Price'/>
                                                <button type="submit" class="btn sal-service-update-btn">Update</button>
                                            </form>
                                        </Modal>
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