import { Button } from "../Components";
import { offer } from "../assets/images";

const SpecialOffers = () => {
  return (
    <section className="mx-auto my-6 flex w-11/12 flex-col items-center justify-between px-2 py-1 lg:my-24 lg:w-full lg:flex-row-reverse">
      <div className="flex flex-col items-start justify-start">
        <h1 className="font-noto-Sans text-4xl font-bold leading-normal text-slate-900">
          <span className="mr-2 text-blue-600">Special</span>
          Offer
        </h1>
        <p className="text-md mb-6 mt-4 text-slate-600">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="text-md my-2 text-slate-600">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="my-4 flex flex-row justify-start gap-4">
          <Button label="Shop now" icon={true} />
          <Button label="Lear more" icon={false} />
        </div>
      </div>
      <div className="my-2 grid w-full place-items-center p-2">
        <img src={`${offer}`} alt="special offer" />
      </div>
    </section>
  );
};

export default SpecialOffers;
