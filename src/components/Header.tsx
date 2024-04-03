import { useState } from "react";
import logo from "../assets/shared/desktop/logo-dark.png";

export default function Header() {
  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);

  return (
    <header className="px-6 pt-8 flex justify-between gap-2">
      <a href="" className="max-w-[12.625rem]">
        <img src={logo} alt="Logo, go to Home" className="max-w-[12.625rem]" />
      </a>
      <button
        type="button"
        className={`block tablet:hidden`}
        onClick={() => setIsMenuVisible((value) => !value)}
      >
        Menu
      </button>
      <nav
        className={`${
          isMenuVisible
            ? "fixed top-24 bg-black text-white w-full -ml-6 text-mobile-link px-6 py-12 grid gap"
            : "hidden"
        } tablet:block tablet:relative tablet:top-0 tablet:bg-[transparent] uppercase tablet:text-dark-gray tablet:tracking-[2px] tablet:text-link tablet:p-0 tablet:w-max tablet:m-0`}
      >
        <ul className="flex flex-col gap-4 tablet:gap-[2.625rem] tablet:flex-row">
          <li>
            <a href="" className="">
              Our Company
            </a>
          </li>
          <li>
            <a href="">Locations</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
