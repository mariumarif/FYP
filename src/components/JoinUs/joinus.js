import React, { useState } from "react";
import './joinus.css'
import logoo from "../../images/icon.png";
import { Link } from "react-router-dom";
import axios from "axios";
import background1 from '../../images/mencategory.jpg';
import { useHistory } from "react-router-dom";
import useIsUser from "../../useUser";
import logout from "../../handlers";

const JoinUs = () => {

  const history = useHistory();
  const [refresh, setRefresh] = useState(false);
  const isUser = useIsUser();

  const [data, setData] = useState({
    name: "",
    email: "",
    pwd: "",
    salonphone: "",
    category_id: "1",
    address: "",
    salonImage: "",
  });

  const handleChange = (e) => {
    const { value, id } = e.target;

    setData((prev) => ({ ...prev, [id]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({
      data,
    });
    try {
      const { email, pwd, ...d } = data
      const user = {
        email: email,
        password: pwd,
        user_type: 3
      }
      const resp = await axios.post(" http://localhost:3000/salons", { user, salon: { ...d } });
      if (resp.status === 201) {
        alert("Created");
        e.target.reset();
      }

    } catch (error) { }
  };
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
            <div className="navbar-btns">
              {/* <!-- Login/Signup --> */}
              <div className='login-signup mr-2'>
                {!isUser ? <Link to='/login'>
                  <button className='btn login-signup-btn px-4 py-2 mt-3'>
                    Login/Signup
                  </button>
                </Link> : <button onClick={() => { logout(history); setRefresh(x => !x) }} className='btn login-signup-btn px-4 py-2 mt-3'>
                  Sign Out
                </button>}
              </div>
            </div>
          </nav>
        </div>
      </header>
      <div class="main-divv d-flex " style={{ backgroundImage: `url(${background1})` }}>

        <br />
        <div className="container salon-registration-form">
          <form className="reg-form" onSubmit={handleSubmit}>
            <h1 className="register-heading text-center pt-3 pb-2">Registraton <span className='orange'> Form</span></h1>
            <div className="form-group mb-1">
              <label for="name" className="mb-0">Salon Name:</label>
              <input
                type="text"
                className="form-control"
                id="name"
                required
                placeholder="Enter Salon Name"
                onChange={handleChange}
              />
            </div>
            <div className="form-group mb-1">
              <label for="email" className="mb-0">Email address:</label>
              <input
                type="email"
                className="form-control"
                id="email"
                required
                placeholder="Salon Email Address"
                onChange={handleChange}
              />
            </div>
            <div className="form-group mb-1">
              <label for="pwd" className="mb-0">Password:</label>
              <input
                type="password"
                className="form-control"
                id="pwd"
                required
                placeholder="Enter Password"
                onChange={handleChange}
              />
            </div>
            <div className="form-group mb-1">
              <label for="salonphone" className="mb-0">Phone:</label>
              <input
                type="number"
                className="form-control"
                id="salonphone"
                required
                placeholder="Salon Phone"
                onChange={handleChange}
              />
            </div>
            <div className="dropdown form-group mb-1">
              <label for="saloncat" className="mb-0">Salon Category:</label>
              <select
                className="form-select sal-drpdown form-control"
                aria-label="Default select example"
                id="category_id"
                onChange={handleChange}
              >
                {/* <option selected >Select</option> */}
                <option value={1}>Man</option>
                <option value={2}>Woman</option>
              </select>
            </div>
            <div className="form-group mb-1">
              <label for="name" className="mb-0">Salon Address:</label>
              <input
                type="text"
                className="form-control"
                id="address"
                required
                placeholder="Enter Salon Address"
                onChange={handleChange}
              />
            </div>
            <div className="form-group mb-1">
              <label for="salonImage" className="mb-0">Salon Image:</label>
              <br />
              <input type="file" id="salonImage" name="salonImage" />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="btn w-25 registration-form-submit-button"
              >
                Submit
              </button>
            </div>
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
  );
};
export default JoinUs;
