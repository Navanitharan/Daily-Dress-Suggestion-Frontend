import axios from "axios";
import { useFormik } from "formik";
import { useContext } from "react";
import { Context } from "../../App";
import './login.css'
import { useNavigate } from "react-router-dom";
const validate = (values)=>{
  const errors = {};

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 8) {
    errors.password = "Password must be at least 8 characters long";
  } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(values.password)) {
    errors.password =
      "Password must contain at least one special character";
  }

  if (!values.repeatpassword) {
    errors.repeatpassword = "Required";
  } else if (values.repeatpassword !== values.password) {
    errors.repeatpassword = "Passwords do not match";
  }

   return errors
}

const Register = () => {

  let {setUserId} =useContext(Context)

  const Navigate = useNavigate();

  const formik = useFormik({
    initialValues:{
        email:"",
        password:"",
       
    },
    validate,
    onSubmit: async(values)=>{
      try{
            const res = await axios.post("https://daily-dress-suggestion-backend.onrender.com/register",{email:values.email,pass:values.password})
            if(!res.data.error){
              setUserId(res.data.userId);
              Navigate("/Login");
            }
            else{
              alert(res.data.error)
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
            <label htmlFor="Email" className="">
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
            <label htmlFor="Password" >
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

          <div className="mb-3">
            <label htmlFor="RepeatPassword" className="">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="repeatpassword"
              name="repeatpassword"
              placeholder="Re-type Password"
              onChange={formik.handleChange}
              value={formik.values.repeatpassword}
            />
            {formik.touched.repeatpassword && formik.errors.repeatpassword ? (
            <div style={{ color: "red" }}>{formik.errors.repeatpassword}</div>
          ) : null}
          </div>

          <button style={{marginTop:"20px"}} type="submit" className="btn btn-primary">
            Submit
          </button>
          <button style={{marginTop:"20px"}} type="button" className="btn btn-primary" onClick={()=>{Navigate("/Login");}}>
            Login
          </button>

      </form>
    </div>
  );
};

export default Register;
