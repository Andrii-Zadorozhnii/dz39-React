import React from "react";
import { useFormik } from "formik";
import './App.css';

const Form = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message:"",
    },
    validate: (values) => {
      const errors = {};

      if (!values.name) {
        errors.name = "Required";
      } else if (values.name.length < 4) {
        errors.name = "Username should not be less than 4 characters";
      }

      if (!values.email) {
        errors.email = "Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }

      if (!values.phone) {
        errors.phone = "Required";
      } else if (!/^\+380[0-9]{9}$/i.test(values.phone)) {
        errors.phone = "Please enter a valid phone number starting with '+380'";
      }

      if (!values.message) {
        errors.message = "Required";
      } else if (values.message.length < 10) {
        errors.message = "Message should be at least 10 characters";
      }

      return errors;
    },
    onSubmit: () => {
      alert("Form submitted!");
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
    <div className="name box">
      <input
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
        placeholder="Name and Surname"
      />
        {formik.touched.name && formik.errors.name ? (
        <p>{formik.errors.name}</p>
      ) : null}
      </div>

      <div className="email box">
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        placeholder="Email"
      />
        {formik.touched.email && formik.errors.email ? (
        <p>{formik.errors.email}</p>
      ) : null}
      </div>

      <div className="phone box">
      <input
        id="phone"
        name="phone"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.phone}
        placeholder="Phone Number"
      />
      {formik.touched.phone && formik.errors.phone ? (
        <p>{formik.errors.phone}</p>
      ) : null}
      </div>
      
      <div className="message box">
      <input
        id="message"
        name="message"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.message}
        placeholder="Write your message"

      />
        {formik.touched.message && formik.errors.message ? (
        <p>{formik.errors.message}</p>
      ) : null}
      </div>


      <button className="submit" type="submit">Send</button>
    </form>
  );
};

export default Form;
