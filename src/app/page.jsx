"use client";
import { useState, useEffect } from "react";

import Image from "next/image";
import { GrDocumentDownload } from "react-icons/gr";
import { MdOutlinePreview } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import {
  textClass,
  bgClass,
  textPrimaryClass,
  bgPrimaryClass,
} from "../components/Navbar";

const Page = () => {
  const [tampilkanModal, setTampilkanModal] = useState(false);

  useEffect(() => {
    // Anda dapat membuka modal di sini
    if (tampilkanModal) {
      document.getElementById("my_modal_3").showModal();
    }
  }, [tampilkanModal]);

  const bukaModal = () => {
    setTampilkanModal(true);
  };

  const tutupModal = () => {
    setTampilkanModal(false);
  };

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
          <h1
            className={`text-3xl lg:text-5xl md:text-4xl sm:text-3xl text-Blue font-hammersmith-one my-5`}
          >
            Adent Fallah Amorisyah
          </h1>
          <h2 className={`text-xl ${textClass} font-hammersmith-one font-thin`}>
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
      <div id="about" className={`text-center ${bgClass} pt-10 relative`}>
        <div className="flex justify-center items-center mt-10 gap-3">
          <h1 className="text-4xl text-Blue font-bold font-hammersmith-one">
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
          <p
            className={`mt-10 ${textClass} text-lg font-bold text-left mx-auto max-w-screen-lg`}
          >
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

        <button className="btn mt-5 bg-Blue text-White border-2 rounded-full border-LightBlue mb-10 hover:bg-Bluesea">
          {" "}
          <GrDocumentDownload />
          Dwonload CV
        </button>
      </div>

      <div id="skills" className={`text-center ${bgClass} pt-10 relative`}>
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

        <div className="lg:flex mx-10 mt-10 bg-LightBlue p-10 rounded-xl">
          <div className="lg:w-1/2">
            <div className="flex justify-center gap-5 flex-wrap lg:mr-10">
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
              <div className="tooltip hover:cursor-pointer" data-tip="Php">
                <Image
                  src="/svg/logoPhp.svg"
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

              <div className="tooltip hover:cursor-pointer" data-tip="Node Js">
                <Image
                  src="/svg/logoNodejs.svg"
                  alt="codegif"
                  width={60}
                  height={60}
                  className="mb-3 bg-slate-50 rounded-full p-2 shadow-slate-500 shadow-xl "
                />
              </div>
              <div className="tooltip hover:cursor-pointer" data-tip="React Js">
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
          <div className="lg:w-1/2 mt-10 lg:mt-0">
            <div className="carousel rounded-box">
              <div className="carousel-item gap-2">
                <Image
                  src="/img/dev.png"
                  alt="codegif"
                  width={400}
                  height={400}
                  className="mb-3 object-cover "
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

        {/* portofolio */}
        <div
          id="portofolio"
          className={`text-center ${bgClass} pt-10 relative`}
        >
          <div className="flex justify-center items-center mt-10 gap-3">
            <h1 className="text-4xl text-Blue font-bold font-hammersmith-one ">
              Portofolio
            </h1>
            <Image
              src="/img/about_me.gif"
              alt="aboutgif"
              width={40}
              height={30}
              className="mb-3"
            />
          </div>

          <div className="flex justify-center mt-10 mx-10 gap-5 flex-wrap ">
            {/* modal */}
            <div>
              <button className="" onClick={bukaModal}>
                <div className="border-2 border-Blue w-80 rounded-xl shadow-lg shadow-slate-500 pb-5 hover:transform hover:scale-95 transition-transform duration-500 ease-in-out hover:shadow-none cursor-pointer">
                  <Image
                    src="/img/dennime.png"
                    alt="aboutgif"
                    width={450}
                    height={30}
                    className="mb-3 rounded-t-lg"
                  />
                  <h2 className="font-semibold text-xl font-hammersmith-one">
                    Web Responsive Design
                  </h2>
                  {/* <div className=" border-2 border-Blue mt-5 shadow-slate-500 shadow-sm rounded-r-2xl rounded-bl-2xl inline-block min-w-[min-width]">
                <div className="flex justify-start gap-2 p-1">
                  <Image
                    src="/svg/next-js.svg"
                    alt="codegif"
                    width={30}
                    height={30}
                    className="bg-slate-50 rounded-full p-1"
                  />
                  <Image
                    src="/svg/logoTailwind.svg"
                    alt="codegif"
                    width={30}
                    height={30}
                    className="bg-slate-50 rounded-full p-1"
                  />
                </div>
              </div> */}

                  <div className="flex justify-end mt-5 gap-1 mr-2">
                    <button className=" h-10 px-2 flex items-center gap-1  bg-Blue text-md text-White border-2 rounded-full border-LightBlue text-center text-xs hover:bg-Bluesea">
                      <MdOutlinePreview className="w-4 h-4" />
                      Preview
                    </button>
                    <button
                      onClick={bukaModal}
                      className="h-10 px-3 flex items-center gap-1  bg-Blue text-md text-White border-2 rounded-full border-LightBlue text-center text-xs hover:bg-Bluesea"
                    >
                      <FaGithub className="w-4 h-4" />
                      Details
                    </button>
                  </div>
                </div>
              </button>
              <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                  <form method="dialog">
                    {/* jika ada tombol dalam formulir, itu akan menutup modal */}
                    <button
                      className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                      onClick={tutupModal}
                    >
                      ✕
                    </button>
                  </form>
                  <h3 className="font-bold text-lg">Halo!</h3>
                  <p className="py-4">
                    Tekan tombol ESC atau klik tombol ✕ untuk menutup
                  </p>
                </div>
              </dialog>
            </div>
            {/*  */}
          </div>

          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    </>
  );
};

export default Page;
