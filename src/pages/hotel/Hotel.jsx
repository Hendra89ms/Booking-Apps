import React, { useState } from 'react';
import { Navbar, Header, MailList, Footer, Spinner } from '../../components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCircleArrowLeft,
    faCircleArrowRight,
    faCircleXmark,
    faLocationDot,
} from "@fortawesome/free-solid-svg-icons";


export default function Hotel() {

    const [slideNumber, setSlideNumber] = useState(0)
    const [open, setOpen] = useState(false)

    const photos = [
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
        },
    ];

    const handleOpen = (i) => {
        setSlideNumber(i)
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }


    const handleMove = (direction) => {
        let newSlideNumber;

        if (direction === "l") {
            newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
        } else {
            newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
        }

        setSlideNumber(newSlideNumber)
    };

    const [loading, setLoading] = useState(false)

    return (
        <div>

            {
                loading ? <Spinner /> : (
                    <>
                        <div className='fixed left-0 top-0'>
                            <Navbar />
                            <Header type={'list'} />
                        </div>

                        <div className="mt-[200px] mb-[100px] w-full sm:max-w-[1024px] mx-auto flex flex-col px-2">

                            <div className='w-full flex flex-col-reverse sm:flex-row-reverse justify-between'>
                                <div><button className="bg-[#003580] text-white sm:p-3 p-2 rounded-md">Reserve or Book Now!</button></div>
                                <div>
                                    <h1 className="text-xl md:text-2xl font-bold">Tower Street Apartments</h1>
                                    <div className="flex gap-2">
                                        <FontAwesomeIcon icon={faLocationDot} />
                                        <span>Elton St 125 New york</span>
                                    </div>
                                    <div className="text-[#008009]">
                                        Excellent location – 500m from center
                                    </div>
                                    <div className="text-[#0071c2]">
                                        Book a stay over $114 at this property and get a free airport taxi
                                    </div>
                                </div>
                            </div>
                            {
                                open &&
                                <div className=' fixed inset-0  z-[99] bg-[#3359]  flex justify-center items-center'>

                                    <div className='relative'>
                                        <FontAwesomeIcon
                                            icon={faCircleXmark}
                                            fontSize={35}
                                            className='absolute sm:top-[-2%] top-[25%] right-0 sm:right-[-2%] cursor-pointer bg-white rounded-full'
                                            onClick={handleClose}
                                        />
                                        <FontAwesomeIcon
                                            icon={faCircleArrowLeft}
                                            fontSize={30}
                                            className='absolute top-[50%]  left-5 -translate-x-0 translate-y-[-50%] cursor-pointer bg-white rounded-full'
                                            onClick={handleMove}
                                        />


                                        <img src={photos[slideNumber].src} alt="" className='w-full object-scale-down sm:object-fill px-2 sm:px-0 sm:w-[70vw] h-[80vh] ' />


                                        <FontAwesomeIcon
                                            icon={faCircleArrowRight}
                                            fontSize={30}
                                            className='absolute top-[50%]  right-5 -translate-x-0 translate-y-[-50%] cursor-pointer bg-white rounded-full'
                                            onClick={handleMove}
                                        />

                                    </div>
                                </div>
                            }

                            <div className="w-full mt-3 flex flex-wrap gap-3 sm:justify-between justify-center">
                                {
                                    photos.map((photo, i) => (
                                        <div className="sm:w-[30%] w-[330px]  cursor-pointer" key={i}>
                                            <img
                                                src={photo.src}
                                                alt=""
                                                onClick={() => handleOpen(i)}
                                            />
                                        </div>
                                    ))
                                }
                            </div>

                            <div className="flex sm:flex-row flex-col mt-10 sm:justify-between ">

                                <div className="sm:w-[70%] ">
                                    <h1 className="text-xl sm:text-2xl font-bold">Stay in the heart of City</h1>
                                    <p className="mt-5">
                                        Located a 5-minute walk from St. Florian's Gate in Krakow, Tower
                                        Street Apartments has accommodations with air conditioning and
                                        free WiFi. The units come with hardwood floors and feature a
                                        fully equipped kitchenette with a microwave, a flat-screen TV,
                                        and a private bathroom with shower and a hairdryer. A fridge is
                                        also offered, as well as an electric tea pot and a coffee
                                        machine. Popular points of interest near the apartment include
                                        Cloth Hall, Main Market Square and Town Hall Tower. The nearest
                                        airport is John Paul II International Kraków–Balice, 16.1 km
                                        from Tower Street Apartments, and the property offers a paid
                                        airport shuttle service.
                                    </p>
                                </div>

                                <div className="sm:w-[33%] w-full bg-gray-300 p-3 flex flex-col gap-3 mt-4 sm:mt-0">
                                    <h1 className='sm:text-xl text-lg font-bold text-gray-700'>Perfect for a 9-night stay!</h1>
                                    <div>
                                        Located in the real heart of Krakow, this property has an
                                        excellent location score of 9.8!
                                    </div>
                                    <h2>
                                        <b className='sm:text-xl text-lg font-bold'>$945</b> <span className='sm:text-xl text-lg'>(9 nights)</span>
                                    </h2>
                                    <button className='bg-[#003580] text-white p-2 rounded-md'>Reserve or Book Now!</button>
                                </div>
                            </div>

                        </div>
                        <MailList />
                        <Footer />
                    </>
                )
            }

        </div>
    );
}
