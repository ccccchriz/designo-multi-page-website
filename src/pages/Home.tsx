import phone from "../assets/home/desktop/image-hero-phone.png";
import LinkCard from "../components/LinkCard";

export default function Home() {
  return (
    <>
      <div className="grid gap-[7.5rem]">
        <div className="bg-peach px-6 py-20 text-white text-center grid gap-4 overflow-hidden tablet:mx-6 tablet:rounded-2xl justify-items-center bg-[url('/images/home/bg-pattern-hero-home.svg')] bg-no-repeat bg-[right_75%_center] desktop:grid-cols-[auto_1fr] desktop:text-left desktop:justify-items-start desktop:px-24 desktop:py-36">
          <h2 className="text-mobile-heading-l tablet:text-heading-l max-w-[35.8125rem] leading-none font-medium">
            Award-winning custom designs and digital branding solutions
          </h2>
          <p className="text-body-sm tablet:text-body max-w-[27.8125rem]">
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </p>
          <a
            href=""
            className="bg-white text-black uppercase py-4 px-6 tracking-[2px] w-max font-medium rounded-lg"
          >
            Learn More
          </a>
          <img
            src={phone}
            alt=""
            className="-mb-80 scale-150 mt-16 desktop:row-[1/4] desktop:col-[2/3]"
          />
        </div>
        <div className="grid px-6 gap-6 desktop:grid-cols-2">
          <LinkCard type="web" className="desktop:row-[1/3]" />
          <LinkCard type="app" />
          <LinkCard type="graphic" />
        </div>
      </div>
    </>
  );
}
