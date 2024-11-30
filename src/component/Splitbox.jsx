import React, { useState } from 'react'

function Splitbox() {

  const [boxes,setboxes]=useState([{id:1,size:500,x:0,y:0}])

   const handleboxclick=(id,size,x,y)=>{
        let newsize=size/2 

        let newboxes=[
            {id:Date.now(),size:newsize,x,y},
            {id:Date.now()+1,size:newsize,x:x+newsize,y},
            {id:Date.now()+2,size:newsize,x,y:y+newsize},
            {id:Date.now()+3,size:newsize,x:x+newsize,y:y+newsize}
        ]

        setboxes((prev)=>prev.filter((box)=>box.id != id).concat(newboxes))
   }


  return (
   <>
     <div className='container'>
           <h2 className='text-center mt-3'>Splitbox</h2>
         <div className='box-container'>
            {
                boxes.map((box)=>{
                    return <div className='splitbox' key={box.id} 
                    style={{
                        width:box.size,
                        height:box.size,
                        top:box.x,
                        left:box.y
                        
                    }} 
                    onClick={()=>handleboxclick(box.id,box.size,box.x,box.y)}
                    >
                    
                    </div>
                })
            }
         </div>
     </div>
   </>
  )
}

export default Splitbox