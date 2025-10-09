"use client";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IconSpeakerphone } from "@tabler/icons-react";

export const PartnerSection = () => {
  return (
    <div
      className="text-center max-md:my-4 md:my-10 container mx-auto max-md:px-4 md:px-20"
      id="hackaventure-sponsors"
    >
      <h1 className="max-md:text-3xl md:text-6xl text-center text-white font-semibold md:px-[40px] drop-shadow-text">
        Hack-A-Venture <span className="text-color-gradient">Sponsors</span>
      </h1>
      <div className="relative md:h-64 max-md:h-48  p-px rounded-lg bg-gradient-to-b from-[#F37D12] to-[#FDE309] max-md:mt-6 md:mt-12">
        <div className="flex flex-col items-center justify-center w-full h-full bg-gradient-to-b from-[#10382C] to-[#0A1B15] rounded-[7px] text-center">
          <IconSpeakerphone
            size={65}
            className="max-md:w-[50px] text-yellow-400 max-md:mb-2 md:mb-4 animate-pulse"
          />
          <h3 className="md:text-3xl max-md:text-2xl font-bold tracking-wider uppercase text-color-gradient">
            Revealing Soon!
          </h3>
        </div>
      </div>
    </div>
  );
};

export function PartnerList() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    initialSlide: 0,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          swipeToSlide: true,
          dots: true,
        },
      },
    ],
  };

  // Adjust the div size for larger screens and make it responsive for mobile
  const imageStyle = "object-contain"; // Ensure image fits within the div

  return (
    <div className="slider-container lg:w-[90vw] p-10 sm:p-0 mx-auto">
      <Slider {...settings}>
        {/*----------------------------Diamond Sponsors----------------------------*/}
        <div className="md:p-10">
          <div className="drop-shadow-container">
            <h3 className="text-white font-semibold text-[20px] sm:text-[25px] lg:text-[30px] mb-6 text-gradient drop-shadow-text text-gradient">
              Diamond Sponsors
            </h3>
          </div>
          <div className="flex flex-row gap-4 sm:gap-10 items-center justify-center">
            <div
              className={`flex items-center justify-center w-[200px] h-[100px] sm:w-[220px] sm:h-[140px] md:w-[250px] md:h-[150px]`}
            >
              <Image
                src="/partners/dragon_capital.png"
                alt="diamond-sponsor"
                width={120}
                height={120}
                layout="responsive"
                className={imageStyle}
              />
            </div>
            <div
              className={`flex items-center justify-center w-[200px] h-[100px] sm:w-[220px] sm:h-[140px] md:w-[250px] md:h-[150px]`}
            >
              <Image
                src="/partners/monad.png"
                alt="diamond-sponsor"
                width={120}
                height={120}
                layout="responsive"
                className={imageStyle}
              />
            </div>
            <div
              className={`flex items-center justify-center w-[200px] h-[100px] sm:w-[220px] sm:h-[140px] md:w-[250px] md:h-[150px]`}
            >
              <Image
                src="/partners/polkadot.png"
                alt="diamond-sponsor"
                width={120}
                height={120}
                layout="responsive"
                className={imageStyle}
              />
            </div>
          </div>
        </div>
        {/*----------------------------Strategic Sponsors----------------------------*/}
        <div className="md:p-10">
          <div className="drop-shadow-container">
            <h3 className="text-white font-semibold text-[20px] sm:text-[25px] lg:text-[30px] mb-6 drop-shadow-text text-gradient">
              Strategic Sponsors
            </h3>
          </div>
          <div className="flex flex-row md:flex-nowrap gap-4 sm:gap-5 items-center justify-center">
            <div
              className={`flex items-centerjustify-center w-[200px] h-[100px] sm:w-[220px] sm:h-[140px] md:w-[250px] md:h-[150px]`}
            >
              <Image
                src="/partners/chainlink.png"
                alt="strategic-sponsor"
                width={100}
                height={100}
                layout="responsive"
                className={imageStyle}
              />
            </div>
            <div
              className={`flex items-centerjustify-center w-[200px] h-[200px] sm:w-[220px] sm:h-[140px] md:w-[250px] md:h-[150px]`}
            >
              <Image
                src="/partners/gft.png"
                alt="strategic-sponsor"
                width={100}
                height={100}
                layout="responsive"
                className={imageStyle}
              />
            </div>
          </div>
        </div>

        {/*----------------------------Academic Sponsors----------------------------*/}

        <div className="md:p-10">
          <h3 className="text-white font-semibold text-[20px] sm:text-[25px] lg:text-[30px] mb-6">
            Academic Sponsors
          </h3>
          <div className="flex flex-row md:flex-nowrap gap-4 sm:gap-10 items-center justify-center">
            <div
              className={`flex items-center justify-center bg-white w-[100px] h-[100px] sm:w-[220px] sm:h-[140px] md:w-[150px] md:h-[150px] rounded-lg`}
            >
              <Image
                src="/partners/aptech.webp"
                alt="academic-sponsor"
                width={230}
                height={230}
                className={imageStyle}
              />
            </div>
            <div
              className={`flex items-center justify-center bg-white w-[100px] h-[100px] sm:w-[220px] sm:h-[140px] md:w-[150px] md:h-[150px] rounded-lg`}
            >
              <Image
                src="/partners/unitrain.png"
                alt="academic-sponsor"
                width={200}
                height={200}
                className={imageStyle}
              />
            </div>
            <div
              className={`flex items-center justify-center bg-white w-[100px] h-[100px] sm:w-[220px] sm:h-[140px] md:w-[150px] md:h-[150px] rounded-lg`}
            >
              <Image
                src="/partners/bigo.png"
                alt="academic-sponsor"
                width={100}
                height={100}
                className={imageStyle}
              />
            </div>
          </div>
        </div>

        {/*----------------------------Silver Sponsors----------------------------*/}
        {/* <div className="md:p-10">
					<h3 className="text-white font-semibold text-[20px] sm:text-[25px] lg:text-[30px] mb-6">
						Silver Sponsors
					</h3>
					<div className="flex flex-row md:flex-nowrap gap-4 sm:gap-10 items-center justify-center">
						<div
							className={`flex items-center p-0 justify-center sm:p-4 w-[200px] h-[100px] sm:w-[220px] sm:h-[140px] md:w-[250px] md:h-[150px]`}
						>
							<Image
								src="/partners/homecredit.png"
								alt="silver-sponsor"
								width={160}
								height={160}
								layout="responsive"
								className={imageStyle}
							/>
						</div>
					</div>
				</div> */}
      </Slider>
    </div>
  );
}
