import React from 'react';

const CardAbout = ({id, title, subtitle, icons}) => {
    return (
        <div
            className={"mx-5 my-5 md:w-1/5 w-[70vw] relative bg-[#01859A] rounded-3xl py-9 px-5  flex flex-col justify-center items-center hover:bg-[#00A7C1] duration-300 ease"}>
            <span className={"absolute -top-5 text-5xl"}>{id}</span>
            <h5 className={"text-3xl text-[#003D47]"}>{title}</h5>
            <h6 className={"text-xl text-center"}>{subtitle}</h6>
            <span className={"text-6xl mt-5"}>
                {icons}
            </span>
        </div>
    );
};

export default CardAbout;