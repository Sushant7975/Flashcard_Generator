import React, { useState } from 'react';
import flashGif from './terms.gif'
import { RiArrowRightSLine } from "react-icons/ri";
import { RiArrowLeftSLine } from "react-icons/ri";


const Carousel = ({ terms }) => {
  const [currentTermIndex, setCurrentTermIndex] = useState(0);

  const handleNext = () => {
    setCurrentTermIndex((prevIndex) => (prevIndex === terms.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrev = () => {
    setCurrentTermIndex((prevIndex) => (prevIndex === 0 ? terms.length - 1 : prevIndex - 1));
  };

  if (!terms || terms.length === 0) {
    return <div>No terms available</div>;
  }

  return (
    // maindiv 
    <div className=" h-full    ">
        {/* both title and descriptions  */}
      <div className="  h-screen    mt-5 ">
      <div className='  flex flex-col   sm:flex-row lg:flex-row md:flex-row xl:flex-row'>
          {/* titles  */}
          
        <div className='w-[80%] sm:w-[30%]  mb-5  shadow-lg rounded-lg flex flex-col  text-center  items-center  mr-5  overflow-auto h-[285px]  bg-white'> 
        <p className='my-5 text-xl font-bold text-gray-700 w-[90%] mx-auto pb-2 border-b-[1.5px] border-red-100'>Flashcards</p>
        <div className=' '>
        {terms.map((term, index) => (
          <div className='' >
     
          <div
            key={index}
            className='flex   pb-2  '
            onClick={() => setCurrentTermIndex(index)}
          >

             {currentTermIndex === index ? <RiArrowRightSLine className='mt-1 text-red-500 text-xl' />  : null} <span className='text-lg font-medium to-slate-900 '> {term.title} </span>
          </div>
          </div>
        ))}
        </div>
        </div>

        <div className='ml-0 w-[80%] bg-white shadow-lg rounded-lg  h-[350px]   py-10 pl-4 border-[1px]'>

            {/* img and defination  */}
          <div className=' flex flex-col sm:flex-row  h-[286px]  ' >
            <div className=' w-[50%] my-4 pr-2'>
           { terms[currentTermIndex].term_uploadimage ? (
            <img src={terms[currentTermIndex].term_uploadimage} alt="Flashcard_Image" className="max-h-[286px]  " />
            ):
            (
              <img src={flashGif} alt="Flashcard_Image" className=" " />
            )}
            </div>

            <div className='   '>
            <p className='text-lg text-red-950 '>{terms[currentTermIndex].definition}</p>
            </div>

          </div>

          <div className='flex justify-center p-2  mt-10'>
             <button className='text-2xl  mr-5' onClick={handlePrev}><RiArrowLeftSLine /></button>
            <span className='mb-1'>{currentTermIndex +1} / {terms.length}</span>
            <button className='text-2xl  ml-5' onClick={handleNext}><RiArrowRightSLine/></button>
            </div>

          </div>
          </div>
          
         
    </div>
      
      </div>
   
  );
};

export default Carousel;