import React, { useEffect, useState } from 'react';
import Modal from '../Modal';
import "./salon_owner.css";
import logoo from '../../images/icon.png';
import { useParams, Link } from 'react-router-dom';
import axios from "axios";
import { useHistory } from 'react-router-dom';
import useIsUser from '../../useUser';
import logout from '../../handlers';

const data = {
  name: "",
  description: "",
  charges: "",
};


const SalonService = () => {
  const history = useHistory();
  const [refresh, setRefresh] = useState(false);
  const isUser = useIsUser();

  const [services, setServices] = useState([]);
  const [servicesData, setServicesData] = useState({ ...data });
  const [modalData, setModalData] = useState(null);
  // const [addService,setAddService]=useState({name:'',description:'',charges:''});
  const id = JSON.parse(localStorage.getItem('salon')).id;


  const getServices = async () => {
    try {
      const resp = await axios.get(
        `http://localhost:3000/services?id=${id}`
      );
      resp?.data && setServices(resp?.data);
      debugger;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getServices();
  }, []);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setServicesData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.post("http://localhost:3000/services", { ...servicesData, salon_id: id });
      setServicesData(data);
      getServices();

    } catch (error) {

    }

  }

  const handleDelete = async (id) => {
    console.log(id);
    try {
      const resp = await axios.delete("http://localhost:3000/services", { data: { id } });
      getServices();
    } catch (error) {

    }
  };


  const handleModalDataChange = (e) => {
    const { name, value } = e.target;
    setModalData(prev => ({ ...prev, [name]: value }))
  }
  const handleUpdate = async (e) => {
    const { id, ...dat } = modalData;
    try {
      const resp = await axios.put("http://localhost:3000/services",
        {
          id,
          change: dat
        });
      debugger
      if (resp?.data?.updatedService?.id) {
        getServices();
        setModalData(null);
      }
    } catch (error) {

    }
  };

  const [isOpen, setIsOpen] = useState(false)
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
                <Link to='./salon_info'>
                  <button className='btn salon-info-btn px-4 py-2 mt-3'>
                    Salon Info
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


      <div className='container mt-5'>
        <h1 className='orange pt-5 text-center'>Salon Services</h1>
        <div className='mt-3 mb-5'>
          <h4>Add Service</h4>
          <form className='add-service-form' onSubmit={handleSubmit}>
            <input type="text" className="form-input" onChange={handleChange} name="name" value={servicesData.name} required placeholder="Enter Service Name..." />
            <input type="text" className="form-input" onChange={handleChange} name="description" value={servicesData.description} required placeholder="Enter Service Details" />
            <input type="number" className="form-input" onChange={handleChange} name="charges" value={servicesData.charges} required placeholder="Enter Price" />
            <button type="submit" className='add-service-btn'>Add</button>
          </form>
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <th className='th1'>Service Name</th>
                <th className='th2'>Service Description</th>
                <th className='th3'>Service Price</th>
                <th className='th4'>Action</th>
              </tr>
            </thead>
            <tbody>
              {services.map(service =>
                <tr key={service.id}>
                  <td>{service.name}</td>
                  <td>{service.description}</td>
                  <td>Rs.<span>{service.charges}</span></td>
                  <td>
                    <button className='edit-btn' onClick={() => setModalData(service)}>Edit </button>
                    <Modal open={modalData} onClose={() => setModalData(null)}>

                      <input type='text' class="form-control mb-2" id='sal-service-name' name='name' placeholder='Service Name' value={modalData?.name} onChange={handleModalDataChange} />
                      <input type='text' class="form-control mb-2" id='sal-service-description' name='description' placeholder='Service Description' value={modalData?.description} onChange={handleModalDataChange} />
                      <input type='number' class="form-control mb-2" id='sal-service-price' name='charges' placeholder='Service Price' value={modalData?.charges} onChange={handleModalDataChange} />
                      <button type="submit" class="btn sal-service-update-btn" onClick={handleUpdate}>Update</button>

                    </Modal>
                    <button className='delete-btn' onClick={() => handleDelete(service.id)}> Delete</button>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>


      </div>

    </>
  )
};
export default SalonService;