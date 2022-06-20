import React from "react";
import NavBar from "../navbar/NavBar";
import { useState } from "react";
import { toast } from "react-toastify";
import Footer from "../footer/Footer";
// import { connect } from "react-redux";
// import { useSelector, useDispatch } from "react-redux";
 import { addUser } from "../../redux/actions/UserActions";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";


const AddUser = ({ users, add }) => {


  const [formData, setFormData] = useState({
    username: "",
    email: "",
    gender: "",
    dob: "",
    maritalStatus: "",
    city: "",
    employeeStatus: "",
    phone: "",
  });
  const navigate = useNavigate();


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const checkEmail = users.find((users) => users.email === formData.email);

    const checkPhone = users.find(
      (users) => users.phone === parseInt(formData.phone)
    );

    if (
      !formData.username ||
      !formData.email ||
      !formData.gender ||
      !formData.dob ||
      !formData.maritalStatus ||
      !formData.city ||
      !formData.employeeStatus ||
      !formData.phone
    ) {
      return toast.warning("Please fill all the fields !!");
    }

    if (checkEmail) {
      return toast.error("Email Address is already exists !!");
    }

    if (checkPhone) {
      return toast.error("Phone number is already exists !!");
    } else {
      const data = {
        id: users[users.length - 1].id + 1,
        username: formData.username,
        email: formData.email,
        gender: formData.gender,
        dob: formData.dob,
        maritalStatus: formData.maritalStatus,
        city: formData.city,
        employeeStatus: formData.employeeStatus,
        phone: formData.phone,
      };
     
      add(data);
      toast.success("User Successfully Added..");
      navigate("/");
    }
  };

  return (
    <>
      <NavBar />
      <div className="container-fluid bg-light animated-bg">
        <div className="container p-4">
          <div className="row justify-content-center">
            <div className="col-md-8 col-sm-12 p-5 rounded-3 shadow-lg">
              <form onSubmit={handleSubmit} className='custom-form-style'>
                <div className="row">
                  <div className="col text-center">
                    <h3>Add New User</h3>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-md-6 col-sm-12">
                    <label htmlFor="name" className="form-label float-start">
                      Full Name
                    </label>
                    <input
                      value={formData.username}
                      onChange={handleChange}
                      type="text"
                      name="username"
                      className="form-control"
                      placeholder="Enter Full Name"
                    />
                  </div>
                  <div className="col-md-6 col-12">
                    <label
                      htmlFor="email"
                      className="form-label mt-4 mt-md-0 float-start"
                    >
                      E-mail
                    </label>
                    <input
                      value={formData.email}
                      onChange={handleChange}
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Enter E-mail Address"
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 col-12">
                    <label
                      htmlFor="gender"
                      className="form-label float-start mt-4"
                    >
                      Gender
                    </label>
                    <select
                      value={formData.gender}
                      onChange={handleChange}
                      name="gender"
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option value="" disabled>
                        Select Gender
                      </option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                  <div className="col-md-6 col-12">
                    <label
                      htmlFor="dob"
                      className="form-label float-start mt-4"
                    >
                      DOB
                    </label>
                    <input
                      value={formData.dob}
                      onChange={handleChange}
                      type="date"
                      name="dob"
                      className="form-control"
                      
                      
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 col-12">
                    <label
                      htmlFor="maritalStatus"
                      className="form-label float-start mt-4"
                    >
                      Marital Status
                    </label>
                    <select
                      value={formData.maritalStatus}
                      onChange={handleChange}
                      name="maritalStatus"
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option value="" disabled>
                        Select Marital Status
                      </option>
                      <option value="Single">Single</option>
                      <option value="Married">Married</option>
                      <option value="Un-Married">Un-Married</option>
                      <option value="Divorced">Divorced</option>
                      <option value="Widowed">Widowed</option>
                    </select>
                  </div>
                  <div className="col-md-6 col-12">
                    <label
                      htmlFor="city"
                      className="form-label float-start mt-4"
                    >
                      City
                    </label>
                    <input
                      value={formData.city}
                      onChange={handleChange}
                      type="text"
                      name="city"
                      className="form-control"
                      placeholder="Enter City"
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 col-12">
                    <label
                      htmlFor="employeeStatus"
                      className="form-label float-start mt-4"
                    >
                      Employee Status
                    </label>
                    <select
                      value={formData.employeeStatus}
                      onChange={handleChange}
                      name="employeeStatus"
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option value="" disabled>
                        Select Employee Status
                      </option>
                      <option value="Un-Employee">Un-Employee</option>
                      <option value="Employee">Employee</option>
                      <option value="Worker">Worker</option>
                      <option value="Self-Employed">Self-Employed</option>
                    </select>
                  </div>

                  <div className="col-md-6 col-12">
                    <label
                      htmlFor="phone"
                      className="form-label float-start mt-4"
                    >
                      Phone
                    </label>
                    <input
                      value={formData.phone}
                      onChange={handleChange}
                      type="number"
                      name="phone"
                      className="form-control"
                      placeholder="Enter Phone No."
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col text-center">
                  <button
                      type="submit"
                      className="btn btn-outline-primary mt-4 mx-2"
                    >
                      Add User
                    </button>

                    <button
                      type="submit"
                      className="btn btn-outline-danger mt-4 mx-2"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    add: (data) => dispatch(addUser(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps) (AddUser);
