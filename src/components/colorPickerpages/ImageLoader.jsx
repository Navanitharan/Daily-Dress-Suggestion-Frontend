import { useContext } from "react"
import DressPNG from "./DressPNG"
import { Context } from "../../App"

const ImageLoader = () => {
const {color,addFav} = useContext(Context);

  return (
    
    <div style={{marginLeft:"80px",height:"700px",width:"400px"}}>
      <h3>Choosen Dress</h3>
      <div className="imageContainer" style={{height:"700px"}}>
        <DressPNG fill="blue"/>
        <button style={{cursor:"pointer",padding:"10px", fontSize:"15px",backgroundColor:"#f23451",borderRadius:"15px",border:"none"}} onClick={()=>{addFav(color)}}>Add to favirote</button>
      </div>
      
    </div>
  )
}

export default ImageLoader
