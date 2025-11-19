import { useState, useEffect } from "react";
import { useData } from "./useData";

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

function BitcoinRates() {
  const [currency, setCurrency] = useState(currencies[0]);
  const [exchangeRate, setExchangeRate] = useState(0);

  const url = `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`;

  const { data, loading, error } = useData(url);

  useEffect(() => {
    if (data && data.bitcoin) {
      setExchangeRate(data.bitcoin[currency.toLowerCase()]);
    }
  }, [data, currency]);

  const options = currencies.map((curr) => (
    <option value={curr} key={curr}>
      {curr}
    </option>
  ));

  return (
    <div className="BitcoinRates componentBox">
      <h3>Bitcoin Exchange Rate</h3>

      <label>
        Choose currency:
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          {options}
        </select>
      </label>

      {loading && <p>Loading...</p>}
      {error && <p>Error fetching rate</p>}

      {!loading && !error && (
        <div>
          <strong>Current Exchange Rate: </strong>
          {exchangeRate}
        </div>
      )}
    </div>
  );
}

export default BitcoinRates;
