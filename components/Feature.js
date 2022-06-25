
import codingJson from '../public/assets/coding.json';
import designJson from '../public/assets/design.json';
import React from "react";
import Lottie from "react-lottie-player";
import ButtonPrimary from './misc/ButtonPrimary';
import { content } from '../content/landing';

const Feature = () => {
  return (
    <div
      className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="feature"
    >
      <h3 className="text-center text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">
        Bidang Kerja
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="px-16">
          <Lottie loop play
            animationData={codingJson}
            className="w-full"
          />
        </div>
        <div className="flex flex-col md:py-12 px-16 md:px-24 justify-center">
          <div className="text-2xl text-center my-3">
            Web Developer
          </div>
          <a target="_blank" href={content.register}>
            <ButtonPrimary>Daftar sebagai web developer</ButtonPrimary>
          </a>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-8 md:mt-0">
        <div className="px-16 md:hidden">
          <Lottie loop play
            animationData={designJson}
            className="w-full"
          />
        </div>
        <div className="flex flex-col md:py-12 px-16 md:px-24 justify-center">
          <div className="text-2xl text-center my-3">
            Product Designer
          </div>
          <ButtonPrimary addClass="bg-gray-100" disabled>Coming Soon</ButtonPrimary>
        </div>
        <div className="px-16 hidden md:block">
          <Lottie loop play
            animationData={designJson}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Feature;
