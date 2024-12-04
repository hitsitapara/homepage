import React from "react";
import Container from "./Container";

function Footer() {
  return (
    <footer className="bg-[#043873] text-white">
      <Container classes={"pt-[140px] pb-8"}>
        <div className="flex flex-row space-x-[100px] justify-between">
          <div className="max-w-[170px]">
            <img
              src="./assets/Logo.png"
              alt="White space logo"
              className="w-[191px] h-[34px]"
            />
            <p>
              whitepace was created for the new ways we live and work. We make a
              better workspace around the world
            </p>
          </div>
          <div className="flex flex-col space-y-[7.5px] min-w-[130px]">
            <span className="font-bold text-lg">Product</span>
            <span className="text-base">OverView</span>
            <span className="text-base">Pricing</span>
            <span className="text-base">Customer stories</span>
          </div>
          <div className="flex flex-col space-y-[7.5px] min-w-[130px]">
            <span className="font-bold text-lg">Resources</span>
            <span className="text-base">Blog</span>
            <span className="text-base">Guides & tutorials</span>
            <span className="text-base">Help center</span>
          </div>
          <div className="flex flex-col space-y-[7.5px]">
            <span className="font-bold text-lg">Company</span>
            <span className="text-base">About us</span>
            <span className="text-base">Careers</span>
            <span className="text-base">Media kit</span>
          </div>
          <div className="flex flex-col space-y-[11.5px] max-w-[182px]">
            <h2 className="font-bold text-[28px] leading-[36px]">
              Try It Today
            </h2>
            <p>Get started for free. Add your whole team as your needs grow.</p>
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
        <hr className="mt-[67px] mb-[32px] bg-[#2E4E73]" />
        <div className="text-base flex flex-row justify-between items-center">
          <div className="flex flex-row items-center space-x-[60px]">
            <div className="flex flex-row space-x-2 items-center">
              <img src="./assets/network.png" alt="network" />
              <span>English</span>
              <img
                src="./assets/down-arrow.png"
                alt="down arrow"
                className="w-2 h-2"
              />
            </div>
            <span>Terms & privacy</span>
            <span>Security</span>
            <span>Status</span>
            <span>©2021 Whitepace LLC.</span>
          </div>
          <div className="flex flex-row space-x-[32px] items-center">
            <a href="">
              <img
                src="./assets/facebook.png"
                alt="Facebook icon"
              />
            </a>
            <a href="">
              <img
                src="./assets/Twitter.png"
                alt="Twitter icon"
              />
            </a>
            <a href="">
              <img
                src="./assets/Linkedin.png"
                alt="Linkedin icon"
              />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
