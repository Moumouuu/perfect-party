import React from 'react';
import Image from "next/image";
import {AiOutlineArrowRight} from "react-icons/all";

const RoomBlue = () => {
    return (
        <div id={"rooms"} className={"relative flex flex-col md:flex-row justify-center items-center my-16 py-16"}>
            {/*Background effect*/}
            <div className={"absolute w-[200vw] h-full rotate-3 bg-gradient-to-r from-[#003C74] to-[#3E86C8] -left-[100px] top-0 -z-10"}></div>

            <div className={" md:w-1/2"}>
                <Image src={"/assets/images/room-one-picture.png"} alt={"image de la salle bleue"} width={500} height={400}/>
            </div>
            <div className={"flex justify-center md:items-start items-center flex-col md:w-1/3"}>
                <h6 className={"text-6xl md:text-left text-center"}>
                    Vous êtes plutôt Bleu ?
                </h6>
                <ul className={"text-2xl my-5 list-disc"}>
                    <li>6 - 12 personnes </li>
                    <li>Billard</li>
                    <li>Ping-Pong</li>
                </ul>
                <div>
                    <button
                        className={"px-7 py-5 flex items-center bg-[#003C74] rounded-lg hover:bg-[#00294F] duration-300"}>
                        Réserver l&apos;Orange
                        <div className={"text-2xl ml-2"}>
                            <AiOutlineArrowRight/>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RoomBlue;