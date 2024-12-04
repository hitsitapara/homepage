import React from "react";
import Container from "./Container";
import "./banner.css";

function Banner() {
  return (
    <section className="2xl:h-[829px] xl:h-[656px] lg:h-[641px] h-[1051px] bg-[#043873] items-center flex w-full ">
      <div className="banner-background-image">
        <Container classes="2xl:h-[547px] xl:h-[433px] lg:h-[422px] flex flex-col lg:flex-row items-center">
          <div className="lg:w-[656px] w-full">
            <h1 className="text-white text-[64px] leading-[77px]">
              Get More Done with whitepace
            </h1>
            <p className="text-white text-lg pt-6">
              Project management software that enables your teams to
              collaborate, plan, analyze and manage everyday tasks
            </p>
            <button className="mt-10 h-[63px] w-[219px] bg-[#4F9CF9] rounded-lg text-white text-lg">
              <div className="flex flex-row items-center justify-center space-x-2.5">
                <span> Try Whitepace free</span>
                <img
                  src="/assets/side-arrow.png"
                  alt="left side arrow"
                  className="w-2.5 h-2.5"
                />
              </div>
            </button>
          </div>
          <img src="/assets/Image-container.png" alt="banner" className="2xl:h-[549px] xl:h-[456px] lg:h-[350px] h-[367px]" />
        </Container>
      </div>
    </section>
  );
}

export default Banner;
