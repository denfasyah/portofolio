import Image from "next/image"
const Certificates = () => {
  return (
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
        <Image
          src="/img/dev.png"
          alt="codegif"
          width={400}
          height={400}
          className="mb-3 object-cover "
        />
      </div>
    </div>
  </div>
  )
}

export default Certificates