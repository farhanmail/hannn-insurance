import { useState } from "react";
import Image from "next/image";
import Logo from "../assets/img/HI.png";
import NextLink from "next/link";
import { FaBars } from "react-icons/fa";
import Sidebar from "./sidebar";
export default function Header() {
  const [sidebar, setSidebar] = useState(false);
  const handleSidebar = () => {
    setSidebar(!sidebar);
  };
  return (
    <>
      <div className="header-bg">
        <div className="container">
          <NextLink href="/" className="logo">
            <Image src={Logo} />
          </NextLink>
        </div>
        <div className="sidebar-open" onClick={handleSidebar}>
          <div className="rounded-full transition">
            <FaBars />
          </div>
        </div>
      </div>
      <div>
        <div
          className={sidebar ? "sidebar-overlay" : "hidden opacity-0"}
          onClick={handleSidebar}
        ></div>
        {sidebar ? (
          <div>
            <Sidebar />
          </div>
        ) : (
          <span></span>
        )}
      </div>
    </>
  );
}
