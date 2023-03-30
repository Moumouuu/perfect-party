import React from 'react';
import Image from "next/image";
import {AiOutlineArrowRight} from "react-icons/all";

const Five = () => {
    return (
        <div className={"relative flex flex-col md:flex-row justify-center items-center my-16 py-16"}>
            {/*Background effect*/}
            <div
                className={"absolute -left-10 w-[120vw] h-full rotate-3 bg-gradient-to-r from-[#008FA6] to-[#155661] left-0 top-0 -z-10"}></div>

            <div className={"w-1/3"}>
                <Image src={"/assets/images/five-picture-2.png"} alt={"image de la salle bleue"} width={500} height={500}
                       />
            </div>
            <div className={"flex justify-center md:items-start items-center flex-col md:w-1/3"}>
                <h6 className={"text-6xl md:text-left text-center"}>
                    Envie de bouger ?
                </h6>
                <ul className={"text-2xl my-5 list-disc"}>
                    <li>6 - 14 personnes</li>
                    <li>Ouvert de 14h à 19h / ou RDV</li>
                    <li>Prix unitaire de 6€</li>
                </ul>
                <div>
                    <button
                        className={"px-7 py-5 flex items-center bg-[#1E1E1E] rounded-lg hover:bg-[#000] duration-300"}>
                        Réserver un Five
                        <div className={"text-2xl ml-2"}>
                            <AiOutlineArrowRight/>
                        </div>
                    </button>
                </div>
            </div>

            <div className={"md:w-1/3"}>
                <Image src={"/assets/images/five-picture.png"} alt={"image de la salle bleue"} width={500}
                       height={400}/>
            </div>
        </div>
    );
};

export default Five;