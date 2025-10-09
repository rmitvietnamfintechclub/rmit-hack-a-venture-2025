"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const DURATION = 0.15;
const STAGGER = 0.015;

export const HeroSection = () => {
  return (
    <>
      <div className="max-md:hidden grid grid-cols-2 items-start md:px-20">
        <div className="justify-center mx-auto md:w-full md:mt-20">
          <div className="mx-auto">
            <div className="text-[3.5rem] mb-[16px] drop-shadow-container">
              <motion.h1
                initial="initial"
                whileHover="hovered"
                className="overflow-hidden relative w-fit text-white font-bold drop-shadow-text"
                style={{
                  lineHeight: "0.9",
                }}
                transition={{
                  staggerChildren: 0.01,
                }}
              >
                <FlipText>RMIT 2025</FlipText>
              </motion.h1>

              <motion.h1
                initial="initial"
                whileHover="hovered"
                className="overflow-hidden relative w-fit"
                style={{
                  lineHeight: "0.9",
                }}
                transition={{
                  staggerChildren: 0.01,
                }}
              >
                <div className="text-[#FDE309] font-bold drop-shadow-text">
                  <FlipText>Hack-A-Venture</FlipText>
                </div>
              </motion.h1>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <div className="w-[420px] lg:w-[490px] text-white text-xl font-medium font-sans text-justify">
                Organized by RMIT Vietnam FinTech Club, <span className="font-bold text-color-gradient">Hack-A-Venture</span> is a
                hackathon-style innovation competition for{" "}
                <span className="font-bold text-color-gradient">
                  Business
                </span>{" "}
                and{" "}
                <span className="font-bold text-color-gradient">
                  Technology
                </span>{" "}
                students nationwide, encouraging them to leverage technologies
                to solve Vietnam's pressing social challenge!
              </div>
            </motion.h1>

            <div className="mt-[40px] flex justify-start gap-4">
              <button className="w-[12vw] h-[48px] bg-gradient-to-b from-[#F37D12] to-[#FDE309] rounded-[12px] justify-items-center flex justify-center items-center text-white font-semibold font-poppins">
                <a href="https://bit.ly/RMITHack-A-Venture2025Handbook" target="_blank" className="no-underline">
                  See Handbook
                </a>
              </button>

              <button className="w-[12vw] h-[48px] bg-gradient-to-b from-[#F37D12] to-[#FDE309] rounded-[12px] justify-items-center flex justify-center items-center text-white font-semibold font-poppins">
                {/* <Button /> */}
                <a href="https://forms.gle/RCp2kr5zheyp2Gq2A" target="_blank">
                  Join Now
                </a>
                <Image
                  src={"/Vector.png"}
                  alt="arrow"
                  width={1000}
                  height={1000}
                  className="ml-[10px] w-[13.5px] h-[13.5px]"
                />
              </button>
            </div>
          </div>
        </div>
        <div
          className="items-start mx-auto w-full bg-center md:pt-[100px] md:pb-[100px] bg-contain relative"
          style={{
            backgroundImage: `url(${"hackaventure-road.png"})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "right -20px top -60px",
          }}
        >
          <Image
            src={"/hackaventure-logo.png"}
            alt="HAV Logo"
            width={1000}
            height={1000}
            className="w-auto h-[250px] top-[4rem] left-[-2.5rem] absolute -rotate-3"
          />
          <Image
            src={"/hackaventure-mountain.png"}
            alt="hero"
            width={1000}
            height={1000}
            className="w-auto h-[300px] top-[-3rem] left-[2.5rem] absolute"
          />
          <Image
            src={"/hackaventure-mountain.png"}
            alt="hero"
            width={1000}
            height={1000}
            className="w-auto h-[250px] top-[-2rem] left-[8rem] absolute"
          />
          <Image
            src={"/hackaventure-turbin.png"}
            alt="hero"
            width={1000}
            height={1000}
            className="w-auto h-[200px] top-[2.75rem] right-[8.25rem] absolute -rotate-3"
          />
          <Image
            src={"/hackaventure-turbin.png"}
            alt="hero"
            width={1000}
            height={1000}
            className="w-auto h-[150px] top-[1.5rem] left-[-1.25rem] absolute -rotate-3"
          />
          <Image
            src={"/mascot.png"}
            alt="hero"
            width={1000}
            height={1000}
            className="my-7 w-auto h-[260px] mx-[16rem]"
          />
        </div>
      </div>

      <div className="md:hidden px-6">
        <div className="mb-[16px] text-5xl justify-center text-center">
          <h1 className="text-white drop-shadow-text font-sans font-extrabold mt-[40px]">
            RMIT 2025
          </h1>
          <h1 className="text-color-gradient drop-shadow-text font-sans font-extrabold mt-[20px]">
            Hack-A-Venture
          </h1>
        </div>

        <div className="text-white text-lg my-[16px] font-sans font-medium text-center mx-[20px] mt-[24px]">
          Organized by RMIT Vietnam FinTech Club, Hack-A-Venture is a
          hackathon-style innovation competition for{" "}
          <span className="font-bold text-color-gradient inline-block">
            Business
          </span>{" "}
          and{" "}
          <span className="font-bold text-color-gradient inline-block">
            Technology
          </span>{" "}
          students nationwide, encouraging them to leverage technologies to
          solve Vietnam's pressing social challenge!
        </div>

        <div className="flex w-full gap-5 justify-center items-center px-[16px]">
          <button className="w-full h-[48px] bg-gradient-to-b from-[#F37D12] to-[#FDE309] rounded-[12px] justify-items-center flex justify-center items-center text-white font-semibold font-poppins">
            <a href="" target="_blank" className="no-underline">
              See Handbook
            </a>
          </button>

          <button className="w-full h-[48px] bg-gradient-to-b from-[#F37D12] to-[#FDE309] rounded-[12px] justify-items-center flex justify-center items-center text-white font-semibold font-poppins">
            {/* <Button /> */}
            <a href="" target="_blank">
              Join Now
            </a>
            <Image
              src={"/Vector.png"}
              alt="arrow"
              width={1000}
              height={1000}
              className="ml-[10px] w-[13.5px] h-[13.5px]"
            />
          </button>
        </div>
      </div>
    </>
  );
};

const FlipText = ({ children }: { children: string }) => {
  const characters = children
    .split("")
    .map((char) => (char === " " ? "\u00A0" : char));
  return (
    <>
      <div>
        {characters.map((char, index) => (
          <motion.span
            key={index}
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: index * STAGGER,
            }}
            className="inline-block"
          >
            {char}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {characters.map((char, index) => (
          <motion.span
            key={index}
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: index * STAGGER,
            }}
            className="inline-block"
          >
            {char}
          </motion.span>
        ))}
      </div>
    </>
  );
};
