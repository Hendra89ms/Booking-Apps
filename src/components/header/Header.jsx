import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faPlane, faCar, faTaxi, faCalendarDays, faPerson } from '@fortawesome/free-solid-svg-icons';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';



export default function Header({ type }) {

    // OPEN DATE
    const [openDate, setOpenDate] = useState(false)

    // STATE BUTTON ISDISABLED
    const [isDisabled, setIsDisabled] = useState(true);

    // DESTINATION
    const [destination, setDestination] = useState("")

    // SET DATE 
    const [dates, setDates] = useState([
        {
            starDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ])

    const [openOption, setOpenOption] = useState(false)
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1
    })

    const handleOpenOption = () => {
        setOpenOption(!openOption)
    }

    // handle operation
    const handleOption = (name, operation) => {

        setOptions(prev => {

            return {
                ...prev,
                [name]: operation === "i" ? options[name] + 1 : options[name] - 1
            }
        })
    }

    // HANDLE INPUT VALUE 
    const handleInputChange = (event) => {

        setDestination(event.target.value);
    };

    // HANDLE DATE
    const handleDateChange = (ranges) => {
        setDates([ranges.selection]);
        setIsDisabled(false);
    };

    const navigate = useNavigate()

    // handle search
    const handleSearch = () => {
        if (destination === '') {
            return alert('where are you going ?')
        }

        navigate('/hotels', { state: { destination, dates, options } })
    }

    // handle clickInput
    const [clickInput, setClickInput] = useState(false)

    const handleClickInput = () => {
        setClickInput(true)
    }

    const handleCloseInput = () => {
        setClickInput(false)
    }

    return (
        <div className='w-screen h-full'>
            <div className={`bg-[#003580] text-white flex justify-center ${type === "list" ? "h-[100px]" : ""} relative pl-[10px]`}>
                <div className='w-full max-w-[1024px] text-sm mt-[10px] mb-[25px] flex-col md:hidden justify-center pr-2'>

                    <Swiper watchOverflow={true} slidesPerView={2.6} className=' flex items-center gap-10 ' direction='horizontal' draggable={true} >

                        <SwiperSlide className='flex gap-[7px] text-sm md:text-lg items-center'>

                            <div className='flex gap-[7px] justify-center items-center border-solid border-white border-[1px] rounded-[20px] p-2 cursor-pointer w-[80px]'>
                                <FontAwesomeIcon icon={faBed} />
                                <span>Stays</span>
                            </div>

                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='flex gap-[7px] justify-center items-center border-solid  rounded-[20px] p-2 cursor-pointer w-[80px] '>
                                <FontAwesomeIcon icon={faPlane} />
                                <span>Flight</span>
                            </div>
                        </SwiperSlide>


                        <SwiperSlide>
                            <div className='flex gap-[7px] justify-center items-center rounded-[20px] p-2 cursor-pointer w-[120px] '>
                                <FontAwesomeIcon icon={faCar} />
                                <span className='flex'> Car Rentals </span>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='flex gap-[7px] justify-center items-center border-solid  rounded-[20px] p-2 cursor-pointer w-[120px] '>
                                <FontAwesomeIcon icon={faBed} />
                                <span>Attractions</span>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='flex gap-[7px] justify-center items-center border-solid  rounded-[20px] p-2 cursor-pointer w-[120px] '>
                                <FontAwesomeIcon icon={faTaxi} />
                                <span>Airport Taxis</span>
                            </div>
                        </SwiperSlide>
                    </Swiper>


                    {
                        type !== "list" && (
                            <>
                                <h1 className="font-bold text-2xl md:text-3xl my-[20px]">
                                    A lifetime of discounts? It's Genius.
                                </h1>

                                <p className='mb-[20px]'>Get rewarded for your travels – unlock instant savings of 10% or more with a free Lamabooking account </p>

                                <button className='bg-[#0071c2] hover:bg-[#769fd8] duration-300 p-[10px] font-medium cursor-pointer'> Sign in / Register</button>


                                <div className='bg-white border-[3px] border-solid border-[#febb02] rounded-md flex items-center mt-5'>

                                    <div className='flex items-center gap-[10px] pl-2' onClick={handleClickInput}>
                                        <FontAwesomeIcon icon={faBed} color={'gray'} />
                                        <input
                                            type="text"
                                            required
                                            placeholder="Where are you going?"
                                            className='border-0 outline-0 text-black w-full h-[40px] '
                                        />
                                    </div>

                                    {
                                        clickInput && (
                                            <div className='w-screen h-full flex justify-center items-center px-4 bg-[#3337]
                                            fixed left-0 top-0 right-0 bottom-0 z-[99]' >

                                                <div className='bg-white w-[400px] h-[250px] p-4 flex justify-center flex-col gap-5 border-[#febb02] border-[1px] rounded-md relative'>

                                                    <div onClick={handleCloseInput} className='text-gray-500 text-2xl absolute right-2 top-0 flex items-center cursor-pointer'>X</div>

                                                    <div className='flex items-center gap-[10px] ' >
                                                        <FontAwesomeIcon icon={faBed} color={'gray'} />
                                                        <input
                                                            type="text"
                                                            value={destination}
                                                            required
                                                            placeholder="Where are you going?"
                                                            className='border-0 outline-none text-black w-full h-[40px] '
                                                            onChange={handleInputChange}
                                                        />
                                                    </div>

                                                    <div className='cursor-pointer flex items-center gap-[10px] relative'>
                                                        <FontAwesomeIcon icon={faCalendarDays} color={'gray'} />
                                                        <span className='text-gray-600'

                                                            onClick={() => { setOpenDate(!openDate) }}>
                                                            {`${format(dates[0].starDate, "dd/MM/yyyy")} to ${format(dates[0].endDate, "dd/MM/yyyy")} `}
                                                        </span>

                                                        {
                                                            openDate && (

                                                                <DateRange
                                                                    editableDateInputs={true}
                                                                    onChange={handleDateChange}
                                                                    moveRangeOnFirstSelection={false}
                                                                    ranges={dates}
                                                                    className='absolute top-[20px] z-[99] '
                                                                    minDate={new Date()}
                                                                />

                                                            )
                                                        }
                                                    </div>

                                                    <div
                                                        className='flex items-center gap-[10px] relative'>
                                                        <FontAwesomeIcon icon={faPerson} color={'gray'} />
                                                        <span
                                                            onClick={handleOpenOption}
                                                            className='cursor-pointer text-gray-600' >{`${options.adult} adult - ${options.children} children - ${options.room} room`}
                                                        </span>

                                                        {
                                                            openOption && (
                                                                <div className=' top-7 text-gray-400 bg-white rounded-[5px] shadow-md flex flex-col justify-center p-4 gap-2 absolute z-[99]'>

                                                                    <div className='flex gap-7 items-center justify-between'>
                                                                        <span>Adult</span>

                                                                        <div className='flex gap-4 items-center'>
                                                                            <button
                                                                                disabled={options.adult <= 1}
                                                                                onClick={() => { handleOption("adult", "d") }}
                                                                                className='w-[30px] h-[30px] border-[1px] border-[#0071c2] border-solid cursor-pointer'>-
                                                                            </button>
                                                                            <span className='text-[#0071c2]'>{options.adult}</span>

                                                                            <button
                                                                                onClick={() => { handleOption("adult", "i") }}
                                                                                className='w-[30px] h-[30px] border-[1px] border-[#0071c2] border-solid cursor-pointer'>+
                                                                            </button>
                                                                        </div>
                                                                    </div>

                                                                    <div className='flex gap-7 items-center justify-between'>
                                                                        <span>Children</span>
                                                                        <div className='flex gap-4 items-center'>
                                                                            <button
                                                                                disabled={options.children <= 0}
                                                                                onClick={() => { handleOption("children", "d") }}
                                                                                className='w-[30px] h-[30px] border-[1px] border-[#0071c2] border-solid cursor-pointer'>-
                                                                            </button>
                                                                            <span className='text-[#0071c2]'>{options.children}</span>
                                                                            <button
                                                                                onClick={() => { handleOption("children", "i") }}
                                                                                className='w-[30px] h-[30px] border-[1px] border-[#0071c2] border-solid cursor-pointer'>+</button>
                                                                        </div>
                                                                    </div>

                                                                    <div className='flex gap-7 items-center justify-between '>
                                                                        <span>Room</span>
                                                                        <div className='flex gap-4 items-center select-none'>
                                                                            <button
                                                                                disabled={options.room <= 1}
                                                                                onClick={() => { handleOption("room", "d") }}
                                                                                className='w-[30px] h-[30px] border-[1px] border-[#0071c2] border-solid cursor-pointer select-none'>-
                                                                            </button>
                                                                            <span className='text-[#0071c2]'>{options.room}</span>
                                                                            <button
                                                                                onClick={() => { handleOption("room", "i") }}
                                                                                className='w-[30px] h-[30px] border-[1px] border-[#0071c2] border-solid cursor-pointer'>+
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )
                                                        }
                                                    </div>

                                                    <div className='ml-auto'>
                                                        <button
                                                            disabled={isDisabled}
                                                            onClick={handleSearch}
                                                            className='bg-[#0071c2]  text-[12px] text-white font-medium p-[10px] rounded-md'>Search</button>
                                                    </div>
                                                </div>


                                            </div>
                                        )
                                    }


                                </div>
                            </>
                        )
                    }



                </div>

                <div className='w-full max-w-[1024px] mt-[10px] mb-[80px] flex-col hidden md:block'>

                    <Swiper watchOverflow={true} slidesPerView={5} className=' flex items-center ' direction='horizontal' draggable={true} >

                        <SwiperSlide className='flex gap-[40px] text-sm md:text-lg items-center'>

                            <div className='flex gap-[7px] justify-center items-center border-solid border-white border-[1px] rounded-[20px] p-2.5 cursor-pointer w-[100px]'>
                                <FontAwesomeIcon icon={faBed} />
                                <span>Stays</span>
                            </div>

                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='flex gap-[7px] justify-center items-center border-solid  rounded-[20px] p-2.5 cursor-pointer w-[100px] '>
                                <FontAwesomeIcon icon={faPlane} />
                                <span>Flight</span>
                            </div>
                        </SwiperSlide>


                        <SwiperSlide>
                            <div className='flex gap-[7px] justify-center items-center border-solid  rounded-[20px] p-2.5 cursor-pointer w-[150px] '>
                                <FontAwesomeIcon icon={faCar} />
                                <span className='flex'> Car Rentals </span>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='flex gap-[7px] justify-center items-center border-solid  rounded-[20px] p-2.5 cursor-pointer w-[100px] '>
                                <FontAwesomeIcon icon={faBed} />
                                <span>Attractions</span>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='flex gap-[7px] justify-center items-center border-solid  rounded-[20px] p-2.5 cursor-pointer w-[150px] '>
                                <FontAwesomeIcon icon={faTaxi} />
                                <span>Airport taxis</span>
                            </div>
                        </SwiperSlide>
                    </Swiper>


                    {
                        type !== "list" && (
                            <>
                                <h1 className="font-bold text-2xl md:text-3xl my-[20px]">
                                    A lifetime of discounts? It's Genius.
                                </h1>

                                <p className='mb-[20px]'>Get rewarded for your travels – unlock instant savings of 10% or more with a free Lamabooking account </p>

                                <button className='bg-[#0071c2] hover:bg-[#769fd8] duration-300 p-[10px] font-medium cursor-pointer'> Sign in / Register</button>


                                <div className='bg-white border-[3px] border-solid border-[#febb02] flex items-center justify-around text-[lightgray] p-[10px] rounded-[5px]  w-full max-w-[1024px] absolute z-10 bottom-[-30px]'>

                                    <div className='flex items-center gap-[10px] '>
                                        <FontAwesomeIcon icon={faBed} />
                                        <input
                                            type="text"
                                            value={destination}
                                            required
                                            placeholder="Where are you going?"
                                            className='border-0 outline-0 text-black'
                                            onChange={handleInputChange}
                                        />
                                    </div>

                                    <div className='cursor-pointer flex items-center gap-[10px] '>
                                        <FontAwesomeIcon icon={faCalendarDays} />
                                        <span

                                            onClick={() => { setOpenDate(!openDate) }}>
                                            {`${format(dates[0].starDate, "dd/MM/yyyy")} to ${format(dates[0].endDate, "dd/MM/yyyy")} `}
                                        </span>

                                        {
                                            openDate && (
                                                <DateRange
                                                    editableDateInputs={true}
                                                    onChange={handleDateChange}
                                                    moveRangeOnFirstSelection={false}
                                                    ranges={dates}
                                                    className='absolute top-[60px]'
                                                    minDate={new Date()}
                                                />
                                            )
                                        }
                                    </div>

                                    <div

                                        className='flex items-center gap-[10px] '>
                                        <FontAwesomeIcon icon={faPerson} />
                                        <span
                                            onClick={handleOpenOption}
                                            className='cursor-pointer' >{`${options.adult} adult - ${options.children} children - ${options.room} room`}
                                        </span>

                                        {
                                            openOption && (
                                                <div className=' top-[64px] text-gray-400 bg-white rounded-[5px] shadow-md flex flex-col justify-center p-4 gap-2 absolute'>

                                                    <div className='flex gap-7 items-center justify-between'>
                                                        <span>Adult</span>

                                                        <div className='flex gap-4 items-center'>
                                                            <button
                                                                disabled={options.adult <= 1}
                                                                onClick={() => { handleOption("adult", "d") }}
                                                                className='w-[30px] h-[30px] border-[1px] border-[#0071c2] border-solid cursor-pointer'>-
                                                            </button>
                                                            <span className='text-[#0071c2]'>{options.adult}</span>

                                                            <button
                                                                onClick={() => { handleOption("adult", "i") }}
                                                                className='w-[30px] h-[30px] border-[1px] border-[#0071c2] border-solid cursor-pointer'>+
                                                            </button>
                                                        </div>
                                                    </div>

                                                    <div className='flex gap-7 items-center justify-between'>
                                                        <span>Children</span>
                                                        <div className='flex gap-4 items-center'>
                                                            <button
                                                                disabled={options.children <= 0}
                                                                onClick={() => { handleOption("children", "d") }}
                                                                className='w-[30px] h-[30px] border-[1px] border-[#0071c2] border-solid cursor-pointer'>-
                                                            </button>
                                                            <span className='text-[#0071c2]'>{options.children}</span>
                                                            <button
                                                                onClick={() => { handleOption("children", "i") }}
                                                                className='w-[30px] h-[30px] border-[1px] border-[#0071c2] border-solid cursor-pointer'>+</button>
                                                        </div>
                                                    </div>

                                                    <div className='flex gap-7 items-center justify-between '>
                                                        <span>Room</span>
                                                        <div className='flex gap-4 items-center select-none'>
                                                            <button
                                                                disabled={options.room <= 1}
                                                                onClick={() => { handleOption("room", "d") }}
                                                                className='w-[30px] h-[30px] border-[1px] border-[#0071c2] border-solid cursor-pointer select-none'>-
                                                            </button>
                                                            <span className='text-[#0071c2]'>{options.room}</span>
                                                            <button
                                                                onClick={() => { handleOption("room", "i") }}
                                                                className='w-[30px] h-[30px] border-[1px] border-[#0071c2] border-solid cursor-pointer'>+
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    </div>

                                    <div>
                                        <button
                                            disabled={isDisabled}
                                            onClick={handleSearch}
                                            className='bg-[#0071c2] text-white font-medium p-[10px] rounded-md'>Search</button>
                                    </div>


                                </div>
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    );
}
