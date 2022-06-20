import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { deleteUser } from "../../redux/actions/UserActions";

const DisplayAllUsers = ({ usersData, dlt }) => {
  const navigate = useNavigate();

  const deleteUser = (id) => {
    dlt(id);
    toast.success("Contact Successfully Deleted..");
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col mt-5 text-center vh-100 mx-5 table-responsive">
          <table class="table border table-responsive custom-table">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Gender</th>
                <th scope="col">DOB</th>
                <th scope="col">Marital Status</th>
                <th scope="col">City</th>
                <th scope="col">Employee Status</th>
                <th scope="col">Phone</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {usersData &&
                usersData.map((data, id) => {
                  return (
                    <tr key={id}>
                      <th scope="row">{id + 1}</th>
                      <td>{data.username}</td>
                      <td>{data.email}</td>
                      <td>{data.gender}</td>
                      <td>{data.dob}</td>
                      <td>{data.maritalStatus}</td>
                      <td>{data.city}</td>
                      <td>{data.employeeStatus}</td>
                      <td>{data.phone}</td>
                      <td>
                      <i class="bi bi-eye-fill text-primary action-btn" onClick={() => navigate(`/viewUser/${data.id}`)}></i>
                      &nbsp;&nbsp;
                        <i
                          className="bi bi-pencil-fill text-success fs-5 action-btn"
                          onClick={() => navigate(`/editUser/${data.id}`)}
                        ></i>
                        &nbsp;&nbsp;
                        <i
                          className="bi bi-trash-fill text-danger action-btn fs-5"
                          onClick={() => deleteUser(id)}
                        ></i>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    usersData: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dlt: (id) => dispatch(deleteUser(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayAllUsers);
