import React, {useEffect, useState} from 'react';
import Link from "next/link";
import {AiOutlineArrowLeft} from "react-icons/all";
import {DateRangePicker} from "react-date-range";
import ButtonBuy from "@/app/Components/room/ButtonBuy";
import Options from "@/app/Components/room/Options";

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
        <div className={"md:w-1/2 flex flex-col justify-center items-center pb-16"}>
            <Options setPriceOptions={setPriceOptions} setOptionsChooses={setOptionsChooses}/>

            <div className={"border-b-2 md:mt-5 border-gray-50 pb-8 md:w-[90%]"}>
                <div className={"flex items-center mb-7"}>
                    <h2 className={"text-5xl"}>Détails du prix</h2>
                </div>
                {/*Date + Personnes*/}
                <div className={"flex flex-col "}>
                    <div className={"flex flex-col ml-10"}>
                        <ul className={" text-3xl mb-3"}>
                            <div className={"flex w-full justify-between"}>
                                <li>{pricePerPerson}€ x <span className={"text-[#00A7C1]"}>{guests}</span> personnes
                                    x <span className={"text-[#00A7C1]"}>{night}</span> nuits
                                </li>
                                <span className={"text-xl"}>{priceWithoutOptions}€</span>
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
                    <span className={"text-4xl"}>Total :</span>
                    <span className={"text-2xl"}>{totalPrice}€</span>
                </div>
            </div>
            <ButtonBuy userInfos={userInfos} totalPrice={totalPrice} optionsChooses={optionsChooses} />
        </div>
    );
};

export default Details;