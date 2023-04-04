import React from 'react';

const CardAbout = ({id, title, subtitle, icons}) => {
    return (
        <div
            className={"mx-5 my-5 w-[80vw] md:w-1/3 relative bg-[#01859A] rounded-3xl py-9 px-5  flex flex-col justify-center items-center hover:bg-[#00A7C1] duration-300 ease"}>
            <span className={"absolute -top-7 text-5xl"}>{id}</span>
            <h5 className={"text-4xl text-[#003D47]"}>{title}</h5>
            <h6 className={"text-2xl text-center"}>{subtitle}</h6>
            <span className={"text-7xl mt-5"}>
                {icons}
            </span>
        </div>
    );
};

export default CardAbout;