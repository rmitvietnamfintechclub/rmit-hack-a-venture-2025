"use client";
import React, { FC, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const WorkshopTimeline = () => {
  return (
    <section className="w-full flex flex-col items-center md:px-20 max-md:px-10 max-md:mt-[40px] md:mt-[20px] overflow-x:hidden">
      <div className="drop-shadow-container">
        <h1
          className={`max-md:text-4xl md:text-6xl text-center text-white font-semibold drop-shadow-text`}
        >
          Hack-A-Venture <span className="text-color-gradient">Timeline</span>
        </h1>
      </div>
      <RoundFormatTimeline />
      <TrainingWorkshopTimeline />
    </section>
  );
};

// Data for the timelines to make the mapping cleaner
const roundFormatData = [
  {
    rounded: true,
    numberOfOrder: 1,
    rightSideOfTextSection: true,
    timeRangeText: "Nov 3 – Nov 16, 2025",
    dashLineColor: "#000000 0%, #0EA2FF 47%, #000000 100%",
    headline: "IDEA PROPOSAL",
    subHeadline: "Empathize, define, ideate!",
    paragraph:
      "Teams are expected to submit a written proposal for a product/solution leveraging technologies such as AI, Blockchain, Cybersecurity, etc. to solve a specific SDG-related problem in Vietnam. The proposal must explain the chosen problem, how the technology is applied, and the solution's potential impact. Teams must choose their SDG from a pre-selected list provided by the Organizing Committee at the start of Round 01.",
  },
  {
    rounded: true,
    numberOfOrder: 2,
    rightSideOfTextSection: false,
    timeRangeText: "Dec 4 – Dec 17, 2025",
    headline: "DOCUMENTATION",
    dashLineColor: "#000000 0%, #10D8D8 47%, #000000 100%",
    subHeadline: "Specify & materialize ideas!",
    paragraph:
      "Teams are required to submit detailed Business and Technology Documentation developed using specific frameworks released in Round 2, covering aspects like business strategies and system architectures. Both documents will be weighted equally and must be submitted along with a Slide Presentation video.",
  },
  {
    rounded: true,
    numberOfOrder: 3,
    rightSideOfTextSection: true,
    timeRangeText: "Jan 21 – Jan 22, 2025",
    headline: "HACKDAY & PITCHING",
    subHeadline: "Prototype & Presentation",
    dashLineColor: "#000000 0%, #22E29A 47%, #000000 100%",
    paragraph:
      "Teams must develop a minimum viable product (MVP) or prototype with core functionalities. On HackDay 1, you'll receive additional requirements to further develop your prototype and business plan. You'll then have 24 hours to complete these tasks before a final demo pitch on HackDay 2, with live mentoring from industry experts available to support you.",
  },
];

const trainingWorkshopData = [
  {
    rounded: false,
    numberOfOrder: 1,
    rightSideOfTextSection: true,
    timeRangeText: "Nov 04, 2025",
    dashLineColor: "#000000 0%, #0EA2FF 47%, #000000 100%",
    headline: "WORKSHOP 01",
    subHeadline: "Technology in Business Innovation",
    paragraph:
      "This workshop provides guidance on identifying the most appropriate technology stack, for example, AI, Blockchain, Cybersecurity, based on the problem statement or business challenge.",
  },
  {
    rounded: false,
    numberOfOrder: 2,
    rightSideOfTextSection: false,
    timeRangeText: "Nov 10, 2025",
    dashLineColor: "#000000 0%, #10D8D8 47%, #000000 100%",
    headline: "WORKSHOP 02",
    subHeadline: "Foundations of Sustainability Thinking",
    paragraph:
      "This workshop will equip participants with the core principles of sustainability thinking, enabling them to apply sustainable frameworks to decision-making and problem-solving in diverse contexts.",
  },
  {
    rounded: false,
    numberOfOrder: 3,
    rightSideOfTextSection: true,
    timeRangeText: "Dec 04, 2025",
    dashLineColor: "#000000 0%, #22E29A 47%, #000000 100%",
    headline: "WORKSHOP 03",
    subHeadline: "Documentation Training",
    paragraph:
      "This workshop will train participants on Business & Technical Frameworks that are required for Round 2 submission. These could include Business Model, SWOT Analysis, or Systems Architecture, etc.",
  },
  {
    rounded: false,
    numberOfOrder: 4,
    rightSideOfTextSection: false,
    timeRangeText: "Jan 21, 2026",
    dashLineColor: "#000000 0%, #22E29A 47%, #000000 100%",
    headline: "WORKSHOP 04",
    subHeadline: "Pitching Techniques",
    paragraph:
      "Participants will be trained on pitching techniques and how to perform their live demostrations to impress judges and achieve the championship!",
  },
];

const RoundFormatTimeline = () => {
  return (
    <section className="w-full flex flex-col items-center">
      <RoundedTimelineHeader text="ROUND FORMAT" />
      <p className="text-white text-[24px] font-bold mt-[30px] md:mb-[10px] max-md:mb-0">
        Round
      </p>

      {/* Map over data to render timeline items */}
      <div className="w-full flex flex-col items-center">
        {roundFormatData.map((item, index) => (
          <DetailTimeLine
            key={index}
            {...item}
            isFirst={index === 0}
            isLast={index === roundFormatData.length - 1}
          />
        ))}
      </div>
    </section>
  );
};

const TrainingWorkshopTimeline = () => {
  return (
    <section className="w-[100%] flex flex-col items-center md:mt-[40px]">
      <RoundedTimelineHeader text="TRAINING WORKSHOPS" />
      <p className="text-center text-xl font-medium my-[30px] text-[#91DAAE]">
        To support participants, Hack-A-Venture 2025 will provide a series of
        workshops
      </p>
      <p className="text-white text-[24px] font-bold">
        Workshop
      </p>

      {/* Map over data to render timeline items */}
      <div className="w-full flex flex-col items-center">
        {trainingWorkshopData.map((item, index) => (
          <DetailTimeLine
            key={index}
            {...item}
            isFirst={index === 0}
            isLast={index === trainingWorkshopData.length - 1}
          />
        ))}
      </div>
    </section>
  );
};

const RoundedTimelineHeader: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className="text-white text-[20px] md:text-[24px] font-semibold py-2 px-6 rounded-full text-2xl shadow-md max-md:mt-[24px] md:mt-[30px] bg-gradient-to-b from-[#F37D12] to-[#FDE309]">
      {text}
    </div>
  );
};

