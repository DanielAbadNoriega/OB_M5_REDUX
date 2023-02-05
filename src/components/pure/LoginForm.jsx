import React from "react";
import PropTypes from "prop-types";

// FORMIK
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

// ROUTER-DOM
// import { useNavigate } from "react-router-dom";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const LoginForm = ({ loged, fetching, onLogin }) => {
  const initialCredentials = {
    email: "",
    password: "",
  };

  //const navigate = useNavigate();

  /* STYLES */
  const buttonStyle = {
    margin: "2px auto",
    width: "150px",
  };

  return (
    <Formik
      // *** Initial values that the form will take
      initialValues={initialCredentials}
      // *** Yup Validation Schema ***
      validationSchema={loginSchema}
      // ** onSubmit Event
      onSubmit={async (values) => {
        onLogin(values.email, values.password);
      }}
    >
      {/* We obtain props from Formik */}
      {({
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
      }) => (
        <Form className="mx-auto mt-2 col-8 col-lg-8 d-flex flex-column justify-content-center align-items-center gap-2">
          <label className="form-label form-label-lg" htmlFor="email">
            Email
          </label>
          <Field
            className="form-control form-control-lg"
            id="email"
            type="email"
            name="email"
            placeholder="example@email.com"
            autoComplete="true"
          />

          {/* Email errors */}

          {errors.email && touched.email && (
            //<div className="error">
            //<p>{errors.email}</p>
            //</div>

            //Con component="div" el error message estará imbuido en un div
            <ErrorMessage
              className="text-danger fw-bold"
              component="div"
              name="email"
            />
          )}

          <label className="form-label form-label-lg" htmlFor="password">
            Password
          </label>
          <Field
            className="form-control form-control-lg"
            id="password"
            type="password"
            name="password"
            placeholder="password"
            autoComplete="true"
          />

          {/* Pasword errors */}

          {errors.password && touched.password && (
            //<div className="error">
            //<p>{errors.password}</p>
            //</div>

            //Con component="div" el error message estará imbuido en un div
            <ErrorMessage
              className="text-danger fw-bold"
              component="div"
              name="password"
            />
          )}

          <button
            type="submit"
            className="btn btn-primary btn-lg"
            style={buttonStyle}
          >
            Login
          </button>
          { fetching ? (<p>LOADING...</p>) : null }
          {isSubmitting ? <p>Login your credentials...</p> : null}
        </Form>
      )}
    </Formik>
  );
};

LoginForm.propTypes = {
  loged: PropTypes.bool.isRequired,
  fetching: PropTypes.bool.isRequired,
  onLogin: PropTypes.func.isRequired
};

export default LoginForm;
