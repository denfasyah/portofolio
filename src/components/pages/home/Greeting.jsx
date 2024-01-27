import Image from "next/image"
const Greeting = () => {
  return (
    <div>
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
    </div>
  )
}

export default Greeting