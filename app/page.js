'use client';
import About from "@/app/Components/home/About";
import Banner from "@/app/Components/home/Banner";
import CarouselRoom from "@/app/Components/home/CarouselRoom";
import Five from "@/app/Components/home/Five";
import Maps from "@/app/Components/home/Maps";
import Popup from "@/app/Components/home/Popup";
import Process from "@/app/Components/home/Process";
import RoomBlue from "@/app/Components/home/RoomBlue";
import RoomOrange from "@/app/Components/home/RoomOrange";

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
            <Maps />
        </div>
    )
}
