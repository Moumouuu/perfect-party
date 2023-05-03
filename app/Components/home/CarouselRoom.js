import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const CarouselRoom = () => {
    return (
        <div className={"flex justify-center mb-[100px]"}>
            <Carousel className={"w-[95wv] md:w-[80vw]"} showArrows={true} autoPlay={true}  infiniteLoop={true} interval={2000}>
                <div>
                    <img src="/assets/images/room-1.png"/>
                    <p className="legend">Sous-sol de la salle Bleue</p>
                </div>
                <div>
                    <img src="/assets/images/room-3.png"/>
                    <p className="legend">Sous-sol de la salle Orange</p>
                </div>
                <div>
                    <img src="/assets/images/room-2.png"/>
                    <p className="legend">Chambre 8 personnes salle Bleue
                    </p>
                </div>
                <div>
                    <img src="/assets/images/room-4.png"/>
                    <p className="legend">Sallon de la salle Bleue</p>
                </div>
                <div>
                    <img src="/assets/images/room-5.png"/>
                    <p className="legend">Salon, salle à manger et cuisine de la salle Orange
                    </p>
                </div>
            </Carousel>
        </div>
    );
};

export default CarouselRoom;