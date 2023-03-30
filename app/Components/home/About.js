import React from 'react';
import CardAbout from "@/app/Components/home/CardAbout";
import {BiFootball, BiParty, BsCalendarEvent} from "react-icons/all";
import ShineEffect from "@/app/Components/utils/ShineEffect";

const About = () => {
    return (
        <div className={"relative flex flex-col my-16"}>
            {/*Shine effect*/}

            <div className={"absolute right-1/2 -z-10"}>
                <ShineEffect/>
            </div>
            <div className={"absolute right-0 bottom-0 -z-10"}>
                <ShineEffect/>
            </div>

            <h3 className={"text-4xl my-16 text-center "}>Perfect Party c&apos;est quoi ?</h3>
            <div className={"flex flex-col sm:flex-row justify-center items-center"}>
                <CardAbout id={"01"} title={"Soirées"} subtitle={"Customisées selon vos choix et privées !"} icons={<BiParty/>} />
                <CardAbout id={"02"} title={"Five"} subtitle={"Envie de faire du sport entre amis ? "} icons={<BiFootball/>} />
                <CardAbout id={"03"} title={"Évènements"} subtitle={"Murder party, soirée à thème & plus encore ..."} icons={<BsCalendarEvent/>} />
            </div>
        </div>
    );
};

export default About;