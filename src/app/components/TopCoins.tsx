import { fetchCrypto } from "../lib/fetchCrypto";
import CoinArticle from "./CoinArticle";
import { CoinData } from "../types/types";

export default async function TopCoins() {
  const data = await fetchCrypto();
  const coins = data.slice(0, 5);
  console.log(data);
  return (
    <section className="w-full h-screen bg-dark-bg p-10 flex flex-col gap-20">
      <h1 className="text-4xl text-center text-text-white  font-bold">
        Top 5 Coins
      </h1>
      <div className="w-full h-full">
        <div className="w-full h-full flex flex-col gap-5">
          {coins.map((coin: CoinData, index: number) => (
            <CoinArticle
              key={index}
              name={coin.name}
              price={coin.current_price}
              symbol={coin.symbol}
              priceChange={coin.price_change_24h}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
