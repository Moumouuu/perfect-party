import React from 'react';

const Options = ({setPriceOptions, setOptionsChooses}) => {

    const options = [
        {
            name: "Décoration du lieu",
            price: 35,
        },
        {
            name: "Décoration du Gâteaux d'anniversaire",
            price: 40,
        },
        {
            name: "Repas",
            price: 50,
        },
        {
            name: "Boisons soft et tireuse à bière",
            price: 60,
        }
    ]
    /**
     * Calculate the price of the options checked
     */
    const calculatePriceOptions = () => {
        setOptionsChooses([]);
        let price = 0;
        let optionsChooses = [];
        let optionsCheckBox = document.getElementsByClassName("option");
        for (let i = 0; i < optionsCheckBox.length; i++) {
            if (optionsCheckBox[i].checked) {
                price += options[i].price;
                optionsChooses.push(options[i]);
            }
        }
        setOptionsChooses(optionsChooses);
        setPriceOptions(price);
    }

    /**
     * Change the state of the checkbox to know what option is selected
     * @param option
     */
    const handleOption = (option) => {
        option.checked = !option.checked;
        calculatePriceOptions()
    }


    return (
        <div className={"flex flex-col w-full items-center"}>
            <div className={"md:w-[90%] border-b-2 border-gray-50 pl-10 pb-3"}>
                <h3 className={"text-4xl my-10 underline"}>Options :</h3>
                <div className={"flex flex-col mb-8"}>

                    {options.map((option, index) => (
                        <div key={index} className={"flex justify-between"}>
                            <div className={"flex"}>
                                <input type="checkbox"
                                       onChange={() => handleOption(option)}
                                       placeholder={"Veuillez renseigner votre adresse mail..."}
                                       className={"option"}
                                />
                                <span className={"text-xl ml-2"}>{option.name}</span>
                            </div>
                            <span>{option.price}€</span>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
};

export default Options;