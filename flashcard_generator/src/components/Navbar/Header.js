import React from "react";
import Logo from "./logo.png";
import flashimg from "./Flashcardimg.png";
import useOnlineStatus from "./useOnlineStatus";
import { HiStatusOnline } from "react-icons/hi";
import { HiStatusOffline } from "react-icons/hi";

const Header = () => {
  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex max-w-screen-3xl shadow-lg justify-between text-left mx-auto bg-gradient-to-r from-yellow-200 to bg-green-200">
      <div className="flex items-center font-medium text-3xl py-4">
        <img
          className="h-10 my-auto ml-3 sm:ml-5"
          src={Logo}
          alt="AlmaBetter"
        />
        <span className="text-black">maBetter</span>
      </div>
      <div className="flex items-center">
        <div className="rounded-full border-[1px] mr-1 ml-5 sm:ml-2 border-amber-700 flex items-center justify-center p-1 h-12 w-12">
          <span className="px-2">
            {onlineStatus ? (
              <HiStatusOnline className="text-2xl text-green-600" />
            ) : (
              <HiStatusOffline className="text-2xl text-red-600" />
            )}
          </span>
        </div>
        <img src={flashimg} alt="" className="h-12 mr-8 px-3 py-1" />
      </div>
    </div>
  );
};

export default Header;
