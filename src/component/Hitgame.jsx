import React, { useEffect, useState } from 'react'

function Hitgame() {
  let [keywordbox,setKeywordBox]=useState(null)
  let [timeleft,setTimeleft]=useState(60)
  let [score,setScore]=useState(0)
  let [gameover,setGameover]=useState(false)
  let keyword='HIT'


  useEffect(()=>{
    if(timeleft===0){
       setGameover(true)
       return
    }
    console.log('rendered')
     setTimeout(()=>setTimeleft((prev)=>prev-1),1000)
  },[timeleft])


  useEffect(()=>{
    if(gameover) return

    let interval = setInterval(()=>{
         let randomNum= Math.floor(Math.random() * 9)
         setKeywordBox(randomNum)
         setTimeout(()=>setKeywordBox(null),1000)
    },2000)
  },[gameover])

  
  const handleboxclick=(index)=>{
       if(gameover) return

        if(index===keywordbox){
            setScore((prev)=>prev + 5 )
        }
        else{
          setScore((prev)=> prev - 2.5)
        }
  }

  return (
   <>
    <div className='container'>
      <h2 className='text-center mt-3'> Hit Game</h2>
        <div >
          <p className='h5'>score:{score}</p>
           <p className='h5'>timeleft:{timeleft}</p>
        </div>
        {
          gameover ? (
            <div className=''>
              <p className='h2 text-center'>Game Over</p>
              <p className='h5'>Final Score:{score}</p>

            </div>
          ):(
            <div className='grid-container'>
            {Array.from({length:9}).map((_,index)=>{
                return <div key={index}
                 className='box'
                  onClick={()=>handleboxclick(index)}
                >
                  {
                    keywordbox===index && <span className='keyword'>{keyword}</span>
                  }
                </div>
            })
            
          }             
          </div>
  
          )
        }
       
    </div>
   </>
  )
}

export default Hitgame