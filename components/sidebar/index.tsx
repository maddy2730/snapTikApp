import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
  const [selectedItem, setSelectedItem] = useState("overview");

  const selectedItemClass = "bg-slate-200/50 text-black";
  const itemClass = "p-4 text-[#5f6368] cursor-pointer";

  return (
    <div
      className="h-screen fixed left-0 w-full top-0 invisible transition-all -translate-x-full"
      id="sidebar"
    >
      {/* Overlay to close the sidebar */}
      <div
        className="h-full w-full bg-black/25"
        onClick={() =>
          document
            .getElementById("sidebar")
            ?.classList.remove("!visible", "translate-x-0")
        }
      />
      
      {/* Sidebar content */}
      <div className="max-w-72 w-72 bg-white flex flex-col absolute h-full top-0 left-0">
        {/* Header section with logo */}
        <div className="flex flex-row items-center px-4 py-4 border-b-[1px] border-slate-200">
          <div className="w-20 h-auto">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
              width={80} // Setting width to 80px
              height={24} // Adjust height proportionally
              alt="google"
            />
          </div>
          <Link href="/" className="text-lg text-slate-500 ml-2">
            Account
          </Link>
        </div>

        {/* Menu items */}
        <div className="text-sm py-4 flex-1 border-b-[1px] border-slate-200">
          <p
            className={`${itemClass} ${
              selectedItem === "overview" ? selectedItemClass : ""
            }`}
            onClick={() => setSelectedItem("overview")}
          >
            Overview
          </p>
          <p
            className={`${itemClass} ${
              selectedItem === "tools" ? selectedItemClass : ""
            }`}
            onClick={() => setSelectedItem("tools")}
          >
            Privacy Tools
          </p>
        </div>

        {/* Footer buttons */}
        <div className="flex flex-col text-sm gap-3 px-4 pt-2 pb-6">
          <button className="text-blue-500">Create an Account</button>
          <button className="bg-blue-500 py-3 px-5 rounded text-white hover:bg-blue-700">
            Go To Google Account
          </button>
        </div>
      </div>
    </div>
  );
}