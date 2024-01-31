import Image from "next/image";
import TitleSection from "@/components/TitleSection";
import Description from "./Description";
import Button from "./Button";

const About = () => {
  return (
    <div>
      <div id="about" className={`text-center bg-white pt-10 relative`}>
        <div className="flex justify-center items-center mt-10 gap-3">
          <TitleSection title="About" />
          <Image
            src="/img/about_me.gif"
            alt="aboutgif"
            width={40}
            height={30}
            className="mb-3"
          />
        </div>
        <Description />
        <Button />
      </div>
    </div>
  );
};

export default About;
