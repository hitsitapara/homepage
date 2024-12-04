import React from "react";
import Container from "./Container";

function PlanSection() {
  const PLAN_DESCRIPTION = [
    "Sync unlimited devices",
    "10 GB monthly uploads",
    "200 MB max. note size",
    "Customize Home dashboard and access extra widgets",
    "Connect primary Google Calendar account",
    "Add due dates, reminders, and notifications to your tasks",
  ];
  return (
    <section>
      <Container classes='py-[140px]'>
        <div className="px-[250px]">
          <h1 className="text-[72px] text-center">Choose Your Plan</h1>
          <p className="text-lg text-center leading-[30px]">
            Whether you want to get organized, keep your personal life on track,
            or boost workplace productivity, Evernote has the right plan for
            you.
          </p>
        </div>
        <div className="flex flex-row items-center justify-between pt-[60px]">
          <div className="py-[40px] px-[44px] h-[634px] w-[472px] border border-[#FFE492] rounded-[10px] space-y-[13px]">
            <div className="flex flex-col space-y-[13px] h-[153px]">
              <span className="text-[24px]">Free</span>
              <span className="text-[26px] font-bold">$0</span>
              <span className="text-lg">
                Capture ideas and find them quickly
              </span>
            </div>
            <div className="flex flex-col space-y-[14px] h-[300px]">
              {PLAN_DESCRIPTION.map((description) => (
                <div
                  className="flex flex-row space-x-[19px] items-center"
                  key={description}
                >
                  <img
                    src="/assets/Icon.png"
                    alt="tick icon"
                    className="w-[18px] h-[18px]"
                  />
                  <span className="text-base">{description}</span>
                </div>
              ))}
            </div>
            <button className="border rounded-lg border-[#FFE492] h-[51px] w-[168px] text-base">
              Get Started
            </button>
          </div>
          <div className="py-[80px] px-[44px] h-[761px] w-[472px] bg-[#043873] rounded-[10px] space-y-[13px] flex flex-col justify-start">
            <div className="flex flex-col space-y-[13px] h-[153px]">
              <span className="text-[24px] text-white">Personal</span>
              <span className="text-[26px] font-bold text-[#FFE492]">
                $11.99
              </span>
              <span className="text-lg text-white">
                Keep home and family on track
              </span>
            </div>
            <div className="flex flex-col space-y-[18px] text-white">
              {PLAN_DESCRIPTION.map((description) => (
                <div
                  className="flex flex-row space-x-[10px] items-center"
                  key={description}
                >
                  <img
                    src="/assets/golden-icon.png"
                    alt="tick icon"
                    className="w-[18px] h-[18px]"
                  />
                  <span className="text-lg">{description}</span>
                </div>
              ))}
            </div>
            <button className="rounded-lg bg-[#4F9CF9] h-[51px] w-[168px] text-base text-white">
              Get Started
            </button>
          </div>
          <div className="py-[40px] px-[44px] h-[634px] w-[472px] border border-[#FFE492] rounded-[10px] space-y-[13px]">
            <div className="flex flex-col space-y-[13px] h-[153px]">
              <span className="text-[24px]">Organization</span>
              <span className="text-[26px] font-bold">$49.99</span>
              <span className="text-lg">
                Capture ideas and find them quickly
              </span>
            </div>
            <div className="flex flex-col space-y-[14px] h-[300px]">
              {PLAN_DESCRIPTION.map((description) => (
                <div
                  className="flex flex-row space-x-[19px] items-center"
                  key={description}
                >
                  <img
                    src="/assets/Icon.png"
                    alt="tick icon"
                    className="w-[18px] h-[18px]"
                  />
                  <span className="text-base">{description}</span>
                </div>
              ))}
            </div>
            <button className="border rounded-lg border-[#FFE492] h-[51px] w-[168px] text-base">
              Get Started
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default PlanSection;
