import ColorPicker from "./colorPickerpages/ColorPicker";
import ImageLoader from "./colorPickerpages/ImageLoader";
import Favirote from "./colorPickerpages/Favirote";
import Shades from "./colorPickerpages/Shades";
import FlywayPicker from "./colorPickerpages/FlywayColor";


const ColorPickerPage = () => {
  return (
    <div>
      
      <div style={{width:"100%",display:"flex", justifyContent:"center",flexWrap:"wrap"}}>
        <div>
          <h3>Dress Color Picker</h3>
          <ColorPicker />
          <h3>Flyway Color Picker</h3>
          <FlywayPicker/>
        </div>
        <ImageLoader />
        <Favirote/>
      </div>
      <Shades/>
    </div>
  )
}

export default ColorPickerPage
