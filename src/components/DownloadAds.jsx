import React from 'react'

function DownloadAds() {
    const downloadImgStyle = 'border-[2px] border-[#232A4E] rounded-[13px] h-[3rem] w-[10rem] transition-transform duration-300 ease-out transform hover:scale-105'

  return (
    <div className="download hover:cursor-pointer">
        <div className="download_images flex">
        <img 
          src={require("../img/App Store.png")}
          alt=""
          className={downloadImgStyle + ` mr-[2rem]`}
        />
        <img
          src={require("../img/Google Play.png")}
          alt=""
          className={downloadImgStyle}
        /> 
        </div>
    </div>
    )
}

export default DownloadAds