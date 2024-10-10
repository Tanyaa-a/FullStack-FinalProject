import React from "react";
import mainImage from "../../assets/imgMainPage.jpg";

const HomePage = () => {
  return (
    <div>
      <section
        className="w-full h-[500px] bg-no-repeat bg-cover flex items-center justify-center"
        style={{
          backgroundImage: `url(${mainImage})`,
        }}
      >
        <div className="bg-black/50 p-6 lg:text-left text-center rounded-lg">
          <h1 className="text-white text-4xl md:text-5xl xl:text-6xl font-spartan tracking-wide pt-3 mb-8">
            Fresh Coffee Beans, Roasted Daily
          </h1>
          <p className="text-white">
            Direct Trade Coffee Beans, Certified Organic
          </p>
          <div className="flex justify-center lg:justify-start mt-6">
            <button className="bg-red-600 text-white px-4 py-2 rounded">
              Shop Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
