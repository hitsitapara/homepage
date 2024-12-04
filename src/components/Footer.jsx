import React from "react";
import Container from "./Container";

function Footer() {
  return (
    <footer className="bg-[#043873] text-white">
      <Container classes={"lg:pt-[140px] pt-[80px] pb-8"}>
        <div className="grid lg:grid-cols-5 grid-col-1 xl:gap-[100px] gap-[45px] justify-between">
          <div className="flex flex-col space-y-[7.5px] items-center md:items-start">
            <img
              src="./assets/Logo.png"
              alt="White space logo"
              className="w-[191px] h-[34px]"
            />
            <p className="text-lg leading-[30px] text-center md:text-left">
              whitepace was created for the new ways we live and work.
              <br /> We make a better workspace around the world
            </p>
          </div>
          <div className="flex flex-col space-y-[7.5px] items-center md:items-start">
            <span className="font-bold text-lg">Product</span>
            <span className="text-base">OverView</span>
            <span className="text-base">Pricing</span>
            <span className="text-base">Customer stories</span>
          </div>
          <div className="flex flex-col space-y-[7.5px] items-center md:items-start">
            <span className="font-bold text-lg">Resources</span>
            <span className="text-base">Blog</span>
            <span className="text-base">Guides & tutorials</span>
            <span className="text-base">Help center</span>
          </div>
          <div className="flex flex-col space-y-[7.5px] items-center md:items-start">
            <span className="font-bold text-lg">Company</span>
            <span className="text-base">About us</span>
            <span className="text-base">Careers</span>
            <span className="text-base">Media kit</span>
          </div>
          <div className="flex flex-col space-y-[11.5px] md:items-start items-center px-[43px] md:px-0">
            <h2 className="font-bold text-[28px] leading-[36px]">
              Try It Today
            </h2>
            <p className="text-center md:text-left text-base leading-[30px]">Get started for free. Add your whole team as your needs grow.</p>
            <button className="mt-10 h-[60px] w-[168px] bg-[#4F9CF9] rounded-lg text-white text-lg">
              <div className="flex flex-row items-center justify-center space-x-2.5">
                <span>Start today</span>
                <img
                  src="./assets/side-arrow.png"
                  alt="left side arrow"
                  className="w-2.5 h-2.5"
                />
              </div>
            </button>
          </div>
        </div>
        <hr className="mt-[67px] mb-[32px] bg-[#2E4E73] lg:block hidden" />
        <div className="text-base flex lg:flex-row flex-col lg:justify-between lg:items-center">
          <div className="flex md:flex-row flex-col items-center md:space-x-[60px] lg:pt-0 md:pt-[100px] pt-[80px]">
            <div className="flex flex-row space-x-2 items-center">
              <img
                src="./assets/network.png"
                alt="network"
                className="h-4 w-4"
              />
              <a href="">English</a>
              <img
                src="./assets/down-arrow.png"
                alt="down arrow"
                className="w-2 h-2"
              />
            </div>
            <a href="">Terms & privacy</a>
            <a href="">Security</a>
            <a href="">Status</a>
            <span>©2021 Whitepace LLC.</span>
          </div>
          <hr className="my-[20px] bg-[#2E4E73] lg:hidden block" />
          <div className="flex flex-row space-x-[32px] items-center justify-center md:justify-start">
            <a href="">
              <img
                src="./assets/facebook.png"
                alt="Facebook icon"
                className="w-4 h-4"
              />
            </a>
            <a href="">
              <img
                src="./assets/Twitter.png"
                alt="Twitter icon"
                className="w-4 h-4"
              />
            </a>
            <a href="">
              <img
                src="./assets/Linkedin.png"
                alt="Linkedin icon"
                className="h-4 w-4"
              />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
