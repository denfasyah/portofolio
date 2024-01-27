import { textClass } from "@/components/Navbar";
import Link from "next/link";

const Description = () => {
  return (
    <div>
      <div className="mx-10">
        <p
          className={`mt-10 ${textClass} text-lg font-bold text-left mx-auto max-w-screen-lg`}
        >
          Hi👋 Im Adent Fallah Amorisyah, a Software Engineering student active at{" "}
          <Link href="https://www.bsi.ac.id/" className="text-Bluesea">
            Bina Sarana Informatika University
          </Link>
          . 20 years old, I am focused on my self-development journey as a
          Fullstack Developer. <br /> <br />
          My education provides a strong foundation for programming and software
          development. I am actively involved in the developer community and
          software development projects. I believe that collaboration is the key
          to success, and I continue to improve my skills in both frontend and
          backend. <br /> <br /> With a high passion for technology, I always
          follow the latest trends and try to keep learning. I am committed to
          being a creative and efficient Fullstack Developer. <br /> Lets
          discuss ideas, projects, or collaboration opportunities!
        </p>
      </div>
    </div>
  );
};

export default Description;
