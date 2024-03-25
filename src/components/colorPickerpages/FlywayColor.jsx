import { useContext} from 'react'
import { Context } from '../../App'
import { GithubPicker, SketchPicker } from 'react-color'


const FlywayPicker = () => {
  
  const{flywayColor,setFlywayTO} = useContext(Context)
  return (
    <div>
        <div>
          <SketchPicker 
            color={flywayColor}
            onChange={(color) => {
             
              setFlywayTO(color.hex);
            }} 
          />
        </div>
      <GithubPicker
        color={flywayColor}
        onChange={(color) => {
         
          setFlywayTO(color.hex);
        }}
      />
    </div>
  )
}

export default FlywayPicker
