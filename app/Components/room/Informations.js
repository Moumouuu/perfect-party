"use client";
import React, {useState} from 'react';
import {AiOutlineArrowLeft, AiOutlineMail, AiOutlinePhone} from "react-icons/ai";
import Link from "next/link";
import {DateRange} from "react-date-range/";
import ShineEffect from "@/app/Components/utils/ShineEffect";

const Informations = ({room, minPeople,maxPeople,startDate, endDate, setStartDate, setEndDate, setGuests, userInfos}) => {
    const [showCalendar, setShowCalendar] = useState(false);


    const monthNames = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun.",
        "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."
    ];
    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
    }

    return (
        <div className={"relative md:w-1/2 md:border-r border-gray-50 flex flex-col justify-center items-center pt-16"}>
            {/*Shine effect*/}
            <div className={"absolute right-1/2 -z-10"}>
                <ShineEffect/>
            </div>
            <div className={"absolute left-1/2 top-0 -z-10"}>
                <ShineEffect/>
            </div>
            <div className={"absolute bottom-0 right-0 -z-10"}>
                <ShineEffect/>
            </div>

            {/*About reservation*/}
            <div className={"border-b-2 border-gray-50 pb-8 md:w-[90%]"}>
                <div className={"flex items-center"}>
                    <Link href={"/"} className={"cursor "}>
                        <AiOutlineArrowLeft className={"text-3xl mr-2"}/>
                    </Link>
                    <h2 className={"text-5xl"}>Réservation pour la salle {room}</h2>
                </div>
                {/*Date + Personnes*/}
                <div className={"flex flex-col mx-2 md:ml-12"}>
                    <h3 className={"text-4xl text-[#00A7C1] my-10 underline text-center md:text-left"}>Votre réservation :</h3>
                    <div className={"flex flex-col mb-8  md:mb-[80px]"}>
                        <ul className={"list-disc text-2xl mb-3"}>
                            <li>Dates</li>
                        </ul>
                        <div className={"flex w-full justify-between"}>
                            <span
                                className={"text-xl"}>{startDate.getDate()} {monthNames[startDate.getMonth()]} {startDate.getFullYear()}- {endDate.getDate()} {monthNames[endDate.getMonth()]} {endDate.getFullYear()}</span>
                            {showCalendar ? (
                                <button onClick={() => setShowCalendar(!showCalendar)}
                                        className={"underline csms"}>Fermer</button>
                            ) : (
                                <button onClick={() => setShowCalendar(!showCalendar)}
                                        className={"underline csms"}>Changer les dates</button>
                            )}
                        </div>
                        {/*Calendar*/}
                        {showCalendar && (
                            <div>
                                <DateRange
                                    className={"text-black my-4"}
                                    ranges={[selectionRange]}
                                    onChange={handleSelect}
                                    rangeColors={["#003C74"]}
                                    minDate={new Date()}
                                />
                            </div>
                        )}
                    </div>
                    <div>
                        <ul className={"list-disc text-2xl mb-3"}>
                            <li>Personnes</li>
                        </ul>
                        <div className={"flex w-full justify-between"}>
                            <div className={"flex"}>
                                <span className={"mr-2 text-xl"}>Je souhaite inviter : </span>
                                <input onChange={(e) => setGuests(e.target.value)} type="number" min={minPeople} max={maxPeople}
                                       placeholder={"0"}
                                       className={"text-2xl outline-none bg-transparent text-[#00A7C1]"}/>
                                <span className={"text-xl"}>personnes</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*Informations*/}
            <div className={"flex flex-col w-full items-center"}>
                <div className={"md:w-[90%] border-b-2 px-2 md:border-none border-gray-50 md:pl-10 pb-8"}>
                    <h3 className={"text-4xl text-[#00A7C1] my-10 underline text-center md:text-left"}>Informations personnelles :</h3>
                    <div className={"flex flex-col mb-8"}>
                        <span className={"text-2xl mb-3"}>E-Mail :</span>
                        <div className={"flex items-center"}>
                            <AiOutlineMail className={"text-3xl mr-2"}/>
                            <input type="email"
                                   className={"md:w-1/2 text-xl outline-none bg-transparent border-2 border-gray-600 p-3 rounded-lg"}
                                   onChange={(e) => userInfos[0].email = e.target.value}
                                   placeholder={"Veuillez renseigner votre adresse mail..."}/>
                        </div>
                    </div>
                    <div className={"flex flex-col"}>
                        <span className={"text-2xl mb-3"}>Téléphone :</span>
                        <div className={"flex items-center"}>
                            <AiOutlinePhone className={"text-3xl mr-2"}/>
                            <input type="tel" pattern="[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}" maxLength={10}
                                   minLength={10}
                                   className={"md:w-1/2 text-xl outline-none bg-transparent border-2 border-gray-600 p-3 rounded-lg"}
                                   onChange={(e) => userInfos[0].phone = e.target.value}
                                   placeholder={"Veuillez renseigner votre téléphone..."}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Informations;