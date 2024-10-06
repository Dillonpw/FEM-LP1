import darkFurnitureImage from '../assets/image-about-dark.jpg'
import lightFurnitureImage from '../assets/image-about-light.jpg'

export default function About() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3">
      <div className="relative h-64 md:h-full">
        <img
          src={darkFurnitureImage}
          alt="Dark furniture showcasing our collection"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="m-8 md:m-10">
        <h2 className="mb-2 text-lg font-bold uppercase tracking-wider md:mb-2">
          About our furniture
        </h2>
        <p className="text-gray-500">
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
        </p>
      </div>

      <div className="relative h-64 md:h-full">
        <img
          src={lightFurnitureImage}
          alt="Light furniture showcasing our collection"
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  );
}