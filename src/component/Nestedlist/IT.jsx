import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

function IT() {
   let [page,setpage]=useState(0)
   let  navigate=useNavigate()
  return (
    <>
    <div  className='d-flex justify-content-center' >
    <div className='container technology'>
        <ul>
            <li onClick={()=>{
              setpage(0)
              navigate('programming')
            }} className={page==0? 'active' :''}>Prgramming languages</li>
            <li onClick={()=>{
              setpage(1)
              navigate('dsa')
            }} className={page==1? 'active' :''}>DSA</li>
            <li onClick={()=>{
              setpage(2)
              navigate('web')
            }} className={page==2? 'active' :''}>Web Technologies</li>
        </ul>
    </div>
    <div>
      <Outlet/>
    </div>
    </div>

    </>
   
  )
}

export default IT