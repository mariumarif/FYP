import React, { useEffect, useState } from 'react';
import "./Cart.css";
import logoo from '../../images/icon.png';
import { useParams,Link } from 'react-router-dom';

const Cart = () => {

    const [services, setServices] = useState([]);
    const [storedNames, setStoredNames] = useState([]);
    const [cartData, setCartData] = useState([]);

    const getServices = async () => {
        //const response = await fetch('http://localhost:3000/services?id=1?salon_id'+"="+{id});
        const response = await fetch('http://localhost:3000/services?id=1?salon_id=1');
        setServices(await response.json());
        // console.log(data);
    }

    useEffect(() => {
        const storedNamesData = JSON.parse(localStorage.getItem("cartArray"));
        setStoredNames(storedNamesData);
        getServices();
    }, []);

    useEffect(() => {
        const dataArray = [];
        // totalPayment = 0;
        // const parms= useParams()
        
        services.map(service => {
            const cartDataFlag = storedNames.includes(service.id.toString())
            if (cartDataFlag) {
                dataArray.push(service)
                // totalpayment = totalpayment + service.price
            }
        })
        setCartData(dataArray);
        // setTotalPayment(totalpayment);
    }, [storedNames, services]);



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
                        <Link className='cart-link' to='/Cart'>
                                <div class="cart-icon">
                                    <i className="fa fa-shopping-cart"></i>
                                    <p className="total-items">7</p>
                                </div>
                            </Link>
                        
                    </nav>
                </div>
            </header>



            <div className='main-div1'>
                <div className=" div-left" id="deals">
                    <h1 className='mb-5 mt-2 ml-5 pl-5 text-center orange'>List Of Services</h1>
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
                            {
                                {
                                    if (storedNames.includes(service.id.toString())) {
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
                                                            <button className='btn btn-sm btn-danger'>Remove From cart</button>
                                                        </div>
                                                    </div>
                                                    {/* </div> */}
                                                </div>
                                            </>
                                        )
                                    }
                                }
                            }
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

                        }
                        )
                    }
                </div>
                <div className='div-right'>
                    <div className="container booknow-form">


                        <div className="col-sm-12 pt-4 text-left form-sets">
                            <label for="service">Address:</label>
                            <input type="text" className="form-control" id="book-appointment-address" name="book-appointment-address" />
                        </div>
                        <div className="col-sm-12 pt-4 text-left form-sets">
                            <label for="service">Phone Number:</label>
                            <input type="number" className="form-control" id="user-phone-number" name="user-phone-number" placeholder='E.g: 0300-2223456' />
                        </div>

                        <div className="col-sm-12 pt-4 text-left form-sets">
                            <label for="service">Select Service:</label>
                            <div className="dropdown">
                                <select className="form-select sal-drpdown" aria-label="Default select example">
                                    {/* <option selected >Select</option> */}
                                    <option value="homeservice" id='homeservice'>Go At Salon </option>
                                    <option value="goatsalon" id='goatsalon'>Home Service</option>
                                </select>
                            </div>
                        </div>

                        <div className="col-sm-12 pt-4 text-left form-sets">
                            <label for="specialInstructions">Special Instructions:</label>
                            <textarea class="form-control" rows="4" id="specialInstructions" placeholder='Type your special instructions here'></textarea>
                        </div>

                        <div className="col-sm-12 pt-4 text-left form-sets">
                            <label for="service">Total Amount:</label>
                            <input type="text" className="form-control" id="total-amount" name="total-amount" disabled />
                        </div>

                        <div className="col-sm-12  pb-4">
                            <button className="btn col-md-8  btn login-btn mt-3" type="submit">
                                Book Appointment
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )

};
export default Cart;

        {/*/////////////////////////////////  */}
//             <div className="container" id="deals">
//                 <h1>List Of Services</h1>
//                 {
//                     services.map((service) => {
//                         {
//                             {
//                                 if (storedNames.includes(service.id.toString())) {
//                                     return (
//                                         <>
//                                             <div className="container">
//                                                 <div className="row">
//                                                     <div className="sal-card card">
//                                                         <div className="card-body">
//                                                             <h5 className="card-title">{service.name}</h5>
//                                                             <h4>Rs.{service.charges}/-</h4>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </>
//                                     )
//                                 }
//                             }
//                         }
//                     }
//                     )
//                 }
//             </div>
//         </>
//     )

// };
// export default Cart