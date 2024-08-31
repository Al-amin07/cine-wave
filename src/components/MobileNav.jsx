
import { NavLink } from "react-router-dom";
import { navLinks } from "./Header";
import { AiFillHome } from "react-icons/ai";

const MobileNav = () => {
   const newLinks =  [ {title: 'Home', href: '/', icon: AiFillHome},...navLinks]
    return (
        <div className="flex px-3 justify-between gap-10 items-center h-16 bg-neutral-600 bg-opacity-80 lg:hidden w-full fixed bottom-0 text-white">
            {newLinks?.map((item) => (
              <div className=" active:text-orange-500 flex flex-col items-center" key={item?.href}>
                <NavLink
                
                  className={({ isActive }) =>
                    `hover:text-orange-500 text-2xl ${
                      isActive && "text-orange-500 font-bold"
                    }`
                  }
                  to={item?.href}
                >
                  {item?.icon}
                </NavLink>
                  <span>{item?.title}</span>
              </div>
            ))}
        </div>
    );
};

export default MobileNav;