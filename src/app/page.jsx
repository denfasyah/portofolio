import Image from "next/image";

const Page = () => {
  return (
    <>
      <div className="pt-1 relative">
        <div className="text-center mt-12">
          <h3 className="text-sm lg:text-xl md:text-lg sm:text-md text-gray-500 font-hammersmith-one uppercase">
            Hi There👋
          </h3>
          <h1 className="text-3xl lg:text-5xl md:text-4xl sm:text-3xl text-Blue font-hammersmith-one my-5 ">
            Adent Fallah Amorisyah
          </h1>
          <h2 className="text-xl text-black font-hammersmith-one font-thin">
            Full stack developer
          </h2>
        </div>

        <div className="mx-auto">
          <Image
            src="/img/me.png"
            alt="Anime Image"
            width={300}
            height={200}
            className="mx-auto lg:mt-4 md:mt-7 mt-20"
          />
        </div>

        {/* wa */}
        <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/5 ml-24">
          <Image
            src="svg/wa.svg"
            alt="whatsapp"
            width={50}
            height={50}
            className="mx-auto lg:mt-0 md:mt-4 mt-8"
          />
        </div>

        {/* linkedin */}
        <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/5 ml-32 mt-20 ">
          <Image
            src="svg/linkedin.svg"
            alt="linkedin"
            width={50}
            height={50}
            className="mx-auto lg:mt-0 md:mt-4 mt-8"
          />
        </div>

        {/* github */}
        <div className="absolute top-1/2 right-1/2 transform -translate-y-1/2 -translate-x-1/2 mr-16">
          <Image
            src="svg/github.svg"
            alt="disscord"
            width={50}
            height={50}
            className="mx-auto lg:mt-0 md:mt-4 mt-8"
          />
        </div>

        {/* dc */}
        <div className="absolute top-1/2 right-1/2 transform -translate-y-1/2 -translate-x-1/5 mr-32 mt-20">
          <Image
            src="svg/dc.svg"
            alt="disscord"
            width={50}
            height={50}
            className="mx-auto lg:mt-0 md:mt-4 mt-8"
          />
        </div>
      </div>

      <div className="text-center bg-white pt-10 relative">
        <div className="">
          <h1 className="mt-20 text-4xl text-Blue font-bold font-hammersmith-one ">
            About <span>🌚</span>
          </h1>

          <p className="mt-10 text-black text-lg font-bold text-pretty mx-auto max-w-screen-lg">
            Hi👋 Im Adent Fallah Amorisyah, a Software Engineering student at
            Bina Sarana Informatika University. 20 years old, I am focused on my
            self-development journey as a Fullstack Developer. <br /> <br />
            My education provides a strong foundation for programming and
            software development. I am actively involved in the developer
            community and software development projects. I believe that
            collaboration is the key to success, and I continue to improve my
            skills in both frontend and backend. <br /> <br /> With a high
            passion for technology, I always follow the latest trends and try to
            keep learning. I am committed to being a creative and efficient
            Fullstack Developer. <br /> Lets discuss ideas, projects, or
            collaboration opportunities!
          </p>

          <button className="btn mt-5 bg-Blue text-White border-4 rounded-full border-LightBlue mb-10">
            {" "}
            Dwonload CV
          </button>
        </div>
      </div>
    </>
  );
};

export default Page;
