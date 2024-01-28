"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { MdOutlinePreview } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import TitleSection from "@/components/TitleSection";
import { bgClass } from "@/components/Navbar";
import Link from "next/link";

const Portofolio = () => {
  const [tampilkanModal, setTampilkanModal] = useState(false);

  useEffect(() => {
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
    <div>
      <div id="portofolio" className={`text-center ${bgClass} pt-10 relative`}>
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

        <div className="flex justify-center mt-10 mx-10 gap-5 flex-wrap ">
          {/* modal */}
          <div>
            <div className="border-2 border-Blue w-80 rounded-xl shadow-lg shadow-slate-500 pb-5">
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
                <Link
                  href="https://dennime.vercel.app/"
                  className=" h-10 px-2 flex items-center gap-1  bg-Blue text-md text-White border-2 rounded-full border-LightBlue text-center text-xs hover:bg-Bluesea"
                >
                  <MdOutlinePreview className="w-4 h-4" />
                  Preview
                </Link>

                <button
                  onClick={bukaModal}
                  className="h-10 px-3 flex items-center gap-1  bg-Blue text-md text-White border-2 rounded-full border-LightBlue text-center text-xs hover:bg-Bluesea"
                >
                  <FaGithub className="w-4 h-4" />
                  Details
                </button>
              </div>
            </div>
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
      </div>
    </div>
  );
};

export default Portofolio;
