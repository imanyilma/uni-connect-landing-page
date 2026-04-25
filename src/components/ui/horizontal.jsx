import React from "react";

// Import local images (adjust paths if needed)
import logo1 from "../../assets/logos/logo1.png";
import logo2 from "../../assets/logos/logo2.png";
import logo3 from "../../assets/logos/logo3.png";
import logo4 from "../../assets/logos/logo4.png";
import logo5 from "../../assets/logos/logo5.png";
// import logo6 from "../assets/logos/logo6.png";
// import logo7 from "../assets/logos/logo7.png";
// import logo8 from "../assets/logos/logo8.png";
// import logo9 from "../assets/logos/logo9.png";
// import logo10 from "../assets/logos/logo10.png";

const logos = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
   logo4,
  logo5,
  logo1,
  logo2,
  logo3,
  logo4,
  logo5


];

export default function LogoMarquee() {
  return (
    <div className="w-full overflow-hidden -py-9 ">
      <div className="relative flex">
        {/* Track */}
        <div className="flex animate-marquee gap-10">
          {logos.concat(logos).map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`logo-${index}`}
              className="h-25 w-auto object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  );
}


