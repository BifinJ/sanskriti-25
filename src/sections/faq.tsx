"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  { question: "What is Next.js?", answer: "Next.js is a React framework for building web applications with server-side rendering, static site generation, and more." },
  { question: "How does Tailwind CSS work?", answer: "Tailwind CSS is a utility-first CSS framework that allows you to style elements by applying predefined classes." },
  { question: "What is TypeScript?", answer: "TypeScript is a superset of JavaScript that adds static typing, helping developers catch errors early and improve code maintainability." },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-neutral-800 p-16">
    <h2 className="section-heading !text-primary mb-4">FAQ</h2>
      <div className="max-w-4xl mx-auto p-8 bg-neutral-800 rounded-lg shadow-md">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-secondary bg-white rounded-lg p-5 cursor-pointer shadow-sm"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center text-lg font-medium text-primary">
                <span>{faq.question}</span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-black"
                >
                  ▼
                </motion.span>
              </div>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="mt-3 text-black overflow-hidden"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
