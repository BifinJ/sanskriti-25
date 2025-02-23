"use client"

import { main_events } from "@/data/events";
import { AnimatePresence, motion } from "framer-motion";
import { useRef } from "react";

export default function Events() {
  
  const ref = useRef<HTMLDivElement>(null);

  // Framer Motion Variants for Typing Effect
  const typingVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Delay each letter
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <AnimatePresence>
      <section 
        className="flex flex-col justify-start w-full bg-neutral-900 text-primary min-h-[200dvh]"
        ref={ref}
      >
        <h1 className=" section-heading !text-left !text-primary p-3">Events</h1>
        {main_events.map((event, index) => (
          <motion.div 
            key={index} 
            initial={{ padding: "4rem", height: "350px"}}
            whileInView={{ padding: "0rem", height: "fit" }} 
            exit={{ padding: "4rem", height: "350px" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            viewport={{ once: false, amount: 1 }}
            className="bg-neutral-900 overflow-y-hidden"
          >
            <motion.div 
              initial={{ padding: "4.75rem"}}
              whileInView={{ padding: "4.75rem"}} 
              exit={{ padding: "4.75rem" }}
              transition={{ duration: 0, ease: "easeInOut" }}
              viewport={{ once: false, amount: 1 }}
              className={`flex ${index % 2 == 0 ? "flex-row": "flex-row-reverse"} items-center h-[350px] bg-neutral-700`}
            >
              <div className="w-[34%] flex items-center justify-center">
                <img src={event.event_image} alt="" className="w-96" />
              </div>
              <div className="w-[66%] flex flex-col gap-3">
                {/* Typing Effect for h1 using motion */}
                <motion.h1 
                  className="font-bold text-5xl flex"
                  variants={typingVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false }}
                >
                  {event.event_name.split("").map((letter, index) => (
                    <motion.span key={index} variants={letterVariants}>
                      {letter}
                    </motion.span>
                  ))}
                </motion.h1>

                {/* Full paragraph appearing gradually */}
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                  viewport={{ once: true }}
                  className="text-white"
                >
                  {event.event_description}
                </motion.p>
                {index == 0 ? 
                  (<a 
                    href={event.event_link} 
                    className="w-fit text-neutral-900 border border-primary px-4 py-2 rounded-lg transition-all duration-300 bg-primary hover:bg-neutral-900 hover:text-primary"
                  >
                    Know More
                  </a>
                  ): 
                  (<></>)}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </section>
    </AnimatePresence>
  )
}
