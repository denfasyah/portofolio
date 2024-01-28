import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const Modal = ({click}) => {
  return (
    <dialog id="my_modal_3" className="modal ">
      <div className="modal-box border-2 border-Blue">
        <form method="dialog">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={click}
          >
            ✕
          </button>
        </form>
        <div className="w-full mt-5 rounded-xl  pb-3">
          <h2 className="font-semibold text-xl font-hammersmith-one">
            Dennime
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione hic
            amet, et architecto ex rem mollitia doloribus facilis fugit enim!
          </p>
          <div className=" border-2 border-Blue mt-5 shadow-slate-500 shadow-sm rounded-r-2xl rounded-bl-2xl inline-block min-w-[min-width]">
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
          </div>

          <div className="flex justify-end mt-5 gap-1 mr-2">
            <Link
              href="https://github.com/denfasyah/dennime"
              className=" h-10 px-2 flex items-center gap-1  bg-Blue text-md text-White border-2 rounded-full border-LightBlue text-center text-xs hover:bg-Bluesea"
            >
              <FaGithub className="w-4 h-4" />
              Repository
            </Link>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
