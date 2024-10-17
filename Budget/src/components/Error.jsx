import React from "react";
import { NavLink, useNavigate, useRouteError } from "react-router-dom";

const Error = () => {
  const er = useRouteError();
  const naviagte = useNavigate();
  return (
    <div className="flex items-center justify-center flex-col gap-5">
      <h1 className="text-xl sm:text-3xl lg:text-5xl font-bold">
        Uh oh! We've got a problem.
      </h1>
      <p className="text-xs sm:text-base lg:text-lg">{er.message}</p>
      <div className="flex gap-3">
      <button className="border p-1 sm:p-2 px-3 sm:px-4 lg:px-8 bg-black rounded hover:outline-4 hover:outline hover:outline-offset-2 duration-100" onClick={()=> naviagte(-1)}>
        <span className="text-white text-xs sm:text-sm lg:text-base">
          Go Back
        </span>
      </button>
      <NavLink to="/">
      <button className="border p-1 sm:p-2 px-3 sm:px-4 lg:px-8 bg-black rounded hover:outline-4 hover:outline hover:outline-offset-2 duration-100">
        <span className="text-white text-xs sm:text-sm lg:text-base">
          Go Home
        </span>
      </button>
      </NavLink>
      </div>
      
      
    </div>
  );
};

export default Error;
