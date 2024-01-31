import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar fixed z-30 backdrop-blur-2xl bg-opacity-10">
      <div className="navbar-start">
        <Link
          href="/"
          className={`btn btn-ghost text-xl text-Blue font-bold font-hammersmith-one`}
        >
          DenDev
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link
              href="/"
              className={`text-lg font-hammersmith-one text-black`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#about"
              className={`text-lg font-hammersmith-one text-black`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#skills"
              className={`text-lg font-hammersmith-one text-black`}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              href="#portofolio"
              className={`text-lg font-hammersmith-one text-black`}
            >
              Portofolio
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className={`text-lg font-hammersmith-one text-black`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="container navbar-end relative">
        <div className="dropdown">
          <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-black text-lg font-hammersmith-one  font-bold"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex="0"
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-xl rounded-box w-52 overflow-y-auto right-0 origin-top-right absolute bg-base-100"
          >
            <li>
              <Link
                href="/"
                className={`text-lg font-hammersmith-one text-black`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                className={`text-lg font-hammersmith-one text-black`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#skills"
                className={`text-lg font-hammersmith-one text-black`}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                href="#portofolio"
                className={`text-lg font-hammersmith-one text-black`}
              >
                Portofolio
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className={`text-lg font-hammersmith-one text-black`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <br />
    </div>
  );
};

export default Navbar;
