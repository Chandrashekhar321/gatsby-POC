import React from 'react'
import { Link, navigate } from 'gatsby'
import { useFormik } from 'formik';
import axiosInstance from '../services/AxiosInstance';

const formContainer = {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '35%',
    padding: '20px',
    border: '2px solid #f7f4f4',
    borderRadius: '10px'
}

const validate = values => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Enter valid email';
  }
  if (!values.password) {
    errors.password = 'Password is required';
  }
  return errors;
}

const Register = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      username: ''
    },
    validate,
    onSubmit: values => {
      console.log(values)
      axiosInstance.post('auth/local/register', {
        email: values.email,
        password: values.password,
        username: values.username
      }).then(response=>{
        navigate("/login")
      }).catch(error=> { console.log("==",error); alert(error.message)})
    },
  });
  return (
    <div>
      <Link to="/login">
          <button className="btn btn-primary mt-1">Login</button>
      </Link>
      <form onSubmit={formik.handleSubmit}>
        <div style={formContainer} className="my-3">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" className="form-control" id="username"
              onChange={formik.handleChange}
              value={formik.values.username}/>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" id="email"
              onChange={formik.handleChange}
              value={formik.values.email}/>
          </div>
          {formik.errors.email ? <p>{formik.errors.email}</p> : null}
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password"
              onChange={formik.handleChange}
              value={formik.values.password}/>
          </div>
          {formik.errors.password ? <p>{formik.errors.password}</p> : null}
          <button type="submit" className="btn btn-primary mt-3">Register</button>
        </div>
      </form>
    </div>
  )
}
export default Register
