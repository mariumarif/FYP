import React, { useEffect, useState } from 'react';
import Modal from '../Modal';
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import logoo from '../../images/icon.png';
import "./admin.css";

const data = {
    name: "",
    address: "",
    contact: "",
    description: "",
};

const AdminMenSalon = ({ category }) => {

    const [saloons, setSaloons] = useState([]);
    const [saloonData, setSaloonData] = useState({ ...data });
    const [modalData, setModalData] = useState(null);
    /*
      category for men will be 1 and for woman it will be 2
      */
    const getSaloon = async () => {
        try {
            const resp = await axios.get(
                `http://localhost:3000/salons?id=${category}`
            );
            resp?.data && setSaloons(resp?.data);
            debugger;
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getSaloon();
    }, []);

    const handleChange = (e) => {
        const { value, name } = e.target;
        setSaloonData((prev) => ({ ...prev, [name]: value }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const dat = {
                salon: { ...saloonData, category_id: category },
                user: {
                    name: "fjs skfsdk",
                    email: "alia@gmail.com",
                    password: "12345",
                    user_type: 3,
                },
            };
            const resp = await axios.post("http://localhost:3000/salons", dat);
            debugger
            if (resp?.data?.newSalon?.id) {
                e.target.reset();
                getSaloon()
                alert("Saloon added")


            }
        } catch (error) {

        }
    };

    const handleDelete = async (id) => {
        console.log(id)
        try {
            const resp = await axios.delete("http://localhost:3000/salons", { data: { id } });
            getSaloon();
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
            // const dat = {
            //   salon: { ...saloonData, category_id: category },
            //   user: {
            //     name: "fjs skfsdk",
            //     email: "huda@gmail.com",
            //     password: "12345",
            //     user_type: 3,
            //   },
            // };
            const resp = await axios.put("http://localhost:3000/salons",
                {
                    id,
                    change: dat

                });
            debugger
            if (resp?.data?.updatedSalon?.id) {
                getSaloon();
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
                                <Link to='./new_salon_requests'>
                                    <button className='btn salon-services-btn px-4 py-2 mt-3'>
                                        New Salon Requets
                                    </button>
                                </Link>
                            </div>

                            <div className='join-btn my-3 mr-3'>
                                <Link to='./admin_categories'>
                                    <button className='btn salon-orders-btn px-5 py-2 mr-2'>
                                        Go Back
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>


            <div className='container mt-5 pt-5'>
                <h1 className='orange text-center'>Men Salons</h1>
                {/* <div>
                    <form className='search-salon-form mt-5'>
                        <label>Search Salon: &nbsp;</label>
                        <input type='text' placeholder='Enter Salon Name'/>
                        <button type="submit" className='search-salon-btn'>Search</button>
                    </form>
                </div> */}

                <div className='mt-4'>
                    <table className='mensal-table'>
                        <thead>
                            <tr>
                                <th className='th1'>Salon Name</th>
                                <th className='th2'>Salon Address</th>
                                <th className='th3'>Salon Phone Number</th>
                                <th className='th3'>Salon Description</th>
                                <th className='th4'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {saloons.map((x) => (
                                <tr key={x.id}>
                                    <td>{x.name}</td>
                                    <td>{x.address}</td>
                                    <td>{x.contact}</td>
                                    <td>{x.description}</td>
                                    <td>
                                        <button className='sal-edit-btn' onClick={() => setModalData(x)}>Edit </button>
                                        <Modal open={modalData} onClose={() => setModalData(null)}>

                                            <input type='text' class="form-control mb-2" id='sal-name' name='name' placeholder='Salon Name' value={modalData?.name} onChange={handleModalDataChange} />
                                            <input type='text' class="form-control mb-2" id='sal-address' name='address' placeholder='Salon Address' value={modalData?.address} onChange={handleModalDataChange} />
                                            <input type='number' class="form-control mb-2" id='sal-phone' name='contact' placeholder='Salon Phone' />
                                            <input type='text' class="form-control mb-2" id='sal-description' name='description' placeholder='Salon Description' value={modalData?.description} onChange={handleModalDataChange} />
                                            <button type="submit" class="btn sal-service-update-btn" onClick={handleUpdate}>Update</button>
                                        </Modal>
                                        <button className='sal-remove-btn' onClick={() => handleDelete(x.id)}>Remove</button>
                                    </td>
                                </tr>
                         ))}
                         </tbody>
                       </table>
                </div>

                <div className="mt-3 mb-2">
          <h4>Add Salon</h4>
          <form className="add-salon-form mb-3" onSubmit={handleSubmit}>
            <input
              onChange={handleChange}
              type="text"
              className="form-input mb-4"
              name="name"
              required
              placeholder="Salon Name"
            />

            <input
              onChange={handleChange}
              type="text"
              className="form-input"
              name="address"
              required
              placeholder="Salon Address"
            />

            <input
              onChange={handleChange}
              type="number"
              className="form-input"
              name="contact"
              required
              placeholder="Salon Phone Number"
            />

            <input
              onChange={handleChange}
              type="text"
              className="form-input"
              name="description"
              required
              placeholder="Salon Description"
            />

            <span className="sal-img-span">
              <label>Upload Image: &nbsp;</label>
              <input type="file" id="salon_image" name="salon_image"></input>
            </span>
            <button type="submit" className="add-salon-btn">
              Add
            </button>
          </form>
        </div>

            </div>
        </>
    );
};
export default AdminMenSalon;