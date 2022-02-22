import React, { useState, useEffect } from 'react';
import tbs from '../../images/TBS.jpg';
import './mansalons.css';
import icon from '../../images/icon.png';
import { Link } from 'react-router-dom';

let cartArray = [];

const ManSalons = () => {

    const [cartItems, setCartItems] = useState([]);
    const handleId = (e) => {
        // console.log(e.target.id);
        cartArray.push(e.target.id);
        // let options = {
        //     method: "POSt",body: [...cartArray]
        // }
        // fetch()URL, options
        // console.log(cart);
        localStorage.setItem("cartArray", JSON.stringify(cartArray));
        //         var storedNames = JSON.parse(localStorage.getItem("cart"));
        // console.log(storedNames)
        //console.log(e.currentTarget.id);
    }

    // ADD TO CART
    // const [services, setServices] = useState([]);

    // const getServices = async () => {
    //     const response = await fetch('http://localhost:5000/services');
    //     setServices(await response.json());

    // }

    // useEffect(() => {
    //     getServices();
    // }, []);
    // ADD TO CART


    const [services, setServices] = useState([]);
    const getServices = async () => {
        const response = await fetch('http://localhost:3000/services?id=1');
        setServices(await response.json());
        // console.log(data);

    }

    useEffect(() => {
        getServices();
    }, []);

    const [salons, setSalons] = useState([]);
    const getSalons = async () => {
        const response = await fetch('http://localhost:3000/salons?id=1');
        setSalons(await response.json());
        // console.log(data);
    }

    useEffect(() => {
        getSalons();
    }, []);
    
    return (
        <>
            {/* <button id="yourID" onClick={handleId}>Button</button> */}
            {/* <!-- Navbar --> */}
            <header className="fixed">
                <div className="navbar-div">
                    <nav class="navbar navbar-light">
                        {/* <!-- Brand --> */}
                        <Link to="./">
                            <a className="navbar-brand ml-5" href="#">
                                <img src={icon} alt="" />
                            </a>
                        </Link>
                        <Link className='cart-link' to='/Cart'>
                            <div class="cart-icon">
                                <i className="fa fa-shopping-cart"></i>
                                <p className="total-items">{JSON.parse(localStorage.getItem('cartArray')).length}</p>
                            </div>
                        </Link>
                    </nav>
                </div>
            </header>

            {/* <!-- Saloon Image & Description--> */}

            <div class="div1">
                <img class="salon-main-img" src={tbs} alt="Salon" />
                <div class="container salon-title">
                    {
                            salons.map((salon) => {
                                // const { }=user;  
                                return(
                    <>
                        <h1 class="salon-title">{salon.name}</h1>
                        <div class="container-fluid">
                        {/* <p class="salon-category">Men's Salon<span class="salon-info">Salon Information</span></p> */}
                        <p class="salon-category">{salon.description}<span class="salon-info">Salon Information</span></p>
                        <p class="salon-location"><b>Address:</b> {salon.address}<span class="rating"><i
                            class="fa fa-star"></i><b>4.4/5</b>(435)</span></p>
                            <p><span class="salon-info">Timings: {salon.timings}</span></p>
                    </div>
                    <div class="container">
                        <button type="button" class="btn info-btn"><i class="fa fa-location-arrow"
                        ></i>&nbsp; Directions</button>
                        <button type="button" class="btn info-btn"><i class="fa fa-comments"></i>&nbsp;
                            Reviews</button>
                        <button type="button" class="btn info-btn"><i class="fa fa-share-square"
                        ></i>&nbsp; Share</button>
                        <button type="button" class="btn info-btn"><i class="fa fa-heart"></i>&nbsp; Add To
                            Favourites</button>
                    </div>
                    </>)})
}
                </div>

                <div className="breaker"></div>


                {/* <!-- About Us --> */}
                <div className="container">
                    <h2>About Us</h2>
                    <div className="container">
                        <p>TBS have been at the forefront of mens grooming, and have set the agenda for style-conscious
                            gentleman in Karachi.
                            Our focus on empowering gentleman to look and feel fantastic every day.
                            {/* <br> */}
                            We are the barbers. Focus on the wellness and dapperness of the modern gentlemen.
                            Tbs combines the comfort behind traditional barbershops with the modern conveniences of a full
                            service salon.
                        </p>
                    </div>
                </div>
                <div className="breaker">

                </div>


                {/* <!-- Services --> */}
                <div className="container">
                    {/* <!-- <h2>Services</h2> -->

            <!-- Navbar --> */}
                    <div className="navbar-container bg-light">
                        <div className="container nav-con">
                            <nav className="navbar navbar-expand-lg navbar-light mansalonnav">
                                <a className="navbar-brand">Services:</a>
                                <button className="navbar-toggler" type="button" data-toggle="collapse"
                                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                                    aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>


                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav mr-auto salon-navbar">
                                        <li className="nav-item">
                                            <a className="nav-link" href="#deals"><i className="fa fa-percent"></i> Deals <span className="sr-only">(current)</span></a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#hair-cuts">Hair Cuts</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#beard-styles">Beard Styles</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#facials">Facials</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#hair-colors">Hair Colors</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#hair-treatments">Hair Treatments</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#massage">Massage</a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>

                    {/* <!-- Deals --> */}
                    <div className="container" id="deals">
                        <h2> Deals</h2>
                        {
                            services.map((service) => {
                                // const { }=user;  
                                return (
                                    <>

                                        <div className="container">
                                            <div className="row">
                                                <div className="sal-card card">
                                                    <div className="card-body">
                                                        <h5 className="card-title">{service.name}</h5>
                                                        <p className="card-text">{service.description}
                                                        </p>
                                                        <h4>Rs.{service.charges}/-<button className="btn btn-add-to-cart" id={service.id} onClick={handleId(service)}>+ Add To Cart</button></h4>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            }
                            )
                        }
                    </div>
                    {/* <div className="container" id="deals">
              
                </div> */
                    }


                    {/* <!-- Hair Cut --> */}
                    <div className="container" id="hair-cuts">
                        <h2>Hair Cuts</h2>
                        <div className="container">
                            <div className="row">
                                <div className="sal-card card">
                                    <div className="card-body">
                                        <h5 className="card-title">Baby Hair Cut</h5>
                                        <p className="card-text">Professional Hair Cut with extra care for small babies and new borns
                                        </p>
                                        <h4>Rs.149/-<a href="#" className="btn btn-add-to-cart" id="07" onClick={handleId}>+ Add To Cart</a></h4>

                                    </div>
                                </div>
                                <div className="sal-card card">
                                    <div className="card-body">
                                        <h5 className="card-title">Men Hair Cut</h5>
                                        <p className="card-text">Professional Hair Cut done by our top stylist + Hair Styling
                                        </p>
                                        <h4>Rs.299/-<a href="#" className="btn btn-add-to-cart" id="08" onClick={handleId}>+ Add To Cart</a></h4>

                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="sal-card card">
                                    <div className="card-body">
                                        <h5 className="card-title">Bald</h5>
                                        <p className="card-text"> Bald Hair Cut by Professionals
                                        </p>
                                        <h4>Rs.199/-<a href="#" className="btn btn-add-to-cart" id="09" onClick={handleId}>+ Add To Cart</a></h4>

                                    </div>
                                </div>
                                <div className="sal-card card">
                                    <div className="card-body">
                                        <h5 className="card-title">Deal 4</h5>
                                        <p className="card-text">Professional Hair Cut + Hair Wash + Hair Protein + Hair Styling + Face Massage
                                            + Whitening Scrub + Face Whitening Double Action + Styling Beard/Shave + Cool Towel
                                        </p>
                                        <h4>Rs.849/-<a href="#" className="btn btn-add-to-cart" id="10" onClick={handleId}>+ Add To Cart</a></h4>

                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>

                    {/* <!-- Beard Style --> */}
                    <div className="container" id="beard-styles">
                        <h2>Beard Styles</h2>
                        <div className="container">
                            <div className="row">
                                <div className="sal-card card">
                                    <div className="card-body">
                                        <h5 className="card-title">Clean Shave</h5>
                                        <p className="card-text">Neat and Clean Look by highly Professionals
                                        </p>
                                        <h4>Rs.199/-<a href="#" className="btn btn-add-to-cart">+ Add To Cart</a></h4>

                                    </div>
                                </div>
                                <div className="sal-card card">
                                    <div className="card-body">
                                        <h5 className="card-title">Beard Trimming</h5>
                                        <p className="card-text">Professional Beard Cut done by our top stylist + Beard Shampoo
                                        </p>
                                        <h4>Rs.299/-<a href="#" className="btn btn-add-to-cart">+ Add To Cart</a></h4>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Facials --> */}
                    <div className="container" id="facials">
                        <h2>Facials</h2>
                        <div className="container">
                            <div className="row">
                                <div className="sal-card card">
                                    <div className="card-body">
                                        <h5 className="card-title">Whitening Facial</h5>
                                        <p className="card-text">Neat and Clean Look by highly Professionals
                                        </p>
                                        <h4>Rs.199/-<a href="#" className="btn btn-add-to-cart">+ Add To Cart</a></h4>

                                    </div>
                                </div>
                                <div className="sal-card card">
                                    <div className="card-body">
                                        <h5 className="card-title">Beauty Facial</h5>
                                        <p className="card-text">Professional Beard Cut done by our top stylist + Beard Shampoo
                                        </p>
                                        <h4>Rs.299/-<a href="#" className="btn btn-add-to-cart">+ Add To Cart</a></h4>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Hair Colors --> */}
                    <div className="container">
                        <h2 id="hair-colors">Hair Colors</h2>
                        <div className="container">
                            <div className="row">
                                <div className="sal-card card">
                                    <div className="card-body">
                                        <h5 className="card-title">Color 1</h5>
                                        <p className="card-text">Neat and Clean Look by highly Professionals
                                        </p>
                                        <h4>Rs.199/-<a href="#" className="btn btn-add-to-cart">+ Add To Cart</a></h4>

                                    </div>
                                </div>
                                <div className="sal-card card">
                                    <div className="card-body">
                                        <h5 className="card-title">Color 2</h5>
                                        <p className="card-text">Professional Beard Cut done by our top stylist + Beard Shampoo
                                        </p>
                                        <h4>Rs.299/-<a href="#" className="btn btn-add-to-cart">+ Add To Cart</a></h4>

                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="sal-card card">
                                    <div className="card-body">
                                        <h5 className="card-title">Color 3</h5>
                                        <p className="card-text">Neat and Clean Look by highly Professionals
                                        </p>
                                        <h4>Rs.199/-<a href="#" className="btn btn-add-to-cart">+ Add To Cart</a></h4>

                                    </div>
                                </div>
                                <div className="sal-card card">
                                    <div className="card-body">
                                        <h5 className="card-title">Color 4</h5>
                                        <p className="card-text">Professional Beard Cut done by our top stylist + Beard Shampoo
                                        </p>
                                        <h4>Rs.299/-<a href="#" className="btn btn-add-to-cart">+ Add To Cart</a></h4>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Hair Treatments --> */}
                    <div className="container" id="hair-treatments">
                        <h2>Hair Treatments</h2>
                        <div className="container">
                            <div className="row">
                                <div className="sal-card card">
                                    <div className="card-body">
                                        <h5 className="card-title">Treatment 1</h5>
                                        <p className="card-text">Neat and Clean Look by highly Professionals
                                        </p>
                                        <h4>Rs.199/-<a href="#" className="btn btn-add-to-cart">+ Add To Cart</a></h4>

                                    </div>
                                </div>
                                <div className="sal-card card">
                                    <div className="card-body">
                                        <h5 className="card-title">Treatment 2</h5>
                                        <p className="card-text">Professional Beard Cut done by our top stylist + Beard Shampoo
                                        </p>
                                        <h4>Rs.299/-<a href="#" className="btn btn-add-to-cart">+ Add To Cart</a></h4>

                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="sal-card card">
                                    <div className="card-body">
                                        <h5 className="card-title">Treatment 3</h5>
                                        <p className="card-text">Neat and Clean Look by highly Professionals
                                        </p>
                                        <h4>Rs.199/-<a href="#" className="btn btn-add-to-cart">+ Add To Cart</a></h4>

                                    </div>
                                </div>
                                <div className="sal-card card">
                                    <div className="card-body">
                                        <h5 className="card-title">Treatment 4</h5>
                                        <p className="card-text">Professional Beard Cut done by our top stylist + Beard Shampoo
                                        </p>
                                        <h4>Rs.299/-<a href="#" className="btn btn-add-to-cart">+ Add To Cart</a></h4>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Massage --> */}
                    <div className="container" id="massage">
                        <h2>Massage</h2>
                        <div className="container">
                            <div className="row">
                                <div className="sal-card card">
                                    <div className="card-body">
                                        <h5 className="card-title">Full BodyMassage</h5>
                                        <p className="card-text">Neat and Clean Look by highly Professionals
                                        </p>
                                        <h4>Rs.1999/-<a href="#" className="btn btn-add-to-cart">+ Add To Cart</a></h4>

                                    </div>
                                </div>
                                <div className="sal-card card">
                                    <div className="card-body">
                                        <h5 className="card-title">Hair Massage</h5>
                                        <p className="card-text">Professional Beard Cut done by our top stylist + Beard Shampoo
                                        </p>
                                        <h4>Rs.499/-<a href="#" className="btn btn-add-to-cart">+ Add To Cart</a></h4>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            <div className="last"></div>
        </>
    )
}
export default ManSalons;
{/* <div className='container' key={user.id}>
<Link to={`/mansalons/${user.id}`}></Link> */}