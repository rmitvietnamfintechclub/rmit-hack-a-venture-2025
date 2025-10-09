"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const WhoSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const swipeVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  const slideVariants = {
    hidden: { opacity: 0, x: -300 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="md:px-20 md:mt-[40px] max-md:px-10" ref={ref}>
      <div className="max-md:text-3xl md:text-6xl max-md:py-6 text-center text-white font-semibold drop-shadow-text">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={slideVariants}
          transition={{ duration: 1.3, delay: 0.5 }}
          className="text-color-gradient inline-block md:leading-[5rem]"
        >
          Who can join&nbsp;
        </motion.div>
        <motion.div
          initial="hidden"
          animate={controls}
          variants={swipeVariants}
          transition={{ duration: 1.3, delay: 0.5 }}
          className="inline-block"
        >
          Hack-A-Venture?
        </motion.div>
      </div>

      <div className="grid md:grid-cols-5 max-md:grid-cols-3 max-md:grid-flow-row md:gap-10 max-md:gap-6 md:mt-[48px] justify-items-center">
        {/* RENDER THE FIRST 3 ITEMS */}
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="w-full">
            <motion.div
              initial="hidden"
              animate={controls}
              variants={swipeVariants}
              transition={{ duration: 1.3, delay: 0.5 + index * 0.2 }}
              className="p-1 border-[0.25rem] border-dashed border-white rounded-3xl w-full"
            >
              <Image
                src={`/whosection${index + 1}.png`}
                alt="who"
                width={5000}
                height={5000}
                className="rounded-lg w-full h-auto p-4 md:p-2"
              />
            </motion.div>
          </div>
        ))}

        {/* WRAP THE LAST 2 ITEMS */}
        <div className="max-md:col-span-3 flex justify-center md:contents max-md:gap-4">
          {/* Loop for items 4 and 5 */}
          {Array.from({ length: 2 }).map((_, index) => (
            <div key={index + 3} className="w-[27vw] md:w-full">
              <motion.div
                initial="hidden"
                animate={controls}
                variants={swipeVariants}
                transition={{ duration: 1.3, delay: 0.5 + (index + 3) * 0.2 }}
                className="p-1 border-[0.25rem] border-dashed border-white rounded-3xl w-full"
              >
                <Image
                  src={`/whosection${index + 4}.png`}
                  alt="who"
                  width={5000}
                  height={5000}
                  className="rounded-lg w-full h-auto p-4 md:p-2"
                />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
      <motion.div
        initial="hidden"
        animate={controls}
        variants={swipeVariants}
        transition={{ duration: 1.3, delay: 1.8 }}
      >
        <p className="text-xl items-center justify-center text-justify font-medium text-white md:mt-[48px] max-md:hidden">
          Our competition is open for{" "}
          <span className="text-color-gradient font-semibold">
            all inspiring students
          </span>{" "}
          who want to experiment building social impact products using
          Technology. Anyone can join, but our core target student group are the
          above.
        </p>
      </motion.div>
      <motion.div
        initial="hidden"
        animate={controls}
        variants={swipeVariants}
        transition={{ duration: 1.3, delay: 0 }}
      >
        <p className="text-lg font-medium items-center justify-center text-justify text-white max-md:mt-[32px] md:hidden">
          Our competition is open for{" "}
          <span className="text-color-gradient">
            all inspiring students
          </span>{" "}
          who want to experiment building social impact products using
          Technology. Anyone can join, but our core target student group are the
          above.
        </p>
      </motion.div>
    </div>
  );
};
