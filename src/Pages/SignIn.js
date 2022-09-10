import React from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import useInput from "../Hooks/FormikInput";
import { useLogin } from "../Hooks/useLogin";
import { Link } from "react-router-dom";

const Signin = () => {
  const emailInput = useInput({
    placeholder: "Enter Email",
    type: "email",
    name: "email",
    id: "email",
    className: `w-full border-0 px-3 text-xl rounded-lg h-full outline-none`,
  });
  const passwordInput = useInput({
    placeholder: "Enter Password",
    type: "password",
    name: "password",
    id: "password",
    className: `w-full border-0 px-3 text-xl rounded-lg h-full outline-none`,
  });
  const signInSchema = yup.object().shape({
    email: yup.string().email().required("Email is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(4, "Password is too short - should be 4 chars min"),
  });

  const { login, error, isLoading } = useLogin();

  const initialValues = {
    email: "",
    password: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={signInSchema}
      onSubmit={(values) => {
        login(values.email, values.password);
      }}
    >
      {(formik) => {
        const { errors, touched, isValid, dirty } = formik;
        return (
          <div className="w-full h-screen signup-bg flex items-center justify-center">
            <div className="md:w-96 w-11/12 bg-white rounded py-8 md:px-7 px-4">
              <h3 className="text-2xl text-center font-bold">Login</h3>
              <h5 className="text-center text-xl">Please Login to continue</h5>
              <Form className="w-full mt-7">
                <div className="w-full px-3 mb-5">
                  <div
                    className={`w-full border rounded-lg h-14 mb-2 ${
                      errors.email && touched.email
                        ? "border-red-500"
                        : "border-gray-500"
                    }`}
                  >
                    {emailInput}
                  </div>

                  <ErrorMessage
                    name="email"
                    component="span"
                    className="error text-red-500 text-lg italic"
                  />
                </div>

                <div className="w-full px-3 mb-5">
                  <div
                    className={`w-full border rounded-lg h-14 mb-2 ${
                      errors.password && touched.password
                        ? "border-red-500"
                        : "border-gray-500"
                    }`}
                  >
                    {passwordInput}
                  </div>
                  <ErrorMessage
                    name="password"
                    component="span"
                    className="error text-red-500 text-lg italic"
                  />
                </div>

                <button
                  type="submit"
                  className={`w-full bg-primary-500 border-0 px-3 text-xl text-center text-white rounded-lg h-14 outline-none
                    ${
                      !(dirty && isValid)
                        ? "opacity-50 cursor-not-allowed"
                        : "cursor-pointer"
                    }`}
                  disabled={!(dirty && isValid && !isLoading)}
                >
                  Sign In
                </button>
                <div className="text-center flex md:flex-row flex-col justify-center mt-4">
                  <p className="text-center mr-1 font-medium">
                    Not registered yet?
                  </p>
                  <Link
                    to={"/signup"}
                    className="text-violet-700 font-semibold"
                  >
                    Create an Account
                  </Link>
                </div>

                {error && <p className="mt-2 text-center">{error}</p>}
              </Form>
            </div>
          </div>
        );
      }}
    </Formik>
  );
};

export default Signin;
