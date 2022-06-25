import React, { useState } from "react";

// import react slick
import Slider from "react-slick";
import ArrowBack from "../public/assets/Icon/eva_arrow-back-fill.svg";
import ArrowNext from "../public/assets/Icon/eva_arrow-next-fill.svg";

const Testimoni = ({
  contentList = [
    {
      q: "Bagaimana cara saya mendaftar?",
      a: "Kamu bisa langsung klik tombol \"Daftar\" di pojok kanan atas website potensiup.com, kamu akan diarahkan ke google form kemudian silahkan isi dan klik \"Submit\" jika sudah selesai",
    },
    {
      q: "Apakah saya akan ditarik biaya jika mendaftar?",
      a: "Kamu hanya akan ditarik biaya ketika mendaftar pada paket intensif sedangkan paket yang lain tidak memiliki penarikan biaya di awal",
    },
    {
      q: "Berapa biaya untuk mengikuti pelatihan?",
      a: "Rp 500.000 jika hendak mengikuti paket intensif. Lalu jika diterima kerja, bayar lagi sebesar Rp 500.000.",
    },
    {
      q: "Kapan harus bayar biaya pelatihan?",
      a: "Bayar di depan sebelum pelatihan dimulai",
    },
    {
      q: "Bagaimana jika saya tidak mampu membayar biaya pelatihan?",
      a: "Belajar sendiri, lalu bisa langsung ikut tes sertifikasi. Jika lolos akan dibantu dicarikan pekerjaan dan hanya bayar Rp 500.000 jika diterima kerja. Selain itu bisa juga dengan mengikuti program beasiswa.",
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
              <p className="mt-5 text-left">{li.a}.</p>
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
