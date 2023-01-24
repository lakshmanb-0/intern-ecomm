import React from "react";
import { Link } from "react-router-dom";

function Thank() {
  return (
    <div className="flex items-center justify-center flex-col  h-screen space-y-5">
      <h1 className="text-6xl font-bold">Thanks Your purchasing</h1>
      <Link to="/">
        <button className="bg-blue-700 text-white px-5 py-3 rounded-full">
          Buy more Product
        </button>
      </Link>
    </div>
  );
}

export default Thank;
