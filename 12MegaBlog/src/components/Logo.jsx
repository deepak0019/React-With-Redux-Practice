import React from "react";

function Logo({ width = "100px" }) {
  return (
    <div className="flex">
      <img
        src="./images/logo2.svg"
        alt=""
        srcset=""
        width="60px"
        height="50px"
      />
      <span className="mt-5 mx-5 text-lg font-semibold text-white">
        BlogNest
      </span>
    </div>
  );
}

export default Logo;
