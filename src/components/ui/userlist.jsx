import React from "react";

// Import local images
import Image1 from "../../assets/users/image1.jpg";
import Image2 from"../../assets/iz.jpg";
import Image3 from "../../assets/iman.jpg";
import Image4 from "../../assets/tina.jpg";
import Image5 from "../../assets/tsga.jpg";
import Image6 from "../../assets/albert.jpg";
const cards = [
  { name: "Feysel", role: "Lawyer", image: Image1 },
  { name: "أمي", role: "UI Designer", image: Image2 },
  { name: "Iman", role: "Developer", image: Image3 },
   { name: "Albert", role: "scientist ", image: Image6 },
  { name: "Tina", role: "Psycologist", image: Image4 },
  { name: "Tsega", role: "Doctor", image: Image5 },
 
];

export default function MovingCards() {
  return (
    <div id="Experts" className="w-full overflow-hidden py-20">

      {/* Title */}
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary px-6 md:px-12 lg:px-20 mb-10">
        Experts
      </h1>

      {/* Marquee Container */}
      <div className="flex animate-marquee gap-4 px-10">

        {cards.concat(cards).map((card, index) => (
          <div
            key={index}
            className="
              min-w-[260px] 
              sm:min-w-[300px] 
              md:min-w-[350px] 
              lg:min-w-[300px]
              bg-zinc-900
              border border-primary/30
              rounded-2xl
              shadow-lg
              p-6 md:p-5
              flex-shrink-0
            "
          >
            <img
              src={card.image}
              alt={card.name}
              className="
                w-full 
                h-[300px] 
                sm:h-[230px] 
                md:h-[260px] 
                object-cover 
                rounded-xl
              "
            />

            <h3 className="mt-4 text-base md:text-lg font-semibold">
              {card.name}
            </h3>

            <p className="text-gray-400 text-sm">
              {card.role}
            </p>
          </div>
        ))}

      </div>
    </div>
  );
}