import { useRef, useState } from "react";
import { Netflix_background } from "../utils/constants";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errMessage, setErrMessage] = useState(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const nameRef = useRef(null);

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
    setErrMessage(null);
    if (emailRef.current) emailRef.current.value = "";
    if (passwordRef.current) passwordRef.current.value = "";
    if (nameRef.current) nameRef.current.value = "";
  };

  const handleButtonClick = () => {
    const message = checkValidData(
      emailRef.current.value,
      passwordRef.current.value,
      nameRef?.current?.value,
      isSignIn
    );
    setErrMessage(message);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={Netflix_background} alt="background"></img>
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute bg-black p-12 my-24 mx-auto right-0 left-0 text-white shadow-lg bg-opacity-75 rounded-lg"
      >
        <h1 className="font-bold text-2xl p-2">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={nameRef}
            className="my-4 p-2 w-full bg-gray-700 "
            type="text"
            placeholder="Enter Your Name"
          ></input>
        )}
        <input
          ref={emailRef}
          className="my-4 p-2 w-full bg-gray-700 "
          type="email"
          placeholder="Enter Your Email"
        ></input>
        <input
          ref={passwordRef}
          className="my-4 p-2 w-full bg-gray-700 "
          type="password"
          placeholder="Enter Your Password"
        ></input>
        <p className="p-2 text-red-700 font-bold">{errMessage}</p>
        <button
          className="p-2 my-4 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-2 cursor-pointer" onClick={toggleSignInForm}>
          {isSignIn
            ? "New to Netflix? Sign Up Now"
            : "Already registered!! Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
