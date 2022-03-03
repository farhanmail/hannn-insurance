import { useState } from "react";
import NextLink from "next/link";
import { FaTimes } from "react-icons/fa";
import { AiFillDashboard } from "react-icons/ai";
import { MdListAlt } from "react-icons/md";
import { BsGearWideConnected } from "react-icons/bs";
export default function Sidebar() {
  const [sidebar, setSidebar] = useState(true);
  const handleSidebar = () => {
    setSidebar(!sidebar);
  };
  return (
    <>
      <div>
        {sidebar ? (
          <div className="sidebar duration-300 trantition-right">
            <div className={"sidebar-close"} onClick={handleSidebar}>
              <div className="rounded-full">
                <FaTimes />
              </div>
            </div>
            <div>
              <NextLink href="/">
                <div className="sidebar-menu" style={{ marginTop: "63px" }}>
                  <div style={{ paddingBottom: "10px" }}>
                    <AiFillDashboard style={{ marginRight: "5px" }} />
                    <span>Dashboard</span>
                  </div>
                </div>
              </NextLink>
              <NextLink href="/katalogList">
                <div className="sidebar-menu">
                  <div style={{ paddingBottom: "10px" }}>
                    <MdListAlt style={{ marginRight: "5px" }} />
                    <span>Catalog List</span>
                  </div>
                </div>
              </NextLink>
              <NextLink href="/manageInsurance">
                <div className="sidebar-menu">
                  <div style={{ paddingBottom: "10px" }}>
                    <BsGearWideConnected style={{ marginRight: "5px" }} />
                    <span>Manage Insurance</span>
                  </div>
                </div>
              </NextLink>
            </div>
          </div>
        ) : (
          <span></span>
        )}
      </div>
    </>
  );
}
