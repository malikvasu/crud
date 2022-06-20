import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import PageNotFound from './components/errorPages/PageNotFound'
import Home from './components/home/Home'
import Login from './components/login/Login'
import AddUser from './components/user/AddUser'
import DisplayUser from './components/user/DisplayUser'
import EditUser from './components/user/EditUser'
const Routing = () => {
  return (
    <Routes>
        <Route path='*' element={<PageNotFound/>}/>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/aboutUs' element={<About/>}/>
        <Route path='/contactUs' element={<Contact/>}/>
        <Route path='/userLogin' element={<Login/>}/>
        <Route path='addNewUser' element={<AddUser/>}/>
        <Route path='editUser/:id' element={<EditUser/>} />
        <Route path='viewUser/:id' element={<DisplayUser/>} />
    </Routes>
  )
}

export default Routing