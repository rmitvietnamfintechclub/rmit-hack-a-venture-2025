"use client";
import Image from "next/image";
import React, { useState } from "react";
import clsx from "clsx";
import { IconSpeakerphone } from "@tabler/icons-react";

// --- Types ---
interface MentorInfo {
  name: string;
  title: string;
  company: string;
  image_path: string;
}

const allMentors = {
  round2: [
    {
      name: "Hai Anh Gwen",
      title: "Product Management Expert",
      company: "One Mount",
      image_path: "HaiAnhGwen-Round2.png",
    },
    {
      name: "Manroe Tran",
      title: "Solution Expert",
      company: "Techcombank",
      image_path: "ManroeTran-Round2.png",
    },
    {
      name: "Tran Xuan Manh",
      title: "Product Designer | Scrum Master",
      company: "BIDV",
      image_path: "TranXuanManh-Round2.png",
    },
    {
      name: "Dai Truong",
      title: "APAC & Global Program Manager",
      company: "Movement Labs",
      image_path: "DaiTruong.png",
    },
    {
      name: "Sang Do",
      title: "Product Lead",
      company: "Stably",
      image_path: "SangDo-Round2.png",
    },
  ],
  round3: [],
};

const MentorItem = (props: MentorInfo) => {
  const { name, title, company, image_path } = props;

  return (
    <div className="relative group h-full">
      {/* --- Tech Borders Animation --- */}
      <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-yellow-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0"></div>
      <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-yellow-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0"></div>
      <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-green-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0"></div>
      <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-green-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0"></div>

      {/* --- Card Content --- */}
      <div className="flex flex-col h-full bg-gray-900/90 p-4 text-center backdrop-blur-sm transition-all duration-300 group-hover:bg-gray-800 rounded-lg border border-gray-800 group-hover:border-gray-700">
        <div className="relative mb-4 mx-auto w-full max-w-[200px]">
          {/* Image Container with Clip Path */}
          <div className="relative w-full aspect-square">
            {/* Fallback image logic is recommended here usually */}
            <Image
              src={`/mentors/${image_path}`}
              alt={name}
              className="w-full h-full object-cover"
              width={200}
              height={200}
              style={{
                clipPath: "polygon(0 20px, 20px 0, 100% 0, 100% 100%, 0 100%)", // Modern tech cut
              }}
            />
          </div>
          {/* Gradient Line under image */}
          <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-75 group-hover:opacity-100 group-hover:animate-pulse"></div>
        </div>

        <div className="flex flex-col flex-grow items-center justify-start">
          <h3 className="text-lg font-bold mb-1 text-green-color-gradient uppercase tracking-wide">
            {name}
          </h3>
          <p className="text-sm text-yellow-500 font-semibold mb-2">
            {title} | {company}
          </p>
        </div>
      </div>
    </div>
  );
};

// --- Main Section ---
export const MentorSection = () => {
  // Initialize at Round 2 since Round 1 doesn't exist for mentors
  const [activeRound, setActiveRound] = useState(2);

  const renderContent = () => {
    // Round 2 Content
    if (activeRound === 2) {
      return (
        // Grid setup for exactly 5 items (2 cols mobile, 3 tablet, 5 desktop)
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
          {allMentors.round2.map((mentor, key) => (
            <MentorItem
              key={key}
              name={mentor.name}
              title={mentor.title}
              company={mentor.company}
              image_path={mentor.image_path}
            />
          ))}
        </div>
      );
    }
    // Round 3 (or others) - Empty/Coming Soon State
    else {
      return (
        <div className="relative h-48 md:h-64 p-px rounded-lg bg-gradient-to-b from-[#F37D12] to-[#FDE309] w-full mx-auto">
          <div className="flex flex-col items-center justify-center w-full h-full bg-gradient-to-b from-[#10382C] to-[#0A1B15] rounded-[7px] text-center px-4 shadow-2xl">
            <IconSpeakerphone
              size={65}
              className="max-md:w-[50px] text-yellow-400 max-md:mb-2 md:mb-4 animate-pulse"
            />
            <h3 className="max-md:text-2xl md:text-3xl font-bold tracking-wider uppercase text-color-gradient drop-shadow-sm">
              Mentors Incoming
            </h3>
            <p className="mt-3 max-md:text-sm md:text-lg font-medium text-gray-400 max-w-lg">
              We are finalizing the list of industry experts for Round{" "}
              {activeRound}. Stay tuned for the reveal!
            </p>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="py-12 md:py-20 px-6 md:px-16 w-full relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-900/40 via-transparent to-transparent"></div>

      <div className="relative z-10">
        <h1 className="max-md:text-4xl md:text-6xl text-center text-white font-semibold mb-8 drop-shadow-text">
          Hack-A-Venture <span className="text-color-gradient">Mentors</span>
        </h1>

        {/* Tab Navigation: Only Show Round 2 and Round 3 */}
        <div className="flex justify-center items-center gap-4 md:gap-6 mb-10 md:mb-16">
          {[2, 3].map((round) => (
            <button
              key={round}
              onClick={() => setActiveRound(round)}
              className={clsx(
                "py-2 px-6 md:px-8 rounded-full text-sm md:text-lg font-bold tracking-wide transition-all duration-300 border",
                activeRound === round
                  ? "bg-gradient-to-r from-[#F37D12] to-[#FDE309] text-black border-transparent shadow-[0_0_15px_rgba(243,125,18,0.5)] transform scale-105"
                  : "bg-gray-900/60 text-gray-400 border-gray-700 hover:border-gray-500 hover:text-white backdrop-blur-md"
              )}
            >
              Round {round}
            </button>
          ))}
        </div>

        {/* Content Container */}
        <div className="container mx-auto w-full animate-fadeIn">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};
