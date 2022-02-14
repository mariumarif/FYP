import React from 'react';
import './bookappointment.css';

const BookAppointment = () => {
    return (
        <>
            <h1 class>Book Appointment</h1>
            <div className="container col-md-offset-4 login">
                <div className="col-sm-12 pt-4 text-left">
                    <label for="service">Select: Home Service/Go At Salon</label>
                    <div className="dropdown">
                        {/* <button className="btn  dropdown-toggle" type="button" data-toggle="dropdown">Select
                        <span className="caret"></span></button>
                        <ul className="dropdown-menu">
                        <li><a href="#">Home Service</a></li>
                        <li><a href="#">Go At Salon</a></li>
                        </ul> */}
                        <select className="form-select" aria-label="Default select example">
                            <option selected >Select&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option>
                            <option value="homeservice" id='homeservice'>Home Service </option>
                            <option value="goatsalon" id='goatsalon'>Go At Salon</option>
                        </select>
                    </div>
                </div>

                <div className="col-sm-12 pt-4 text-left">
                    <label for="specialInstructions">Special Instructions</label>
                    <textarea class="form-control" rows="4" id="specialInstructions" placeholder='Type your special instructions here'></textarea>
                </div>
                <div className="col-sm-12">
                    <button className="btn col-md-4 col-md-offset-4 btn login-btn mt-2" type="submit"> Submit
                    </button>
                </div>

            </div>
        </>
    )
}
export default BookAppointment;