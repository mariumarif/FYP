import React from 'react';
import './joinus.css';
import logoo from '../../images/icon.png';
import { Link } from 'react-router-dom';

const joinus = () => {
    return (
        <>
            <header className="fixed fixed-top">
                <div className="navbar-div">
                    <nav className="navbar navbar-light">
                        {/* <!-- Brand --> */}
                        <Link to='./'>
                            <a className="navbar-brand ml-5" href="#">

                                <img src={logoo} alt="" />

                            </a>
                        </Link>
                        <div className='navbar-btns'>
                            {/* <!-- Login/Signup --> */}
                            <div className='login-signup mr-2'>
                                <Link to='./login'>
                                    <button className='btn login-signup-btn px-4 py-2 mt-3'>
                                        Login/Signup
                                    </button>
                                </Link>
                            </div>

                            {/* <!-- Join Us --> */}
                            {/* <div className='join-btn my-3'>
                                <Link to='./joinus'>
                                    <button className='btn join-us-btn px-5 py-2 mr-2'>Join us!</button>
                                </Link>
                            </div> */}
                        </div>
                    </nav>
                </div>
            </header>

            <br />
            <div className='container salon-registration-form'>
                <h1 className='register-heading text-center mt-5'>Registraton Form</h1>

                <form className='reg-form'>
                    <div className="form-group">
                        <label for="salonname">Salon Name:</label>
                        <input type="text" className="form-control" id="salonname" required />
                    </div>
                    <div className="form-group">
                        <label for="email">Email address:</label>
                        <input type="email" className="form-control" id="email" required />
                    </div>
                    <div className="form-group">
                        <label for="pwd">Password:</label>
                        <input type="password" className="form-control" id="pwd" required />
                    </div>
                    <div className="form-group">
                        <label for="salonphone">Phone:</label>
                        <input type="number" className="form-control" id="salonphone" required />
                    </div>
                    <div className="form-group">
                        <label for="salonname">Salon Address:</label>
                        <input type="text" className="form-control" id="salonaddress" required />
                    </div>
                    <div className="form-group">
                        <label for="salonImage">Salon Image:</label>
                        <br />
                        <input type="file" id="salonImage" name="salonImage" />
                    </div>

                    <div className='text-center'>
                        <button type="submit" className="btn w-25 registration-form-submit-button">Submit</button>
                    </div>
                </form>

            </div>
        </>
    )
}
export default joinus;