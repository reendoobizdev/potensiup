import React from "react";
import Image from "next/image";
import Testimoni from "./Testimoni";
import ButtonPrimary from "./misc/ButtonPrimary";
import ButtonOutline from "./misc/ButtonOutline.";
import Maps from "../public/assets/HugeGlobal.svg";

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
          <p className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center">
            Berikut adalah 2 model paket yang kami tawarkan
          </p>
          <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 md:px-24 gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0">
            <div className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20">
              <p className="text-xl text-black-600 font-medium capitalize my-2 sm:my-7">
                Paket Intensif
              </p>
              <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                <li className="relative circle-close custom-list my-2">
                  Pelatihan skill
                </li>
                <li className="relative circle-check custom-list my-2">
                  Simulasi tes masuk kerja
                </li>
                <li className="relative circle-check custom-list my-2">
                  Tes akhir (sertifikasi)
                </li>
                <li className="relative circle-check custom-list my-2">
                  Penyaluran kerja
                </li>
              </ul>
              <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                <div className="mb-4">
                  <p className="text-2xl text-black-600 text-center">
                    Rp 250.000
                  </p>
                  <p>hanya jika diterima kerja</p>
                </div>
                <ButtonOutline>Pilih</ButtonOutline>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20">
              <p className="text-xl text-black-600 font-medium capitalize my-2 sm:my-7">
                Paket Komplit
              </p>
              <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                <li className="relative circle-check custom-list my-2">
                  Pelatihan skill
                </li>
                <li className="relative circle-check custom-list my-2">
                  Simulasi tes masuk kerja
                </li>
                <li className="relative circle-check custom-list my-2">
                  Tes akhir (sertifikasi)
                </li>
                <li className="relative circle-check custom-list my-2">
                  Penyaluran kerja
                </li>
              </ul>
              <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                <div className="mb-4">
                  <p className="text-2xl text-black-600 text-center">
                    Rp 250.000
                  </p>
                  <p>di awal</p>
                </div>
                <div className="mb-4">
                  <p className="text-2xl text-black-600 text-center">
                    Rp 250.000
                  </p>
                  <p>hanya jika diterima kerja</p>
                </div>
                <ButtonOutline>Pilih</ButtonOutline>
              </div>
            </div>
            
          </div>
        </div>
        
        <div className="flex flex-col w-full my-16" id="testimoni">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal w-9/12 sm: lg:w-4/12 mx-auto">
            Frequently Asked Questions
          </h3>
          <div className="w-full flex flex-col py-12">
            <Testimoni />
          </div>
          <div className="relative w-full mt-16">
            <div className="absolute rounded-xl  py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-white-500">
              <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
                <h5 className="text-black-600 text-xl md:text-2xl leading-relaxed font-medium">
                  Jangan kawatir bayar sia-sia, bayarnya hanya jika diterima kerja
                </h5>
              </div>
              <ButtonPrimary>Yuk Daftar</ButtonPrimary>
            </div>
            <div
              className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-60 sm:h-56 top-0 mt-8 mx-auto left-0 right-0"
              style={{ filter: "blur(114px)" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
