import heroMobile from "../assets/about/mobile/image-about-hero.jpg";
import heroTablet from "../assets/about/tablet/image-about-hero.jpg";
import heroDesktop from "../assets/about/desktop/image-about-hero.jpg";
import talentMobile from "../assets/about/mobile/image-world-class-talent.jpg";
import talentTablet from "../assets/about/tablet/image-world-class-talent.jpg";
import talentDesktop from "../assets/about/desktop/image-world-class-talent.jpg";
import canadaIcon from "../assets/shared/desktop/illustration-canada.svg";
import australiaIcon from "../assets/shared/desktop/illustration-australia.svg";
import ukIcon from "../assets/shared/desktop/illustration-united-kingdom.svg";
import realMobile from "../assets/about/mobile/image-real-deal.jpg";
import realTablet from "../assets/about/tablet/image-real-deal.jpg";
import realDesktop from "../assets/about/desktop/image-real-deal.jpg";

export default function About() {
  return (
    <div className="">
      <div className="overflow-hidden">
        <picture className="object-cover w-full">
          <source media="(min-width: 54rem)" srcSet={heroDesktop} />
          <source media="(min-width: 36rem)" srcSet={heroTablet} />
          <img src={heroMobile} alt="" className="object-cover w-full" />
        </picture>
        <div className="bg-peach px-6 py-20 text-white text-center grid gap-6">
          <h2 className="font-medium text-mobile-heading-l">About Us</h2>
          <p className="text-body-sm">
            Founded in 2010, we are a creative agency that produces lasting
            results for our clients. We’ve partnered with many startups,
            corporations, and nonprofits alike to craft designs that make real
            impact. We’re always looking forward to creating brands, products,
            and digital experiences that connect with our clients’ audiences.
          </p>
        </div>
      </div>
      <div className="overflow-hidden">
        <picture className="object-cover w-full">
          <source media="(min-width: 54rem)" srcSet={talentDesktop} />
          <source media="(min-width: 36rem)" srcSet={talentTablet} />
          <img src={talentMobile} alt="" className="object-cover w-full" />
        </picture>
        <div className="bg-light-peach px-6 py-20 text-dark-gray text-center grid gap-6 bg-opacity-20">
          <h2 className="font-medium text-mobile-heading-l text-peach">
            World-class talent
          </h2>
          <p className="text-body-sm">
            We are a crew of strategists, problem-solvers, and technologists.
            Every design is thoughtfully crafted from concept to launch,
            ensuring success in its given market. We are constantly updating our
            skills in a myriad of platforms.
          </p>
          <p className="text-body-sm">
            Our team is multi-disciplinary and we are not merely interested in
            form — content and meaning are just as important. We give great
            importance to craftsmanship, service, and prompt delivery. Clients
            have always been impressed with our high-quality outcomes that
            encapsulates their brand’s story and mission.
          </p>
        </div>
      </div>
      <div className="grid items-center px-6 py-28">
        <h2 className="sr-only">Locations</h2>
        <ul className="grid text-center font-medium uppercase text-dark-gray">
          <li className="grid gap-8 justify-items-center tracking-[0.3125rem] text-mobile-heading-s">
            <img src={canadaIcon} alt="" />
            <h3 className="">Canada</h3>
            <a
              href=""
              className="bg-peach text-white p-4 grid w-max tracking-[0.0625rem] text-body-sm rounded-lg"
            >
              See Location
            </a>
          </li>
          <li className="grid gap-8 justify-items-center tracking-[0.3125rem] text-mobile-heading-s">
            <img src={australiaIcon} alt="" />
            <h3 className="">Australia</h3>
            <a
              href=""
              className="bg-peach text-white p-4 grid w-max tracking-[0.0625rem] text-body-sm rounded-lg"
            >
              See Location
            </a>
          </li>
          <li className="grid gap-8 justify-items-center tracking-[0.3125rem] text-mobile-heading-s">
            <img src={ukIcon} alt="" />
            <h3 className="">United Kingdom</h3>
            <a
              href=""
              className="bg-peach text-white p-4 grid w-max tracking-[0.0625rem] text-body-sm rounded-lg"
            >
              See Location
            </a>
          </li>
        </ul>
      </div>
      <div className="overflow-hidden">
        <picture className="object-cover w-full">
          <source media="(min-width: 54rem)" srcSet={realDesktop} />
          <source media="(min-width: 36rem)" srcSet={realTablet} />
          <img src={realMobile} alt="" className="object-cover w-full" />
        </picture>
        <div className="bg-light-peach px-6 py-20 text-dark-gray text-center grid gap-6 bg-opacity-20">
          <h2 className="font-medium text-mobile-heading-l text-peach">
            The real deal
          </h2>
          <p className="text-body-sm">
            As strategic partners in our clients’ businesses, we are ready to
            take on any challenge as our own. Solving real problems require
            empathy and collaboration, and we strive to bring a fresh
            perspective to every opportunity. We make design and technology more
            accessible and give you tools to measure success.
          </p>
          <p className="text-body-sm">
            We are visual storytellers in appealing and captivating ways. By
            combining business and marketing strategies, we inspire audiences to
            take action and drive real results.
          </p>
        </div>
      </div>
    </div>
  );
}
