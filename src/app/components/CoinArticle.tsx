type Props = {
  name: string;
  price: number;
  symbol: string;
  priceChange: number;
};

export default async function CoinArticle({
  name,
  price,
  symbol,
  priceChange,
}: Props) {
  return (
    <div className="w-full h-20 bg-grid-bg rounded-lg flex justify-between items-center px-5 gap-5">
      <div className="w-1/2 h-full flex justify-start items-center gap-3">
        <h2 className="text-2xl text-text-white font-bold">{name}</h2>
        <p className="text-highlight font-thin tracking-widest">{symbol}</p>
      </div>
      <div className="w-1/2 h-full flex justify-between items-center">
        <p className="text-text-white font-bold text-xl">${price}</p>
        <p className={`text-${priceChange > 0 ? "success" : "failure"}`}>
          {priceChange.toFixed(2)}
        </p>
      </div>
    </div>
  );
}
