import Image from "next/image";
const ProfileImage = () => {
  return (
    <div>
      <div className="mx-auto">
        <Image
          src="/img/me.png"
          alt="Profile Me"
          width={300}
          height={200}
          className="mx-auto lg:mt-4 md:mt-7 sm:mt-8 mt-14"
        />
      </div>
    </div>
  );
};

export default ProfileImage;