const DetailTimeLine: React.FC<{
  rounded: boolean;
  numberOfOrder: number;
  rightSideOfTextSection: boolean;
  timeRangeText: string;
  headline: string;
  subHeadline: string;
  dashLineColor: string;
  paragraph: string;
  isFirst: boolean;
  isLast: boolean;
}> = (props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const leftSlideVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  const rightSlideVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const AnimatedTextSection = (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={
        props.rightSideOfTextSection ? leftSlideVariants : rightSlideVariants
      }
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div
        className={`flex ${
          !props.rightSideOfTextSection && "flex-row-reverse"
        } items-start w-full`}
      >
        <DashLine rightSide={props.rightSideOfTextSection} />
        <TextSection
          textAlign={props.rightSideOfTextSection ? "left" : "right"}
          headLine={props.headline}
          subHeadline={props.subHeadline}
          paragraph={props.paragraph}
        />
      </div>
    </motion.div>
  );

  return (
    <>
      {/*----------- laptop version (CSS GRID) ---------*/}
      <div className="relative w-full md:grid hidden grid-cols-[1fr_auto_1fr] items-start gap-x-8">
        {props.rightSideOfTextSection ? (
          <div>{/* Empty Left Column */}</div>
        ) : (
          AnimatedTextSection
        )}

        <TimelineMilestoneAndLine {...props} />

        {props.rightSideOfTextSection ? (
          AnimatedTextSection
        ) : (
          <div>{/* Empty Right Column */}</div>
        )}
      </div>

      {/*----------- mobile version (FLEX COL) ---------*/}
      <section className="w-[90%] flex flex-col items-center gap-[15px] my-[30px] md:hidden">
        <MilestoneRound
          rounded={props.rounded}
          numberOfOrder={props.numberOfOrder}
        />
        <TimelineRange timeRangeText={props.timeRangeText} />
        <div
          className="mx-auto w-[150px] h-[2.25px]"
          style={{
            background: `linear-gradient(to right, ${props.dashLineColor}, rgba(14, 162, 255, 0))`,
          }}
        ></div>
        <TextSection
          textAlign="center"
          headLine={props.headline}
          subHeadline={props.subHeadline}
          paragraph={props.paragraph}
        />
      </section>
    </>
  );
};

