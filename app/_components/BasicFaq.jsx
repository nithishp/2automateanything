'use client'
import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";
import useMeasure from "react-use-measure";

const BasicFAQ = () => {
  return (
    <div className="px-4 py-12">
      <div className="mx-auto max-w-3xl">
        <h3 className="mb-4 text-center text-3xl font-semibold">
          Frequently asked questions
        </h3>
        <Question title=" What services does To Automate Anything provide?">
          <p>
            We offer a wide range of services including Intelligent Automation
            Solutions, Robotic Process Automation (RPA), Web and App
            Development, Digital Marketing, SEO Optimization, and more. Our goal
            is to help businesses streamline their operations and improve
            efficiency through innovative technology.
          </p>
        </Question>
        <Question title="How can Intelligent Automation help my business?">
          <p>
            Intelligent Automation uses AI and machine learning to automate
            complex tasks and processes. This can reduce human error, increase
            productivity, and save time and resources by allowing your workforce
            to focus on more strategic initiatives.
          </p>
        </Question>
        <Question title="How can I get started with your services?">
          <p>
            Getting started is easy! You can contact us via our website’s
            contact form, email, or phone. One of our experts will get in touch
            with you to discuss your needs and develop a personalized plan that
            fits your business.
          </p>
        </Question>
        <Question title="How much do your services cost?">
          <p>
            Our pricing is tailored based on the complexity and scope of the
            project. We ensure our solutions provide great value and ROI.
            Contact us to get a detailed quote based on your specific needs.
          </p>
        </Question>
      </div>
    </div>
  );
};

const Question = ({ title, children, defaultOpen = false }) => {
  const [ref, { height }] = useMeasure();
  const [open, setOpen] = useState(defaultOpen);

  return (
    <motion.div
      animate={open ? "open" : "closed"}
      className="border-b-[1px] border-b-slate-300"
    >
      <button
        onClick={() => setOpen((pv) => !pv)}
        className="flex w-full items-center justify-between gap-4 py-6"
      >
        <motion.span
          variants={{
            open: {
              color: "rgba(3, 6, 23, 0)",
            },
            closed: {
              color: "rgba(3, 6, 23, 1)",
            },
          }}
          className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-left text-lg font-medium"
        >
          {title}
        </motion.span>
        <motion.span
          variants={{
            open: {
              rotate: "180deg",
              color: "rgb(124 58 237)",
            },
            closed: {
              rotate: "0deg",
              color: "#030617",
            },
          }}
        >
          <FiChevronDown className="text-2xl" />
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: open ? height : "0px",
          marginBottom: open ? "24px" : "0px",
        }}
        className="overflow-hidden text-slate-600"
      >
        <p ref={ref}>{children}</p>
      </motion.div>
    </motion.div>
  );
};

export default BasicFAQ;
