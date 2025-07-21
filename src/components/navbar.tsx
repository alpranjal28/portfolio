import Link from "next/link";
import NavLink from "./navLink";
import { Github, Linkedin } from "./icons";
import { CopyEmail } from "./copyEmail";
import { NavbarMobile } from "./navbarMobile";

export const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl select-none">
      {/* //////////DESKTOP///////// */}

      {/* LINKS */}
      <div className="hidden md:flex gap-4 w-1/3">
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>

      {/* LOGO */}
      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
        <Link
          href="/"
          className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center"
        >
          <span className="text-white mr-1">Pranjal</span>
          <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">
            Lakra
          </span>
        </Link>
      </div>

      {/* SOCIAL */}
      <div className="hidden md:flex justify-end gap-4 w-1/3 items-center container">
        <Link href={"https://github.com/alpranjal28"} target="_blank">
          <Github color="white" />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/pranjal-altherius-lakra/"}
          target="_blank"
        >
          <Linkedin color="white" />
        </Link>
        <CopyEmail />
      </div>

      {/* //////////MOBILE///////// */}
      {/* RESPONSIVE MENU */}
      <NavbarMobile />
    </div>
  );
};
export default Navbar;
