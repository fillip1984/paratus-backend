"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import { use, useState } from "react";
import { BsChevronDoubleLeft } from "react-icons/bs";
import { FaListCheck } from "react-icons/fa6";
import { getServerAuthSession } from "~/server/auth";

export default function SideNav() {
  const [isMenuCollapsed, setIsMenuCollapsed] = useState(true);
  const { data: sessionData } = useSession();

  return (
    <nav
      className={`flex h-full w-1/3 max-w-[300px] flex-shrink-0 flex-col overflow-hidden bg-primary transition-all duration-200 ease-in-out ${isMenuCollapsed ? "w-16" : ""}`}>
      {!isMenuCollapsed && <h3>Paratus</h3>}
      <div id="menu-items" className="flex flex-1 flex-col items-center py-4">
        <div id="main-menu-items" className="flex flex-1 flex-col px-1">
          <Link href="/" className="w-full rounded bg-white/30 p-2">
            <FaListCheck className="text-4xl text-white" />
          </Link>
        </div>
        <div id="menu-bottom-items">
          {/* <div
            id="avatar-button"
            className="cursor-pointer"
            // onClick={handleAvatarMenuToggle}
          >
            {sessionData?.user.image && (
              <div className="relative">
                <Image
                  src={sessionData?.user.image}
                  width={200}
                  height={200}
                  alt="User profile image"
                  className="h-14 w-14 rounded-full"
                />
                <div
                  id="avatar-menu"
                  className={`absolute right-0 top-16 z-[999] w-44 rounded bg-white/90 backdrop-blur transition duration-300 ease-in-out ${
                    avatarMenuOpen ? "" : "hidden"
                  }`}>
                  <div className="flex flex-col rounded bg-primary p-2">
                    {menuItems.map((menuItem) => (
                      <button
                        type="button"
                        key={menuItem.label}
                        onClick={menuItem.action}
                        className="flex items-center gap-2 rounded p-2 hover:bg-black/10">
                        {menuItem.icon}
                        {menuItem.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div> */}
          <button
            type="button"
            onClick={() => setIsMenuCollapsed((prev) => !prev)}>
            <BsChevronDoubleLeft
              className={`cursor-pointer text-4xl text-white transition duration-300 ease-in-out ${isMenuCollapsed ? "rotate-180" : ""}`}
            />
          </button>
        </div>
      </div>
    </nav>
  );
}
