import { Menu, Search } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { navLinks } from "../data/products";

const Navbar = () => {
  return (
    <div className="border-b border-border">
      <div className="wrapper flex gap-4 justify-between items-center px-2 h-16">
        <div className="lg:hidden">
          <Menu />
        </div>
        <div className="p-2 rounded bg-accent">
          <Link to={"/"} className="text-xl font-bold font-body">
            Flimesh
          </Link>
        </div>

        <nav className="flex flex-1 items-center gap-4">
          {navLinks.map((navLink) => (
            <NavLink
              key={navLink.title}
              to={navLink.path}
              className={({ isActive }) =>
                `font-medium shrink-0 transition-colors duration-300
                  hover:text-accent
                  after:block after:h-0.5 after"rounded after:w-0 after:bg-accent
                  after:transition-all after:duration-500
                  hover:after:w-full
                  ${isActive ? "text-accent " : "text-muted"}`
              }
            >
              {navLink.title}
            </NavLink>
          ))}
        </nav>
        <form className="flex items-center border rounded">
          <input
            type="search"
            placeholder="search here..."
            className="p-2 outline-none"
          />
          <button className="p-2">
            <Search />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Navbar;
