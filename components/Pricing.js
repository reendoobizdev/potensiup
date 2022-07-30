import React from "react";
import Image from "next/image";
import Testimoni from "./Testimoni";
import ButtonPrimary from "./misc/ButtonPrimary";
import ButtonOutline from "./misc/ButtonOutline.";
import Maps from "../public/assets/HugeGlobal.svg";
import { content } from "../content/landing";

const Pricing = () => {
  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
      id="pricing"
    >
      <div className="max-w-screen-xl sm:px-8 md:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed">
            Pilih Paketmu
          </h3>
          <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 md:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0">
            {
              content.pricing.map((price, id)=>(
                <div key={id} className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20">
                  <div className="my-2 md:my-5">
                    <p className="text-xl text-black-600 font-medium capitalize">
                      {price.title}
                    </p>
                    <p className="text-center"><em>{price.condition} &nbsp;</em></p>
                  </div>
                  
                  <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                    {
                      price.features.map((f, idx)=>(
                        <li key={idx} className={`relative ${f.active? "circle-check" : "circle-close" } custom-list my-2`}>
                        {f.name}
                        </li>
                      ))
                    }
                  </ul>
                  <div className="flex flex-col w-full justify-center mb-8 mt-12">
                    {
                      !price.priceBefore? null:
                      <div className="mb-4">
                        <p className="text-2xl text-black-600 text-center">
                          {price.priceBefore}
                        </p>
                        {
                          !price.priceConditionBefore? null:
                          <p>{price.priceConditionBefore}</p>
                        }
                      </div>
                    }
                    {
                      !price.priceAfter? null:
                      <div className="mb-4">
                        <p className="text-2xl text-black-600 text-center">
                          {price.priceAfter}
                        </p>
                        {
                          !price.priceConditionAfter? null:
                          <p>{price.priceConditionAfter}</p>
                        }
                      </div>
                    }
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        <div className="rounded-xl  py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-cyan-500 text-white-300">
          <div className="w-full text-xl md:text-3xl leading-relaxed font-medium text-center">
            Jaminan Uang Kembali*
          </div>
        </div>
        <div className="flex flex-col w-full" id="testimoni">
          {/* <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal w-9/12 sm: lg:w-4/12 mx-auto">
            Frequently Asked Questions
          </h3> */}
          {/* <div className="w-full flex flex-col py-12">
             <Testimoni />
          </div> */}
          <div className="relative w-full mt-5">
            <div className="rounded-xl  py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-white-500">
              <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
                <h5 className="text-black-600 text-xl md:text-2xl leading-relaxed font-medium">
                  Akselerasi potensimu, siap kerja dalam 4 bulan
                </h5>
              </div>
              <a target="_blank" href={content.register}>
                <ButtonPrimary>Yuk Daftar</ButtonPrimary>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
