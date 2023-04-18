import React, { useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { faBed, faPlane, faCar, faTaxi, faCalendarDays, faPerson } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Coba() {
    const data = {
        navbar: ['Stays', 'Flight', 'Car Rentals', 'Attractions', 'Airport Taxis'],
        icon: [faBed, faPlane, faCar, faTaxi, faCalendarDays, faPerson],
    };

    const [activeIndex, setActiveIndex] = useState(-1);

    const changeBorder = (index) => {
        setActiveIndex(index);
    };


    return (
        <div className='mx-auto sm:max-w-5xl w-full p-4 bg-[#003580] h-[80px] flex items-center'>

            <div className='flex w-full sm:gap-6 gap-3 flex-wrap sm:text-[16px] text-[14px]'>
                {
                    data.navbar.map((val, ind) => (

                        <div key={ind}
                            className={`${activeIndex === ind ? 'border-solid border-white border-[1px] sm:py-2 ' : ''}  flex justify-center items-center gap-1 text-white rounded-md cursor-pointer sm:w-[130px] w-[110px] `}
                            onClick={() => changeBorder(ind)}
                        >
                            <FontAwesomeIcon icon={data.icon[ind]} />
                            <h1>{val}</h1>
                        </div>

                    ))
                }
            </div>
        </div>
    );
}

