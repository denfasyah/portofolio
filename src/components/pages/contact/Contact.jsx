import Image from "next/image";
import TitleSection from "@/components/TitleSection";
import { IoIosSend } from "react-icons/io";

const Contact = () => {
  return (
    <div id="contact" className={`text-center bg-white pt-10 relative`}>
      <div className="flex justify-center items-center mt-10 gap-3">
        <TitleSection title="Contact" />
        <Image
          src="/img/code.gif"
          alt="codegif"
          width={40}
          height={30}
          className="mb-3"
        />
      </div>

      <div className="mt-10 mx-10 rounded-xl">
        <form action="" className="flex justify-center items-center" method="post">
          <div className="lg:w-1/2 bg-LightBlue shadow-xl shadow-slate-500 p-8 rounded-tr-lg rounded-bl-lg rounded-br-lg">
            <div className="mb-4">
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Name"
                className={`w-full  py-2 px-4 border-2 border-Blue rounded-tr-md rounded-bl-md rounded-br-md`}
              />
            </div>

            <div className="mb-4">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className="w-full py-2 px-4 border-2 border-Blue rounded-tr-md rounded-bl-md rounded-br-md"
              />
            </div>

            <div className="mb-4">
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                rows="4"
                className="w-full py-2 px-4 border-2 border-Blue rounded-tr-md rounded-bl-md rounded-br-md"
              ></textarea>
            </div>

            <button className="btn mt-5 bg-Blue text-White border-2 shadow-xl  rounded-full border-LightBlue mb-10 hover:bg-Bluesea">
            <IoIosSend /> Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
