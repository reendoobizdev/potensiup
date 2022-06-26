import React from "react";
import Lottie from "react-lottie-player";
import { content } from "../content/landing";
import lottieJson from '../public/assets/employee.json';
import ButtonPrimary from "./misc/ButtonPrimary";
import FontAwesome from "./misc/FontAwesome";
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
          <a href={content.register} target="_blank">
            <ButtonPrimary>{content.hero.button}</ButtonPrimary>
          </a>
        </div>
      </div>
      <div className="relative w-full flex my-10">
        <div className="rounded-xl w-full bg-white-500 z-10">
          <div className="p-5">
            <div className="text-xl font-medium text-center">
              {content.program.title}
            </div>
            <div className="text-sm mb-14 text-gray-400 text-center">
              Klik icon untuk informasi detail
            </div>
            <div className="md:mx-4 md:px-4 pt-4 pb-10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-center">
                  {
                    content.program.steps.map((step, index) => (
                      <React.Fragment key={step.id}>
                        {
                          index === 0 ? null:
                          <React.Fragment>
                            <div className="flex-auto border-t-2 border-cyan-500 hidden md:block"></div>
                            <div className="flex-auto border-l-2 border-cyan-500 md:hidden h-20 ml-6 md:ml-0"></div>
                          </React.Fragment>
                        }
                        <Popper  id={step.id} title = {step.title} icon={step.icon}>
                          {
                            !step.notes? null : 
                            <div className="text-right mb-3"><em>{step.notes}</em></div>
                          }
                          {
                            Array.isArray(step.content) ? <ul>
                              {
                                step.content.map((cont, idx) =>(
                                  <li key={idx} className="flex items-center"> 
                                    <FontAwesome name="FaChevronRight" className="mr-2 w-2"/>
                                    {cont}
                                  </li>
                                ))
                              }
                            </ul> :
                            <div className="text-center">{step.content}</div>
                          }
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
