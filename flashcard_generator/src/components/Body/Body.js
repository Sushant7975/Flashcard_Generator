import React from "react";
import { Routes, Route, Link, useLocation  } from "react-router-dom";
import CreateFlashCard from "../Create_Flashcard/CreateFlashCard"
import MyFlashCards from "../Flashcards/MyFlashCards";
import FlashCardDetails from "../Flashcards/FlashCardDetails";
import Error404 from "../Error/Error";

const Body = () => {

    const location = useLocation();


    return (
        <div className="mt-1 h-full bg-gradient-to-t from-green-200 to bg-yellow-200">
            <div className="w-4/5 m-auto border-b-[1.5px] border-gray-400">
                <ul className="flex font-bold  text-lg">
                    <li className={`pr-5 mt-5 ${location.pathname === '/' ? 'text-red-500 border-b-[3px] pb-1 mr-1 pl-2  rounded-sm border-red-500' : ''}`}><Link to="/">Create New</Link></li>
                    <li className={`mt-5 ${location.pathname === '/MyFlashCards' ? 'text-red-500 border-b-[3px] px-2 pb-1 rounded-sm border-red-500' : ''}`}><Link to="/MyFlashCards">MyFlash Cards</Link></li>
                </ul>
            </div>
            <Routes >
                <Route path="/" element={<CreateFlashCard />} />
                <Route path="/MyFlashCards" element={<MyFlashCards />} />
                <Route   path="/FlashCardDetails/:resId" element={<FlashCardDetails />} />
                <Route path="*" element={<Error404 />} />
            </Routes>
        </div>
    )
}
export default Body;