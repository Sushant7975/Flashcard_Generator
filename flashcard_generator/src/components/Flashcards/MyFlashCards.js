import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeFlashcard } from "../../Redux/flashcardsSlice";
import defo1 from "../Navbar/defo1.JPG";
import { BsFillTrash3Fill } from "react-icons/bs";

const MyFlashCards = () => {
  const [visibleCards, setVisibleCards] = useState(6);
  const dispatch = useDispatch();
  const flashcards = useSelector((state) => state.flashcards.flashcards);

  const handleDeleteClick = (flashcardId) => {
    dispatch(removeFlashcard(flashcardId));
  };

  const handleShowMore = () => {
    setVisibleCards((prevVisibleCards) => prevVisibleCards + 6);
  };

  const handleShowLess = () => {
    setVisibleCards(6);
  };

  return (
    <div className=" pb-48 min-h-screen bg-gradient-to-t from-green-200 to bg-yellow-200 ">
      <div className="w-[40%] sm:w-4/5  flex m-auto flex-wrap justify-center mt-5">
        {flashcards.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[80vh]">
            <div className="text-red-600 m-2 font-bold">
              Flashcard Is Not Available
            </div>
            <Link to="/">
              <button className="rounded-xl hover:bg-red-800 bg-red-700 px-4 p-2 m-2 text-center text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium  py-2.5 mr-2 mb-2 ">
                Create Flashcards
              </button>
            </Link>
          </div>
        ) : null}

        {flashcards.slice(0, visibleCards).map((flashcard) => (
          <div className="my-8 mx-2 relative" key={flashcard.id}>
            <button
              className="text-gray-500 p-1 mt-2 absolute top-1 z-10 right-3 rounded-lg"
              onClick={() => handleDeleteClick(flashcard.id)}
            >
              <BsFillTrash3Fill size={28} />
            </button>
            <div className=" p-1 border-2 border-gray-600 w-72 rounded-md h-64 text-center bg-gradient-to-tr from-yellow-200 to bg-green-200 relative">
              {flashcard.uploadImage ? (
                <img
                  src={flashcard.uploadImage}
                  alt={`Flashcard_Image_${flashcard.id}`}
                  className="w-16 h-16 rounded-full border-[2px] border-slate-400 object-center absolute bottom-56 left-1/2 transform -translate-x-1/2 hover:scale-110"
                />
              ) : (
                <img
                  src={defo1}
                  alt={`Static_Image_${flashcard.id}`}
                  className="w-16 h-16 rounded-full absolute bottom-56 left-1/2 transform  border-zinc-400 shadow-2xl border-[1px]  -translate-x-1/2 hover:scale-110"
                />
              )}

              <div className="mt-10 mb-3">
                <h2 className="text-xl font-bold text-zinc-600">
                  {flashcard.title}
                </h2>
              </div>

              <p className="text-base h-12 text-emerald-900 overflow-hidden font-bold">
                {flashcard.description}
              </p>
              <p className="text-md text-gray-900 font-medium my-5">
                {flashcard.termsLength} Cards
              </p>
              <div className="mb-5">
                <Link
                  className="inline-flex mt-auto items-center px-8 sm:px-12 md:px-12 lg:px-12 xl:px-12 py-2 text-center max-w-xs  dark:border-red-500  bg-white rounded-full hover:bg-red-100 font-bold  text-white bg-gradient-to-r from-green-500 to-yellow-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800  text-lg mr-2 mb-2"
                  to={`/FlashcardDetails/${flashcard.id}`}
                >
                  View Cards
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Show More or Show Less buttons */}
      {flashcards.length > 6 && (
        <div className="flex justify-end mr-10">
          {visibleCards === 6 ? (
            <button
              onClick={handleShowMore}
              className="mb-24 font-bold cursor-pointer w-24 mx-5 text-red-700"
            >
              Show More
            </button>
          ) : (
            <button
              onClick={handleShowLess}
              className="mb-24 font-bold cursor-pointer w-24 mx-5 text-red-700"
            >
              Show Less
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default MyFlashCards;
