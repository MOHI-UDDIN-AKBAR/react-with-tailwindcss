import { Button } from "../Components";
import { shoe8 } from "../assets/images";
const SuperQuality = () => {
  return (
    <section className="mx-auto flex flex-col items-center justify-evenly lg:my-10 lg:w-11/12 lg:flex-row lg:p-2 xl:my-20">
      <div className="flex w-10/12 flex-col items-start justify-start px-1 py-px lg:px-2 lg:py-1">
        <h1 className="font-noto-Sans mb-px mt-4 p-2 text-[40px] font-semibold capitalize leading-normal text-black lg:text-5xl">
          We Provide You
          <span className="mx-2 leading-normal text-blue-800">
            Super Quality
          </span>
          Shoes
        </h1>
        <p className="mb-8 w-10/12 px-2 py-1 text-lg leading-normal text-slate-600 lg:p-2">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="text-md m-0 px-2 py-1 leading-normal text-slate-500 lg:p-2">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-6 px-2">
          <Button label={"View details"} icon={false} />
        </div>
      </div>
      <div className=" mt-6 lg:mt-0">
        <img
          src={`${shoe8}`}
          alt="Super Quality shoes"
          className="mx-auto w-10/12 object-cover lg:w-full"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
