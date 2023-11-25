import { IoIosArrowRoundForward } from "react-icons/io";

const Button = () => {
  return (
    <button
      type="button"
      className=" mt-16 flex w-fit items-center justify-center rounded-full bg-blue-950/90 px-10 py-2  text-white hover:ring-2 hover:ring-blue-500 lg:px-10 lg:py-[14px]"
    >
      <span className="mr-4 text-lg capitalize">Shop Now</span>
      <span className="h-5 w-5 rounded-full bg-white text-xl font-bold text-blue-900">
        <IoIosArrowRoundForward />
      </span>
    </button>
  );
};

export default Button;
