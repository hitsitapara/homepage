import React from "react";
import Container from "./Container";
import { Carousel } from "antd";
import './plan-section.css'

const PLAN_DESCRIPTION = [
  "Sync unlimited devices",
  "10 GB monthly uploads",
  "200 MB max. note size",
  "Customize Home dashboard and access extra widgets",
  "Connect primary Google Calendar account",
  "Add due dates, reminders, and notifications to your tasks",
];

const BluePlanCard = ({ price, subtitle, title }) => {
  return (
    <div className="py-[20px] px-[20px] md:py-[80px] md:px-[44px] bg-[#043873] rounded-[10px] space-y-[25px] flex flex-col justify-center 2xl:h-[761px] 2xl:w-[472px]  xl:h-[761px] xl:w-[437px] lg:h-[853px] lg:w-[341px] md:h-[711px] md:w-[472px] w-[289px] h-[642px]">
      <div className="flex flex-col space-y-[25px]">
        <span className="text-[24px] text-white">{title}</span>
        <span className="text-[26px] font-bold text-[#FFE492]">{price}</span>
        <span className="text-lg text-white">{subtitle}</span>
      </div>
      <div className="flex flex-col space-y-[25px] text-white">
        {PLAN_DESCRIPTION.map((description) => (
          <div
            className="flex flex-row space-x-[10px] items-center"
            key={description}
          >
            <img
              src="./assets/golden-icon.png"
              alt="tick icon"
              className="w-[18px] h-[18px]"
            />
            <span className="text-lg leading-[20px] md:leading-[23px]">{description}</span>
          </div>
        ))}
      </div>
      <button className="rounded-lg bg-[#4F9CF9] h-[51px] w-[168px] text-base text-white">
        Get Started
      </button>
    </div>
  );
};

const WhitePlanCard = ({ price, subtitle, title }) => {
  return (
    <div className="py-[20px] px-[20px] md:py-[40px] md:px-[44px] border border-[#FFE492] rounded-[10px] space-y-[25px] flex flex-col justify-center 2xl:h-[634px] 2xl:w-[472px] xl:h-[654px] xl:w-[437px] lg:w-[341px] lg:h-[697px] md:h-[631px] md:w-[472px] w-[289px] h-[642px]">
      <div className="flex flex-col space-y-[25px]">
        <span className="text-[24px]">{title}</span>
        <span className="text-[26px] font-bold">{price}</span>
        <span className="text-lg">{subtitle}</span>
      </div>
      <div className="flex flex-col space-y-[25px]">
        {PLAN_DESCRIPTION.map((description) => (
          <div
            className="flex flex-row space-x-[19px] items-center"
            key={description}
          >
            <img
              src="./assets/Icon.png"
              alt="tick icon"
              className="w-[18px] h-[18px]"
            />
            <span className="text-base leading-[20px] md:leading-[23px]">{description}</span>
          </div>
        ))}
      </div>
      <button className="border rounded-lg border-[#FFE492] h-[51px] w-[168px] text-base">
        Get Started
      </button>
    </div>
  );
};

function PlanSection() {
  return (
    <section>
      <Container classes="py-[140px]">
        <div className="2xl:px-[250px] xl:px-[198px] md:px-[54px] px-4">
          <h1 className="xl:text-[72px] lg:text-[64px] md:text-[54px] text-[36px] text-center lg:leading-[87px] md:leading-[65px] leading-[43px]">
            Choose Your Plan
          </h1>
          <p className="text-lg text-center leading-[30px]">
            Whether you want to get organized, keep your personal life on track,
            or boost workplace productivity, Evernote has the right plan for
            you.
          </p>
        </div>
        <div className="hidden lg:flex flex-row items-center justify-between pt-[60px]">
          <WhitePlanCard
            price="$0"
            title="Free"
            subtitle="Capture ideas and find them quickly"
          />
          <BluePlanCard
            price="$11.99"
            title="Personal"
            subtitle="Keep home and family on track"
          />
          <WhitePlanCard
            price="$49.99"
            title="Organization"
            subtitle="Capture ideas and find them quickly"
          />
        </div>
        <div className="mt-[60px] lg:hidden block">
        <Carousel infinite={false} draggable dots='rounded-full bg-[#4F9CF9]'>
            <WhitePlanCard
              price="$0"
              title="Free"
              subtitle="Capture ideas and find them quickly"
            />
          <div className="">
            <BluePlanCard
              price="$11.99"
              title="Personal"
              subtitle="Keep home and family on track"
            />
          </div>
          <div>
            <WhitePlanCard
              price="$49.99"
              title="Organization"
              subtitle="Capture ideas and find them quickly"
            />
          </div>
        </Carousel>
        </div>

      </Container>
    </section>
  );
}

export default PlanSection;
