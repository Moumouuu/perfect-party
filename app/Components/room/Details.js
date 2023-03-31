import React, {useEffect, useState} from 'react';
import Link from "next/link";
import {AiOutlineArrowLeft} from "react-icons/all";
import {DateRangePicker} from "react-date-range";
import ButtonBuy from "@/app/Components/room/ButtonBuy";
import Options from "@/app/Components/room/Options";
import ShineEffect from "@/app/Components/utils/ShineEffect";

const Details = ({
                     guests,
                     night,
                     totalPrice,
                     priceWithoutOptions,
                     setPriceOptions,
                     optionsChooses,
                     setOptionsChooses,
                     userInfos
                 }) => {

    const pricePerPerson = 17;

    return (
        <div className={"relative md:w-1/2 flex flex-col justify-center items-center pb-16"}>
            {/*Shine effect*/}
            <div className={"absolute top-0 right-0 -z-10"}>
                <ShineEffect/>
            </div>
            <div className={"absolute bottom-1/3 left-10 -z-10"}>
                <ShineEffect/>
            </div>

            <Options setPriceOptions={setPriceOptions} setOptionsChooses={setOptionsChooses}/>

            <div className={"border-b-2 md:mt-5 border-gray-50 py-8 md:w-[90%]"}>
                <div className={"flex items-center mb-7 justify-center"}>
                    <h2 className={"text-5xl"}>Détails du prix</h2>
                </div>
                {/*Date + Personnes*/}
                <div className={"flex flex-col "}>
                    <div className={"flex flex-col md:ml-10"}>
                        <ul className={"text-3xl mb-3"}>
                            <div className={"flex w-full justify-between items-center"}>
                                <li>{pricePerPerson}€ x <span className={"text-[#00A7C1]"}>{guests}</span> personnes
                                    x <span className={"text-[#00A7C1]"}>{night}</span> nuits
                                </li>
                                <span className={"text-2xl ml-2"}>{priceWithoutOptions}€</span>
                            </div>
                        </ul>
                        {optionsChooses?.length > 0 && (
                            <>
                                <h6 className={"text-3xl mb-4"}>Options :</h6>
                                <ul className={"list-decimal ml-10"}>
                                    {optionsChooses?.map((option, index) => (
                                        <li key={index} className={"mb-2"}>
                                            <div className={"flex w-full justify-between"}>
                                                <span className={"text-xl"}>{option.name}</span>
                                                <span className={"text-xl"}>{option.price}€</span>
                                            </div>
                                        </li>
                                    ))}

                                </ul>
                            </>
                        )}
                    </div>
                </div>
            </div>
            {/*Total*/}
            <div className={"flex flex-col w-[90%] mt-10"}>
                <div className={"flex w-full justify-between"}>
                    <span className={"text-4xl"}>Total (HT) :</span>
                    <span className={"text-2xl"}>{totalPrice}€</span>
                </div>
            </div>
            <ButtonBuy userInfos={userInfos} totalPrice={totalPrice} optionsChooses={optionsChooses} />
        </div>
    );
};

export default Details;