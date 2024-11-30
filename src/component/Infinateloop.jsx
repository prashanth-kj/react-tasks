import React, { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'

function Infinateloop() {

   const [data,setdata]=useState(Array.from({length:20}))
   const [hasMore,setHasMore]=useState(true)
   
   const fetchmoredata=()=>{
       if(data.length <300){
        setTimeout(()=>{
            setdata(data.concat(Array.from({length:20})))
        },500)
       }else{
        setHasMore(false)
       }   
   }

  return (
  <>
   <div className='container'>

         <h2 style={{textAlign:'center' , margin:'20px'}}>Infinite Scrollbar</h2>
        <InfiniteScroll
            dataLength={data.length}
            next={fetchmoredata}
            hasMore={hasMore}
            loader={<p className='loading'>Loading...</p>}
            endMessage={<p className='loading'>All data Fetched</p>}
            height={500}
        >
            {
                data.map((item,index)=>{
                    return <p className='scroll' key={index}>This is #div{index+1} infinate scroll</p>
                })
            }

        </InfiniteScroll>
   </div>
  </>
  )
}

export default Infinateloop