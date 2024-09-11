"use client";
import { useEffect } from "react";

import { CarouselVertical } from "./components/CarouselVertical";
import AchievementsCards from "./components/AchievementCards";
import mcits4 from "@/public/achievments/mcits pics/mcits4.jpg";
import mcits1 from "@/public/achievments/mcits pics/mcits1.jpg";
import mcits2 from "@/public/achievments/mcits pics/mcits2.jpg";
import mcits3 from "@/public/achievments/mcits pics/mcits3.jpg";
import mcitsLogo from "@/public/achievments/MCITS.png";

import osra1 from "@/public/achievments/OSRA/osra1.jpg";
import osra2 from "@/public/achievments/OSRA/osra2.jpg";
import osra3 from "@/public/achievments/OSRA/osra3.jpg";
import osra4 from "@/public/achievments/OSRA/osra4.jpg";
import osraLogo from "@/public/achievments/OSRA.jpg";

import dict1 from "@/public/achievments/dict/dict1.jpg";
import dict3 from "@/public/achievments/dict/dict3.jpg";
import dict4 from "@/public/achievments/dict/dict4.jpg";
import dict5 from "@/public/achievments/dict/dict5.jpg";
import dictLogo from "@/public/achievments/DICT.png";

export default function Achievments2() {
  const achievements = [
    {
      title: "MINDANAO CONFERENCE FOR INFORMATION TECHNOLOGY STUDENTS",
      year: 2024,
      description: "PAPER PRESENTATION CHAMPION",
      pic: mcitsLogo,
      link: "https://www.facebook.com/share/yNGf6ybWQmMj7KwG/",
      infoPics: [mcits4, mcits1, mcits2, mcits3, mcitsLogo],
      aboutEvent:
        "The Mindanao Conference for Information Technology Students (MCITS) is a prestigious event that brings together the brightest IT students from across the region to present innovative projects and research. Hosted by Mapúa Malayan Colleges Mindanao, it provides a platform for students to share their work with industry experts, faculty, and fellow students. Our project, HemaLens, earned the championship at MCITS, distinguishing itself with its innovation and potential impact. Competing against the top projects in the region, we were honored as the best entry, highlighting the dedication, creativity, and expertise of our team.",
    },
    {
      title: "MAPUA MALAYAN OUTSTANDING STUDENT RESEARCH AWARD",
      year: 2024,
      description: "CCIS RESEARCH POSTER PRESENTATION CHAMPION",
      pic: osraLogo,
      link: "https://www.facebook.com/share/eXN5RFN1xbwjh457/",
      infoPics: [osra1, osra2, osra3, osra4, osraLogo],
      aboutEvent:
        "The Outstanding Student Research Award (OSRA) at Mapúa Malayan Colleges Mindanao recognizes top-tier student research within the College of Computer and Information Sciences (CCIS). Our project, HemaLens, won the Best Poster Presentation, standing out among all participants. The combination of a visually engaging poster and a strong presentation secured our position as the top project in the competition, highlighting our dedication and innovation.",
    },
    {
      title: "DEPARTMENT OF INFORMATION AND COMMUNICATIONS TECHNOLOGY",
      year: 2023,
      description: "1ST PLACE IN THE PHILIPPINE STARTUP CHALLENGE",
      pic: dictLogo,
      link: "https://www.facebook.com/share/p/2UqeZyHzdC3rvi4Q/",
      infoPics: [dict1, dict5, dict3, dict4, dictLogo],
      aboutEvent:
        "The Philippine Startup Challenge, organized by the Department of Information and Communications Technology (DICT), is a prestigious competition that encourages innovation and entrepreneurship among students across the Philippines. Focused on identifying and nurturing promising startup ideas, the challenge brings together the most creative and driven minds to develop solutions that address real-world problems. Our project, HemaLens, was named the first place in the DICT Davao Region, standing out for its originality, technical excellence, and potential societal impact. Competing against other innovative startups, our team’s commitment to creating a meaningful solution earned us the top spot in this highly competitive event, reinforcing our belief in the transformative power of technology.",
    },
  ];

  return (
    <div
      id="awards"
      className="flex align-top min-h-screen overflow-visible justify-around mobilesS:flex-col md:flex-row px-2 md:px-5 gap-5 xl:gap-10 py-5"
    >
      <div className="md:sticky top-1/4 h-min mobilesS:static">
        <div className="flex mobilesS:pb-5  h-min mobilesS:justify-center md:basis-1 xl:items-start md:items-start flex-col gap-1">
          <div className="flex justify-center  mobilesS:flex-row  mobilesS:text-4xl mobileL:text-5xl sm:text-7xl  lg:text-8xl xl:text-9xl">
            <p
              style={{
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
              className={`font-black items-center font-Montserrat flex bg-gradient-to-r 
                
                   from-[#bcbcbc] via-[#282828] to-[#bcbcbc] text-transparent`}
            >
              AWARDS
            </p>
          </div>
          <p className="text-white sm:text-2xl md:text-xl lg:text-[25px] md:text-start ">
            A front-end developer and designer with a proven track record in
            winning prestigious competitions.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-20">
        {achievements.map((item, i) => {
          return (
            <AchievementsCards
              key={i}
              title={item.title}
              year={item.year}
              description={`${item.description}`}
              pic={item.pic}
              link={`${item.link}`}
              infoPics={item.infoPics}
              aboutEvent={`${item.aboutEvent}`}
            />
          );
        })}
      </div>
    </div>
  );
}
