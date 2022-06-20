import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Footer from '../footer/Footer'
import NavBar from '../navbar/NavBar'

const DisplayUser = ({users}) => {
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

  return (
    <>

    <NavBar/>
    <div className="container-fluid animated-bg vh-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 shadow-lg px-5 py-4 rounded-3 mt-4 text-center">
            <h2>User Details</h2>
              <h4>Name :  {formData.username}</h4>
              <h4>Email : {formData.email}</h4>
              <h4>Gender : {formData.gender}</h4>
              <h4>DOB :  {formData.dob}</h4>
              <h4>City : {formData.city}</h4>
              <h4>Phone :{formData.phone}</h4>
              <h4>Marital Status : {formData.maritalStatus}</h4>
              <h4>Employee Status : {formData.employeeStatus}</h4>
              <div className="row">
          <div className="col mt-3 text-center">
            <button className="btn btn-success mx-2 custom-view-btn" onClick={()=>navigate('/')}>Go Back</button>
            <button className="btn btn-danger mx-2 custom-view-btn"onClick={()=>navigate(`/editUser/${id}`)} >Update Details</button>
          </div>
        </div>
          </div>
        </div>
        
      </div>
    </div>
    <Footer/>
    </>
  )
}


const mapStateToProps = (state) => {
  return {
    users: state,
  };
};
export default  connect(mapStateToProps,null) (DisplayUser)