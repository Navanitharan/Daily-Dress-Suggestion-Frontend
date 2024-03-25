import  { useContext} from 'react'
import { Context } from '../../App'
const Favirote = () => {
  let {favItems} = useContext(Context)
    
  return (
    <div style={{display:"flex",flexDirection:"column"}}> 
    <h3>Faviroted colors</h3>
    <div style={{width:"250px",height:"400px",overflow:"scroll"}}>
      <ul>
        {favItems.map((item)=>{return(
            <li style={{height:"100px",width:"200px",listStyle:"none", backgroundColor:`${item}`}} key={favItems.indexOf(item)}>{item}</li>
        )})}
      </ul>
    </div>
    </div>
  )
}

export default Favirote
