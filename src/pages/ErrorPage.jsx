import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="text-center">
        <h2 className="text-7xl font-bold">404</h2>
        <p className="text-xl">Opps!!! somthing went wrong go back to home</p>
        <Link t='/'>
            <button className="btn btn-neutral mt-3">Go Home</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
