import React from 'react';
import Image from "next/image";

const Header = () => {
    return (
        <div className={"flex items-center p-3"}>
            <Image src="/assets/images/PerfectPartyLogo.png" alt="Logo of PerfectParty" width={50} height={50} />
            <h1 className={"text-3xl text-white"}>Perfect <span className={"outline pr-2 text-[#003D47]"}>Party</span></h1>
        </div>
    );
};

export default Header;