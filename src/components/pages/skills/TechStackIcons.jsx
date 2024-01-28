import Image from "next/image";
const TechStackIcons = () => {
  return (
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
          <div className="tooltip hover:cursor-pointer" data-tip="JavaScript">
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
          <div className="tooltip hover:cursor-pointer" data-tip="Bootstrap">
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
          <div className="tooltip hover:cursor-pointer" data-tip="Mysql">
            <Image
              src="/svg/logoMysql.svg"
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
  );
};

export default TechStackIcons;
