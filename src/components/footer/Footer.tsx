import { footerLinks } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/car-logo.svg";
import "./Footer.css";
const Footer = () => (
  <footer className="footer ">
    {/* <div className="footer-container ">
      <div className="container-tag">
        <Image
          src={Logo}
          alt="logo"
          width={118}
          height={18}
          className="object-contain"
        />
        <p className="text-base text-gray-700">
          Carhub 2023 <br />
          All Rights Reserved &copy;
        </p>
      </div>

      <div className="container-infor">
        {footerLinks.map((item) => (
          <div key={item.title} className="footer__link">
            <h3 className="font-bold">{item.title}</h3>
            <div className="flex flex-col gap-5">
              {item.links.map((link) => (
                <Link
                  key={link.title}
                  href={link.url}
                  className="text-gray-500"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div> */}

    <div className="flex flex-col justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
      <p className="text-white">@2024 Niceboy72fx. All rights reserved</p>
    </div>
  </footer>
);

export default Footer;
