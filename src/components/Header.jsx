import React from "react";
import CenterMenu from "./CenterMenu";

function Header() {
  const buttonStyle =
    "border-[2px] rounded-[10px] border-[#232A4E] px-[25px] py-[7px]";
  return (

    <div className="header bg-[#081730] flex items-center justify-between px-[5rem] pt-[2.4rem] text-[0.8rem] ">
      {/* logo */}
      <img
        src={require("../img/logo2.png")}
        alt=""
        className="logo  w-[51px] h-[51px] hover:cursor-pointer"
      />
      {/* side menu */}
      <CenterMenu />
      {/* buttons */}
      <div className="buttons flex" >
        <button className={`mr-[35px] hover:bg-[#232A4E] font-medium text-[0.88rem] ` + buttonStyle}>
          Log in
        </button>
        <button className={buttonStyle+`bg-[#232A4E] bg-gradient-to-r from-fuchsia-500 via-red-400 to-red-600 font-medium text-[0.88rem] transition-transform duration-300 ease-out transform hover:scale-105`}>
          Sign up
          </button>
      </div>
    </div>
  );
}

export default Header;
