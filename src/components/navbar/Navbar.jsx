import React from 'react';

export default function Navbar() {

    return (
        <div className='bg-[#003580] w-screen flex justify-center items-center h-[70px] '>
            <div className='w-full max-w-[1024px] text-white flex items-center justify-between px-[10px] md:px-0 '>
                <h1 className='select-none font-medium text-lg md:text-xl'>Booking Apps</h1>
                <div className='flex gap-4' >
                    <button className='bg-white text-[#003580] border-none px-[7px] py-[5px] cursor-pointer hover:bg-[#769fd8] duration-300 text-sm md:text-[16px]'>Register</button>
                    <button className='bg-white border-none px-[7px] py-[5px] hover:bg-[#769fd8] duration-300 text-[#003580] cursor-pointer text-sm md:text-[16px]'>Login</button>
                </div>
            </div>
        </div>
    );
}
