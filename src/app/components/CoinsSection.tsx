import Image from "next/image";
export default function CoinsSection() {
  return (
    <section className="w-full h-96  p-10 flex flex-col gap-5 justify-center items-center mt-14 mb-20">
      <Image src="/btc-image.svg" alt="btc" width={200} height={200}></Image>
      <h1 className="text-4xl text-center text-black font-bold">
        Visibilizamos todas las tazas de cambio
      </h1>
      <p className="text-gray-500 text-center">
        Traemos información en tiempo real de las casas de cambio y las monedas
        más importantes del mundo.{" "}
      </p>
    </section>
  );
}
