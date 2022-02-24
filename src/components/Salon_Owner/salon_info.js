import React, { useEffect, useState } from 'react';
import Modal from '../Modal';
import "./salon_owner.css";
import logoo from '../../images/icon.png';
import mansal from '../../images/men-salon-2.jpg';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import useIsUser from '../../useUser';
import logout from '../../handlers';

const SalonInfo = () => {
    const history = useHistory();
    const [refresh, setRefresh] = useState(false);
    const isUser = useIsUser();

    const [isOpen, setIsOpen] = useState(false);
    const [salon, setSalon] = useState({});
    const id = JSON.parse(localStorage.getItem('salon'))?.id;
    // debugger
    const fetchSalon = async () => {
        try {
            const resp = await axios.get(
                `http://localhost:3000/salon?id=${id}`
            );
            resp?.data && setSalon(resp?.data?.[0]);
            debugger;
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        fetchSalon();
    }, []);

    const handleChange = (e) => {
        const { value, name } = e.target;
        setSalon((prev) => ({ ...prev, [name]: value }));

      };


    const handleUpdate = async (e) => {

        const { id, ...dat } = salon;
        try {
          const resp = await axios.put("http://localhost:3000/salons",
            {
              id,
              change: dat
            });
          fetchSalon();
          setIsOpen(false);
        } catch (error) {
    
        }
      };

    return (
        <>
            <header className="fixed fixed-top">
                <div className="navbar-div">
                    <nav className="navbar navbar-light">
                        {/* <!-- Brand --> */}
                        <Link to='./'>
                            <a className="navbar-brand ml-5" href="">
                                <img src={logoo} alt="" />
                            </a>
                        </Link>

                        <div className='navbar-btns'>
                            {/* <!-- Login/Signup --> */}
                            <div className='login-signup mr-2'>
                                <Link to='./salon_services'>
                                    <button className='btn salon-services-btn px-4 py-2 mt-3'>
                                        Salon Services
                                    </button>
                                </Link>
                            </div>

                            {/* <!-- Join Us --> */}
                            <div className='join-btn my-3 mr-3'>
                                <Link to='./salon_orders'>
                                    <button className='btn salon-orders-btn px-5 py-2 mr-2'>
                                        Salon Orders
                                    </button>
                                </Link>
                            </div>

                            {/* Log out */}
                            <div className='login-signup mr-2'>
                                {!isUser?<Link to='/login'>
                                    <button className='btn login-signup-btn px-4 py-2 mt-3'>
                                        Login/Signup
                                    </button>
                                </Link>:<button onClick={() => {logout(history);setRefresh(x => !x)}} className='btn login-signup-btn px-4 py-2 mt-3'>
                                        Sign Out
                                    </button>}
                            </div>
                        </div>
                    </nav>
                </div>
            </header>

            <div className='container mt-5 pt-5 mb-5 pb-5'>
                <h1 className='orange text-center'>Salon Details</h1>
                <div className='mt-4'>
                    <table>
                        <tbody>
                            <tr>
                                <th>Salon Name:</th>
                                <td>{salon?.name}</td>
                            </tr>
                            <tr>
                                <th>Salon Address:</th>
                                <td>{salon?.address}</td>
                            </tr>
                            <tr>
                                <th>Salon Phone Number:</th>
                                <td>{salon?.contact}</td>
                            </tr>
                            <tr>
                                <th>Salon Description:</th>
                                <td>{salon?.description}</td>
                            </tr>
                            <tr>
                                <th>Salon Timings:</th>
                                <td>{salon?.timings}</td>
                            </tr>
                            <tr>
                                <th>Salon Image:</th>
                                <td><img src={mansal} alt='' width={500} height={300} /></td>
                            </tr>
                        </tbody>
                    </table>
                    <button className='sal-update-btn' onClick={() => setIsOpen(true)}>Update</button>
                    <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                       
                            <input type='text' class="form-control mb-2" id='salonName' name='name' placeholder='Salon Name' value={salon.name} onChange={handleChange} />
                            <input type='text' class="form-control mb-2" id='salonAddress' name='address' placeholder='Salon Address' value={salon.address} onChange={handleChange} />
                            <input type='number' class="form-control mb-2" id='salonPhone' name='contact' placeholder='Salon Phone' value={salon.contact} onChange={handleChange} />
                            <input type='text' class="form-control mb-2" id='salonDescription' name='description' placeholder='Salon Description' value={salon.description} onChange={handleChange} />
                            <input type='text' class="form-control mb-2" id='salonTimings' name='timings' placeholder='Salon Timings' value={salon.timings} onChange={handleChange} />
                            <label for="salonImage">Update Image:</label>&nbsp;
                            <input type="file" id="salonImage" name="salonImage" />
                            <button type="submit" class="btn sal-service-update-btn" onClick={handleUpdate}>Update</button>
                        
                    </Modal>
                </div>
            </div>
        </>
    );
};
export default SalonInfo;