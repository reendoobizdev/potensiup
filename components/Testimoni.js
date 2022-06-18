import React, { useState } from "react";

// import react slick
import Slider from "react-slick";
import Image from "next/image";
import Stars from "../public/assets/Icon/stars.svg";
import ArrowBack from "../public/assets/Icon/eva_arrow-back-fill.svg";
import ArrowNext from "../public/assets/Icon/eva_arrow-next-fill.svg";

const Testimoni = ({
  contentList = [
    {
      q: "Berapa biaya yang harus dibayar untuk mulai kursus?",
      a: "Rp 250.000 jika hendak mengikuti program pelatihan skill",
    },
    {
      q: "Kapan harus bayar biaya pelatihan?",
      a: "Bayar di depan sebelum pelatihan dimulai",
    },
    {
      q: "Bagaimana jika saya tidak punya uang sama sekali?",
      a: "Belajar sendiri, lalu bisa langsung ikut tes sertifikasi. Jika lolos, bisa langsung dibantu dicarikan pekerjaan. Jika diterima, baru bayar Rp 250.000",
    },
  ],
}) => {
  const settings = {
    dots: true,
    customPaging: function (i) {
      return (
        <a className="">
          <span className="mx-2 rounded-l-full rounded-r-full h-4 w-4 block cursor-pointer transition-all "></span>
        </a>
      );
    },
    dotsClass: "slick-dots w-max absolute mt-20  ",
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [sliderRef, setSliderRef] = useState(null);

  return (
    <>
      <Slider
        {...settings}
        arrows={false}
        ref={setSliderRef}
        className="flex items-stretch justify-items-stretch"
      >
        {contentList.map((li, index) => (
          <div className="px-3 flex items-stretch" key={index}>
            <div className="border-2 border-gray-500 hover:border-cyan-500 transition-all rounded-lg p-8 flex flex-col">
              <p className="text-left text-lg text-black-600 capitalize">
                “{li.q}”
              </p>
              <p className="mt-5 text-left">“{li.a}”.</p>
            </div>
          </div>
        ))}
      </Slider>
      <div className="flex w-full items-center justify-end">
        <div className="flex flex-none justify-between w-auto mt-14">
          <div
            className="mx-4 flex items-center justify-center h-14 w-14 rounded-full bg-white border-cyan-500 border hover:bg-cyan-500 hover:text-white-500 transition-all text-cyan-500 cursor-pointer"
            onClick={sliderRef?.slickPrev}
          >
            <ArrowBack className="h-6 w-6 " />
          </div>
          <div
            className="flex items-center justify-center h-14 w-14 rounded-full bg-white border-cyan-500 border hover:bg-cyan-500 hover:text-white-500 transition-all text-cyan-500 cursor-pointer"
            onClick={sliderRef?.slickNext}
          >
            <ArrowNext className="h-6 w-6" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimoni;
