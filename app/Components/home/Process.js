import React from 'react';
import ShineEffect from "@/app/Components/utils/ShineEffect";
import CardAbout from "@/app/Components/home/CardAbout";
import { BiParty, BiPhoneCall, IoTicketOutline} from "react-icons/all";

const Process = () => {
    return (
        <div className={"relative flex flex-col my-16"}>
            {/*Shine effect*/}

            <div className={"absolute right-1/2 -z-10"}>
                <ShineEffect/>
            </div>
            <div className={"absolute right-0 bottom-0 -z-10"}>
                <ShineEffect/>
            </div>

            <h3 className={"text-4xl my-16 text-center "}>Avec nous c&apos;est simple !</h3>
            <div className={"flex flex-col sm:flex-row justify-center items-center"}>
                <CardAbout id={"01"} title={"Organisez"} subtitle={"votre soirée"} icons={<BiPhoneCall/>} />
                <CardAbout id={"02"} title={"Réserver"} subtitle={"en toute sécurité"} icons={<BiParty/>} />
                <CardAbout id={"03"} title={"Fêter"} subtitle={"votre location est assurée"} icons={<IoTicketOutline/>} />
            </div>
        </div>
    );
};

export default Process;