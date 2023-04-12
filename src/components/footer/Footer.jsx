import React from 'react';

export default function Footer() {

    return (

        <div className='w-screen  '>
            <div className='w-full sm:max-w-[1024px] mx-auto px-2 flex flex-col sm:flex-row mt-[50px] justify-center items-center sm:gap-10 gap-0'>
                <div className="flex justify-between w-full h-[200px] ">
                    <ul className="text-[#003580] mb-[10px]">
                        <li className="cursor-pointer">Countries</li>
                        <li className="cursor-pointer">Regions</li>
                        <li className="cursor-pointer">Cities</li>
                        <li className="cursor-pointer">Districts</li>
                        <li className="cursor-pointer">Airports</li>
                        <li className="cursor-pointer">Hotels</li>
                    </ul>
                    <ul className="text-[#003580] mb-[10px]">
                        <li className="cursor-pointer">Homes </li>
                        <li className="cursor-pointer">Apartments </li>
                        <li className="cursor-pointer">Resorts </li>
                        <li className="cursor-pointer">Villas</li>
                        <li className="cursor-pointer">Hostels</li>
                        <li className="cursor-pointer">Guest houses</li>
                    </ul>

                    <ul className="text-[#003580] mb-[10px]">
                        <li className="cursor-pointer">Car rental </li>
                        <li className="cursor-pointer">Flight Finder</li>
                        <li className="cursor-pointer">Restaurant reservations </li>
                        <li className="cursor-pointer">Travel Agents </li>
                    </ul>


                </div>

                <div className='flex justify-between w-full'>
                    <ul className="text-[#003580] mb-[10px]">
                        <li className="cursor-pointer">Curtomer Service</li>
                        <li className="cursor-pointer">Partner Help</li>
                        <li className="cursor-pointer">Careers</li>
                        <li className="cursor-pointer">Sustainability</li>
                        <li className="cursor-pointer">Press center</li>
                        <li className="cursor-pointer">Safety Resource Center</li>
                        <li className="cursor-pointer">Investor relations</li>
                        <li className="cursor-pointer">Terms & conditions</li>
                    </ul>

                    <ul className="text-[#003580] mb-[10px]">
                        <li className="cursor-pointer">Unique places to stay </li>
                        <li className="cursor-pointer">Reviews</li>
                        <li className="cursor-pointer">Unpacked: Travel articles </li>
                        <li className="cursor-pointer">Travel communities </li>
                        <li className="cursor-pointer">Seasonal and holiday deals </li>
                    </ul>

                </div>

            </div>
            <div className="flex justify-center items-center my-4 sm:mt-8 gap-1">
                <p>Copyright © 2022</p>
                <p className='font-bold'> Booking Apps.</p>
            </div>
        </div>

    );
}
