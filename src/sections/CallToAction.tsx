'use client'
import Button from "@/helper/Button";
import starsBg from '@/assets/stars.png';
import gridLines from '@/assets/grid-lines.png'
import { motion, useMotionTemplate, useMotionValue, useScroll, useTransform} from "framer-motion";
import { RefObject, useEffect, useRef } from "react";

// Function to track relative mouse position within an element
const useRelativeMousePosition = (to: RefObject<HTMLElement>) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const updateMousePosition = (event: MouseEvent) => {
    if (!to.current) return;
    const { top, left } = to.current.getBoundingClientRect();

    mouseX.set(event.x - left);
    mouseY.set(event.y - top);
  }

  useEffect(() => {
    window.addEventListener('mousemove', updateMousePosition);
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return [mouseX, mouseY];
};

export const CallToAction = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const borderedDivRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const backgroundPositionY = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  // Track the mouse position relative to borderedDivRef
  const [mouseX, mouseY] = useRelativeMousePosition(borderedDivRef);

  // Use useMotionTemplate to dynamically update mask-image with mouseX and mouseY
  const maskImage = useMotionTemplate`radial-gradient(circle at ${mouseX}px ${mouseY}px, rgba(0, 0, 0, 1), transparent)`;

  return (
    <section className="py-20 md:py-24" ref={sectionRef}>
      <div className="container">
        <motion.div
          ref={borderedDivRef}
          className="border border-white/15 py-24 rounded-xl overflow-hidden relative group"
          animate={{
            backgroundPositionX: starsBg.width,
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            backgroundImage: `url(${starsBg.src})`,
            backgroundPositionY,
          }}
        >
          {/* Static grid lines */}
          <div
            className="absolute inset-0 bg-[rgb(74,32,158)] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)] group-hover:opacity-0 transition duration-700"
            style={{ backgroundImage: `url(${gridLines.src})` }}
          ></div>

          {/* Dynamic mask based on mouse hover */}
          <motion.div
            className="absolute inset-0 bg-[rgb(74,32,158)] bg-blend-overlay opacity-0 group-hover:opacity-100 transition duration-700"
            style={{
              WebkitMaskImage: maskImage, // For Webkit browsers (Safari, Chrome)
              maskImage, // Standard
              backgroundImage: `url(${gridLines.src})`,
            }}
          ></motion.div>

          <div className="relative">
            <h2 className="text-5xl md:text-6xl max-w-sm mx-auto tracking-tighter text-center font-medium">
              AI-driven SEO for everyone
            </h2>
            <p className="text-center text-lg md:text-xl max-w-xs mx-auto text-white/70 px-4 mt-5 tracking-tight">
              Achieve clear, impactful results without the complexity
            </p>

            <div className="flex justify-center mt-8">
              <Button>Join Waitlist</Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
