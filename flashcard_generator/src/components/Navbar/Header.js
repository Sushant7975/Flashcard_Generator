import React from 'react';
import Logo from './logo.png'
import flashimg from './Flashcardimg.png'
const Header = () => {


  return (
    <div className='flex max-w-screen-2xl shadow-lg justify-between text-left mx-auto'>
      <div className='flex items-center font-medium text-3xl py-4'>
                <img className='h-10 my-auto ml-4' src={Logo} alt="AlmaBetter" />
                <span className='dark:text-white'>maBetter</span>
            </div>
            <div className=''>
              <img src={flashimg} alt="" className='h-12 mt-3 mr-8 px-3 py-1 ' />
            </div>
     </div>
  );
}

export default Header;