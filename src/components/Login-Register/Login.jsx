import axios from "axios";
import { useFormik } from "formik";
import { useContext } from "react";
import './login.css'

import { useNavigate } from "react-router-dom";
import { Context } from "../../App";
const validate = (values)=>{
  const error = {};

  if (!values.email) {
    error.email = "Required"
  }
  if (!values.password) {
    error.password = "Required"
  }
   return error
}

const Login = () => {

  const Navigate = useNavigate();
  const {setUserId,setFavItems} = useContext(Context);

  const formik = useFormik({
    initialValues:{
        email:"",
        password:"",
       
    },
    validate,
    onSubmit: async(values)=>{
      try{
            const res = await axios.post(`https://daily-dress-suggestion-backend.onrender.com/login`,{email:values.email,pass:values.password})
            if(res.data.message === "login successfully"){
              setUserId(res.data.userId);
              sessionStorage.setItem("x-auth-token",res.data.token)
              setFavItems(res.data.favItems)
              Navigate("/Homepage");
            }else{
              alert(res.data.message)
            }
      }
      catch(error){
        console.log(error)
      }
    } 
    
  })



  return (
    <div style={{margin:"2rem"}}>
      <form onSubmit={formik.handleSubmit}>
          <div className="form-group">
            <label htmlFor="Email">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="Email"
              name="email"
              placeholder="Email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
            <div style={{ color: "red" }}>{formik.errors.email}</div>
          ) : null}
          </div>

          <div className="form-group">
            <label htmlFor="Password" className="form-group">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="Password"
              name="password"
              placeholder="Password Name"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
            <div style={{ color: "red" }}>{formik.errors.password}</div>
          ) : null}
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>

          <button style={{marginTop:"20px"}} type="button" className="btn btn-primary" onClick={()=>{Navigate("/Register");}}>
            Register
          </button>

      </form>
    </div>
  );
};

export default Login;
