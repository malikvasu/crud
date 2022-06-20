import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../footer/Footer'

const PageNotFound = () => {
  const navigate = useNavigate()
  return (
    <>    <div className="container-fluid animated-bg vh-100">
      <div className="container">
        <div className="row">
          <div className="col text-center mt-5 shadow-lg p-5 rounded-3">
            <h1>The page you want to access is not found..</h1>
            <button className="btn btn-success fs-3" onClick={()=>navigate('/')}>Go Back</button>

          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>

  )
}
export default PageNotFound