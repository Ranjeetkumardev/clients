import React from "react";
import Heroimg from "../image/heroimg.png";
const Home = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-between items-center gap-4 w-full bg-slate-100 h-auto lg:h-screen">
      <div className="flex justify-center items-start flex-col gap-8 lg:1/2 px-10 py-10 lg:px-20 lg:py-20">
        <h1 className="text-green-600 font-bold text-6xl ">
          Make your Jorney Beautyfull as a Full Stack Developer
        </h1>
        <p className="text-state-90 text-2xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit, iusto
          possimus. Suscipit beatae ad voluptatibus numquam iusto quos, quidem
          officiis?
        </p>
        <div className="flex justify-center items-center gap-7">
          <button className="bg-green-800 text-white px-4 lg:px-8 py-3 rounded-md text-[18px] hover:bg-black hover:text-white cursor-pointer">
            View More
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center w-1/2 px-5 py-20 object-cover ">
        <img src={Heroimg} alt="hero" />
      </div>
      <div></div>
    </section>
  );
};

export default Home;
