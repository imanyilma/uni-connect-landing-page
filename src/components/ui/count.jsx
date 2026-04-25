import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function EventStats() {
  const stats = [
    {
      value: "150+",
      label: "Institutions",
      description:
        "Partnered institutions collaborating to deliver high-quality tech education and innovation programs.",
      step: 3,
    },
    {
      value: "5000+",
      label: "Experts",
      description:
        "Industry professionals and mentors actively contributing through talks, workshops, and guidance.",
      step: 100,
    },
    {
      value: "500+",
      label: "Students",
      description:
        "A growing community of learners gaining hands-on experience and advancing their tech careers.",
      step: 10,
    },
  ];

  const useCountUp = (endValue, isVisible, step = 1) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) {
        setCount(0); // reset when leaving view
        return;
      }

      const target = parseInt(endValue);
      const isK = target >= 1000;
      const displayTarget = isK ? Math.round(target / 1000) : target;
      const displayStep = isK ? Math.max(1, Math.round(step / 1000)) : step;
      const duration = 1200;
      const intervalTime = Math.max(10, duration / (displayTarget / displayStep));

      let current = 0;

      const timer = setInterval(() => {
        current += displayStep;
        setCount(current >= displayTarget ? displayTarget : current);
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
    <section ref={sectionRef} className="bg-black py-32">
      <div className="max-w-7xl mx-auto px-6">

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
          className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left"
        >
          {stats.map((item) => {
            const count = useCountUp(item.value, visible, item.step || 1);

            return (
              <motion.div
                key={item.label}
                variants={{
                  hidden: { opacity: 0, y: 50, scale: 0.9 },
                  show: { opacity: 1, y: 0, scale: 1 },
                }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center md:items-start"
              >
                <div className="text-6xl md:text-7xl font-bold text-primary">
                  {(() => {
                    const numericValue = parseInt(item.value);
                    const isKValue = numericValue >= 1000;
                    const hasPlus = item.value.includes("+");
                    return isKValue
                      ? `${count}k${hasPlus ? "+" : ""}`
                      : `${count}${hasPlus ? "+" : ""}`;
                  })()}
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-white">
                  {item.label}
                </h3>

                <p className="mt-5 max-w-sm text-gray-300">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}