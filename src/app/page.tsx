import TopBg from "./components/TopBg";
import RootLayout from "./layout";
import CoinsSection from "./components/CoinsSection";
import TopCoins from "./components/TopCoins";

export default function Home() {
  return (
    <RootLayout>
      <TopBg />
      <CoinsSection />
      <TopCoins />
    </RootLayout>
  );
}
