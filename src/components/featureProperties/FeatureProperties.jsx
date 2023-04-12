import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

export default function FeatureProperties() {

    const sliderRef = useRef();

    const handlePrevClick = () => {
        sliderRef.current.slickPrev();
    };

    const handleNextClick = () => {
        sliderRef.current.slickNext();
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        initialSlide: 0,
        responsive: [

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
                    slidesToShow: 1.5,
                    slidesToScroll: 1.5,
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
        <div className='w-screen'>

            <div className="w-screen sm:w-[1024px]  mx-auto relative">

                <h1 className='text-xl font-bold my-3 px-2'>Homes guests love</h1>

                <Slider ref={sliderRef} {...settings} className="w-full " >

                    <div className=" px-2 ">
                        <div className='flex flex-col w-full gap-[10px]'>
                            <img
                                src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
                                alt=""
                                className="w-full sm:w-[300px] h-[250px]"
                            />
                            <span className="font-bold">Aparthotel Stare Miasto</span>
                            <span className="font-light text-slate-400">Madrid</span>
                            <span className="font-medium">Starting from $120</span>
                            <div className="flex gap-2 items-center">
                                <button className='bg-[#003580] font-bold text-white p-[3px]'>8.9</button>
                                <span>Excellent</span>
                            </div>
                        </div>
                    </div>

                    <div className="px-2">
                        <div className='flex flex-col w-full gap-[10px]'>
                            <img
                                src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1"
                                alt=""
                                className="w-full sm:w-[300px] h-[250px]"
                            />
                            <span className="font-bold">Comfort Suites Airport</span>
                            <span className="font-light text-slate-400">Austin</span>
                            <span className="font-medium">Starting from $140</span>
                            <div className="flex gap-2 items-center">
                                <button className='bg-[#003580] font-bold text-white p-[3px]'>9.3</button>
                                <span>Exceptional</span>
                            </div>
                        </div>
                    </div>


                    <div className="px-2">
                        <div className='flex flex-col w-full gap-[10px]'>
                            <img
                                src="https://www.rentalmobilbali.net/wp-content/uploads/2016/01/Tempat-Wisata-Unik-Di-Bali-1.jpg"
                                alt=""
                                className="w-full sm:w-[300px] h-[250px]"
                            />
                            <span className="font-bold">Four Seasons Hotel</span>
                            <span className="font-light text-slate-400">Lisbon</span>
                            <span className="font-medium ">Starting from $99</span>
                            <div className="flex gap-2 items-center">
                                <button className='bg-[#003580] font-bold text-white p-[3px] '>8.8</button>
                                <span>Excellent</span>
                            </div>
                        </div>
                    </div>

                    <div className="px-2">
                        <div className='flex flex-col w-full gap-[10px]'>
                            <img
                                src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/322658536.jpg?k=3fffe63a365fd0ccdc59210188e55188cdb7448b9ec1ddb71b0843172138ec07&o=&hp=1"
                                alt=""
                                className="w-full sm:w-[300px] h-[250px]"
                            />
                            <span className="font-bold">Hilton Garden Inn</span>
                            <span className="font-light text-slate-400">Berlin</span>
                            <span className="font-medium">Starting from $105</span>
                            <div className="flex gap-2 items-center">
                                <button className='bg-[#003580] font-bold text-white p-[3px]'>8.9</button>
                                <span>Excellent</span>
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
