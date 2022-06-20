import React from 'react'
import Footer from '../footer/Footer'
import NavBar from '../navbar/NavBar'
import DisplayAllUsers from '../user/DisplayAllUsers'
import DisplayUser from '../user/DisplayUser'

const Home = () => {
  return (
      <>
    <NavBar/>
    <DisplayAllUsers/>
    <Footer/>
    </>
  )
}

export default Home