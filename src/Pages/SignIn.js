import React from "react";
import useInput from "../Hooks/UseInput";

const SignIn = () => {
  const [email, emailInput] = useInput({
    placeholder: "Enter Email",
    type: "email",
    className:
      "w-full border border-gray-500 px-3 text-xl rounded-lg h-14 outline-none mb-5",
  });
  const [password, passwordInput] = useInput({
    placeholder: "Enter Password",
    type: "password",
    className:
      "w-full border border-gray-500 px-3 text-xl rounded-lg h-14 outline-none mb-5",
  });
  console.log(password, ",", email);
  return (
    <div className="w-full h-screen signup-bg flex items-center justify-center">
      <div className="md:w-96 w-11/12 bg-white rounded py-8 md:px-7 px-4">
        <h3 className="text-2xl text-center font-bold">Login</h3>
        <form className="w-full mt-7">
          {emailInput}
          {passwordInput}
          <button className="w-full bg-primary-500 border-0 px-3 text-xl text-center text-white rounded-full h-14 outline-none cursor-pointer">
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
