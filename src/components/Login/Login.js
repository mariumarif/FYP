import React, { useState, useEffect } from 'react';
import './login.css';
import logoo from '../../images/icon.png';
import { Link } from 'react-router-dom';
import SignUp from '../SignUp/SignUp';
import axios from "axios"
import background1 from '../../images/mencategory.jpg';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function loginUser() {
    console.log(email, password);
    let data = { email, password };
    const res = await axios.post("http://localhost:3000/login", data)
    console.log({ res });
    // <Link to='./'></Link>
    
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
              {/* <!-- Login/Signup --> */}
              {/* <div className='login-signup mr-2'>
                                <Link to='./login'>
                                    <button className='btn login-signup-btn px-4 py-2 mt-3'>
                                        Login/Signup
                                    </button>
                                </Link>
                            </div> */}

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
          <form onSubmit={loginUser} action='./'>
          <div className="col-sm-12 mt-4 text-left">
          <label>Email:</label>
            <input type="email" className="form-control" value={email} onChange={(e) => { setEmail(e.target.value) }} id="email" placeholder="Email" name="email" required />
          </div>
          <div className="col-sm-12  pt-2 mb-3 text-left">
          <label>Password:</label>
            <input type="password" className="form-control" value={password} onChange={(e) => { setPassword(e.target.value) }} id="password" placeholder="Password" name="password" required />
          </div>

          {/* <div className="col-sm-12 pt-3 pb-4 text-left">
          <input type="checkbox" id="Remember" name="Remember" value="Remember" className='text-left' />
          <label for="Remember" className='pl-1'>Remember me</label>
         </div> */}
          <div className="col-sm-12">
            
            <button className="btn col-md-4 col-md-offset-4 btn login-btn mt-3"  type="submit"> Submit
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
    </>
  )
};
export default Login;