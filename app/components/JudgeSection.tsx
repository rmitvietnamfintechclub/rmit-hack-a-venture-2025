"use client";
import Image from "next/image";
import React, { useState } from "react";
import clsx from "clsx";
import { IconSparkles } from "@tabler/icons-react";

interface JudgeInfo {
  name: string;
  title: string;
  image_path: string;
}

const allJudges = {
  round1: [
    {
      name: "Dr. Huy Pham",
      title: "Lecturer, Finance, RMIT Vietnam",
      image_path: "HuyPham-Round1.png",
    },
    {
      name: "Dr. Minh Nguyen",
      title: "Lecturer, Blockchain Enabled Business, RMIT Vietnam",
      image_path: "MinhNguyen-Round1.png",
    },
    {
      name: "Dr. Tam Le",
      title: "Lecturer, Blockchain Enabled Business, RMIT Vietnam",
      image_path: "TamLe-Round1.png",
    },
    {
      name: "Dr. Tuan Chu",
      title:
        "Associate Program Manager, Undergraduate Business Programs, RMIT Vietnam",
      image_path: "TuanChu-Round1.png",
    },
    {
      name: "Dr. Timothy McBush Hiele",
      title: "Lecturer, Digital Business, RMIT Vietnam",
      image_path: "TimothyHiele-Round1.png",
    },
    {
      name: "Dr. Hieu Thai",
      title: "Lecturer, Blockchain Enabled Business, RMIT Vietnam",
      image_path: "HieuThai-Round1.png",
    },
    {
      name: "Dr. Tri Dang",
      title: "Acting Associate Program Manager, IT&SE, RMIT Vietnam",
      image_path: "TriDang-Round1.png",
    },
    {
      name: "Dr. Cherry Narumon Sriratanaviriyakul",
      title: "Lecturer, Entrepreneurship, RMIT Vietnam",
      image_path: "CherryNarumon-Round1.png",
    },
    {
      name: "Dr. Hoang Phan",
      title: "Lecturer, STEM for Sustainable Development, RMIT Vietnam",
      image_path: "HoangPhan-Round1.png",
    },
    {
      name: "Dr. Yen Nguyen",
      title: "Lecturer, Entrepreneurship, RMIT Vietnam",
      image_path: "YenNguyen-Round1.png",
    },
  ],
  round2: [],
  round3: [],
};

// --- REFACTORED JudgeItem to eliminate flickering ---
const JudgeItem = (props: JudgeInfo) => {
  const { name, title, image_path } = props;
  return (
    <div className="relative group">
      <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-yellow-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0"></div>
      <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-yellow-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0"></div>
      <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-green-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0"></div>
      <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-green-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0"></div>

      <div className="judge-card-shape flex flex-col h-full bg-gray-900/90 p-4 text-center backdrop-blur-sm transition-all duration-300 group-hover:bg-gray-900">
        <div className="relative mb-4">
          <Image
            src={`/judges/${image_path}`}
            alt={name}
            className="w-full h-auto object-cover aspect-square"
            width={200}
            height={200}
            style={{
              clipPath: "polygon(0 25px, 25px 0, 100% 0, 100% 100%, 0 100%)",
            }}
          />
          <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-75 group-hover:opacity-100 group-hover:animate-pulse"></div>
        </div>
        <div className="flex flex-col flex-grow justify-start">
          <h3 className="text-lg font-bold mb-2 text-green-color-gradient">
            {name}
          </h3>
          <p className="text-base text-white font-medium flex-grow">{title}</p>
        </div>
      </div>
    </div>
  );
};

export const JudgeSection = () => {
  const [activeRound, setActiveRound] = useState(1);

  const renderContent = () => {
    if (activeRound === 1) {
      return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {allJudges.round1.map((judge, key) => (
            <JudgeItem
              key={key}
              name={judge.name}
              title={judge.title}
              image_path={judge.image_path}
            />
          ))}
        </div>
      );
    } else {
      return (
        <div className="relative h-48 md:h-64 p-px rounded-lg bg-gradient-to-b from-[#F37D12] to-[#FDE309]">
          <div className="flex flex-col items-center justify-center w-full h-full bg-gradient-to-b from-[#10382C] to-[#0A1B15] rounded-[7px] text-center">
            <IconSparkles
              size={65}
              className="max-md:w-[50px] text-yellow-400 max-md:mb-2 md:mb-4 animate-pulse"
            />
            <h3 className="max-md:text-2xl md:text-3xl font-bold tracking-wider uppercase text-color-gradient">
              Stay Tuned
            </h3>
            <p className="mt-2 max-md:text-lg md:text-xl font-medium text-gray-400">
              The judges for Round {activeRound} will be unveiled shortly.
            </p>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="py-8 md:py-12 px-4 md:px-16">
      <h1 className="max-md:text-4xl md:text-6xl text-center text-white font-semibold mb-8 drop-shadow-text">
        Hack-A-Venture <span className="text-color-gradient">Judges</span>
      </h1>
      <div className="flex justify-center items-center gap-6 md:gap-4 mb-12">
        {[1, 2, 3].map((round) => (
          <button
            key={round}
            onClick={() => setActiveRound(round)}
            className={clsx(
              "py-2 px-6 rounded-full text-lg font-semibold transition-all duration-300",
              activeRound === round
                ? "bg-gradient-to-r from-[#F37D12] to-[#FDE309] text-black shadow-lg"
                : "bg-gray-800/80 text-gray-300 hover:bg-gray-700"
            )}
          >
            Round {round}
          </button>
        ))}
      </div>
      <div className="container mx-auto w-full">{renderContent()}</div>
    </div>
  );
};
