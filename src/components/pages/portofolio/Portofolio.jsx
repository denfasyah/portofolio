import Image from "next/image";
import TitleSection from "@/components/TitleSection";
import Card from "./Card";

const Portofolio = () => {
  return (
    <div>
      <div id="portofolio" className={`text-center bg-white pt-10 relative`}>
        <div className="flex justify-center items-center mt-10 gap-3">
          <TitleSection title="Portofolio" />
          <Image
            src="/img/about_me.gif"
            alt="aboutgif"
            width={40}
            height={30}
            className="mb-3"
          />
        </div>
        <Card />
      </div>
    </div>
  );
};

export default Portofolio;
