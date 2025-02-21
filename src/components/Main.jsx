import { useEffect, useRef, useState } from "react";
import persons from "../assets/persons.svg";
import calender from "../assets/calender.svg";
import lock_persons from "../assets/lock_person.svg";
import { RiVideoAddLine } from "react-icons/ri";
import {
  FaRegKeyboard,
  FaChevronLeft,
  FaChevronRight,
  FaPlus,
} from "react-icons/fa6";
import { MdContentCopy } from "react-icons/md";
import { IoLink, IoCalendarClearOutline } from "react-icons/io5";
import Modal from "./Modal";

const Main = () => {
  const [isMeetingOptionsVisible, setMeetingOptionsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const meetingOptionsRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        meetingOptionsRef.current &&
        !meetingOptionsRef.current.contains(event.target)
      ) {
        setMeetingOptionsVisible(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const imagesSlider = [
    {
      id: 0,
      image: persons,
      text1: "Get a link that you can share",
      text2:
        "Click New meeting to get a link that you can send to people that you want to meet with",
    },
    {
      id: 1,
      image: calender,
      text1: "Plan ahead",
      text2:
        "Click New meeting to schedule meetings in Google Calendar and send invitations to participants",
    },
    {
      id: 2,
      image: lock_persons,
      text1: "Your meeting is safe",
      text2: "No one can join a meeting unless invited or admitted by the host",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesSlider.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + imagesSlider.length) % imagesSlider.length
    );
  };

  return (
    <div className="flex flex-col items-center justify-between w-full h-[665px] md:flex-row">
      <div className="w-full px-4.5 md:w-1/2 flex flex-col  items-center md:items-start justify-center md:px-24 py-5 gap-4 relative">
        <h1 className="md:text-5xl text-3xl text-center md:text-start font-normal text-[#1f1f1f]">
          Video calls and meetings for everyone
        </h1>
        <h2 className="text-xl text-center md:text-start md:text-2xl font-light text-[#444746]">
          Connect, collaborate and celebrate from anywhere with Google Meet
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-4">
          <button
            className="flex items-center justify-center gap-2 text-[16px] font-medium rounded-4xl px-5 py-3 cursor-pointer bg-blue-500 text-white hover:shadow-lg order-1 md:order-0 lg:order-0 "
            onClick={() => setMeetingOptionsVisible(!isMeetingOptionsVisible)}
          >
            <RiVideoAddLine fontSize={"18px"} />
            New meeting
          </button>
          <div
            className={`flex items-center justify-center gap-4 border-2 py-3 px-4 rounded-2xl ${
              inputValue ? "border-blue-600 border-2" : "border-gray-400"
            }`}
          >
            <FaRegKeyboard fontSize={"20px"} color="#444746" />
            <input
              type="text"
              placeholder="Enter a code or link"
              className="border-none outline-none"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>
          <span
            className={`cursor-pointer font-normal px-4.5 py-3 rounded-3xl hover:bg-blue-50 hover:transition-all ${
              inputValue ? "text-blue-600" : "text-gray-400 "
            }`}
          >
            Join
          </span>
        </div>

        {/* Meeting Options Dropdown */}
        {isMeetingOptionsVisible && (
          <div
            ref={meetingOptionsRef}
            className="flex flex-col items-center justify-center py-1 w-[300px] bg-white border-2 rounded border-gray-100 shadow-xl shadow-gray-300 absolute bottom-[-16px]"
          >
            <div
              onClick={() => setOpen(true)}
              className="flex items-center gap-x-4.5 px-4 py-3 w-full hover:bg-gray-100 cursor-pointer"
            >
              <IoLink fontSize={"20px"} />
              <span className="text-[16px]">Create a meeting for later</span>
            </div>
            <Modal open={open} onClose={() => setOpen(false)}>
              <h1 className="text-3xl mb-4 ">
                Here's your joining information
              </h1>
              <p className="font-light mb-2">
                Send this to people that you want to meet with. Make sure that
                you save it so that you can use it later, too.
              </p>
              <span className="flex items-center justify-around bg-blue-100 p-2 rounded font-light text-gray-900 text-[16px]">
                meet.google.com/bzi-xzhp-cub
                <MdContentCopy fontSize={"20px"} cursor={"pointer"} />
              </span>
            </Modal>
            <div className="flex items-center gap-x-4.5 px-4 py-3 w-full hover:bg-gray-100 cursor-pointer">
              <FaPlus fontSize={"20px"} />
              <span className="text-[16px]">Start an instant meeting</span>
            </div>
            <div className="flex items-center gap-x-4.5 px-4 py-3 w-full hover:bg-gray-100 cursor-pointer">
              <IoCalendarClearOutline fontSize={"20px"} />
              <span className="text-[16px]">Schedule in Google Calendar</span>
            </div>
          </div>
        )}

        <div className="border-1 border-gray-300 w-full mt-4"></div>
        <p className="font-normal text-gray-500 text-[12px]">
          <a href="#" className="font-light text-blue-600 underline">
            Learn more
          </a>{" "}
          about Google Meet
        </p>
      </div>

      {/* Image Slider */}
      <div className="w-full md:w-1/2 flex items-center justify-center flex-col">
        <div className="flex items-center justify-evenly w-[90%]">
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            className="rounded-full px-3.5 py-3.5 hover:bg-gray-100 cursor-pointer"
          >
            <FaChevronLeft fontSize={"14px"} />
          </button>

          {/* Dynamic Image */}
          <img src={imagesSlider[currentIndex].image} alt="" width={"250px"} />

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="rounded-full px-3.5 py-3.5 hover:bg-gray-100 cursor-pointer"
          >
            <FaChevronRight fontSize={"14px"} />
          </button>
        </div>

        {/* Dynamic Text */}
        <div className="flex w-full px-3  flex-col items-center justify-center gap-3 md:w-1/2 mt-8">
          <h1 className="text-2xl text-[#444446]">
            {imagesSlider[currentIndex].text1}
          </h1>
          <p className="text-center text-gray-700 font-light">
            {imagesSlider[currentIndex].text2}
          </p>

          {/* Indicators */}
          <div className="flex items-center justify-center gap-2 mt-4 mb-4">
            {imagesSlider.map((_, index) => (
              <div
                key={index}
                className={`px-1 py-1 rounded-full ${
                  index === currentIndex ? "bg-blue-500" : "bg-gray-200"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
