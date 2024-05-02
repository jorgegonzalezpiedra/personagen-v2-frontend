import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  // Array containing navigation items
  const navItems = [
    { id: 1, text: "ID's", redirectto: "/idsdata" },
    { id: 2, text: "Usuarios", redirectto: "/userdata" },
    { id: 3, text: "Textos", redirectto: "/textdata" },
    { id: 4, text: "Docs", redirectto: "/userdat" },
  ];

  return (
    <div className="mt-10 w-[550px] rounded-3xl bg-[#EAD8C0] flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
      {/* Logo */}
      {/* <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1> */}
      {/* https://medium.com/@ryaddev/build-responsive-navbar-with-tailwind-css-and-react-icons-3b13a272dec4*/}

      {/* Desktop Navigation */}
      <ul className="hidden md:flex">
        {navItems.map((item) => (
          <Link
            key={item.id}
            to={item.redirectto}
            className="p-4 font-bold text-lg lg:text-3xl hover:bg-[#D1BB9E] text-[#592407] rounded-xl m-2 cursor-pointer duration-300"
          >
            {item.text}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
