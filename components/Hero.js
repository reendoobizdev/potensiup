import React from "react";
import Lottie from "react-lottie-player";
import { content } from "../content/landing";
import lottieJson from '../public/assets/employee.json';
import ButtonPrimary from "./misc/ButtonPrimary";
import { Popper } from "./misc/Popper";
const Hero = () => {
  return (
    <div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto" id="about">
      <div className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8">
        <div className="flex w-full">
          <div className="h-full w-full">
            <Lottie
              loop
              animationData={lottieJson}
              play
              className="w-full"
            />
          </div>
        </div>
        <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">
            {content.hero.title} <strong>{content.hero.titleBrand}</strong>
          </h1>
          <p className="text-black-500 mt-4 mb-6">
            {content.hero.subtitle}
          </p>
          <ButtonPrimary>{content.hero.button}</ButtonPrimary>
        </div>
      </div>
      <div className="relative w-full flex my-10">
        <div className="rounded-xl w-full bg-white-500 z-10">
          <div className="p-5">
            <div className="text-xl mb-16 font-medium text-center">
              {content.program.title}
            </div>
            <div className="mx-4 px-4 pt-4 pb-10">
                <div className="flex items-center justify-center">
                  {
                    content.program.steps.map((step, index) => (
                      <React.Fragment key={step.id}>
                        {
                          index === 0 ? null:<div className="flex-auto border-t-2 border-cyan-500"></div>
                        }
                        <Popper  id={step.id} title = {step.title} icon={step.icon}>
                          {
                            !step.notes? null : 
                            <div className="text-right mb-3"><em>{step.notes}</em></div>
                          }
                          <div className="text-center">{step.content}</div>
                          {
                            !step.time? null:
                            <div className="font-bold text-center mt-4">Waktu: {step.time}</div>
                          }
                        </Popper>
                      </React.Fragment>
                    ))
                  }
                </div>
            </div>
          </div>
        </div>
        <div
          className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
          style={{ filter: "blur(114px)" }}
        ></div>
      </div>
    </div>
  );
};

export default Hero;
