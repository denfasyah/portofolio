import Image from "next/image";
import Link from "next/link";

const SocialMedia = () => {
  return (
    <div>
      {/* wa */}
      <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/5 ml-24">
        <Link href="https://wa.me/6285173190648/?text=">
          <Image
            src="svg/wa.svg"
            alt="whatsapp"
            width={50}
            height={50}
            className="mx-auto lg:mt-0 md:mt-4 mt-8"
          />
        </Link>
      </div>

      {/* linkedin */}
      <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/5 ml-32 mt-20 ">
        <Link href="https://www.linkedin.com/in/adent-fallah-612b28282/">
          <Image
            src="svg/linkedin.svg"
            alt="linkedin"
            width={50}
            height={50}
            className="mx-auto lg:mt-0 md:mt-4 mt-8"
          />
        </Link>
      </div>

      {/* github */}
      <div className="absolute top-1/2 right-1/2 transform -translate-y-1/2 -translate-x-1/2 mr-16">
        <Link href="https://github.com/denfasyah/">
          <Image
            src="svg/github.svg"
            alt="disscord"
            width={50}
            height={50}
            className="mx-auto lg:mt-0 md:mt-4 mt-8"
          />
        </Link>
      </div>

      {/* dc */}
      <div className="absolute top-1/2 right-1/2 transform -translate-y-1/2 -translate-x-1/5 mr-32 mt-20">
        <Link href="https://discord.com/channels/@me">
          <Image
            src="svg/dc.svg"
            alt="disscord"
            width={50}
            height={50}
            className="mx-auto lg:mt-0 md:mt-4 mt-8"
          />
        </Link>
      </div>
    </div>
  );
};

export default SocialMedia;
