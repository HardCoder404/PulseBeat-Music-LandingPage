import React from "react";
import Feature from "./Feature";

function Experience() {
  return (
    <div className="experience flex flex-col items-center justify-start px-[5rem] bg-[#020917] h-[60rem] pt-[18rem] mt-[-10rem] relative z-[2] rounded-b-[5rem]">
      {/* titld icon */}
      <img src={require("../img/Path 318.png")} alt="" className="w-[5rem]" />
      {/* heading */}
      <div className="headline mt-7 flex flex-col items-center text-[2rem]">
        <span>An Amazing App Can Change Your Daily Life</span>
        <span>
          <b>Music Experience</b>
        </span>
      </div>
      {/* features  */}
      <div className="feature flex items-center justify-around mt-[6rem] w-[100%]">
        <Feature icon="Group 2" title="For Live Music" description="Elevating the concert-going experience, this app brings the pulsating energy of live performances directly to your fingertips." />
        
        <Feature icon="music icon" title="For Daily Music" description="Embrace the rhythm of your everyday life with our Daily Music app, where every moment becomes a personalized soundtrack."/>
        
        <Feature icon="Group 4" title="For Artists" description="Step into the artist's realm with our dedicated Artist Hub, an empowering space where creativity knows no bounds. " />
      </div>
    </div>
  );
}

export default Experience;
