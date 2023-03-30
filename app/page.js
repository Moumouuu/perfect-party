import Banner from "@/app/Components/home/Banner";
import About from "@/app/Components/home/About";
import RoomBlue from "@/app/Components/home/RoomBlue";
import RoomOrange from "@/app/Components/home/RoomOrange";
import Process from "@/app/Components/home/Process";
import Five from "@/app/Components/home/Five";

export default function Home() {
    return (
        <div className={"overflow-hidden"}>
            <Banner/>
            <About/>
            <RoomBlue/>
            <RoomOrange/>
            <Process/>
            <Five/>
        </div>
    )
}
