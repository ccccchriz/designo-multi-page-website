import passionateImage from "../assets/home/desktop/illustration-passionate.svg";
import friendlyImage from "../assets/home/desktop/illustration-friendly.svg";
import resourcefulImage from "../assets/home/desktop/illustration-resourceful.svg";

const types = {
  passionate: {
    image: passionateImage,
    title: "Passionate",
    paragraph:
      "Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.",
  },
  resourceful: {
    image: resourcefulImage,
    title: "Resourceful",
    paragraph:
      "Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.",
  },
  friendly: {
    image: friendlyImage,
    title: "Friendly",
    paragraph:
      " We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.",
  },
};

type SkillCardProps = {
  type: "passionate" | "resourceful" | "friendly";
};

export default function SkillCard({ type }: SkillCardProps) {
  return (
    <div className="grid place-items-center text-center gap-8 text-dark-gray tablet:grid-cols-[auto_1fr] tablet:text-left tablet:gap-y-4 tablet:gap-x-12 desktop:grid-cols-1 desktop:place-items-center desktop:text-center">
      <img src={types[type].image} alt="" className="tablet:row-[1/3]" />
      <h3 className="text-mobile-heading-s uppercase tracking-[0.3125rem] font-medium tablet:justify-self-start tablet:self-end desktop:place-self-center">
        {types[type].title}
      </h3>
      <p className="tablet:self-start">{types[type].paragraph}</p>
    </div>
  );
}
