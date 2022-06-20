import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import Footer from "../footer/Footer";
import NavBar from "../navbar/NavBar";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { editUser } from "../../redux/actions/UserActions";

const EditUser = ({users , update}) => {

  const navigate = useNavigate();
  const {id} = useParams();

  const currentUser = users.find(users => users.id === parseInt(id));

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

  useEffect(() => {
    if (currentUser) {
      setFormData({
        username: currentUser.username,
    email:currentUser.email,
    gender:currentUser.gender,
    dob:currentUser.dob,
    maritalStatus:currentUser.maritalStatus,
    city:currentUser.city,
    employeeStatus:currentUser.employeeStatus,
    phone:currentUser.phone,
      })
    }
  },[currentUser])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const checkEmail = users.find((users) => users.id !== parseInt(id) && users.email === formData.email);

    const checkPhone = users.find(
      (users) => users.id !== parseInt(id) && users.phone === parseInt(formData.phone)
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
        id: parseInt(id),
        username: formData.username,
        email: formData.email,
        gender: formData.gender,
        dob: formData.dob,
        maritalStatus: formData.maritalStatus,
        city: formData.city,
        employeeStatus: formData.employeeStatus,
        phone: formData.phone,
      };
      update(data)
      toast.success("User Details Are Successfully Updated..");
      navigate("/");
    }
  };
  return (
    <>
      <NavBar />
      <div className="container-fluid bg-light animated-bg" style={{height:'108vh'}}>
        <div className="container p-4">
          <div className="row justify-content-center">
            <div className="col-md-8 col-sm-12 p-5 rounded-3 shadow-lg">
              {currentUser ? (<form action="" onSubmit={handleSubmit}  className='custom-form-style'>
                <div className="row">
                  <div className="col text-center">
                    <h3>Update User Details</h3>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-md-6 col-sm-12">
                    <label htmlFor="name" className="form-label float-start">
                      Full Name
                    </label>
                    <input
                      type="text"
                      onChange={handleChange}
                      name="username"
                      value={formData.username}
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
                      type="email"
                      onChange={handleChange}
                      name="email"
                      value={formData.email}
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
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
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
                      type="date"
                      onChange={handleChange}
                      name="dob"
                      value={formData.dob}
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
                      name="maritalStatus"
                      value={formData.maritalStatus}
                      onChange={handleChange}
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
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
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
                      name="employeeStatus"
                      value={formData.employeeStatus}
                      onChange={handleChange}
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
                      type="number"
                      value={formData.phone}
                      onChange={handleChange}
                      name="phone"
                      className="form-control"
                      placeholder="Enter Phone No."
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-12 text-center">
                  
                      <button type="submit" className="btn btn-outline-primary mt-4 w-25 mx-3">
                        Update User
                      </button>

                      <button className="btn btn-outline-danger mt-4 w-25" onClick={()=> navigate('/')}>
                        Cancel
                      </button>
                  
                  </div>
                  
                </div>
              </form>):( <h1 className="text-center">User is Not Exists!!</h1> )}
              
            </div>
          </div>
        </div>
      </div>
      <Footer/>
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
    update: (data) => dispatch(editUser(data))
  };
};


export default connect(mapStateToProps,mapDispatchToProps) (EditUser);
