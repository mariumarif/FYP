import React, { useEffect, useState } from "react";
import "./salon_owner.css";
import logoo from "../../images/icon.png";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useHistory } from 'react-router-dom';
import useIsUser from '../../useUser';
import logout from '../../handlers';

const SalonOrders = () => {
  const history = useHistory();
  const [refresh, setRefresh] = useState(false);
  const isUser = useIsUser();

  const [orders, setOrders] = useState([]);
  //TODO: You need to get Id from params or any other way
  const id = 1;
  const getOrders = async () => {
    try {
      const resp = await axios.get(
        `http://localhost:3000/appointments?id=${id}`
      );
      debugger
      resp.data && setOrders(resp?.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getOrders();
  }, []);
  return (
    <>
      <header className="fixed fixed-top">
        <div className="navbar-div">
          <nav className="navbar navbar-light">
            {/* <!-- Brand --> */}
            <Link to="./">
              <a className="navbar-brand ml-5" href="">
                <img src={logoo} alt="" />
              </a>
            </Link>

            <div className="navbar-btns">
              {/* <!-- Login/Signup --> */}
              <div className="login-signup mr-2">
                <Link to="./salon_services">
                  <button className="btn salon-services-btn px-4 py-2 mt-3">
                    Salon Services
                  </button>
                </Link>
              </div>

              {/* <!-- Join Us --> */}
              <div className="join-btn my-3 mr-3">
                <Link to="./salon_info">
                  <button className="btn salon-info-btn px-5 py-2 mr-2">
                    Salon Info
                  </button>
                </Link>
              </div>

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

      <div className="container mt-5">
        <h1 className="orange pt-5 text-center">Salon Orders</h1>
        <div className="mt-5">
          <table>
            <thead>
              <tr>
                <th className="th1">Customer Name</th>
                <th className="th2">Customer Number</th>
                <th className="th3">Service Type</th>
                <th className="th3">Service Details</th>
                <th className="th3">Special Instructions</th>
                <th className="th3">Total Amount</th>
                <th className="th3">Date</th>
                <th className="th3">Time</th>
                <th className="th4">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Hammas Ahmed</td>
                <td>0321-0001112</td>
                <td>Home Service</td>
                <td>Hair Cut, Facial, Beard Trimming</td>
                <td>Please wear mask</td>
                <td>800</td>
                <td>31-01-22</td>
                <td>14:26</td>
                <td>
                  <button className="completed-btn">Completed </button>
                  <button className="cancel-btn"> Cancel</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default SalonOrders;
