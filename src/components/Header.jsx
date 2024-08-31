import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

import { IoSearch } from "react-icons/io5";

import { BiSolidMoviePlay } from "react-icons/bi";
import { PiTelevisionSimpleFill } from "react-icons/pi";

export const navLinks = [
    { title: "TV Shows", href: "tv", icon: PiTelevisionSimpleFill },
    { title: "Movies", href: "movie", icon: BiSolidMoviePlay },
  ];
const Header = () => {
 
  const navigate = useNavigate()


  const handleSearch = (e) => {
   navigate(`/search?query=${e.target.value}`)
    
  }
  const handleSubmit = e => {
    e.preventDefault();
    navigate('/search')
  }
  return (
    <header className="w-full flex justify-between z-30 fixed top-0 bg-neutral-600 bg-opacity-60 h-16">
      <div className="container  mx-auto px-3 flex justify-between items-center h-full ">
        <div className="flex gap-8 items-center">
          <Link
            to={"/"}
            className="text-4xl font-bold bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent"
          >
            CineWave
          </Link>
          <nav className=" hidden lg:flex items-center gap-4">
            {navLinks.map((item) => (
              <div key={item?.href}>
                <NavLink
                  className={({ isactive }) =>
                    `hover:text-orange-500 text-lg ${
                      isactive && "text-orange-500 font-bold"
                    }`
                  }
                  to={item?.href}
                >
                  {item?.title}
                </NavLink>
              </div>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-5">
          <form onSubmit={handleSubmit} className="flex items-center  ">
            <input
            onChange={handleSearch}
              type="text"
              className="px-3 hidden lg:inline-block py-2 outline-none placeholder:text-neutral-200 rounded-full text-white bg-transparent"
              placeholder="Search Here"
            />
            <button type="submit" className="">
              {" "}
              <IoSearch className="text-4xl " />
            </button>
          </form>

          <FaUserCircle className="text-4xl active:scale-50 transition-all" />
        </div>
      </div>
    </header>
  );
};

export default Header;
