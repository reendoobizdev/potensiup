import React from "react";
import Logo from "../../public/assets/potensiup-long.svg";
import FontAwesome from "../misc/FontAwesome";
const Footer = () => {
  return (
    <div className="bg-white-300 pt-36 pb-20 px-4 md:pt-28 md:pb-6 md:px-16">
      <div className="flex">
        <Logo className="h-14 w-auto mb-6" />
        <div className="flex mt-2 mb-8 flex-grow justify-end">
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <FontAwesome className="h-6 w-6 text-cyan-500" name="FaFacebookF"/>
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <FontAwesome className="h-6 w-6 text-cyan-500" name="FaTwitter"/>
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <FontAwesome className="h-6 w-6 text-cyan-500" name="FaInstagram"/>
            </div>
          </div>
      </div>
      <p className="text-center text-gray-400">©2022PotensiUp</p>
    </div>
  );
};

export default Footer;
