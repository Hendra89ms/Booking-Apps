import React, { useRef } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

export default function Featured() {

    const sliderRef = useRef();

    const handlePrevClick = () => {
        sliderRef.current.slickPrev();
    };

    const handleNextClick = () => {
        sliderRef.current.slickNext();
    };

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                    centerMode: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    infinite: true,
                    dots: true,
                    centerMode: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    autoplay: true,
                    speed: 500,
                    cssEase: 'linear',
                    autoplaySpeed: 3000
                }
            }
        ]
    };

    return (

        <div className='flex w-screen justify-center items-center sm:my-5 mb-7 sm:mb-0'>
            <div className='w-screen px-2 sm:px-0 sm:w-[1024px] flex flex-col justify-center items-center relative'>

                <Slider ref={sliderRef} {...settings} className="w-full">

                    <div className='px-2'>
                        <div className=' brightness-75 hover:brightness-100 duration-300  cursor-pointer  flex justify-center items-center md:pr-4'>

                            <img src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o=" alt="" className="w-full object-cover h-[300px] rounded-2xl " />

                            <div className=" absolute  bottom-[20px] font-bold left-[20px] md:left-[40px] text-white ">
                                <h1 className='font-bold text-3xl '>Dublin</h1>
                                <h2 className='font-semibold text-xl'>123 properties</h2>
                            </div>
                        </div>
                    </div>

                    <div className='px-2'>
                        <div className=' brightness-75 hover:brightness-100 duration-300 relative cursor-pointer group md:pr-4 '>

                            <img src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o=" alt="" className="w-full object-cover h-[300px] rounded-2xl rounded-b-2xl" />

                            <div className=" absolute bottom-[20px] font-bold left-[20px] md:left-[40px]  text-white">
                                <h1 className='font-bold text-3xl'>Reno</h1>
                                <h2 className='font-semibold text-xl'>533 properties</h2>
                            </div>
                        </div>
                    </div>

                    <div className='px-2'>
                        <div className=' brightness-75 hover:brightness-100 duration-300 relative cursor-pointer group '>
                            <img src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o=" alt="" className="w-full object-cover object-center h-[300px] rounded-xl" />

                            <div className=" absolute bottom-[20px] font-bold left-[20px] md:left-[40px]  text-white">
                                <h1 className='font-bold text-3xl'>Austin</h1>
                                <h2 className='font-semibold text-xl'>532 properties</h2>
                            </div>
                        </div>
                    </div>

                </Slider>

                <FontAwesomeIcon onClick={handlePrevClick} icon={faChevronLeft} className=' duration-300 text-[#febb02] text-3xl absolute top-[50%]  left-5 -translate-x-0 translate-y-[-50%] cursor-pointer sm:hidden' />

                <FontAwesomeIcon onClick={handleNextClick} icon={faChevronRight} className=' duration-300 text-[#febb02] text-3xl absolute top-[50%]  right-5 -translate-x-0 translate-y-[-50%] cursor-pointer sm:hidden' />
            </div>

        </div>


    );
}
