import LinkCard from "../components/LinkCard";

type Data = {
  title: string;
  paragraph: string;
  links: ("web" | "graphic" | "app")[];
  projects: {
    title: string;
    description: string;
    image: string;
  }[];
};

type Types = {
  web: Data;
};

const types: Types = {
  web: {
    title: "Web Design",
    paragraph:
      "We build websites that serve as powerful marketing tools and bring memorable brand experiences.",
    links: ["app", "graphic"],
    projects: [
      {
        title: "Express",
        description:
          "A multi-carrier shipping website for ecommerce businesses",
        image: "/images/projects/web/image-express.jpg",
      },
      {
        title: "Transfer",
        description:
          "Site for low-cost money transfers and sending money within seconds",
        image: "/images/projects/web/image-transfer.jpg",
      },
      {
        title: "Photon",
        description:
          "A state-of-the-art music player with high-resolution audio and DSP effects",
        image: "/images/projects/web/image-photon.jpg",
      },
      {
        title: "Builder",
        description:
          "Connects users with local contractors based on their location",
        image: "/images/projects/web/image-builder.jpg",
      },
      {
        title: "Blogr",
        description:
          "Blogr is a platform for creating an online blog or publication",
        image: "/images/projects/web/image-blogr.jpg",
      },
      {
        title: "Camp",
        description:
          "Get expert training in coding, data, design, and digital marketing",
        image: "/images/projects/web/image-camp.jpg",
      },
    ],
  },
};

type ProjectsProps = {
  type: "web";
};

export default function Projects({ type }: ProjectsProps) {
  return (
    <div className="grid gap-24 pb-24">
      <div className="bg-peach text-white py-24 px-6 text-center place-items-center grid gap-6 tablet:rounded-2xl tablet:mx-6">
        <h2 className="font-medium text-mobile-heading-l tablet:text-heading-l">
          {types[type].title}
        </h2>
        <p className="text-body-sm max-w-[25rem]">{types[type].paragraph}</p>
      </div>
      <ul className="px-6 grid gap-10 desktop:grid-cols-3">
        {types[type].projects.map((el) => (
          <li
            key={el.title}
            className="bg-light-peach bg-opacity-20 rounded-2xl overflow-hidden grid tablet:grid-cols-[21.875rem_1fr] desktop:grid-cols-1"
          >
            <img src={el.image} alt="" />
            <a href="" className="p-8 grid gap-4 text-center">
              <h3 className="font-medium text-mobile-heading-s text-peach uppercase tracking-[0.3125rem] tablet:self-end">
                {el.title}
              </h3>
              <p className="text-dark-gray">{el.description}</p>
            </a>
          </li>
        ))}
      </ul>
      <div className="px-6 grid gap-6 desktop:grid-cols-2">
        {types[type].links.map((el) => (
          <LinkCard key={el} type={el} />
        ))}
      </div>
    </div>
  );
}
