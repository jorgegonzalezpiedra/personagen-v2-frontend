import "./Navbar.css";

import { useState } from "react";

const Navbar = () => {
  
  const [nif, setNif] = useState({
    document: null,
    number: null,
    letter: null,
  });

  const handleClick = async (itemId) => {

    switch (itemId) {
      case 1:
        try {
          const response = await fetch("http://localhost:8080/documents/nif"); // Replace with your API URL
          const responseData = await response.json();
          setNif({
            document: responseData.document,
            number: responseData.number,
            letter: responseData.letter,
          });
          console.log(nif.document)
        } catch (error) {
          console.error("Error fetching data:", error);
          // Handle errors appropriately (e.g., display an error message to the user)
        }

        break;

      case 2:
        break;

      case 3:
        break;
    }
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: "ID's" },
    { id: 2, text: "Usuarios" },
    { id: 3, text: "Textos" },
    { id: 4, text: "Docs" },
  ];

  return (
    <div className="mt-10 rounded-3xl bg-[#EAD8C0] flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
      {/* Logo */}
      {/* <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1> */}
      {/* https://medium.com/@ryaddev/build-responsive-navbar-with-tailwind-css-and-react-icons-3b13a272dec4*/}

      {/* Desktop Navigation */}
      <ul className="hidden md:flex">
        {navItems.map((item) => (
          <button
            key={item.id}
            className="p-4 hover:bg-[#D1BB9E] text-[#592407] rounded-xl m-2 cursor-pointer duration-300"
            onClick={() => handleClick(item.id)}
          >
            {nif && (
              <pre>
                Field 1: {nif.document} <br />
              </pre>
            )}
            {item.text}
          </button>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
