import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useEffect, useState } from "react";
import Quiz from "./quiz";
import Showanswer from "./showanswer";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
const p="In this tutorial, Beau Carnes will teach you how to create the classic Simon Game. This is a good project that will get you thinking about the different components behind the game and how you would build out each of those functionalities."
function App() {
  const [c,setc]=useState(0)
  useEffect(()=>{
    setc(30)
  },[])
  return  <>
{/* <p>{p.length>c?<>{p.substring(0,c)}<span onClick={()=>{
  console.log("hello ")
  setc(p.length)
}}>...seemore</span></>:p}</p>
<p onClick={()=>{
  setc(30)
}}>see less</p> */}
    <BrowserRouter>
    <Routes>
       <Route path="/" element={<Quiz/>} />
        <Route path="show_answer" element={<Showanswer />} />  
    </Routes>
  </BrowserRouter>


 </>

}

export default App;
