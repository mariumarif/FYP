import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
            {/* <p>{storedNames}</p> */}

            <div className="container" id="deals">
                <h1>List Of Services</h1>
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
                                                <div className="row">
                                                    <div className="sal-card card">
                                                        <div className="card-body">
                                                            <h5 className="card-title">{service.name}</h5>
                                                            {/* <p className="card-text">{service.description}
                                                        </p> */}
                                                            <h4>Rs.{service.charges}/-</h4>
                                                            {/* <button className="btn btn-add-to-cart" id={service.id}>+ Add To Cart</button> */}
                                                        </div>
                                                    </div>
                                                </div>
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
        </>
    )

};
export default Cart