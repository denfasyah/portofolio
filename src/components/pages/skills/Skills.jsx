"use client";
import Image from "next/image";
import TitleSection from "@/components/TitleSection";
import TechStackIcons from "./TechStackIcons";
import Certificates from "./Certificates";

const Skills = () => {
  return (
    <div id="skills" className={`text-center bg-white pt-10 relative`}>
      <div className="flex justify-center items-center mt-10 gap-3">
        <TitleSection title="Skills" />
        <Image
          src="/img/code.gif"
          alt="codegif"
          width={40}
          height={30}
          className="mb-3"
        />
      </div>

      <div className="lg:flex mx-10 mt-10 bg-LightBlue p-10 rounded-xl">
        <TechStackIcons />
        <Certificates />
      </div>
    </div>
  );
};

export default Skills;
