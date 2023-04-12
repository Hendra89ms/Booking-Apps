import React from 'react';

export default function MailList() {
    return (
        <div className="w-screen mt-[50px] bg-[#003580]  ">

            <div className='w-full sm:w-[1024px] mx-auto flex flex-col items-center gap-[20px] p-[50px]'>
                <h1 className="text-white">Save time, save money!</h1>
                <span className="text-white">Sign up and we'll send the best deals to you</span>
                <div className="flex gap-[20px] items-center">
                    <input
                        type="text"
                        placeholder="Your Email"
                        className='w-[250px] sm:w-[300px] h-[50px] p-[10px] rounded-md outline-blue-500' />
                    <button className='bg-[#0071c2] w-[80px] text-white text-xs sm:text-sm h-[50px] p-3 rounded-md'>Subscribe</button>
                </div>
            </div>


        </div>
    );
}
