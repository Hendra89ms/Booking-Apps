import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

export default function PropertyLists() {

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
        slidesToShow: 5,
        slidesToScroll: 5,
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
                    slidesToShow: 2.5,
                    slidesToScroll: 2.5,
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

            <div className="w-screen sm:w-[1024px] mt-5 mb-10  mx-auto relative">

                <h1 className='text-xl font-bold my-3 px-2'>Browse by property type</h1>

                <Slider ref={sliderRef} {...settings} className="w-full" >

                    <div className=" px-2 ">
                        <div className=' flex flex-col'>
                            <img
                                src="https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o="
                                alt=""
                                className=" cursor-pointer rounded-[10px] sm:w-[300px] h-[150px] object-cover"
                            />
                            <div className="pListTitles">
                                <h1 className='font-bold'>Hotels</h1>
                                <h2 className='text-slate-500'>233 hotels</h2>
                            </div>
                        </div>
                    </div>

                    <div className="px-2">
                        <div className=''>
                            <img
                                src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg"
                                alt=""
                                className="w-full sm:w-[300px] cursor-pointer rounded-[10px] h-[150px] object-cover"
                            />
                            <div className="pListTitles">
                                <h1 className='font-bold'>Apartments</h1>
                                <h2 className='text-slate-500'>2331 hotels</h2>
                            </div>
                        </div>
                    </div>


                    <div className="px-2">
                        <div className=''>
                            <img
                                src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg"
                                alt=""
                                className="w-full sm:[300px] cursor-pointer rounded-[10px] h-[150px] object-cover"
                            />
                            <div className="pListTitles">
                                <h1 className='font-bold'>Resorts</h1>
                                <h2 className='text-slate-500'>2331 hotels</h2>
                            </div>
                        </div>
                    </div>

                    <div className="px-2">
                        <div className='w-full'>
                            <img
                                src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg"
                                alt=""
                                className="w-full sm:w-[300px] cursor-pointer rounded-[10px] h-[150px] object-cover"
                            />
                            <div className="pListTitles">
                                <h1 className='font-bold'>Villas</h1>
                                <h2 className='text-slate-500'>2331 hotels</h2>
                            </div>
                        </div>
                    </div>

                    <div className="px-2">
                        <div className='w-full'>
                            <img
                                src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg"
                                alt=""
                                className="w-full sm:w-[300px] cursor-pointer rounded-[10px] h-[150px] object-cover"
                            />
                            <div className="pListTitles">
                                <h1 className='font-bold'>Cabins</h1>
                                <h2 className='text-slate-500'>2331 hotels</h2>
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
