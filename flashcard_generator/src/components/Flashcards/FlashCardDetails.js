import React ,{useState} from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Carousel from './Carousel';
import { FaArrowLeft } from "react-icons/fa";
import { BsCloudDownload } from 'react-icons/bs';
import { BsPrinter } from 'react-icons/bs';
import { TfiBackRight } from 'react-icons/tfi';
import ShareModel from './ShareModel';

const FlashcardDetails = () => {
  const { resId } = useParams();
  const flashcard = useSelector(state => state.flashcards.flashcards.find(flashcard => flashcard.id === resId));


  // using useState for adding active class
  
  // using useState for share Button on click share it will be visible
   const [visible, setVisible] = useState(false);
  const onClose = () => { setVisible(false) }

  

  if (!flashcard) {
    return <div className=''>Flashcard not found</div>;
  }
 
  console.log("Terms:", flashcard.terms); // Log terms before rendering

  return (



    <div className='w-9/12 m-auto  mt-1'>

      <div>
        <div className=''>
          <div className='flex'>
            <Link className='text-xl mt-3 ' to={"/MyFlashCards"}><FaArrowLeft /></Link> 
            <span><h1 className='ml-10 font-bold text-lg py-2'>{flashcard.title}</h1></span>
          </div>
          <p className='ml-16 font-normal'>{flashcard.description}</p>
        </div>
        <div>
          <Carousel terms={flashcard.terms} />
        </div>
      </div>

         {/* button for share, download, print  */}
         <div className=" w-[250px]  rounded-lg h-48">
            <div onClick={() => setVisible(true)} className="bg-white dark:bg-gray-800 flex cursor-pointer mb-4 drop-shadow-md hover:scale-110 rounded-lg w-[250px] p-2 h-10"><TfiBackRight className='text-2xl mx-5' />Share</div>
            <div className="bg-white dark:bg-gray-800 flex cursor-pointer my-4 drop-shadow-md hover:scale-110 rounded-lg w-[250px] p-2 h-10"><BsCloudDownload className='text-2xl mx-5' />Download</div>
            <div onClick={() => { window.print() }} className="bg-white dark:bg-gray-800 flex cursor-pointer my-4 drop-shadow-md hover:scale-110 rounded-lg w-[250px] p-2 h-10"><BsPrinter className='text-2xl mx-5' />Print</div>
          </div>
          <ShareModel onClose={onClose} visible={visible} />
    </div>
  );
}

export default FlashcardDetails;