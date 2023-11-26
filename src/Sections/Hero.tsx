import { useState } from "react";
import { Button, ShoeCard } from "../Components";
import { shoes, statistics } from "../constants";
import { ShoeType, Statistic } from "../types";

const Hero = () => {
  const [selectedShoe, setSelectedShoe] = useState<ShoeType>(shoes[0]);
  return (
    <section className="relative flex min-h-screen w-full flex-col items-start justify-between  xl:flex-row">
      <div className="flex w-full flex-col px-6 py-4 lg:basis-2/5">
        <h3 className="text-md w-fit  px-2 py-1 font-semibold text-blue-400">
          Our Summer collections
        </h3>
        <div className="my-8 flex w-full flex-col gap-2 text-6xl font-black capitalize sm:text-7xl">
          <h1 className="font-noto-Sans w-full bg-white leading-normal xl:whitespace-nowrap">
            The New Arrival
          </h1>
          <h1 className="max-w-fit ">
            <span className="font-noto-Sans leading-normal text-blue-600">
              Nike{" "}
            </span>
            <span className="font-noto-Sans leading-normal">shoes</span>
          </h1>
        </div>
        <p className="text-left text-lg text-slate-600">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label={"Shop Now"} icon={true} />
        <div className="my-16 flex w-full flex-row items-center justify-around px-1 py-1 sm:w-3/4">
          {statistics.map((statistic: Statistic) => (
            <div
              key={statistic.label}
              className="flex flex-col items-center justify-center"
            >
              <h1 className="text-3xl font-bold sm:text-4xl">
                {statistic.value}
              </h1>
              <span className="my-1 text-center -indent-3 capitalize text-slate-700">
                {statistic.label}
              </span>
            </div>
          ))}
        </div>
      </div>
      <aside className=" relative h-[430px] w-full md:h-[650px] xl:h-screen xl:basis-3/5 ">
        <div className="bg-hero h-full w-full rounded-lg">
          <img
            src={`${selectedShoe.bigShoe}`}
            alt={`${selectedShoe.thumbnail}`}
            className="mx-auto object-contain"
          />
          <div className="absolute -bottom-10 flex w-full flex-row items-center justify-center space-x-6">
            {shoes.map((shoe: ShoeType, i: number) => (
              <ShoeCard
                key={i}
                selectedShoe={selectedShoe}
                shoe={shoe}
                setSelectedShoe={setSelectedShoe}
              />
            ))}
          </div>
        </div>
      </aside>
    </section>
  );
};

export default Hero;
