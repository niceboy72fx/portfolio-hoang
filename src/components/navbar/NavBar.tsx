import Link from "next/link";
import Image from "next/image";
import "./NavBar.css";
import Logo from "../../public/car-logo.svg";
import { CustomButton } from "..";
const Navbar = () => (
  <header className="header">
    <nav className="header-nav">
      <Link href="/" className="nav-banner">
        <Image
          src={Logo}
          alt="logo"
          width={100}
          height={18}
          className="item-image"
        />
      </Link>
      <CustomButton
        title="Sign in"
        btnType="button"
        containerStyles="nav-button"
      />
    </nav>
  </header>
);

export default Navbar;
