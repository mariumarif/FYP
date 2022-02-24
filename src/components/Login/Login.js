import React, { useState, useEffect } from 'react';
import './login.css';
import logoo from '../../images/icon.png';
import { Link } from 'react-router-dom';
import SignUp from '../SignUp/SignUp';
import axios from "axios"
import background1 from '../../images/mencategory.jpg';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  async function loginUser(e) {
    e.preventDefault();
    console.log(email, password);
    let data = { email, password };
    const res = await axios.post("http://localhost:3000/login", data)
    console.log({ res });
    if (res?.data?.token) {
      localStorage.setItem('user', JSON.stringify(res?.data?.user));
      localStorage.setItem('salon', JSON.stringify(res?.data?.salon));

      switch (res?.data?.user?.user_type) {
        case 1:
          history.push('/admin_categories')
          break;
        
        case 3:
          history.push('/salon_info');
          break;
      
        default:
          history.push('/')
          break;
      }
    }
  }
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

      {/* <!-- Sign in --> */}
      <div class="main-div d-flex " style={{ backgroundImage: `url(${background1})` }}>
        <div className="container col-md-offset-4 login">
          <h1 className='signin-heading'>Log <span className='orange'>In</span></h1>
          <form onSubmit={loginUser} action='./categories/Categories.js'>
            <div className="col-sm-12 mt-4 text-left">
              <label>Email:</label>
              <input type="email" className="form-control" value={email} onChange={(e) => { setEmail(e.target.value) }} id="email" placeholder="Email" name="email" required />
            </div>
            <div className="col-sm-12  pt-2 mb-3 text-left">
              <label>Password:</label>
              <input type="password" className="form-control" value={password} onChange={(e) => { setPassword(e.target.value) }} id="password" placeholder="Password" name="password" required />
            </div>


            <div className="col-sm-12">
              <button className="btn col-md-4 col-md-offset-4 btn login-btn mt-3" type="submit"> Log In
              </button>
            </div>
            <br></br>

            <Link to='./signup'>
              <div className="col-sm-12">
                New User? Sign Up Here
              </div>
            </Link>
          </form>
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
};
export default Login;