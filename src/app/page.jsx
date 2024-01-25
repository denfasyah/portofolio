import Image from "next/image";
import { GrDocumentDownload } from "react-icons/gr";

const Page = () => {
  return (
    <>
      <div className="pt-1 relative">
        <div className="text-center mt-28">
          <div className="flex items-center justify-center gap-2">
            <h3 className="text-sm lg:text-xl md:text-lg sm:text-md text-gray-500 font-hammersmith-one uppercase">
              Hi There
            </h3>
            <Image
              src="/img/sayhi.gif"
              alt="higif"
              width={30}
              height={20}
              className="mb-3"
            />
          </div>
          <h1 className="text-3xl lg:text-5xl md:text-4xl sm:text-3xl text-Blue font-hammersmith-one my-5 ">
            Adent Fallah Amorisyah
          </h1>
          <h2 className="text-xl text-black font-hammersmith-one font-thin">
            💫 Full stack developer
          </h2>
        </div>

        <div className="mx-auto">
          <Image
            src="/img/me.png"
            alt="Anime Image"
            width={300}
            height={200}
            className="mx-auto lg:mt-4 md:mt-7 sm:mt-8 mt-14"
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

      {/* about */}
      <div id="about" className="text-center bg-white pt-10 relative">
        <div className="flex justify-center items-center mt-10 gap-3">
          <h1 className="text-4xl text-Blue font-bold font-hammersmith-one ">
            About
          </h1>
          <Image
            src="/img/about_me.gif"
            alt="aboutgif"
            width={40}
            height={30}
            className="mb-3"
          />
        </div>
        <div className="mx-10">
          <p className="mt-10 text-black text-lg font-bold text-left mx-auto max-w-screen-lg">
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
        </div>

        <button className="btn mt-5 bg-Blue text-White border-4 rounded-full border-LightBlue mb-10">
          {" "}
          <GrDocumentDownload />
          Dwonload CV
        </button>
      </div>

      <div id="skills" className="text-center bg-white pt-10 relative">
        <div className="flex justify-center items-center mt-10 gap-3">
          <h1 className="text-4xl text-Blue font-bold font-hammersmith-one ">
            Skills
          </h1>
          <Image
            src="/img/code.gif"
            alt="codegif"
            width={40}
            height={30}
            className="mb-3"
          />
        </div>

        <div  className="lg:flex mx-10 mt-10 bg-LightBlue p-10 rounded-xl">
          <div className="lg:w-1/2">
            <div className="flex justify-center gap-5 flex-wrap mr-10">
              <div className="tooltip hover:cursor-pointer" data-tip="Html">
                <Image
                  src="/svg/logoHtml.svg"
                  alt="codegif"
                  width={60}
                  height={60}
                  className="mb-3 bg-slate-50 rounded-full p-2 shadow-slate-500 shadow-xl "
                />
              </div>
              <div className="tooltip hover:cursor-pointer" data-tip="Css">
                <Image
                  src="/svg/logoCss.svg"
                  alt="codegif"
                  width={60}
                  height={60}
                  className="mb-3 bg-slate-50 rounded-full p-2 shadow-slate-500 shadow-xl "
                />
              </div>
              <div
                className="tooltip hover:cursor-pointer"
                data-tip="JavaScript"
              >
                <Image
                  src="/svg/logoJavascript.svg"
                  alt="codegif"
                  width={60}
                  height={60}
                  className="mb-3 bg-slate-50 rounded-full p-2 shadow-slate-500 shadow-xl "
                />
              </div>
              <div
                className="tooltip hover:cursor-pointer"
                data-tip="Bootstrap"
              >
                <Image
                  src="/svg/logoBootstrap.svg"
                  alt="codegif"
                  width={60}
                  height={60}
                  className="mb-3 bg-slate-50 rounded-full p-2 shadow-slate-500 shadow-xl "
                />
              </div>
              <div className="tooltip hover:cursor-pointer" data-tip="Tailwind">
                <Image
                  src="/svg/logoTailwind.svg"
                  alt="codegif"
                  width={60}
                  height={60}
                  className="mb-3 bg-slate-50 rounded-full p-2 shadow-slate-500 shadow-xl "
                />
              </div>
              <div className="tooltip hover:cursor-pointer" data-tip="React">
                <Image
                  src="/svg/logoReact.svg"
                  alt="codegif"
                  width={60}
                  height={60}
                  className="mb-3 bg-slate-50 rounded-full p-2 shadow-slate-500 shadow-xl "
                />
              </div>
              <div className="tooltip hover:cursor-pointer" data-tip="Next Js">
                <Image
                  src="/svg/next-js.svg"
                  alt="codegif"
                  width={60}
                  height={60}
                  className="mb-3 bg-slate-50 rounded-full p-2 shadow-slate-500 shadow-xl "
                />
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 mt-5 lg:mt-0">
            <div className="carousel rounded-box">
              <div className="carousel-item gap-2">
                <Image
                  src="/img/dev.png"
                  alt="codegif"
                  width={400}
                  height={400}
                  className="mb-3  "
                />
                <Image
                  src="/img/frontend.png"
                  alt="codegif"
                  width={400}
                  height={400}
                  className="mb-3  "
                />
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
};

export default Page;
