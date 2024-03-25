import { useContext } from 'react'
import { Context } from '../../App'
import { GithubPicker, SketchPicker } from 'react-color'


const ColorPicker = () => {
  
  const{color,setTO} = useContext(Context)

    // const [color, setColor] = useState("#ff0000")
  return (
    <div>
        <div>
          <SketchPicker 
            color={color}
            onChange={(color) => {
             
              setTO(color.hex);
            }} 
          />
        </div>
      <GithubPicker
        color={color}
        onChange={(color) => {
            
            setTO(color.hex)
        }}
      />
    </div>
  )
}

export default ColorPicker
