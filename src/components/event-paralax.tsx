"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const EventParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 0.3]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="h-[300vh] py-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className="-z-10"
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-20 space-x-20 ">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  const events = [
    { name: "Music Fest", src: "https://sanskritimace.in/images/p1.jpg" },
    { name: "Art Expo", src: "https://sanskritimace.in/images/p2.webp" },
    { name: "Tech Talk", src: "https://sanskritimace.in/images/p3.jpg" },
    { name: "Dance Show", src: "https://sanskritimace.in/images/p4.webp" },
    { name: "Food Carnival", src: "https://sanskritimace.in/images/p5.jpg" },
    { name: "Fashion Parade", src: "https://sanskritimace.in/images/p6.webp" },
  ];

  const rotations = [
    "-rotate-12", "rotate-6", 
    "rotate-12", "rotate-12", 
    "-rotate-6", "-rotate-12"
  ];

  return (
    <div className="z-10 absolute flex flex-col items-center justify-center mx-auto py-20 md:py-40 px-4 w-full">
      <div className="max-w-7xl w-full">
        <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
          About<br />Sanskriti&apos;25
        </h1>
        <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit esse,
          autem ipsa, earum dolorum blanditiis, iste repellendus voluptas sunt
          laboriosam quibusdam minima nostrum molestiae quod odio cum eum iure
          itaque pariatur aut expedita.
        </p>
      </div>
      
      <div className="w-full mt-12 grid place-items-center grid-cols-2 sm:grid-cols-3 gap-6 overflow-hidden">
        {events.map((event, index) => (
          <div
            key={event.name}
            className={`relative overflow-hidden rounded-lg shadow-lg flex max-w-72 max-h-[30rem] ${rotations[index % rotations.length]} animate-fade-in`}
          >
            <img
              src={event.src}
              alt={event.name}
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white text-center py-2">
              {event.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};



export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-72 sm:h-96 w-96 sm:w-[30rem] relative flex-shrink-0"
    >
      <Link
        href={product.link}
        className="block group-hover/product:shadow-2xl "
      >
        <Image
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};
