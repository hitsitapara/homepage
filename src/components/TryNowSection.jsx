import React from "react";
import Container from "./Container";

function TryNowSection() {
  return (
    <section className="bg-[#043873] text-white">
      <Container>
        <div className=" flex flex-col lg:items-center lg:justify-between w-full lg:pt-[140px] pt-[100px]">
          <div className="md:w-[608px] flex flex-col lg:items-center lg:justify-center pb-8">
            <h1 className="lg:text-[72px] lg:text-center lg:leading-[87px] text-[52px] leading-[52px]">
              Try Whitepace today
            </h1>
            <p className="text-[24px] lg:text-center mt-6 leading-8">
              Get started for free. <br />
              Add your whole team as your needs grow.
            </p>
            <button className="mt-10 lg:h-[59px] lg:w-[218px] h-[63px] w-[241px] bg-[#4F9CF9] rounded-lg text-lg">
              <div className="flex flex-row items-center justify-center space-x-2.5">
                <span> Try Whitepace free</span>
                <img
                  src="./assets/side-arrow.png"
                  alt="left side arrow"
                  className="w-2.5 h-2.5"
                />
              </div>
            </button>
            <p className="text-[24px] mt-10 leading-8">On a big team? Contact sales</p>
            <div className="flex space-x-10 pt-10">
              <img src="./assets/apple-black-logo.png" alt="apple logo" />
              <img src="./assets/windows-logo.png" alt="window logo" />
              <img src="./assets/android-logo.png" alt="android logo" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default TryNowSection;
