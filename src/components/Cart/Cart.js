
import React, { useEffect, useState } from "react";
import "./Cart.css";
import logoo from "../../images/icon.png";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
const bookingFields = {
  salon_id: 1,
  user_id: 1,
  address: "",
  phoneNumber: "",
  message: "",
  total_amount: "",
  appointment_place: "",
  appointment_at: +new Date(),
  discount: 0,
  services: [],
};
const Cart = () => {
  const [services, setServices] = useState([]);
  const [storedNames, setStoredNames] = useState([]);
  const [cartData, setCartData] = useState([]);
  const [bookingData, setBookingData] = useState({ ...bookingFields });
    const salonId=JSON.parse(localStorage.getItem("salonId"))

  const getServices = async () => {
    //const response = await fetch('http://localhost:3000/services?id=1?salon_id'+"="+{id});
    const response = await axios.get(
      `http://localhost:3000/services?id=${salonId}`
    );
    debugger
    setServices(response.data);
    // console.log(data);
  };
  const handleBookAppointment = async () => {
    const { services, ...appointment } = bookingData;
    try {
      const resp = await axios.post("http://localhost:3000/appointment", {
        services,
        appointment,
      });
      if (resp?.data?.id) {
          const{total_amount,...bf}=bookingFields
        setBookingData(prev=>({...prev,...bf}));
        alert("Appoinment Booked Successfuly");
      }
    } catch (error) {
      console.log({ error });
    }
  };
  useEffect(() => {
    const storedNamesData = JSON.parse(localStorage.getItem("cartArray"));
    debugger
    setStoredNames(storedNamesData);
    getServices();
  }, []);

  useEffect(() => {
    const dataArray = [];
    // totalPayment = 0;
    // const parms= useParams()

    services?.map((service) => {

      const cartDataFlag = storedNames.includes(service.id);
      debugger
      if (cartDataFlag) {
        dataArray.push(service);
        // totalpayment = totalpayment + service.price
      }
    });
    setCartData(dataArray);

    setBookingData((prev) => ({
      ...prev,
      total_amount: dataArray.reduce((prev, curr) => prev + curr.charges, 0),
      services: dataArray.reduce((prev, curr) => [...prev, curr.id], []),
    }));
    // setTotalPayment(totalpayment);
  }, [storedNames, services]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingData((prev) => ({ ...prev, [name]: value }));
  };
const removeCart=(id)=>{
    const storedNamesData = JSON.parse(localStorage.getItem("cartArray"));
    const temp=storedNamesData.filter(x=>+x!==id)
    localStorage.setItem("cartArray",JSON.stringify(temp));
    debugger
    setStoredNames([...temp])
}
  return (
    <>
      <header className="fixed fixed-top">
        <div className="navbar-div">
          <nav className="navbar navbar-light">
            {/* <!-- Brand --> */}
            <Link to="./">
              <a className="navbar-brand ml-5" href="#">
                <img src={logoo} alt="" />
              </a>
            </Link>
            <Link className="cart-link" to="/Cart">
              <div class="cart-icon">
                <i className="fa fa-shopping-cart"></i>
                <p className="total-items">7</p>
              </div>
            </Link>
          </nav>
        </div>
      </header>

      <div className="main-div1">
        <div className=" div-left" id="deals">
          <h1 className="mb-5 mt-2 ml-5 pl-5 text-center orange">
            List Of Services
          </h1>
          {
            // services.filter(service=>{
            //     if(sto)
            // })
            services.map((service) => {
              // const DealExist = services.find((item)=>item.id === storedNames.map());
              // if(DealExist){
              // {(storedNames.map((item) =>(
              //     item == service.id
              // )))}
              // {
              //     {
              if (storedNames.includes(service.id)) {
                return (
                  <>
                    <div className="container">
                      {/* <div className="row"> */}
                      <div className="sal-crd card">
                        <div className="card-body">
                          <h5 className="card-title">{service.name}</h5>
                          {/* <p className="card-text">{service.description}
                                                        </p> */}
                          <h4>Rs.{service.charges}/-</h4>
                          {/* <button className="btn btn-add-to-cart" id={service.id}>+ Add To Cart</button> */}
                          <button className="btn btn-sm btn-danger" onClick={()=>removeCart(service.id)}>
                            Remove From cart
                          </button>
                        </div>
                      </div>
                      {/* </div> */}
                    </div>
                  </>
                );
              }
              //     }
              // }
              // {(storedNames.map((item) =>(
              //     item == service.id
              // )))}
              // return (
              //     <>
              //         <div className="container">
              //             <div className="row">
              //                 <div className="sal-card card">
              //                     <div className="card-body">
              //                         <h5 className="card-title">{service.title}</h5>
              //                         <p className="card-text">{service.desc}
              //                         </p>
              //                         <h4>{service.price}<button className="btn btn-add-to-cart" id={service.id}>+ Add To Cart</button></h4>

              //                     </div>
              //                 </div>
              //             </div>
              //         </div>
              //     </>
              // )
            })
          }
        </div>
        <div className="div-right">
          <div className="container booknow-form">
            {bookingData.appointment_place === "homeservice" && (
              <div className="col-sm-12 pt-4 text-left form-sets">
                <label for="service">Address:</label>
                <input
                  type="text"
                  className="form-control"
                  id="book-appointment-address"
                  name="address"
                  value={bookingData.address}
                  onChange={handleChange}
                />
              </div>
            )}
            <div className="col-sm-12 pt-4 text-left form-sets">
              <label for="service">Phone Number:</label>
              <input
                type="number"
                className="form-control"
                id="user-phone-number"
                name="phoneNumber"
                value={bookingData.phoneNumber}
                onChange={handleChange}
                placeholder="E.g: 0300-2223456"
              />
            </div>

            <div className="col-sm-12 pt-4 text-left form-sets">
              <label for="service">Select Service:</label>
              <div className="dropdown">
                <select
                  className="form-select sal-drpdown"
                  aria-label="Default select example"
                  name="appointment_place"
                  value={bookingData.appointment_place}
                  onChange={handleChange}
                >
                  {/* <option selected >Select</option> */}
                  <option value="goatsalon" id="homeservice">
                    Go At Salon{" "}
                  </option>
                  <option value="homeservice" id="goatsalon">
                    Home Service
                  </option>
                </select>
              </div>
            </div>

            <div className="col-sm-12 pt-4 text-left form-sets">
              <label for="specialInstructions">Special Instructions:</label>
              <textarea
                class="form-control"
                name="message"
                value={bookingData.message}
                onChange={handleChange}
                rows="4"
                id="specialInstructions"
                placeholder="Type your special instructions here"
              ></textarea>
            </div>

            <div className="col-sm-12 pt-4 text-left form-sets">
              <label for="service">Total Amount:</label>
              <input
                type="text"
                className="form-control"
                id="total-amount"
                name="total-amount"
                value={bookingData.total_amount}
                disabled
              />
            </div>

            <div className="col-sm-12  pb-4">
              <button
                className="btn col-md-8  btn login-btn mt-3"
                onClick={handleBookAppointment}
              >
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cart;
