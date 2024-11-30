import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Elementtransfer from "./component/Elementtransfer"
import Nestedlist from './component/Nestedlist/index'
import IT from "./component/Nestedlist/IT"
import NonIT from "./component/Nestedlist/NonIT"
import Programming from "./component/Nestedlist/Programming"
import Dsa from "./component/Nestedlist/Dsa"
import Web from "./component/Nestedlist/Web"
import Construction from "./component/Nestedlist/Construction"
import Mechanical from "./component/Nestedlist/Mechanical"
import Header from "./component/Header"
import Infinateloop from "./component/Infinateloop"
import Hitgame from "./component/Hitgame"
import Splitbox from "./component/Splitbox"

function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/element-transfer' element={<><Header/><Elementtransfer /></>}/>
      <Route path='/nestedlist' element={<><Header/><Nestedlist/></>}>
           <Route path='IT' element={<IT/>}>
              <Route path='programming' element={<Programming/>}/>
              <Route path='dsa' element={<Dsa/>}/>
              <Route path='web' element={<Web/>}/>
           </Route>
           <Route path='non-IT' element={<NonIT/>}>
              <Route path='construction' element={<Construction/>}/>
              <Route path='mechacical' element={<Mechanical/>}/>
           </Route>
         
      </Route>
      <Route path="/infinate-scroll" element={<><Header/><Infinateloop/></>}/>
      <Route path="/hitgame" element={<><Header/><Hitgame/></>}/>
      <Route path='/splitbox' element={<><Header/><Splitbox/></>} />
      <Route path="/*" element={<Navigate to={'/element-transfer'}/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
