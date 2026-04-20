import { useEffect, useState } from "react";

function useCurrencyInfo(currency='inr') {
    const [currencyInfo, setCurrencyInfo] = useState(null);

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then((response) => response.json())
            .then((data) => {
                setCurrencyInfo(data[currency]);
            })
            .catch((error) => {
                console.error("Error fetching currency data:", error);
            });
}, [currency]);

    return currencyInfo;
}

export default useCurrencyInfo; 