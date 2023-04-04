"use client";
import React, {useEffect, useState} from 'react';
import Informations from "@/app/Components/room/Informations";
import Details from "@/app/Components/room/Details";


const Page = () => {
    const pricePerPerson = 7;

    const userInfos = useState({
        email: null,
        phone: null,
    });

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [guests, setGuests] = useState(0);
    const [night, setNight] = useState(0);
    const [optionsChooses, setOptionsChooses] = useState([]);

    const [priceWithoutOptions, setPriceWithoutOptions] = useState(0);
    const [priceOptions, setPriceOptions] = useState(0);

    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        setNight((endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24));
        setPriceWithoutOptions(pricePerPerson * guests * night);
        setTotalPrice(priceWithoutOptions + priceOptions);
    }, [startDate, endDate, guests, priceWithoutOptions, priceOptions, optionsChooses, userInfos]);


    return (
        <div className={"flex w-full flex-col md:flex-row overflow-hidden"}>
            <Informations room={"Five"} setStartDate={setStartDate} startDate={startDate} endDate={endDate}
                          setEndDate={setEndDate} setGuests={setGuests} userInfos={userInfos}/>

            <Details guests={guests} night={night} priceWithoutOptions={priceWithoutOptions} totalPrice={totalPrice}
                     setPriceOptions={setPriceOptions} optionsChooses={optionsChooses}
                     setOptionsChooses={setOptionsChooses} userInfos={userInfos} pricePerPerson={pricePerPerson}/>
        </div>
    );
};

export default Page;