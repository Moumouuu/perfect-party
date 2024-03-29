
const Options = ({setPriceOptions, setOptionsChooses}) => {

    const options = [
        {
            name: "Décoration du lieu",
            price: 45,
        },
        {
            name: "Photobooth ( impression des photos en direct )",
            price:70,
        },
        {
            name: "Un gateau d'anniversaire (18 parts)",
            price: 40,
        },
        {
            name: "Boissons soft et tireuse à bière",
            price: 130,
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
        <div className={"flex flex-col w-full items-center px-2 border-b-2 border-gray-50"}>
            <div className={"md:w-[90%] md:pl-10 pb-3"}>
                <h3 className={"text-3xl text-[#00A7C1] my-10 underline text-center md:text-left"}>Options :</h3>
                <div className={"flex flex-col mb-8"}>

                    {options.map((option, index) => (
                        <div key={index} className={"flex justify-between items-center"}>
                            <div className={"flex"}>
                                <input type="checkbox"
                                       onChange={() => handleOption(option)}
                                       placeholder={"Veuillez renseigner votre adresse mail..."}
                                       className={"option"}
                                />
                                <span className={"text-xl mx-2"}>{option.name}</span>
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