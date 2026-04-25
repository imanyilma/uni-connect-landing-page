import React from "react";

import ImageRight from "../../assets/about1.jpg";
export default function AboutUs() {
  return (
    <div id="about" className="w-full overflow-hidden py-17">
    <h1 className="text-5xl font-semibold text-primary tracking-wide text-center mb-6">ABOUT APP</h1>
    <section  className="bg-black -mb-24 text-primary font-sans px-6 lg:px-60 md:px-6 py-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
      {/* Left Image + Text */}
      <div className="order-1">
           

        <p className="text-orange-200 leading-relaxed mb-4">
  Welcome to <span className="font-semibold text-primary">UniConnect</span>, 
  a centralized digital platform designed to transform how university students 
  connect, communicate, and collaborate. Built from real student experiences, 
  UniConnect brings together academic communities into one unified space where 
  ideas are shared, opportunities are discovered, and meaningful connections are made.
</p>
      </div>
     <img
  src={ImageRight}
  alt="Room"
  className="rounded-xl shadow-lg mb-6 cursor-pointer hover:opacity-80 transition order-3 md:order-2"
/>

          

      {/* Right Side Text */}
      
    </section>
    </div>
  );
}
