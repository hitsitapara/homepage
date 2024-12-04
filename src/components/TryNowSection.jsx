import React from "react";
import Container from "./Container";

function TryNowSection() {
  return (
    <section className="bg-[#043873]">
      <Container>
        <div className=" flex flex-col items-center justify-between w-full pt-[140px]">
          <div className="w-[608px] flex flex-col items-center justify-center pb-8">
            <h1 className="text-white text-[72px] text-center leading-[87px]">
              Try Whitepace today
            </h1>
            <p className="text-white text-[24px] text-center pt-6">
              Get started for free. <br />
              Add your whole team as your needs grow.
            </p>
            <button className="mt-10 h-[59px] w-[218px] bg-[#4F9CF9] rounded-lg text-white text-lg">
              <div className="flex flex-row items-center justify-center space-x-2.5">
                <span> Try Whitepace free</span>
                <img
                  src="/assets/side-arrow.png"
                  alt="left side arrow"
                  className="w-2.5 h-2.5"
                />
              </div>
            </button>
            <p className="text-[24px] text-white mt-10">On a big team? Contact sales</p>
            <div className="flex space-x-10 pt-10">
                <img src="/assets/apple-black-logo.png" alt="apple logo" />
                <img src="/assets/windows-logo.png" alt="window logo" />
                <img src="/assets/android-logo.png" alt="android logo" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default TryNowSection;
