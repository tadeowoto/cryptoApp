import { ArrowTrendingDownIcon } from "@heroicons/react/16/solid";
import { ArrowTrendingUpIcon } from "@heroicons/react/16/solid";
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
    <div className="w-full h-20 bg-grid-bg rounded-lg flex justify-between items-center px-5 gap-5 md:w-1/2 md:h-26 ">
      <div className="w-1/2 h-full flex justify-start items-center gap-3">
        <h2 className="text-lg text-text-white font-bold">{name}</h2>
        <p className="text-highlight font-thin ">{symbol}</p>
      </div>
      <div className="w-1/2 h-full flex justify-between items-center gap-2">
        <p className="text-text-white font-bold text-sm">${price}</p>
        <div className="flex justify-center items-center gap-2 flex-row-reverse">
          {priceChange < 0 ? (
            <ArrowTrendingDownIcon className="w-5 h-5 text-failure" />
          ) : (
            <ArrowTrendingUpIcon className="w-5 h-5 text-success" />
          )}
          <p className={`text-${priceChange > 0 ? "success" : "failure"}`}>
            {priceChange.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
}
