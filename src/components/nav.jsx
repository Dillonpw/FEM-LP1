import { useState } from "react";

export default function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      {/* Mobile Navigation (Visible only on small screens) */}
      <nav className="relative flex items-center justify-between p-8 lg:hidden">
        {!isNavOpen ? (
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
            <a href="/" className="text-3xl text-white">
              room
            </a>
            <div className="w-4"></div>
          </>
        ) : (
          <div className="fixed left-0 right-0 top-0 z-50 flex h-[7rem] w-full items-center justify-between bg-white p-8">
            <button onClick={toggleNav} className="mr-4">
              <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M14.364.222l1.414 1.414L9.414 8l6.364 6.364-1.414 1.414L8 9.414l-6.364 6.364-1.414-1.414L6.586 8 .222 1.636 1.636.222 8 6.586 14.364.222z"
                  fill="#000"
                  fillRule="evenodd"
                  opacity=".201"
                />
              </svg>
            </button>
            <ul className="flex items-center gap-8 font-bold">
              <li className="cursor-pointer text-lg decoration-4 underline-offset-8 hover:underline">
                home
              </li>
              <li className="cursor-pointer text-lg decoration-4 underline-offset-8 hover:underline">
                shop
              </li>
              <li className="cursor-pointer text-lg decoration-4 underline-offset-8 hover:underline">
                about
              </li>
              <li className="cursor-pointer text-lg decoration-4 underline-offset-8 hover:underline">
                contact
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* Desktop Navigation (Visible only on medium and larger screens) */}
      <nav className="absolute left-0 right-0 top-0 z-20 hidden items-center justify-between p-8 lg:flex">
        <div className="flex gap-14">
          <a href="/" className="text-xl font-bold text-white">
            room
          </a>
          <ul className="flex items-center gap-14">
            <li className="cursor-pointer text-lg text-white decoration-4 underline-offset-8 hover:underline">
              home
            </li>
            <li className="cursor-pointer text-lg text-white decoration-4 underline-offset-8 hover:underline">
              shop
            </li>
            <li className="cursor-pointer text-lg text-white decoration-4 underline-offset-8 hover:underline">
              about
            </li>
            <li className="cursor-pointer text-lg text-white decoration-4 underline-offset-8 hover:underline">
              contact
            </li>
          </ul>
        </div>
        <div></div>
      </nav>
    </>
  );
}
