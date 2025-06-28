interface ExchangeRatesResponse {
  time_last_update_unix: number;
  conversion_rates: Record<string, number>;
}

export const fetchExchangeRates = async () => {
  const res = await fetch(`https://v6.exchangerate-api.com/v6/${import.meta.env.VITE_EXCHANGE_RATE_KEY}/latest/RUB`);
  const rates = (await res.json()) as ExchangeRatesResponse;
  return rates;
};
