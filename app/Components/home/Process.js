import React from 'react';
import ShineEffect from "@/app/Components/utils/ShineEffect";
import CardAbout from "@/app/Components/home/CardAbout";
import {BiParty, BiPhoneCall, GiThink, IoTicketOutline} from "react-icons/all";

const Process = () => {
    return (
        <div className={"relative flex flex-col mb-[200px]"}>
            {/*Shine effect*/}

            <div className={"absolute right-1/2 -z-10"}>
                <ShineEffect/>
            </div>
            <div className={"absolute right-0 bottom-0 -z-10"}>
                <ShineEffect/>
            </div>

            <h3 className={"text-4xl my-16 text-center "}>Avec nous c&apos;est simple !</h3>
            <div className={"flex flex-col sm:flex-row justify-center items-center"}>
                <CardAbout id={"01"} title={"Choisissez"} subtitle={"votre salle de rêve !"} icons={<GiThink/>} />
                <CardAbout id={"02"} title={"Réservez"} subtitle={"rapidement et en toute sécurité."} icons={<BiPhoneCall/>} />
                <CardAbout id={"03"} title={"Fêtez"} subtitle={"avec vos amis !"} icons={<BiParty/>} />
            </div>
        </div>
    );
};

export default Process;