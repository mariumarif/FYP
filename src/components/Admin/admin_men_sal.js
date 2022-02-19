import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoo from '../../images/icon.png';
import Modal from '../Modal';
import "./admin.css";


const AdminMenSalon = () => {
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
                                <Link to='./new_salon_requests'>
                                    <button className='btn salon-services-btn px-4 py-2 mt-3'>
                                        New Salon Requets
                                    </button>
                                </Link>
                            </div>

                            <div className='join-btn my-3 mr-3'>
                                <Link to='./admin_categories'>
                                    <button className='btn salon-orders-btn px-5 py-2 mr-2'>
                                        Go Back
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>


            <div className='container mt-5 pt-5'>
                <h1 className='orange text-center'>Men Salons</h1>
                <div>
                    <form className='search-salon-form mt-5'>
                        <label>Search Salon: &nbsp;</label>
                        <input type='text' placeholder='Enter Salon Name'/>
                        <button type="submit" className='search-salon-btn'>Search</button>
                    </form>
                </div>

                <div className='mt-4'>
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
                                <td>The Barber Shop</td>
                                <td>Gulshan block 1</td>
                                <td>0321-0001112</td>
                                <td>Best in Hair Cutting and Trimming Since 1990</td>
                                <td>
                                    <button className='sal-edit-btn' onClick={()=>setIsOpen(true)}>Edit </button>
                                        <Modal open={isOpen} onClose={()=>setIsOpen(false)}>
                                            <form>
                                                <input type='text' class="form-control mb-2" id='sal-name' name='sal-name' placeholder='Salon Name'/>
                                                <input type='text' class="form-control mb-2" id='sal-address' name='sal-address' placeholder='Salon Address'/>
                                                <input type='number' class="form-control mb-2" id='sal-phone' name='sal-phone' placeholder='Salon Phone'/>
                                                <input type='text' class="form-control mb-2" id='sal-description' name='sal-description' placeholder='Salon Description'/>
                                                <button type="submit" class="btn sal-service-update-btn">Update</button>
                                            </form>
                                        </Modal>
                                    <button className='sal-remove-btn'>Remove</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='mt-3 mb-2'>
                    <h4>Add Salon</h4>
                    <form className='add-salon-form mb-3'>
                        <input type="text" className="form-input mb-4" name="serviceName" required placeholder="Salon Name" />

                        <input type="text" className="form-input" name="serviceDescription" required placeholder="Salon Address" />

                        <input type="number" className="form-input" name="servicePrice" required placeholder="Salon Phone Number" />

                        <input type="text" className="form-input" name="serviceDescription" required placeholder="Salon Description" />

                        <span className='sal-img-span'>
                            <label>Upload Image: &nbsp;</label>
                            <input type="file" id="salon_image" name="salon_image"></input>
                        </span>
                        <button type="submit" className='add-salon-btn'>Add</button>
                    </form>
                </div>

            </div>
        </>
    );
};
export default AdminMenSalon;