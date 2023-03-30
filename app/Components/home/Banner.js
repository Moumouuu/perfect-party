import React from 'react';
import {AiOutlineArrowRight} from "react-icons/all";
import Image from "next/image";
import ShineEffect from "@/app/Components/utils/ShineEffect";

const Banner = () => {
    return (
        <div className={"mt-8 relative flex flex-col sm:flex-row items-center justify-center md:h-[70vh] mb-16"}>
            {/*Shine effect*/}
            <div className={"absolute left-0 -z-10"}>
                <ShineEffect/>
            </div>

            <div className={"flex flex-col md:w-1/2 items-center text-center "}>
                <h1 className={"text-7xl text-white mb-10"}>Perfect <span
                    className={"outline pr-2 text-[#003D47]"}>Party</span>
                </h1>
                <h2 className={"text-4xl mb-10"}>
                    La fête est notre métier, la perfection est notre objectif
                </h2>
                <div>
                    <a href={"#rooms"}
                        className={"px-7 py-5 flex items-center bg-[#01859A] rounded-lg hover:bg-[#00A7C1] duration-300"}>
                        Voir nos salles
                        <div className={"text-2xl ml-2"}>
                            <AiOutlineArrowRight/>
                        </div>
                    </a>
                </div>
            </div>
            <div>
                {/*Shine effect*/}
                <div className={"absolute top-0 -z-10"}>
                    <ShineEffect/>
                </div>

                <Image src={"/assets/images/party-picture.png"} alt={"Image de fête"} width={500} height={500}/>
            </div>
        </div>
    );
};

export default Banner;