import React, { useState } from "react";
import flashGif from "./terms.gif";
import { RiArrowRightSLine } from "react-icons/ri";
import { RiArrowLeftSLine } from "react-icons/ri";
import ShareModel from "./ShareModel";
import { BsCloudDownload } from "react-icons/bs";
import { BsPrinter } from "react-icons/bs";
import { TfiBackRight } from "react-icons/tfi";

const Carousel = ({ terms }) => {
  const [currentTermIndex, setCurrentTermIndex] = useState(0);

   // using useState for share Button on click share it will be visible
  const [visible, setVisible] = useState(false);
  const onClose = () => {
    setVisible(false);
  };

  const handleNext = () => {
    setCurrentTermIndex((prevIndex) =>
      prevIndex === terms.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentTermIndex((prevIndex) =>
      prevIndex === 0 ? terms.length - 1 : prevIndex - 1
    );
  };

  if (!terms || terms.length === 0) {
    return <div>No terms available</div>;
  }

 

  return (
    // maindiv
    <div className=" h-[100%] ">
      {/* both title and descriptions  */}
      <div className=" h-screen mt-5 ">
        <div className="flex flex-col sm:flex-row lg:flex-row md:flex-row xl:flex-row">
          {/* titles  */}

          <div className="w-[80%] sm:w-[30%]  mb-5  shadow-lg rounded-lg flex flex-col  text-center  items-center  mr-5  overflow-auto h-[285px]  bg-white">
            <p className="my-5 text-xl font-bold text-gray-700 w-[90%] mx-auto pb-2 border-b-[1.5px] border-red-100">
              Flashcards
            </p>
            <div className=" ">
              {terms.map((term, index) => (
                <div className="">
                  <div
                    key={index}
                    className="flex pb-2"
                    onClick={() => setCurrentTermIndex(index)}
                  >
                    {currentTermIndex === index ? (
                      <RiArrowRightSLine className="mt-1  text-xl" />
                    ) : null}{" "}
                    <span className="text-lg font-medium to-slate-900 ">
                      {" "}
                      {term.title}{" "}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="ml-0 w-[80%] bg-white shadow-lg rounded-lg  h-[350px]   py-10 pl-4 border-[1px]">
            {/* img and defination  */}
            <div className=" flex flex-col sm:flex-row  h-[286px]  ">
              <div className=" w-[50%] my-4 pr-2">
                {terms[currentTermIndex].term_uploadimage ? (
                  <img
                    src={terms[currentTermIndex].term_uploadimage}
                    alt="Flashcard_Image"
                    className="max-h-[286px]  "
                  />
                ) : (
                  <img src={flashGif} alt="Flashcard_Image" className=" " />
                )}
              </div>

              <div className=" w-[70%] sm:w-[50%] overflow-hidden mr-2 ">
                <p className="text-lg text-red-950 ">
                  {terms[currentTermIndex].definition}
                </p>
              </div>
            </div>
            <div className="flex justify-center mt-8 ">
              <p className="mx-auto  h-3 w-60 bg-black opacity-5  rounded-[100%] shadow-xl"></p>
            </div>

            <div className="flex justify-center p-2  my-3">
              <button className="text-2xl  mr-5" onClick={handlePrev}>
                <RiArrowLeftSLine className="hover:scale-125 hover:text-red-500" />
              </button>
              <span className="mb-1">
                {currentTermIndex + 1} / {terms.length}
              </span>
              <button className="text-2xl  ml-5" onClick={handleNext}>
                <RiArrowRightSLine className="hover:scale-125 hover:text-red-500" />
              </button>
            </div>
          </div>
        </div>
         {/* button for share, download, print  */}
      <div className=" w-[250px] mt-16 sm:mt-1 rounded-lg h-48">
        <div
          onClick={() => setVisible(true)}
          className="bg-white dark:bg-gray-300 flex cursor-pointer mb-4 drop-shadow-md hover:scale-110 rounded-lg w-[250px] p-2 h-10"
        >
          <TfiBackRight className="text-2xl mx-5" />
          Share
        </div>
        <div className="bg-white dark:bg-gray-300 flex cursor-pointer my-4 drop-shadow-md hover:scale-110 rounded-lg w-[250px] p-2 h-10">
          <BsCloudDownload className="text-2xl mx-5" />
          Download
        </div>
        <div
          onClick={() => {
            window.print();
          }}
          className="bg-white dark:bg-gray-300 flex cursor-pointer my-4 drop-shadow-md hover:scale-110 rounded-lg w-[250px] p-2 h-10"
        >
          <BsPrinter className="text-2xl mx-5" />
          Print
        </div>
        </div>
         <ShareModel onClose={onClose} visible={visible} />
      </div>
    </div>
  );
};

export default Carousel;
