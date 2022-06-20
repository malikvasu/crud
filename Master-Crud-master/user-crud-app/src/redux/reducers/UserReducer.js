import * as actionTypes from "../actions/UserActions";

const initialState = [
  {
    id: 0,
    username: "Sooraj",
    email: "sooraj@gmail.com",
    gender: "Male",
    dob: "2000-02-04",
    maritalStatus: "Single",
    city: "Hoshiarpur",
    employeeStatus: "Employee",
    phone: 8565478541,
  },
  {
    id: 1,
    username: "Divyanshi",
    email: "divyanshi@gmail.com",
    gender: "Female",
    dob: "1998-03-01",
    maritalStatus: "Single",
    city: "Jammu",
    employeeStatus: "Employee",
    phone: 12547856,
  },
  {
    id: 2,
    username: "Divya",
    email: "divya@gmail.com",
    gender: "Female",
    dob: "1998-07-15",
    maritalStatus: "Single",
    city: "Mohali",
    employeeStatus: "Employee",
    phone: 8569745154,
  },
  {
    id: 3,
    username: "Akshay",
    email: "akshay@gmail.com",
    gender: "Male",
    dob: "1998-08-20",
    maritalStatus: "Single",
    city: "Kalka",
    employeeStatus: "Employee",
    phone: 5698547854,
  },
  {
    id: 4,
    username: "Vasu",
    email: "vasu@gmail.com",
    gender: "Male",
    dob: "1998-03-03",
    maritalStatus: "Single",
    city: "Amritsar",
    employeeStatus: "Employee",
    phone: 2365478965,
  },
  {
    id: 5,
    username: "Nikhil",
    email: "nikhil@gmail.com",
    gender: "Male",
    dob: "1998-05-05",
    maritalStatus: "Single",
    city: "Talwada",
    employeeStatus: "Employee",
    phone: 7869541254,
  },
];

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_NEW_USER: {
      state = [...state, action.payload];
      return state;
    }
    case actionTypes.EDIT_USER: {
      const updateState = state.map(user =>
        user.id === action.payload.id ? action.payload : user
      );
      state = updateState;
      console.log(state)
      return state;
    }
    case actionTypes.DELETE_USER:{
      const filterUser = state.filter(users => users.id !== action.payload && users);
      state = filterUser;
      return state
    }

    default:
      return state;
  }
};

export default UserReducer;