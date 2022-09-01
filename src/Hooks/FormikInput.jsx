import React from "react";
import { Field } from "formik";

function FormikInput(opts) {
  const input = <Field {...opts} />;

  return input;
}

export default FormikInput;
