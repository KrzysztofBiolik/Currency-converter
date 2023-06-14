{
    const calculateResult = (amount, currency) => {
        const rateEUR = 4.58;
        const rateUSD = 4.15;
        const rateGBP = 5.19;

        switch (currency) {
            case "EUR":
                return amount / rateEUR;

            case "USD":
                return amount / rateUSD;

            case "GBP":
                return amount / rateGBP;
        }
    };

    const updateResultText = (amount, result, currency) => {
        const resultElement = document.querySelector(".js-result");
        if (result < 0) {
            resultElement.innerHTML = "NIE MOŻNA PRZELICZAĆ UJEMNYCH KWOT";
        }
        else {
            resultElement.innerHTML = `${amount.toFixed(3)} PLN = <strong>${result.toFixed(3)} ${currency}</strong>`;
        }
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");

        const amount = +amountElement.value;
        const currency = currencyElement.value;
        
        const result = calculateResult(amount, currency);

        updateResultText(amount, result, currency);
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    };

    init();

}
