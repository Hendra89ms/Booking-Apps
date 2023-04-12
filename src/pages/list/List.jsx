import React, { useState } from 'react';
import { Navbar, Header, Spinner } from '../../components'
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import { SearchItem } from '../../components'

export default function List() {

    const location = useLocation()

    const [destination] = useState(location.state.destination)
    const [dates, setDates] = useState(location.state.dates)
    const [options] = useState(location.state.options)
    const [openDate, setOpenDate] = useState(false)
    const [loading, setLoading] = useState(false)


    return (
        <>
            {
                loading ? <Spinner /> : (
                    <div>
                        <Navbar />
                        <Header type={'list'} />

                        <div className='flex justify-center my-10 '>
                            <div className='w-full sm:max-w-[1024px] flex flex-col sm:flex-row gap-[20px] px-2 sm:px-0'>

                                <div className='flex-1 flex flex-col bg-[#febb02] px-[10px] py-[20px] rounded-[10px] h-max sm:w-[300px] w-full sm:sticky top-5  gap-4 '>

                                    <h1 className="font-bold text-2xl">Search</h1>

                                    <div className="flex flex-col">
                                        <label className='font-medium'>Destination</label>
                                        <input
                                            placeholder={destination}
                                            type="text"
                                            className='w-full p-2.5 rounded-md'
                                        />
                                    </div>

                                    <div className="flex flex-col relative">
                                        <label className='font-medium'>Check-in Date</label>
                                        <span
                                            onClick={() => setOpenDate(!openDate)}
                                            className='text-lg bg-white p-[8px] rounded-md items-center cursor-pointer'>
                                            {`${format(dates[0].startDate, "dd/MM/yyyy")} to ${format(dates[0].endDate, "dd/MM/yyyy")}`}
                                        </span>

                                        {

                                            openDate && (
                                                <DateRange
                                                    onChange={item => setDates(item.selection)}
                                                    minDate={new Date()}
                                                    moveRangeOnFirstSelection={false}
                                                    ranges={dates}
                                                    className='absolute top-[60px]'
                                                />
                                            )
                                        }

                                    </div>
                                    <div className='flex flex-col '>
                                        <label className='font-medium'>Option</label>
                                        <hr className='text-white font-light' />

                                        <div className='text-[#555] p-[10px]'>
                                            <div className='flex flex-col gap-1 mt-2'>
                                                <div className='flex justify-between'>
                                                    <span>Min price <small>per night</small> </span>
                                                    <input type="number" className='w-[80px] px-2' />
                                                </div>

                                                <div className='flex justify-between'>
                                                    <span>Max price <small>per night</small> </span>
                                                    <input type="number" className='w-[80px] px-2' />
                                                </div>


                                                <div className='flex justify-between'>
                                                    <span> Adult </span>
                                                    <input
                                                        type="number"
                                                        min={1}
                                                        className='w-[80px] px-2'
                                                        placeholder={options.adult}
                                                    />
                                                </div>

                                                <div className='flex justify-between'>
                                                    <span> Children </span>
                                                    <input
                                                        type="number"
                                                        min={0}
                                                        className='w-[80px] px-2'
                                                        placeholder={options.children}
                                                    />
                                                </div>

                                                <div className='flex justify-between'>
                                                    <span> Room </span>
                                                    <input
                                                        type="number"
                                                        min={1}
                                                        className='w-[80px] px-2'
                                                        placeholder={options.room}
                                                    />
                                                </div>
                                            </div>

                                        </div>

                                        <button
                                            className='bg-[#0071c2] p-[10px] my-2 text-white rounded-md hover:bg-[#003580] duration-300 w-full font-medium'>Search
                                        </button>
                                    </div>
                                </div>

                                <div className='flex-[3] '>
                                    <SearchItem />
                                </div>

                            </div>
                        </div>
                    </div>
                )
            }
        </>
    );
}
