import React from "react";

const NoutFound = () => {
  return (
    <section className="w-full flex flex-col lg:flex-row justify-center items-center bg-slate-200  h-fit p-4 lg:p-20  ">
      <div className="flex flex-col lg:flex-row justify-center items-start w-full lg:w-3/4 gap-10 bg-white rounded-lg p-10 py-12  z-20">
        <img
          className="w-full h-64"
          src="https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1"
          alt="Page NotFound"
        />
      </div>
    </section>
  );
};

export default NoutFound;
