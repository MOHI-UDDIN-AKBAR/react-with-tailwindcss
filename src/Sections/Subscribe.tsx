import { Button } from "../Components";

const Subscribe = () => {
  return (
    <section className="my-20 flex flex-col items-center justify-center  py-8">
      <h1 className="font-noto-Sans  p-2 text-4xl font-bold leading-normal text-slate-800">
        Sign Up for<span className="mx-2 text-blue-800">Updates</span>&
        Newsletter
      </h1>
      <div className="my-10 grid w-8/12 grid-flow-col place-items-center rounded-3xl border-2 border-blue-200 lg:w-1/2">
        <input
          type="text"
          title="email"
          placeholder="subscibe@nike.com"
          className=" padding-2 text-md w-10/12  text-slate-800 caret-slate-700 placeholder:text-slate-400 focus:outline-none"
        />
        <Button label={"Sign Up"} icon={false} />
      </div>
    </section>
  );
};

export default Subscribe;
