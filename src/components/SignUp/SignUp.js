import React, { useState, useEffect } from 'react';
import './signup.css';
import logoo from '../../images/icon.png';
import { Link } from 'react-router-dom';
import background1 from '../../images/mencategory.jpg';

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const [emailError, setEmailError] = useState('')
  // const validateEmail = (e) => {
  //   var email = e.target.value

  //   if (validator.isEmail(email)) {
  //     setEmailError('Valid Email :)')
  //   } else {
  //     setEmailError('Enter valid Email!')
  //   }
  // }

  function saveUser() {
    // console.log(name,email,password);
    let data = { name, email, password };
    // if()
    fetch("http://localhost:3000/user", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((result) => {
      console.log("result", result);

    })
    alert("User has been created!")
  }

  //   const validate = (values) => {
  //   const errors = {};
  //   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

  //   if (!values.name) {
  //     errors.name = "Username is required!";
  //   }

  //   if (!values.email) {
  //     errors.email = "Email is required!";
  //   } else if (!regex.test(values.email)) {
  //     errors.email = "This is not a valid email format!";
  //   }
  //   if (!values.password) {
  //     errors.password = "Password is required";
  //   } else if (values.password.length < 4) {
  //     errors.password = "Password must be more than 4 characters";
  //   } else if (values.password.length > 10) {
  //     errors.password = "Password cannot exceed more than 10 characters";
  //   }
  //   return errors;
  // };

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


      {/* <!-- Sign up --> */}
      <div class="main-div d-flex " style={{ backgroundImage: `url(${background1})` }}>
        <div className="container col-md-offset-4 sign-up pt-4 ">
          <h1 className='pb-2'>Sign <span className='orange'>Up</span></h1>
          <form onSubmit={saveUser}>
            <div className="col-sm-12  mt-3 text-left">

              <label>Name:</label>
              <input type="text" required='required' value={name} onChange={(e) => { setName(e.target.value) }} className="form-control mb-3" id="name" placeholder="Name" name="name" autoComplete='off' />
            </div>
            <div className="col-sm-12 text-left">
              <label>Email:</label>
              <input type="email" required='required' value={email} onChange={(e) => { setEmail(e.target.value) }} className="form-control mb-3" id="email" placeholder="Email" name="email" autoComplete='off' />
            </div>
            <div className="col-sm-12 text-left">
              <label>Password:</label>
              <input type="password" required='required' value={password} onChange={(e) => { setPassword(e.target.value) }} className="form-control mb-3" id="password" placeholder="Password" name="password" autoComplete='off' />
            </div>

            <div className="col-sm-12">
              <button className="col-md-4 col-md-offset-4 btn submit-btn " type="submit"> Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
};
export default SignUp;


//   return (
//     <div className="container">
//       {Object.keys(formErrors).length === 0 && isSubmit ? (
//         <div className="ui message success">Signed in successfully</div>
//       ) : (
//         <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
//       )}

//       <form onSubmit={handleSubmit}>
//         <h1 className='signin-heading'>Sign Up</h1>
//         <div className="ui divider"></div>
//         <div className="ui form login">
//         <div className="field">
//             <label>Username</label>
//             <input
//               type="text"
//               name="name"
//               placeholder="Username"
//               value={formValues.name}
//               onChange={handleChange}
//             />
//           </div>
//           <p>{formErrors.name}</p>
//           <div className="field">
//             <label>Email</label>
//             <input
//               type="text"
//               name="email"
//               placeholder="Email"
//               value={formValues.email}
//               onChange={handleChange}
//               autoComplete="off"
//             />
//           </div>
//           <p>{formErrors.email}</p>
//           <div className="field">
//             <label>Password</label>
//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               value={formValues.password}
//               onChange={handleChange}
//               autoComplete="off"
//             />
//           </div>
//           <p>{formErrors.password}</p>
//           <button className="fluid ui button blue login-btn">Submit</button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default SignUp;