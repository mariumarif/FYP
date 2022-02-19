import React, { useState } from "react";
import "./joinus.css";
import logoo from "../../images/icon.png";
import { Link } from "react-router-dom";
import axios from "axios";

const JoinUs = () => {
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
        const{email,pwd,...d}=data
        const user={
            email:email,
            password:pwd,
            user_type:3
        }
      const resp = await axios.post(" http://localhost:3000/salons",{user,salon:{...d}});
        if(resp.status===201){
            alert("Created")
        }

    } catch (error) {}
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
              <div className="login-signup mr-2">
                <Link to="./login">
                  <button className="btn login-signup-btn px-4 py-2 mt-3">
                    Login/Signup
                  </button>
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <br />
      <div className="container salon-registration-form">
        <h1 className="register-heading text-center mt-5">Registraton Form</h1>

        <form className="reg-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label for="name">Salon Name:</label>
            <input
              type="text"
              className="form-control"
              id="name"
              required
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label for="email">Email address:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              required
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label for="pwd">Password:</label>
            <input
              type="password"
              className="form-control"
              id="pwd"
              required
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label for="salonphone">Phone:</label>
            <input
              type="number"
              className="form-control"
              id="salonphone"
              required
              onChange={handleChange}
            />
          </div>
          <div className="dropdown form-group">
            <select
              className="form-select sal-drpdown"
              aria-label="Default select example"
              id="category_id"
              onChange={handleChange}
            >
              {/* <option selected >Select</option> */}
              <option value={1}>Man</option>
              <option value={2}>Woman</option>
            </select>
          </div>
          <div className="form-group">
            <label for="name">Salon Address:</label>
            <input
              type="text"
              className="form-control"
              id="address"
              required
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label for="salonImage">Salon Image:</label>
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
    </>
  );
};
export default JoinUs;
