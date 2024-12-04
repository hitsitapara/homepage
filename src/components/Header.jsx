import React from "react";
import Container from "./Container";

function Header() {
  const MENU = ["Product", "Solutions", "Resources", "Pricing"];
  return (
    <Container classes="bg-[#043873]">
      <nav className=" min-w-full h-[92px] py-4 flex justify-between items-center">
        <img
          src="/assets/Logo.png"
          alt="White space logo"
          className="md:w-[191px] md:h-[34px] w-[134px] h-6"
        />
        <div className="flex items-center">
          <div className="hidden xl:flex flex-row space-x-8">
            {MENU.map((menu) => (
              <div key={menu} className="flex space-x-5 items-center">
                <span className="text-white text-lg">{menu}</span>
                <img
                  src="/assets/down-arrow.png"
                  alt="drop down arrow"
                  className="w-[9px] h-[4px]"
                />
              </div>
            ))}
          </div>
          <div className="pl-[60px] flex flex-row items-center space-x-6">
            <button className="hidden lg:block h-[60px] w-[126px] bg-[#FFE492] rounded-lg text-[#043873] text-lg">
              Login
            </button>
            <button className="hidden lg:block h-[60px] w-[227px] bg-[#4F9CF9] rounded-lg text-white text-lg">
              <div className="flex flex-row items-center justify-center space-x-2.5">
                <span> Try Whitepace free</span>
                <img
                  src="/assets/side-arrow.png"
                  alt="left side arrow"
                  className="w-2.5 h-2.5"
                />
              </div>
            </button>
            <button className="xl:hidden block">
              <img
                src="/assets/hum-menu.png"
                alt="menu icon"
                className="w-[42px] h-6"
              />
            </button>
          </div>
        </div>
      </nav>
    </Container>
  );
}

export default Header;
