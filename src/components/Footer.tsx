/* A footer placed at the very bottom of every page */
import { Link } from "react-router-dom";

import logo from "../assets/images/donat_logo.svg";

/* Represents an anchor element's properties */
interface Hyperlink {
  text: string;
  url: string;
  target?: string;
}

/* Represents a collumn of links in the footer's body */
interface CollumnProps {
  header: string;
  links: Hyperlink[];
}

const Footer = () => {
  const CONTACTS: Hyperlink[] = [
    { text: "Facebook Page", url: "https://www.facebook.com/OrCaDONAT" },
    { text: "Email", url: "mailto:donat.stiorca@gmail.com" },
    { text: "Dashboard", url: "/Donat/", target: "_self" },
  ];
  const COPYRIGHT: Hyperlink[] = [
    { text: "Website's License", url: "#", target: "_self" },
  ];

  return (
    <footer className="overflow-hidden">
      <div className="bg-txc px-12 py-3 font-bebas text-4xl tracking-widestest text-bgc transition-all duration-300">
        <h1 className="m-0">DONAT</h1>
      </div>
      <div
        className="flex flex-row
                   bg-[url('src/assets/images/footer_img.svg')] bg-cover
                   py-6 pl-3 pr-3
                   font-arial
                   text-4xl text-white no-underline
                   md:pl-24"
      >
        <FooterCollumn header="Contacts" links={CONTACTS} />
        <FooterCollumn header="Copyright" links={COPYRIGHT} />
        <Logo />
      </div>
    </footer>
  );
};

const FooterCollumn = ({ header, links }: CollumnProps) => {
  return (
    <div className="mx-3 basis-2/5">
      <h1 className="pb-4 font-bold">{header}</h1>
      <ul className="p-0 text-2xl !leading-10 no-underline">
        {links.map((link) => (
          <li key={link.text}>
            <Link
              className="relative
                       before:absolute before:bottom-[-2px] before:left-0 before:h-0.5 before:w-0 before:bg-white before:transition-all before:duration-300 before:ease-out before:content-['']
                       hover:before:w-full"
              to={link.url}
              target={link.target || "_blank"}
            >
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Logo = () => {
  return (
    <div className="relative basis-1/5">
      <img src={logo} className="absolute bottom-0 right-0 w-32" />
    </div>
  );
};

export default Footer;
