import React,{useState,useEffect} from 'react';
import './homepage.css';
import unisex from '../../images/unisexPic.jpg';
import face from '../../images/face threading.png';
import logoo from '../../images/icon.png';
import womencat from '../../images/womencatt.jpg';
// import womencats from '../../images/womencats.jpg';
import mencat from '../../images/mencat.jpg';
import safe from '../../images/safe.png';
import moreabout from '../../images/moreabout.jpg';
import mancatt from '../../images/mancatt.jpg';
import background1 from '../../images/mencategory.jpg';
import nowaiting from '../../images/nowait.png';
import noneedtogo from '../../images/dontgo.png';
import discount from '../../images/disount.png';
import stayupdated from '../../images/stayupdated.png';
import barbershopbgimg from '../../images/barberbg.png'

import {
    BrowserRouter as Router,
    Switch, Route, Link,useParams
} from 'react-router-dom';
import test1 from '../../images/test-1-pic.png'

const Homepage = () => {
    const {id}=useParams();
    const [category, setCategory] = useState([]);
    const getCategory = async () => {
        const response = await fetch('http://localhost:3000/category');
        setCategory(await response.json());
        // console.log(data);
    }
    useEffect(() => {
        getCategory();
    }, []);

    return (
        <>
            <header className="fixed fixed-top">
                <div className="navbar-div">
                    <nav className="navbar navbar-light">
                        <Link to='./'>
                            <a className="navbar-brand ml-5" href="#">

                                <img src={logoo} alt="" />

                            </a>
                        </Link>
                        <div className='navbar-btns'>
                            {/* <!-- Login/Signup --> */}
                            <div className='login-signup mr-2'>
                                <Link to='/login'>
                                    <button className='btn login-signup-btn px-4 py-2 mt-3'>
                                        Login/Signup
                                    </button>
                                </Link>
                            </div>

                            {/* <!-- Join Us --> */}
                            <div className='join-btn my-3'>
                                <Link to='./joinus'>
                                    <button className='btn join-us-btn px-5 py-2 mr-2'>Join us!</button>
                                </Link>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
            {/* SECTION-1 */}
            <section id='header' className='d-flex align-items-center justify-content-lg-center mb-5'>
                <div className='container-fluid nav_bg'>
                    <div className='row'>
                        <div className='col-10 mx-auto'>
                            <div className='row mt-5 mb-5'>
                                <div className='col-md-6 pt-5 pt-lg-0 pt-md-0 pt-sm-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
                                    <h1>Grow your business with <strong className='brand-name'> Salon.Pk </strong></h1>
                                    <p className='my-3'>
                                        This is a digital platform for salon services.Here you can find different salons providing great
                                        services and also you can book an appointment for any service you want to avail of any salon of
                                        your choice.Pamper yourself with our full range of
                                        on-demand services.Salon.PK have expert beauticians who create a salon-like
                                        ambiance at home so you can enjoy elegant beauty services at home.Exclusively tension-free
                                        of timing and relief from traveling.
                                    </p>
                                    <div className='mt-3'>
                                        <Link to='./login'>
                                            <a href='' className='btn-get-started'>
                                                Get Started
                                            </a>
                                        </Link>
                                    </div>
                                </div>

                                <div className='col-lg-6 order-1 order-lg-2 header-img'>
                                    <img src={unisex} className='img-fluid animated' alt='home img' />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* MORE ABOUT */}
            <div className="container-fluid barberbg pt-4 pb-5" style={{ backgroundImage: `url(${barbershopbgimg})` }}>
                <h1 className='text-center py-3 mb-5'>MORE ABOUT<span className='orange'> SALON.PK </span></h1>
                <div className="row">
                    <div className="col-lg-6 col-12 m-auto ">
                        {/* <img src={mancatt} className='img-fluid' style={{ height: '400px' }} /> */}
                        <p className='pl-5 pr-5'>
                            Salon.Pk provides a full range of on-demand 'Home Salon Services' plus 'Salon services' for both men and women.
                            Our expert beauticians are trained to create a salon-like environment right in your home
                            so you can pamper and take time for yourself with Salon.Pk salon service. Absolutely, free of
                            hassle and save your time.ALso it books your appointment online to provide the hustle of waiting and you
                            can just go and get your services done directly.
                        </p>
                    </div>
                    <div className="col-lg-6 col-12">
                        

                        <div className="xts-icon-content">
                            <div>
                                <img alt="100% safe for your skin and hai" src={safe} />
                            </div>
                            <div>
                                <h5>100% Safe For Your Skin And Hair</h5>
                                <p>Our in-house expert beauticians use high-quality and imported products that are 100% safe for your skin and hair. With Kam Kaj home salon service there is no compromise.</p>
                            </div>
                        </div>
                        <div className="xts-icon-content">
                            <div>
                                <img alt="100% safe for your skin and hai" src={safe} />
                            </div>
                            <div>
                                <h5>100% Safe For Your Skin And Hair</h5>
                                <p>Our in-house expert beauticians use high-quality and imported products that are 100% safe for your skin and hair. With Kam Kaj home salon service there is no compromise.</p>
                            </div>
                        </div>
                        <div className="xts-icon-content">
                            <div>
                                <img alt="100% safe for your skin and hai" src={safe} />
                            </div>
                            <div>
                                <h5>100% Safe For Your Skin And Hair</h5>
                                <p>Our in-house expert beauticians use high-quality and imported products that are 100% safe for your skin and hair. With Kam Kaj home salon service there is no compromise.</p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>


            {/* SECTION-2 */}
            <div className="container p-5">
                <h1 className='text-center py-5'>SALON.PK <span className='orange'> BENEFITS</span></h1>

                <div className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3">
                    <div className="col mb-1">
                        <div className="card h-100 shadow-sm card-services card-benefits">
                            <div className="text-center">
                                <div className="img-hover-zoom img-hover-zoom--colorize">
                                    <img className="shadow" src={nowaiting}
                                        alt="Another zoom-on-hover effect" />
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="clearfix mb-3">
                                </div>
                                <div className="mb-3">
                                    <h2 className="text-uppercase text-center role">
                                        No need to wait for your turn at salons
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-1">
                        <div className="card h-100 shadow-sm card-benefits">
                            <div className="text-center">
                                <div className="img-hover-zoom img-hover-zoom--colorize">
                                    <img className="shadow" src={noneedtogo}
                                        alt="Another Image zoom-on-hover effect" />
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="clearfix mb-3">
                                </div>
                                <div className="mb-3">
                                    <h2 className="text-uppercase text-center role">No need to go to Salon. Book Home Appointment Now. </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-1">
                        <div className="card h-100 shadow-sm card-benefits">
                            <div className="text-center">
                                <div className="img-hover-zoom img-hover-zoom--colorize">
                                    <img className="shadow" src={discount}
                                        alt="Another Image zoom-on-hover effect" />
                                </div>
                            </div>

                            <div className="card-body">
                                <div className="clearfix mb-3">

                                </div>
                                <div className="mb-3">
                                    <h2 className="text-uppercase text-center role">Save Money <br /> Get Huge Discounts</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-1">
                        <div className="card h-100 shadow-sm card-benefits">
                            <div className="text-center">
                                <div className="img-hover-zoom img-hover-zoom--colorize">
                                    <img className="shadow" src={stayupdated}
                                        alt="" />
                                </div>
                            </div>

                            <div className="card-body">
                                <div className="clearfix mb-3">

                                </div>
                                <div className="mb-3">
                                    <h2 className="text-uppercase text-center role">Get Updated By the Nearby Top Salons</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='container'>
                <div className='row text-center'>
                    <div className='col-10 mx-auto py-5'>
                        <h1>SALON <span className='orange'> CATEGORIES</span></h1>
                        <p className='text-center mb-2'>Which salon category would you like to choose further?</p>
                    </div>
                </div>
                <div className='row mb-5'>
                    <div className='col-lg-6 col-sm-12 cardimg'>
                        <Link to="/mencategories">
                            <h1 className='mycard men-cat-card'  style={{ backgroundImage: `url(${background1})` }}>
                                MEN
                            </h1>
                        </Link>
                    </div>

                    <div className='col-lg-6 col-sm-12'>
                    <Link to='./womencategories'>
                        <h1 className='text-center mycard women-cat-card' style={{ backgroundImage: `url(${background1})` }}>
                            WOMEN
                        </h1>
                    </Link>
                    </div>
                </div>
            </div>


            {/* SECTION-4 */}
            {/* <!-- Accordion --> */}
            <div className="container-fluid bg-gray bg-img-2" id="accordion-style-1">
                <div className="container">
                    <section className='section-faq mt-5'>
                        <div className="row">
                            <div className="col-12">
                                <h1 className="pb-5 text-center pt-5" >FREQUENTLY ASKED <span className='orange'> QUESTIONS</span></h1>
                            </div>
                            <div className="col-10 mx-auto">
                                <div className="accordion" id="accordionExample">
                                    <div className="card">
                                        <div className="card-header" id="headingOne">
                                            <h5 className="mb-0">
                                                <button className="btn btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    <i className="fa fa-angle-double-right mr-3"></i>How to pay amazon.
                                                    <i className="fa fa-plus mr-3 right"></i>
                                                </button>
                                            </h5>
                                        </div>

                                        <div id="collapseOne" className="collapse show fade" aria-labelledby="headingOne" data-parent="#accordionExample">
                                            <div className="card-body">
                                                thetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="headingTwo">
                                            <h5 className="mb-0">
                                                <button className="btn collapsed btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    <i className="fa fa-angle-double-right mr-3"></i>There are many more.
                                                    <i className="fa fa-plus mr-3 right"></i>
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapseTwo" className="collapse fade" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                            <div className="card-body">
                                                thetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="headingThree">
                                            <h5 className="mb-0">
                                                <button className="btn collapsed btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                    <i className="fa fa-angle-double-right mr-3"></i>
                                                    <i className="fa fa-plus mr-3 right"></i>How to enable two factor authentication.
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapseThree" className="collapse fade" aria-labelledby="headingThree" data-parent="#accordionExample">
                                            <div className="card-body">
                                                thetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="headingFour">
                                            <h5 className="mb-0">
                                                <button className="btn collapsed btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                    <i className="fa fa-angle-double-right mr-3"></i>How to contact us.
                                                    <i className="fa fa-plus mr-3 right"></i>
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapseFour" className="collapse fade" aria-labelledby="headingFour" data-parent="#accordionExample">
                                            <div className="card-body">
                                                thetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            


            <div className='container'>
                <h1 className='text-center py-5 mt-5'>WHAT PEOPLE SAY ABOUT  <span className='orange'> SALON.PK</span></h1>
            </div>
            <div className="container-fluid test-con">
                <div id="demo" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="carousel-caption">
                                <p>Very convenient and their beauticians are highly professional. They are providing the best services with all
                                    the SOPs, highly recommended!</p> <img src="https://i.imgur.com/lE89Aey.jpg" />
                                <div id="image-caption">Nick Doe</div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="carousel-caption">
                                <p>Pretty much satisfied with the waxing services, excellent service within the comfort of my home, would surely
                                    recommend for salon services.</p> <img src="https://i.imgur.com/QptVdsp.jpg" className="img-fluid" />
                                <div id="image-caption">Cromption Greves</div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="carousel-caption">
                                <p>The massage was incredible, therapist were amazing and punctual. I am highly satisfied and ready to take more</p> <img src="https://i.imgur.com/jQWThIn.jpg" className="img-fluid" alt="" />
                                <div id="image-caption">Harry Mon</div>
                            </div>
                        </div>
                    </div> <a className="carousel-control-prev" href="#demo" data-slide="prev"> <i className='fa fa-arrow-left'></i> </a> <a className="carousel-control-next" href="#demo" data-slide="next"> <i className='fa fa-arrow-right'></i> </a>
                </div>
            </div>


            {/* FOOTER */}
            <div className='container-fluid footer'>
                <div className='row'>
                    <div className='col-lg-12 col-12 text-center py-5'>
                        <h4>Connect with Salon.Pk</h4>
                        <i className="fa fa-facebook fa-2x mr-3 mt-2" />
                        <i className="fa fa-instagram fa-2x mr-3 mt-2" />
                        <i className="fa fa-twitter mr-3 fa-2x mt-2" />

                        <p className='mt-3'>+92 333 4890877</p>

                        <p>info@gmail.com</p>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Homepage;