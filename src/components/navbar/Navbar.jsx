import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const navItems = [
    { id: 1, text: "ID's", redirectto: "/idsdata", target:"_self" },
    { id: 2, text: "Usuarios", redirectto: "/userdata", target:"_self"},
    { id: 3, text: "Textos", redirectto: "/textdata", target:"_self" },
    { id: 4, text: "Docs", redirectto: "https://personagen.fly.dev/swagger-ui/index.html#/", target:"_blank" },
  ];

  return (
    <div className="mt-10 border-2 border-black w-[550px] rounded-3xl bg-[#EAD8C0] flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
      {/* Logo */}
      {/* <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1> */}
      {/* https://medium.com/@ryaddev/build-responsive-navbar-with-tailwind-css-and-react-icons-3b13a272dec4*/}

      {/* Desktop Navigation */}
      <ul className="flex">
        {navItems.map((item) => (
          <Link
            key={item.id}
            to={item.redirectto}
            className="p-4 font-bold text-3xl hover:bg-[#D1BB9E] text-[#592407] rounded-xl m-2 cursor-pointer duration-300"
            target={item.target}
          >
            {item.text}
          </Link>
        ))}
      </ul>

      {/* <button onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </button> */}
    </div>
  );
};

export default Navbar;
