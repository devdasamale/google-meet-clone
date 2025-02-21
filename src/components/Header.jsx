import googleMeet from "../assets/google-meets.svg";
import avatar from "../assets/avatar.svg";
import { BsQuestionCircle } from "react-icons/bs";
import { LuMessageSquareWarning } from "react-icons/lu";
import { AiFillSetting } from "react-icons/ai";
import { IoApps } from "react-icons/io5";
import { useEffect, useState } from "react";

const Header = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedTime = time.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  const formattedDate = `${time.toLocaleString("en-US", {
    weekday: "short",
  })} ${time.getDate()} ${time.toLocaleString("en-US", { month: "short" })}`;

  return (
    <header className="sticky top-0 left-0 z-[9999] bg-white md:bg-transparent flex items-center justify-between w-full px-2">
      {/* Left Section - Logo and Branding */}
      <div className="flex items-center gap-0 md:gap-1 cursor-pointer" title="Google meet">
        <img
          src={googleMeet}
          alt="Google Meet Logo"
          height="40px"
          width="60px"
        />
        <span className="hidden md:block text-2xl font-medium text-gray-500">Google</span>
        <span className="text-xl font-normal text-gray-600">Meet</span>
      </div>

      {/* Center Section - Time and Date */}
      <div className="flex items-center gap-1 md:gap-10  pr-3 ">
        <div className="hidden md:flex items-center gap-1">
          <span className="text-[1.125rem] font-normal text-gray-600">
            {formattedTime}
          </span>
          <span className="text-[1.125rem] font-normal text-gray-600">
            &#128900;
          </span>
          <span className="text-[1.125rem] font-normal text-gray-600">
            {formattedDate}
          </span>
        </div>

        {/* Right Section - Icons and Profile */}
        <div className="flex items-center gap-2 ">
          <button title="Support" className="rounded-full  px-1 md:px-3 py-3 hover:bg-gray-100 cursor-pointer">
            <BsQuestionCircle fontSize="24px" color="rgb(100 100 100)" />
          </button>
          <button title="Report a problem" className="rounded-full px-1 md:px-3 py-3 hover:bg-gray-100 cursor-pointer">
            <LuMessageSquareWarning fontSize="24px" color="rgb(100 100 100)" />
          </button>
          <button title="Settings" className="rounded-full px-1 md:px-3 py-3 hover:bg-gray-100 cursor-pointer">
            <AiFillSetting fontSize="24px" color="rgb(100 100 100)" />
          </button>

          <div className="flex items-center pl-1 gap-3.5 md:pl-6 ">
            <button title="Google apps" className="rounded-full md:px-3 md:py-3 hover:bg-gray-100 cursor-pointer">
              <IoApps fontSize="24px" color="rgb(100 100 100)" />
            </button>
            <img title="Google Account" src={avatar} alt="User Avatar" width="32px" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
