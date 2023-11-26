import { Logo } from "../Components";
import { footerLinks, socialMedia } from "../constants";
import { FooterLinks, FooterLinksType, SocialMedia } from "../types";

const Footer = () => {
  return (
    <section className="flex w-full flex-col items-start justify-start rounded-tl-lg  rounded-tr-lg bg-blue-950 px-6 py-1 text-white">
      <div className="mb-4 flex flex-col items-start justify-start px-2 py-2">
        <Logo />
        <p className="my-4 w-2/4 text-slate-200">
          Get shoes ready for the new term at your nearest Nike store. Find Your
          perfect Size In Store. Get Rewards
        </p>
        <div className="flex flex-row items-start justify-start gap-6">
          {socialMedia.map((icons: SocialMedia, i: number) => (
            <div key={i}>
              <img
                src={`${icons.src}`}
                alt={`${icons.alt}`}
                className="h-10 w-10  rounded-full bg-white object-cover p-2"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto flex w-10/12 flex-row flex-wrap justify-start gap-10 p-2 lg:w-full">
        {footerLinks.map((links: FooterLinks, i: number) => (
          <div key={i} className="flex-1 px-8 ">
            <h1 className="py-2 text-xl font-semibold capitalize leading-normal text-slate-200">
              {links.title}
            </h1>
            <ul className="flex flex-col items-start justify-start gap-2">
              {links.links.map((link: FooterLinksType, i: number) => (
                <li key={i} className=" text-md capitalize text-slate-200/90">
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto my-10 flex w-full flex-row justify-center gap-10">
        <p>copyright sign Copyright. All rights reserved.</p>
        <p>Terms & Conditions</p>
      </div>
    </section>
  );
};

export default Footer;
