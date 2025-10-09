import Image from "next/image";
import React from "react";
import { IconSpeakerphone } from "@tabler/icons-react";

export const MentorSection = () => {
  return (
    <div className="flex flex-col items-center justify-center md:px-20 px-8 pt-4 md:pt-0">
      <h1 className="max-md:text-4xl md:text-6xl text-center text-white font-semibold mb-8 drop-shadow-text">
        Hack-A-Venture <span className="text-color-gradient">Mentors</span>
      </h1>
      <div className="relative h-48 md:h-64 w-full p-px rounded-lg bg-gradient-to-b from-[#F37D12] to-[#FDE309] mb-12 md:mb-16">
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

      {/* <div className='md:flex md:flex-wrap md:gap-5 text-white max-md:grid max-md:grid-cols-2 mx-auto justify-center items-start max-md:gap-[12px] md:mt-[40px]'>
                <div className="md:w-[250px] max-md:py-[16px] text-center">
                    <Image src="/mentors/Long_Dang.png" alt="Mr. Long Dang" className="w-full h-auto rounded-xl mb-4 object-cover" width={200} height={200} />
                    <h3 className="md:text-2xl max-md:text-xl font-semibold mb-2">Mr. Long Dang</h3>
                    <p className="md:text-base max-md:text-md text-[#9CA3AF]">AI Mentor - AI Engineer Intern, AI Bid</p>
                </div>
                <div className="md:w-[250px] max-md:py-[16px] text-center">
                    <Image src="/mentors/Nam_Nguyen.png" alt="Mr. Nam Nguyen" className="w-full h-auto rounded-xl mb-4 object-cover" width={200} height={200} />
                    <h3 className="md:text-2xl max-md:text-xl font-semibold mb-2">Mr. Nam Nguyen</h3>
                    <p className="md:text-base max-md:text-md text-[#9CA3AF]">UI/UX Mentor - Design Consultant & Coordinator, GFT Grou</p>
                </div>
                <div className="md:w-[250px] max-md:py-[16px] text-center">
                    <Image src="/mentors/TinNguyen.png" alt="Mr. Tin Nguyen" className="w-full h-auto rounded-xl mb-4 object-cover" width={200} height={200} />
                    <h3 className="md:text-2xl max-md:text-xl font-semibold mb-2">Mr. Tin Nguyen</h3>
                    <p className="md:text-base max-md:text-md text-[#9CA3AF]">Cybersecurity Mentor - Director of Automotive, VinCSS</p>
                </div>
                <div className="md:w-[250px] max-md:py-[16px] text-center">
                    <Image src="/mentors/Louis_Nguyen.png" alt="Mr. Louis Nguyen" className="w-full h-auto rounded-xl mb-4 object-cover" width={200} height={200} />
                    <h3 className="md:text-2xl max-md:text-xl font-semibold mb-2">Mr. Louis Nguyen</h3>
                    <p className="md:text-base max-md:text-md text-[#9CA3AF]">Community Manager, ChainLink</p>
                </div>
                <div className="md:w-[250px] max-md:py-[16px] text-center">
                    <Image src="/mentors/Sang_Tran.png" alt="Mr. Sang Tran" className="w-full h-auto rounded-xl mb-4 object-cover" width={200} height={200} />
                    <h3 className="md:text-2xl max-md:text-xl font-semibold mb-2">Sang Tran</h3>
                    <p className="md:text-base max-md:text-md text-[#9CA3AF]">Product Manager, FireGroup Technology</p>
                </div>
            </div> */}
    </div>
  );
};
