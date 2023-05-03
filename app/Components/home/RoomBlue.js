import Image from "next/image";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/all";

const RoomBlue = () => {
    return (
        <div id={"rooms"} className={"relative flex flex-col md:flex-row justify-center items-center mb-[200px] py-12"}>
            {/*Background effect*/}
            <div className={"absolute w-[200vw] h-full rotate-3 bg-gradient-to-r from-[#003C74] to-[#3E86C8] -left-[100px] top-0 -z-10"}></div>

            <div className={" md:w-1/2"}>
                <Image src={"/assets/images/room-one-picture.png"} alt={"image de la salle bleue"} width={700} height={500}/>
            </div>
            <div className={"flex justify-center md:items-start items-center flex-col md:w-1/3"}>
                <h6 className={"text-6xl md:text-left text-center"}>
                    Vous êtes plutôt Bleu ?
                </h6>
                <ul className={"text-2xl my-5 list-disc"}>
                    <li>12 - 22 personnes </li>
                    <li>Billard / Baby-Foot / AirHockey </li>
                    <li>Jeu de société</li>
                    <li>Enceintes Bluetooth</li>
                </ul>
                <div>
                    <Link href={"/reservation/blue"}
                        className={"px-7 py-5 flex items-center bg-[#003C74] rounded-lg hover:bg-[#00294F] duration-300"}>
                        Réserver la Bleue
                        <div className={"text-2xl ml-2"}>
                            <AiOutlineArrowRight/>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default RoomBlue;