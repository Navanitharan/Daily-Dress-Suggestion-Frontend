import { useContext } from "react"
import { Context } from "../../App"
import SuggestedDress from "./SuggestedDress"

const Shades = () => {

    const {shades,setTO} = useContext(Context)

    return (
        <div className="shades">
            <h3>Suggested Shades</h3>
            <ul className="shades-list">
            {shades.map((shade)=>{return( 
            
            <li key={shades.indexOf(shade)} style={{width:"250px",height:"210px",cursor:"pointer"}} onClick={()=>{setTO("#"+shade.hex)}}><SuggestedDress color={shade.hex}/></li>
            )
            })}
            </ul>
        </div>
    )
}

export default Shades
