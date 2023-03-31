import React from 'react';

const ButtonBuy = ({userInfos, optionsChooses, totalPrice}) => {
    console.log(userInfos, optionsChooses, totalPrice)
    return (
        <button className={"cursor-pointer hover:bg-[#00A7C1] duration-300 ease bg-[#01859A] w-full md:w-1/2 py-5 my-6 rounded-xl text-center"}>
            <span className={"text-2xl"}>Payer</span>
        </button>
    );
};

export default ButtonBuy;