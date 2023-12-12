import React from "react";
import logo2 from '../images/logo2.png'

const Footer = () => {
  return (
    <div className="flex w-full justify-center items-center ">
      <div className="flex flex-col space-y-[40px] xs:space-y-0 xs:flex-row xs:items-center w-full max-w-[1340px] py-[60px] px-[20px] justify-between">
          {/* left */}
        <div className="flex flex-col items-start">
          <img src={logo2} alt="" width={120} />
          <span className="text-sm nax-w-[300px] text-start text-[#8C8B8B]">
            Our vision is to make all people <br />
            the best place to live for them.
          </span>
        </div>
        {/* right */}
        <div className="flex flex-col items-end">
          <div className="flex flex-col mb-[32px]">
            <span className="secondaryText tracking-wider">Information</span>
            <span className="text-[#8C8B8B] text-sm">145 New York, FL 5467, USA</span>
          </div>
          <div className="flex space-x-[12px] font-poppins text-sm font-medium">
            <p className="hover:opacity-70 cursor-pointer">Property</p>
            <p className="hover:opacity-70 cursor-pointer">Services</p>
            <p className="hover:opacity-70 cursor-pointer">Product</p>
            <p className="hover:opacity-70 cursor-pointer">About Us</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;