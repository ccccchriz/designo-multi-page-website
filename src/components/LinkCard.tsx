const types = {
  web: {
    images:
      "bg-[url(/images/linkCard/mobile/image-web-design.jpg)] tablet:bg-[url(/images/linkCard/tablet/image-web-design.jpg)] desktop:bg-[url(/images/linkCard/desktop/image-web-design-large.jpg)]",
    title: "Web Design",
    link: "/web",
  },
  app: {
    images:
      "bg-[url(/images/linkCard/mobile/image-app-design.jpg)] tablet:bg-[url(/images/linkCard/tablet/image-app-design.jpg)] desktop:bg-[url(/images/linkCard/desktop/image-app-design.jpg)]",
    title: "App Design",
    link: "/web",
  },
  graphic: {
    images:
      "bg-[url(/images/linkCard/mobile/image-graphic-design.jpg)] tablet:bg-[url(/images/linkCard/tablet/image-graphic-design.jpg)] desktop:bg-[url(/images/linkCard/desktop/image-graphic-design.jpg)]",
    title: "Graphic Design",
    link: "/web",
  },
};

type LinkCardProps = {
  type: "web" | "app" | "graphic";
  className?: string;
};

export default function LinkCard({ type, className }: LinkCardProps) {
  return (
    <a
      href=""
      className={
        types[type].images +
        " min-h-[15.625rem] tablet:min-h-[12.5rem] desktop:min-h-[18.75rem] text-white grid place-content-center text-center uppercase font-medium bg-blend-soft-light bg-black bg-opacity-80 rounded-2xl overflow-hidden hover:bg-peach focus-visible:bg-peach bg-no-repeat bg-cover bg-center " +
        className
      }
    >
      <span className="tracking-[0.0875rem] text-mobile-heading-m tablet:text-heading-m">
        {types[type].title}
      </span>
      <span className="tracking-[0.3125rem] text-body-sm flex justify-center items-center gap-5">
        View Project{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-[0.625rem] w-[0.4375rem]"
        >
          <path
            d="M1 1l4 4-4 4"
            stroke="#E7816B"
            strokeWidth="2"
            fill="none"
            fillRule="evenodd"
          />
        </svg>
      </span>
    </a>
  );
}
