interface ExchangeRatesResponse {
  time_last_update_unix: number;
  conversion_rates: Record<string, number>;
}

export const fetchExchangeRates = async () => {
  const res = await fetch("https://v6.exchangerate-api.com/v6/e1f469ab2b07d5783223348e/latest/RUB");
  const rates = (await res.json()) as ExchangeRatesResponse;
  return rates;
};
