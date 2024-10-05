import { useState } from "react";

export default function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="relative flex items-center justify-evenly py-8">
      {!isNavOpen && (
        <>
          <button onClick={toggleNav}>
            <svg width="20" height="14" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20 12v2H0v-2h20zm0-6v2H0V6h20zm0-6v2H0V0h20z"
                fill="#FFF"
                fillRule="evenodd"
              />
            </svg>
          </button>
          <a href="/" className="">
            room
          </a>
        </>
      )}

      {isNavOpen && (
        <div className="fixed inset-0 z-50 flex h-40 items-center justify-evenly bg-white">
          <button onClick={toggleNav} className="">
            <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14.364.222l1.414 1.414L9.414 8l6.364 6.364-1.414 1.414L8 9.414l-6.364 6.364-1.414-1.414L6.586 8 .222 1.636 1.636.222 8 6.586 14.364.222z"
                fill="#000"
                fillRule="evenodd"
                opacity=".201"
              />
            </svg>
          </button>
          <ul className="flex items-center gap-2">
            <li className="text-lg">Home</li>
            <li className="text-lg">Shop</li>
            <li className="text-lg">About</li>
            <li className="text-lg">Contact</li>
          </ul>
        </div>
      )}
    </nav>
  );
}
