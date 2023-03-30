import React from 'react';
import Image from "next/image";
import {AiOutlineArrowRight} from "react-icons/all";

const RoomOrange = () => {
    return (
        <div>
            <div className={"relative flex flex-col md:flex-row justify-center items-center my-16 py-16"}>
                {/*Background effect*/}
                <div className={"absolute -left-12 w-[200vw] h-full -rotate-3 bg-gradient-to-r from-[#AC6E34] to-[#743800] -left-[100px] top-0 -z-10"}></div>

                <div className={"mb-8 flex justify-center md:items-start items-center flex-col md:w-1/3"}>
                    <h6 className={"text-6xl md:text-left text-center"}>
                        Ou bien Orange ?
                    </h6>
                    <ul className={"text-2xl my-5 list-disc"}>
                        <li>6 - 12 personnes </li>
                        <li>Billard</li>
                        <li>Ping-Pong</li>
                    </ul>
                    <div>
                        <button
                            className={"px-7 py-5 flex items-center bg-[#743800] rounded-lg hover:bg-[#4F2600] duration-300"}>
                            Réserver la Bleue
                            <div className={"text-2xl ml-2"}>
                                <AiOutlineArrowRight/>
                            </div>
                        </button>
                    </div>
                </div>
                <div className={" md:w-1/2"}>
                    <Image src={"/assets/images/room-two-picture.png"} alt={"image de la salle bleue"} width={600} height={500}/>
                </div>
            </div>
        </div>
    );
};

export default RoomOrange;