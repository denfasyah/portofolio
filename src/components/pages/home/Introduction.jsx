import { textClass } from "@/components/Navbar";
const Introduction = ({me,role}) => {
  return (
    <div>
      <h1
        className={`text-3xl lg:text-5xl md:text-4xl sm:text-3xl text-Blue font-hammersmith-one my-5`}
      >
        {me}
      </h1>
      <h2 className={`text-xl ${textClass} font-hammersmith-one font-thin`}>
        💫 {role}
      </h2>
    </div>
  );
};

export default Introduction;
