import { useState } from "react";
import PropTypes from "prop-types";

const scenes = [
  {
    mobileImage: "src/images/mobile-image-hero-1.jpg",
    desktopImage: "src/images/desktop-image-hero-1.jpg",
    title: "Discover innovative ways to decorate",
    description:
      "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
  },
  {
    mobileImage: "src/images/mobile-image-hero-2.jpg",
    desktopImage: "src/images/desktop-image-hero-2.jpg",
    title: "We are available all across the globe",
    description:
      "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
  },
  {
    mobileImage: "src/images/mobile-image-hero-3.jpg",
    desktopImage: "src/images/desktop-image-hero-3.jpg",
    title: "Manufactured with the best materials",
    description:
      "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
  },
];

export default function Hero({ children }) {
  const [currentSceneIndex, setCurrentSceneIndex] = useState(0);
  const currentScene = scenes[currentSceneIndex];

  const nextScene = () => {
    setCurrentSceneIndex((prevIndex) => (prevIndex + 1) % scenes.length);
  };

  const prevScene = () => {
    setCurrentSceneIndex(
      (prevIndex) => (prevIndex - 1 + scenes.length) % scenes.length,
    );
  };

  return (
    <div className="relative grid grid-cols-1 md:grid-cols-5">
      <section className="relative h-[42vh] sm:h-[60vh] md:col-span-3">
        {/* Mobile background image */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat sm:hidden"
          style={{
            backgroundImage: `url(${currentScene.mobileImage})`,
          }}
        />
        {/* Desktop background image */}
        <div
          className="absolute inset-0 z-0 hidden bg-cover bg-center bg-no-repeat sm:block"
          style={{
            backgroundImage: `url(${currentScene.desktopImage})`,
          }}
        />

        <div className="z-10">{children}</div>
        <div className="absolute bottom-0 right-0 z-10 flex items-center md:hidden">
          <button
            className="flex h-14 w-16 cursor-pointer items-center justify-center bg-black hover:opacity-80 sm:h-16 sm:w-20"
            onClick={prevScene}
          >
            <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M13 0L1 12l12 12"
                stroke="#FFF"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
          </button>
          <button
            className="flex h-14 w-16 cursor-pointer items-center justify-center bg-black hover:opacity-80 sm:h-16 sm:w-20"
            onClick={nextScene}
          >
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
      </section>
      <section className="md:col-span-2">
        <div className="m-8 lg:m-20">
          <h1 className="mb-8 text-3xl font-bold sm:text-4xl">
            {currentScene.title}
          </h1>
          <p className="mb-8 text-gray-500">{currentScene.description}</p>
          <a
            href="#shop"
            className="flex items-center tracking-[.65rem] hover:opacity-50"
          >
            SHOP NOW{" "}
            <svg width="40" height="12" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z"
                fill="#000"
                fillRule="nonzero"
              />
            </svg>
          </a>
        </div>
        <div className="left-50 absolute bottom-0 z-10 hidden items-center md:flex">
          <button
            className="flex h-12 w-16 cursor-pointer items-center justify-center bg-black hover:opacity-80 sm:h-16 sm:w-20"
            onClick={prevScene}
          >
            <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M13 0L1 12l12 12"
                stroke="#FFF"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
          </button>
          <button
            className="flex h-12 w-16 cursor-pointer items-center justify-center bg-black hover:opacity-80 sm:h-16 sm:w-20"
            onClick={nextScene}
          >
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
      </section>
    </div>
  );
}

Hero.propTypes = {
  children: PropTypes.node,
};
