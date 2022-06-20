import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Footer from "../footer/Footer";
import NavBar from "../navbar/NavBar";

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    city: "",
    phone: "",
    msg: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendRequest = (e) => {
    e.preventdefault();

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
    } else {
      toast.success(
        "Your request is successfully submitted. We'll contact you soon...."
      );
    }
  };
  return (
    <>
      <NavBar />
      <div className="container-fluid bg-light animated-bg">
        <div className="container p-4">
          <div className="row justify-content-center">
            <div className="col-md-8 col-sm-12 p-5 rounded-3 shadow-lg">
              <form className="custom-form-style" onSubmit={sendRequest}>
                <div className="row">
                  <div className="col text-center">
                    <h3>Contact Us</h3>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-md-6 col-sm-12">
                    <label htmlFor="name" className="form-label float-start">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={formData.username}
                      onChange={handleChange}
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
                  <div className="col-md-6 col-12">
                    <label
                      htmlFor="phone"
                      className="form-label float-start mt-4"
                    >
                      City
                    </label>
                    <input
                      value={formData.msg}
                      onChange={handleChange}
                      type="text"
                      name="phone"
                      className="form-control"
                      placeholder="Enter Your City"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <label
                      htmlFor="employeeStatus"
                      className="form-label float-start mt-4"
                    >
                      Message
                    </label>
                    <textarea
                      className="form-control shadow-lg"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      placeholder="Enter Your Message Here..."
                    ></textarea>
                  </div>
                </div>

                <div className="row">
                  <div className="col text-center">
                    <button
                      type="submit"
                      className="btn btn-outline-primary mt-4 mx-2"
                    >
                      Send Request
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

export default Contact;
