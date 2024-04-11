import heroMobile from "../assets/about/mobile/image-about-hero.jpg";
import heroTablet from "../assets/about/tablet/image-about-hero.jpg";
import heroDesktop from "../assets/about/desktop/image-about-hero.jpg";

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
    </div>
  );
}
