import PropTypes from "prop-types";

export default function Hero({ children }) {
  return (
    <section className="relative h-[50vh] bg-[url('./images/mobile-image-hero-1.jpg')] bg-cover bg-no-repeat sm:h-[60vh] sm:bg-[url('./images/desktop-image-hero-1.jpg')]">
      {children}
      <div className="absolute bottom-0 right-0 flex items-center">
        <div className="flex h-16 w-20 cursor-pointer items-center justify-center bg-black hover:opacity-80">
          <button className="">
            <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M13 0L1 12l12 12"
                stroke="#FFF"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
          </button>
        </div>

        <div className="flex h-16 w-20 cursor-pointer items-center justify-center bg-black hover:opacity-80">
          <button className="hover:opacity-90">
            <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1 0l12 12L1 24"
                stroke="#FFF"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = {
  children: PropTypes.node,
};
