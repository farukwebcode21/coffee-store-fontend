import BrandIcon from "./BrandIcon";

const CoffeeHeroSection = () => {
  return (
    <div>
      <div className=" bg-hero  bg-cover bg-center bg-no-repeat flex h-[720px]">
        <div className="flex items-center justify-center">
          <div className="w-1/2"></div>
          <div className="w-1/2 text-white space-y-5">
            <h1 className="text-white text-4xl">
              Would you like a Cup of Delicious Coffee?
            </h1>
            <p>
              It coffee time - Sip & Savor - Relaxation in every sip! Get the
              nostalgia back!! Your companion of every moment!!! Enjoy the
              beautiful moments and make them memorable.
            </p>
            <button className="w-[130px] h-[48px] bg-yellow-300 text-black">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <BrandIcon />
    </div>
  );
};

export default CoffeeHeroSection;
