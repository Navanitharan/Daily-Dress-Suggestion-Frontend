import { createContext, useState } from "react";
import Values from "values.js"
import './App.css'
import Login from "./components/Login-Register/Login";
import { BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import HomePageComponent from "./components/HomePage/HomePageComponent";
import axios from "axios";
import Register from "./components/Login-Register/Register";
const Context = createContext();

function App() {
  const [color, setColor] = useState("#D2E2F5");
  const [flywayColor,setFlywayColor] = useState("#D2E2F5")
  const [shades, setShades] = useState([])
  const [favItems, setFavItems] = useState([]);
  let [userId,setUserId] = useState("");
  let setTO = (setColorTo)=>{
    const newColor = new Values(setColorTo);
             let newColorShades = newColor.all(10);
             newColorShades.shift();
             setShades(newColorShades)
            setColor(setColorTo)
  }

  let setFlywayTO = (setFlywayTo)=>{
    setFlywayColor(setFlywayTo)
  }
  
  let getfav = async ()=>{
  let res = await axios.get(`https://daily-dress-suggestion-backend.onrender.com/getfav/${userId}`,{header:{"x-auth-token":sessionStorage.getItem("x-auth-token")}});
   if(res.data.favItems){
    let favdata = res.data.favItems
     setFavItems(favdata)
   }
}

  let addFav=async (newItem)=>{
    let newItems = [...favItems,newItem];
    await axios.post(`https://daily-dress-suggestion-backend.onrender.com/setfav/${userId}`,{favItems:newItems})
    setFavItems(newItems)
        
  }

  return (
    <Context.Provider value={{color, setTO, flywayColor, setFlywayTO, shades, setShades, favItems, setFavItems,userId, setUserId, addFav, getfav}}>
      <div style={{width:"80%",margin:"auto",display:"block",justifyitems:"center"}}>
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Navigate to="/Login" />} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Register" element={<Register/>} />
          <Route path="/Homepage" element={<HomePageComponent/>}/>
        </Routes>
        
        </BrowserRouter>
        
        
      </div>
    </Context.Provider>
  )
}

export {App as default, Context}
