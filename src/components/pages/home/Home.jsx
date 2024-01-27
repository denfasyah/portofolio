import Greeting from "./Greeting";
import Introduction from "./Introduction";
import SocialMedia from "./SocialMedia";
import ProfileImage from "./ProfileImage";

const Home = () => {
  return (
    <div>
      <div className="pt-1 relative">
        <div className="text-center mt-28">
          <Greeting />
          <Introduction
            me="Adent Fallah Amorisyah"
            role="Full Stack Developer"
          />
        </div>
        <ProfileImage />
        <SocialMedia />
      </div>
    </div>
  );
};

export default Home;
