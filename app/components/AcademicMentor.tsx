"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// const LinkedInIcon = () => (
//   <svg width="65" height="65" viewBox="0 0 77 77" fill="none">
//     <path
//       d="M12.8333 19.25C12.8333 17.5482 13.5094 15.9161 14.7127 14.7127C15.9161 13.5094 17.5482 12.8333 19.25 12.8333H57.75C59.4518 12.8333 61.0839 13.5094 62.2872 14.7127C63.4906 15.9161 64.1666 17.5482 64.1666 19.25V57.75C64.1666 59.4518 63.4906 61.0839 62.2872 62.2872C61.0839 63.4906 59.4518 64.1666 57.75 64.1666H19.25C17.5482 64.1666 15.9161 63.4906 14.7127 62.2872C13.5094 61.0839 12.8333 59.4518 12.8333 57.75V19.25Z"
//       stroke="#2C305F"
//       strokeWidth="1.33"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//     <path
//       d="M25.6667 35.2917V51.3334"
//       stroke="#2C305F"
//       strokeWidth="1.33"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//     <path
//       d="M25.6667 25.6667V25.6992"
//       stroke="#2C305F"
//       strokeWidth="1.33"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//     <path
//       d="M38.5 51.3334V35.2917"
//       stroke="#2C305F"
//       strokeWidth="1.33"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//     <path
//       d="M51.3333 51.3334V41.7084C51.3333 40.0065 50.6573 38.3744 49.4539 37.1711C48.2506 35.9677 46.6185 35.2917 44.9167 35.2917C43.2149 35.2917 41.5828 35.9677 40.3794 37.1711C39.176 38.3744 38.5 40.0065 38.5 41.7084"
//       stroke="#2C305F"
//       strokeWidth="1.33"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//   </svg>
// );

// const OutlookIcon = () => (
//   <div className="p-2 border-[1.35px] border-black rounded-md">
//     <Image
//       src="/outlook.svg"
//       alt="Outlook"
//       width={65}
//       height={65}
//       loading="lazy"
//     />
//   </div>
// );

const mentorsData = [
  {
    name: "DR. MINH NGUYEN",
    imageSrc: "/Mentor-MinhNguyen.png",
    title: "LECTURER OF BLOCKCHAIN ENABLED BUSINESS, RMIT VIETNAM",
    // contactLink: "mailto:minh.nguyen244@rmit.edu.vn",
    // contactIcon: <OutlookIcon />,
  },
  {
    name: "DR. HOANG PHAN",
    imageSrc: "/Mentor-HoangPhan.png",
    title: "LECTURER OF STEM FOR SUSTAINABLE DEVELOPMENT, RMIT VIETNAM",
    // contactLink: "https://www.linkedin.com/in/hoang-phan-20a24b45/",
    // contactIcon: <LinkedInIcon />,
  },
  {
    name: "DR. TRI DANG",
    imageSrc: "/Mentor-TriDang.png",
    title: "ACTING ASSOCIATE PROGRAM MANAGER, IT&SE, RMIT VIETNAM",
    // contactLink: "https://www.linkedin.com/in/tri-dang-489383b/",
    // contactIcon: <LinkedInIcon />,
  },
];

type Mentor = {
  name: string;
  imageSrc: string;
  title: string;
  // contactLink: string;
  // contactIcon: React.ReactNode;
};

const MentorCard = ({ mentor }: { mentor: Mentor }) => (
  <div className="flex flex-col items-center px-4">
    <div className="font-bold text-2xl text-green-color-gradient">
      <span>{mentor.name}</span>
    </div>
    <div className="bg-gradient-to-b from-[#F37D12] to-[#FDE309] p-[5px] mt-2 rounded-[50px]">
      <div className="w-[60vw] max-w-[250px] md:w-[20vw] h-auto overflow-hidden rounded-[50px] bg-gradient-to-r from-[#89D957] to-[#C9E265]">
      <Image
        src={mentor.imageSrc}
        alt={`Mentor ${mentor.name}`}
        className="w-full h-auto object-cover"
        width={400}
        height={400}
        priority={true}
      />
    </div>
    </div>
    <div className="relative mt-6">
      <div className="rounded-[50px] w-[300px] h-[86px] bg-gradient-to-b from-[#F37D12] to-[#FDE309] flex items-center p-4">
        <p className="text-sm font-medium text-center flex-grow">{mentor.title}</p>
        {/* <div className="transition duration-300 transform hover:scale-110 hover:brightness-150 pl-2">
          <a
            href={mentor.contactLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {mentor.contactIcon}
          </a>
        </div> */}
      </div>
    </div>
  </div>
);

export const AcademicMentor = () => {
  const sliderSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="px-10 pb-10">
      <h1 className="max-md:hidden md:block md:text-6xl text-center text-white font-semibold mb-8 drop-shadow-text">
        Hack-A-Venture <span className="text-color-gradient">Academic Mentors</span>
      </h1>

      <h1 className="max-md:block md:hidden max-md:text-4xl text-center text-white font-semibold mb-8 drop-shadow-text">
        Hack-A-Venture<br/><span className="text-color-gradient">Academic Mentors</span>
      </h1>

      {/* Desktop View: Flex layout */}
      <div className="hidden md:flex flex-row items-end justify-around gap-6">
        {mentorsData.map((mentor) => (
          <MentorCard key={mentor.name} mentor={mentor} />
        ))}
      </div>

      {/* Mobile View: Slider */}
      <div className="md:hidden">
        <Slider {...sliderSettings}>
          {mentorsData.map((mentor) => (
            <div key={mentor.name}>
              <MentorCard mentor={mentor} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
