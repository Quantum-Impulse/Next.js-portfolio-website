import React, { useRef } from "react";
import {
  motion,
  useScroll,
} from "framer-motion";
import LiIcon from "./LiIcon";


const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}{" "}
          <a
            className="capitalize text-primary dark:text-primaryDark"
            href={companyLink}
            target={"_blank"}
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm"> {work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (

      <div className="my-64">
        <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
          Experience
        </h2>

        <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
          <motion.div
            className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark 
            origin-top  dark:bg-primaryDark dark:shadow-3xl"
            style={{ scaleY: scrollYProgress }}
          />
          <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
            
            <Details
              position="Software Developer Engineer Intern"
              company="Amazon AWS"
              companyLink=""
              time="2023 Summer"
              address="Austin, TX."
              work="
              Pioneered an agile latency tracking framework for the AWS Redshift console, impacting 100+ pages
              and inspiring other AWS console teams to adopt similar strategies for scalability. Enhanced latency metrics analytics accuracy by 55% using a TypeScript and React-based framework.
              Developed custom PSQL queries and implemented TestCafe automation tests to validate the
              framework's efficacy. Following Amazon’s test-driven development standard and design patterns."
            />

            <Details
              position="Production & Software Engineering Fellowship"
              company="Meta & MLH"
              companyLink="https://fellowship.mlh.io/"
              time="Summer 2022"
              address="Remote"
              work="
              Mentored by Facebook engineers in Production Engineering and DevOps, successfully completing real-
              world projects hosted by MLH.
              Implemented and maintained CI/CD pipelines using GitHub Actions, encompassing redeployment to
              rigorous unit testing.
              Optimized application uptime and availability using a suite of technologies including Linux Systems,
              Flask, Docker, VPS, and MySQL.
              Developed a web 3.0 application using C++, interfacing with the Solana blockchain and managing
              cryptocurrency wallets for an enhanced user experience."
            />

            <Details
              position="Quantum Computing Researcher"
              company="UT Austin"
              companyLink="https://fri.cns.utexas.edu/research-streams/quantum-computing"
              time="May 2022 - December 2022"
              address="Austin, TX."
              work="
              Developed Python-based solutions for quantum communications, including the BB84 Quantum Key
              Distribution Protocol and teleportation using entanglement principles.
              Implemented foundational quantum algorithms in Python, such as Deutsch, Simon, Grover, and Shor,
              demonstrating in-depth expertise in quantum computing applications.
              Automated simulation experiments and visually presented data results using Python & JavaScript,
              streamlining research processes and insights using pandas and networkx libraries."
            />

            <Details
              position="Lead Programmer"
              company="FRC Robotics, Team 5572"
              companyLink="https://frc5572.org/"
              time="2018 - 2020"
              address="San Antonio, TX."
              work="
              Programed computer vision systems with OpenCV to guide robots and shooting mechanisms to reach their targets.
              Robots contained cameras, motors, pneumatics, accelerometers, ultrasonic sensors, limit switches, servos that all needed to be programmed"
            />

          </ul>
        </div>
        </div>
    );
};

export default Experience;
