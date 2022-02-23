import React, { useEffect, useState } from "react";
import "./Categories.css";
import { useParams, Link } from "react-router-dom";
import logoo from "../../images/icon.png";
import background1 from '../../images/mencategory.jpg';
// import bg from '../../images/bgsalcat.jpg'
const Categories = () => {
    return (
        <>
          <header className="fixed fixed-top heeed">
            <div className="navbar-div">
              <nav className="navbar navbar-light">
                {/* <!-- Brand --> */}
                <Link to="../">
                  <a className="navbar-brand ml-5" href="#">
                    <img src={logoo} alt="" />
                  </a>
                </Link>
              </nav>
            </div>
          </header>
          <div className=' main-background' >
                <div className='row text-center pt-5'>
                    <div className='col-10 mx-auto py-5'>
                        <h1 className="salhea">SALON <span className='orange '> CATEGORIES</span></h1>
                    </div>
                </div>
                <div className='row mb-5 cd-1 gutter-0'>
                    <div className='offset-1 col-lg-5 col-sm-12 cardimg'>
                        <Link to="/mencategories">
                            <h1 className='mycard men-cat-card'  style={{ backgroundImage: `url(${background1})` }}>
                                MEN
                            </h1>
                        </Link>
                    </div>

                    <div className='col-lg-5 col-sm-12 cd-2'>
                    <Link to='/womencategories'>
                        <h1 className='text-center mycard women-cat-card' style={{ backgroundImage: `url(${background1})` }}>
                            WOMEN
                        </h1>
                    </Link>
                    </div>
                </div>
            </div>
        </>
  );
};
export default Categories;