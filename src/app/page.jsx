import Image from "next/image";

const Page = () => {
  return (
    <div clas>
      <div className="text-center mt-16">
        <h3 className="text-xl text-gray-500 font-hammersmith-one uppercase">
          Hi There👋
        </h3>
        <h1 className="text-5xl text-blue-500 font-hammersmith-one my-5 ">
          Adent Fallah Amorisyah
        </h1>
        <h2 className="text-2xl text-black font-hammersmith-one font-thin">
          Full stack developer
        </h2>
      </div>

      <div className="mx-auto">
        <Image
          src="/img/me.png"
          alt="Anime Image"
          width={300}
          height={200}
          className="mx-auto"
        />
      </div>
    </div>
  );
};

export default Page;
