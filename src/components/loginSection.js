import React from 'react'
import { Link, navigate} from "gatsby";
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

const LoginSection = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validate,
    onSubmit: values => {
      console.log(values)
      axiosInstance.post('auth/local', {
        identifier: values.email,
        password: values.password
      }).then(response=> {
        localStorage.setItem('token', response?.data?.jwt)
        navigate("/home")
      }).catch(error=> alert(error.message))
    },
  });
  return (
    <main>
      <Link to="/register">
        <button className="btn btn-primary mt-1">Register</button>
      </Link>
      <form onSubmit={formik.handleSubmit}>
        <div style={formContainer} className="my-3">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" id="email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}/>
          </div>
          {formik.errors.email ? <p>{formik.errors.email}</p> : null}
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}/>
          </div>
          {formik.errors.password ? <p>{formik.errors.password}</p> : null}
          <button type="submit" className="btn btn-primary mt-3">Login</button>
        </div>
      </form>
    </main>
  )
}
export default LoginSection
