'use client';
import Banner from "@/app/Components/home/Banner";
import About from "@/app/Components/home/About";
import RoomBlue from "@/app/Components/home/RoomBlue";
import RoomOrange from "@/app/Components/home/RoomOrange";
import Process from "@/app/Components/home/Process";
import Five from "@/app/Components/home/Five";
import CarouselRoom from "@/app/Components/home/CarouselRoom";
import Popup from "@/app/Components/home/Popup";

export default function Home({}) {

    return (
        <div className={"relative overflow-hidden"}>
            <Popup/>
            <Banner/>
            <About/>
            <CarouselRoom/>
            <RoomBlue/>
            <RoomOrange/>
            <Process/>
            <Five/>
        </div>
    )
}
