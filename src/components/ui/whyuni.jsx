import React, { useEffect, useRef, useState } from "react";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import Image1 from "../../assets/im9.png";

export default function StudentSection() {
  const handleNavigateToDownload = () => {
    const downloadSection = document.getElementById("Download");
    downloadSection?.scrollIntoView({ behavior: "smooth" });
  };

  const stats = [
  
  {
    value: "100+",
    label: "Universities",
    description: "Connected through one platform",
    step: 10,
  },
  {
    value: "500K",
    label: "Students",
    description: "Actively engaging daily",
    step: 50,
  },
  {
    value: "1000k",
    label: "Interactions",
    description: "Posts, chats & discussions",
    step: 60,
  },
];
 

  const useCountUp = (endValue, isVisible, step = 1) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) {
        setCount(0);
        return;
      }

      const rawValue = endValue.toString().toLowerCase();
      const isK = rawValue.includes("k");
      const numeric = parseFloat(rawValue.replace(/[^0-9.]/g, "")) || 0;
      const target = isK ? numeric : numeric;
      const duration = 1200;
      const intervalTime = Math.max(10, duration / (Math.max(1, target) / step));

      let current = 0;
      const timer = setInterval(() => {
        current += step;
        setCount(current >= target ? target : current);
      }, intervalTime);

      return () => clearInterval(timer);
    }, [endValue, isVisible, step]);

    return count;
  };

  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const isInView = entries[0].isIntersecting;
        setVisible(isInView);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="why-uniconnect" className="w-full -mb-25 py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-stretch">
        {/* LEFT IMAGE SIDE */}
        <div className="relative rounded-3xl overflow-hidden">
          <img
            src={Image1}
            alt="Student"
            className="w-full h-full object-cover rounded-3xl"
            loading="lazy"
          />
          {/* Floating Card */}
          <div className="absolute bottom-45 left-70 bg-white rounded-2xl shadow-lg p-4 w-[75%] md:w-[49%]">
            <div className="flex items-center gap-3 mb-2">
              <img
                src="https://i.pravatar.cc/40"
                alt="avatar"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h3 className="font-semibold text-black">Iman</h3>
<span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full">
  Future Doctor
</span>
</div>
</div>

<p className="text-sm text-gray-600">
  Has anyone reviewed the cardiovascular system notes for tomorrow? 
</p>
          </div>
        </div>

        {/* RIGHT CONTENT SIDE WITH STATS */}
        <div ref={sectionRef} className="bg-black text-white rounded-3xl p-20 flex flex-col justify-between space-y-8">
          <div className="flex-grow space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight ">
              Why  Students use UniConnect
            </h2>
            <p className="text-gray-300 mb-6">
              Students use UniConnect to connect, collaborate, and stay updated within a unified university community
            </p>
        

<button
  type="button"
  onClick={handleNavigateToDownload}
  className="flex items-center gap-2 text-white font-medium hover:scale-105 transition-transform"
>
  Download now
  <span className="bg-primary text-white w-6 h-6 flex items-center justify-center rounded-full">
     <ArrowDown size={14} />
  </span>
</button>

            
          </div>

          {/* MERGED STATS GRID */}
          <motion.div
            initial="hidden"
            animate={visible ? "show" : "hidden"}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-gray-800"
          >
            {stats.map((item, index) => {
              const count = useCountUp(item.value, visible, item.step || 1);
              const rawValue = item.value.toString().toLowerCase();
              const hasPlus = item.value.includes("+");
              const formattedCount = rawValue.includes("k")
                ? `${Math.round(count)}k${hasPlus ? "+" : ""}`
                : count >= 1000
                ? `${Math.round(count / 1000)}k${hasPlus ? "+" : ""}`
                : `${count}${hasPlus ? "+" : ""}`;

              return (
                <motion.div
                  key={item.label}
                  variants={{
                    hidden: { opacity: 0, y: 50, scale: 0.9 },
                    show: { opacity: 1, y: 0, scale: 1 },
                  }}
                  transition={{ duration: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center md:items-start text-center md:text-left"
                >
                  <div className="text-2xl md:text-3xl font-bold text-primary leading-none">
                    {formattedCount}
                  </div>
                  <h3 className="mt-4 text-xl md:text-2xl font-semibold text-white">
                    {item.label}
                  </h3>
                  <p className="mt-3 max-w-xs text-gray-300 text-sm">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
