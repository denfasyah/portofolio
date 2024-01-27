import Image from "next/image"
const SocialMedia = () => {
  return (
    <div>
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
  )
}

export default SocialMedia