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
    <>
      <div className="">
        <h2>{types[type].title}</h2>
        <p>{types[type].paragraph}</p>
      </div>
      <ul>
        {types[type].projects.map((el) => (
          <li>
            <img src={el.image} alt="" />
            <a href="">
              <h3>{el.title}</h3>
              <p>{el.description}</p>
            </a>
          </li>
        ))}
      </ul>
      <div className="">
        {types[type].links.map((el) => (
          <LinkCard type={el} />
        ))}
      </div>
    </>
  );
}
