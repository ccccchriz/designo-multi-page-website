import logo from "../assets/shared/desktop/logo-light.png";

export default function Footer() {
  return (
    <footer className="bg-black px-6 py-16 grid items-center justify-items-center gap-8">
      <div className=" pb-8 border-b border-b-light-gray w-full flex justify-center">
        <img src={logo} alt="logo" className="max-w-[12.625rem]" />
      </div>
      <ul className="flex flex-col gap-4 tablet:gap-[2.625rem] tablet:flex-row text-link text-center text-white uppercase tracking-[2px]">
        <li>
          <a href="">Our Company</a>
        </li>
        <li>
          <a href="">Locations</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>
    </footer>
  );
}
