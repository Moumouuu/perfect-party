import React, {useState} from 'react';
import {useSearchParams} from "next/navigation";

const Popup = () => {
    const status = useSearchParams().get("status")
    const [openAlert, setOpenAlert] = useState(true)
    return (
        <div>
            {openAlert && status && status === "success" && (
                <div
                    className="flex items-center bg-green-400 border border-green-700 text-black px-4 py-3 rounded top-10  md:right-10 fixed z-10"
                    role="alert">
                    <strong className="font-bold">Validation ! </strong>
                    <span className="block sm:inline">Votre demande de réservation à bien été prise en compte.</span>
                    <span className=" px-3 py-2">
                <svg onClick={() => setOpenAlert(!openAlert)} className="fill-current h-6 w-6 text-red-500"
                     role="button" xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 20 20"><title>Close</title><path
                    d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
              </span>
                </div>
            )}
            {openAlert && status && status === "cancel" && (
                <div
                    className="flex items-center bg-red-400 border border-red-700 text-black px-4 py-3 rounded top-10 md:right-10 fixed z-10"
                    role="alert">
                    <strong className="font-bold">Ho un problème est survenue ! </strong>
                    <span className="block sm:inline">Veuillez recommencer.</span>
                    <span className="px-3 py-2">
                <svg onClick={() => setOpenAlert(!openAlert)} className="fill-current h-6 w-6 text-red-500"
                     role="button" xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 20 20"><title>Close</title><path
                    d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
              </span>
                </div>
            )}
        </div>
    );
};

export default Popup;