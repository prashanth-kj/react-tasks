import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

function index() {

  let [page,setPage]=useState(0)
  let navigate=useNavigate()
  return (
   <>
   <h2 className='text-center mt-3 mb-5'>nested list</h2>
     <div className='d-flex justify-content-center w-75'>
     <div className='container  technology'>
        <ul>
            <li onClick={()=>{
                setPage(0)
                navigate('IT')
                
                }} className={page==0? 'active' :''}>IT</li>
            <li onClick={()=>{
                setPage(1)
                navigate('non-IT')
            }} className={page==1 ? 'active' :''}>Non-IT</li>
        </ul>
     </div>
     <div>
        <Outlet/>
     </div>
     </div>
   
   </>
  )
}

export default index