const TimelineMilestoneAndLine: React.FC<{
  rounded: boolean;
  numberOfOrder: number;
  timeRangeText: string;
  isFirst: boolean;
  isLast: boolean;
}> = ({ rounded, numberOfOrder, timeRangeText, isFirst, isLast }) => {
  return (
    <div className="relative h-full flex flex-col items-center">
      <div
        className={`absolute w-0.5 h-full -z-10 top-0`}
        style={{
          background: `linear-gradient(to bottom, ${
            numberOfOrder == 1
              ? "#01985C"
              : numberOfOrder == 2
              ? "#93BC4A"
              : numberOfOrder == 3
              ? "#C1CF3E"
              : numberOfOrder == 4 && "#84B74F"
          }, transparent`,
        }}
      />

      <div className="flex flex-col items-center gap-[30px]">
        <MilestoneRound rounded={rounded} numberOfOrder={numberOfOrder} />
        <TimelineRange timeRangeText={timeRangeText} />
      </div>
    </div>
  );
};

const MilestoneRound: React.FC<{ rounded: boolean; numberOfOrder: number }> = ({
  rounded,
  numberOfOrder,
}) => {
  return (
    <div
      className={`${
        rounded
          ? "rounded-full border-[12px] w-[92px] h-[92px]"
          : "rounded-md border-[4px] w-[68px] h-[68px]"
      } border-[#F37D12] bg-[#FDE309] shadow-md flex items-center justify-center text-[32px] font-bold flex-shrink-0`}
      style={{
        boxShadow: "0 0 5px 7px #291231",
      }}
    >
      0{numberOfOrder}
    </div>
  );
};

const TimelineRange: React.FC<{ timeRangeText: string }> = ({
  timeRangeText,
}) => {
  return (
    <h3
      className={`flex-shrink-0 w-fit p-2 rounded-md bg-gradient-to-b from-[#01985C] to-[#2DC6D2] text-center text-[16px] md:text-[18px] font-semibold text-[#000000]`}
    >
      {timeRangeText}
    </h3>
  );
};

const DashLine: React.FC<{ rightSide: boolean }> = ({ rightSide }) => {
  return (
    <div
      className={`flex-shrink-0 w-[86px] flex items-center mt-[25px] ${
        !rightSide ? "flex-row-reverse" : "mr-[20px]"
      } `}
    >
      <div className="w-4 h-4 rounded-full bg-gradient-to-r from-[#F37D12] to-[#FDE309]" />
      <div
        className={`${
          !rightSide ? "right-[15px]" : "left-[10px]"
        } h-1 w-[70px] -z-10`}
        style={{
          background: `linear-gradient(to ${
            !rightSide ? "left" : "right"
          }, #F37D12, transparent)`,
        }}
      />
    </div>
  );
};

const TextSection: React.FC<{
  textAlign: "left" | "right" | "center";
  headLine: string;
  subHeadline: string;
  paragraph: string;
}> = ({ textAlign, headLine, subHeadline, paragraph }) => {
  return (
    <div className={`flex flex-col gap-[10px] w-full text-${textAlign}`}>
      <h1
        className={`text-color-gradient text-2xl font-bold ${
          !headLine && "hidden"
        }`}
      >
        {headLine}
      </h1>
      <h2
        className={`text-green-color-gradient text-xl font-semibold ${
          !subHeadline && "hidden"
        }`}
      >
        {subHeadline}
      </h2>
      <p className={`text-white text-md font-medium ${!paragraph && "hidden"}`}>
        {paragraph}
      </p>
    </div>
  );
};
