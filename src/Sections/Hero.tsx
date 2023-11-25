import { Button, ShoeCard } from "../Components";
import { statistics } from "../constants";
import { Statistic } from "../types";

const Hero = () => {
  return (
    <section className="flex min-h-screen w-full flex-col items-center justify-between border-2 border-red-500 lg:flex-row">
      <div className="flex w-full flex-col px-6 py-4 lg:basis-1/2">
        <h3 className="text-md w-fit  px-2 py-1 font-semibold text-blue-400">
          Our Summer collections
        </h3>
        <div className="my-8 flex w-full flex-col gap-2 text-6xl font-black capitalize sm:text-7xl">
          <h1 className="w-ful font-noto-Sans  bg-white leading-normal">
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
        <Button />
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
      <aside className="border-2 border-red-500">
        <ShoeCard />
      </aside>
    </section>
  );
};

export default Hero;
