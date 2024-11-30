import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
function Elementtransfer() {
   
   let data=['Item1','Item2','Item3','Item4','Item5','Item6']
    
   let [bucket1,setBucket1]=useState(data)
   let [bucket2,setBucket2]=useState([])
   let [selectedItem,setSelectedItem]=useState([])
   let [bucketname,setBucketName]=useState('bucket1')

   let toggleselection=(item,bucket)=>{
       setBucketName(bucket)
       setSelectedItem((prev)=>prev.includes(item)? prev.filter((i)=>i!=item) : [...prev, item])
   }


   let add=()=>{
      if(bucketname=='bucket1'){
        setBucket2((prev)=>[...prev, ...selectedItem])
        setBucket1((prev)=>prev.filter((item)=> !selectedItem.includes(item)))
       
      }else{
        setBucket1((prev)=>[...prev, ...selectedItem])
        setBucket2((prev)=>prev.filter((item)=> !selectedItem.includes(item)))
       
      }
      setSelectedItem([])
   }

   let remove=()=>{
    if(bucketname=='bucket1'){
        setBucket2((prev)=>[...prev, ...selectedItem])
        setBucket1((prev)=>prev.filter((item)=> !selectedItem.includes(item)))
       
      }else{
        setBucket1((prev)=>[...prev, ...selectedItem])
        setBucket2((prev)=>prev.filter((item)=> !selectedItem.includes(item)))
       
      }
      setSelectedItem([])
   }

 
 let moveAll=(direction)=>{
     if(direction==='add'){
         setBucket2((prev)=>[...prev, ...bucket1])
         setBucket1([])
     }else if(direction==='remove'){
        setBucket1((prev)=>[...prev, ...bucket2])
        setBucket2([])
     }
     setSelectedItem([]); 
 }

  return (
    <>
      <div className='container'>

        <div className='bucket-wrapper'>
            <div className='buckets'>
                <h2 className='text-center'>bucket 1</h2>   
                <div className='bucket'>
                 {
                    bucket1.map((item,index)=>{
                        return <div key={index} className='bucketdiv'>
                             <ul>
                                <li onClick={()=>toggleselection(item,'bucket1')}
                                     className={selectedItem.includes(item)? 'active' : ""}
                                    >{item}</li>
                             </ul>
                        </div>
                    })
                 }
                </div>
            </div>
            <div className='btns'>
                <Button variant="success" onClick={add}>Add</Button>
                <Button variant="danger" onClick={remove}>Remove</Button>
                <Button variant="success" onClick={()=>moveAll('add')}>Add All</Button>
                <Button variant="danger" onClick={()=>moveAll('remove')}>Remove  ALL</Button>
            </div>
            <div className='buckets'>
                <h2 className='text-center'>bucket 2</h2>
                <div className='bucket'>
                    {
                        bucket2.map((item,index)=>{
                            return <div key={index} className='bucketdiv'>
                                <ul>
                                    <li onClick={()=>toggleselection(item,'bucket2')}
                                        className={selectedItem.includes(item)? 'active' : ""}
                                        >{item}</li>
                                </ul>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>

      </div>
    
    </>
  )
}

export default Elementtransfer