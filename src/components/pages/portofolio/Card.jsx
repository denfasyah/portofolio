"use client";
import { useState, useEffect } from "react";
import { MdOutlinePreview } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import Modal from "./Modal";

const Card = () => {
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
            Dennime
          </h2>
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

        <Modal click={tutupModal}/>
      </div>
      {/*  */}
    </div>
  );
};

export default Card;
