"use client";
import Image from "next/legacy/image";
import { motion } from "framer-motion";
import Link from "next/link";
import Button from "@/components/Button";
import Me from "@/public/image/me.jpg";
import MeAbout from "@/public/image/me2.jpg";
import Setup from "@/public/image/setup.webp";
import ProjectAll from "@/public/image/projects.webp";
import Hr from "@/components/Hr";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faDiscord,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const sectionStyle = {
  minHeight: "100vh",
  scrollSnapAlign: "start",
  display: "flex",
  alignItems: "center",
};

const MyPage = () => (
  <div
    style={{
      scrollSnapType: "y mandatory",
      overflowY: "scroll",
      height: "100vh",
    }}
  >
    {/* Section 1 */}
    <section id="home" style={sectionStyle} className="section">
      {/* ...isi section Home Anda... */}
      <div className="mx-auto container grid grid-cols-1 md:grid-cols-3 gap-4 p-10 overflow-hidden md:px-20">
        <motion.div
          className="col-span-2 flex flex-col justify-center items-center md:items-start text-center md:text-start"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
          }}
        >
          <div className="block md:hidden col-span-1 mx-auto my-10">
            <div className="bg-slate-500 rounded-full h-60 w-60 grayscale hover:grayscale-0 transition-all ease duration-300">
              <Image
                src={Me}
                width={500}
                height={500}
                className="rounded-full w-full h-full object-cover "
                alt="AdiDharma"
                placeholder="blur"
              />
            </div>
          </div>
          <motion.h3
            className="uppercase text-xl mb-3 font-normal text tracking-[.5rem] text-gray-500"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              type: "spring",
            }}
          >
            Adi Dharma
          </motion.h3>
          <motion.h1
            className="text-black text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl font-bold my-2 md:my-5"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.3,
              type: "spring",
            }}
          >
            Full Stack Developer
          </motion.h1>
          <motion.p
            className="title text-md  2xl:text-xl mt-4 tracking-wider text-gray-500 leading-[1.7rem]"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.4,
              type: "spring",
            }}
          >
            Hi, I&apos;m Adi Dharma a passionate and adaptable Junior Full-Stack
            Developer with strong skills in Laravel, PHP, MySQL, JavaScript, and
            modern web tools. With a solid foundation in both frontend and
            backend development, I focus on building responsive, secure, and
            efficient web applications. I&apos;m eager to grow within a
            collaborative team and contribute to impactful, real-world projects.
          </motion.p>
          <motion.div
            className="buttons flex flex-row justify-center items-center space-x-4 mt-10"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.5,
              type: "spring",
            }}
          >
            <Button variation="primary">
              <Link
                href={"/docs/cv.pdf"}
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                Download CV
              </Link>
            </Button>
            <Button variation="secondary">
              <a href="#about">Scroll Down 👇</a>
            </Button>
          </motion.div>
        </motion.div>
        <motion.div
          className="hidden md:flex col-span-1 mx-auto justify-center items-center "
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.7,
            type: "spring",
          }}
        >
          <div className="rounded-full h-auto w-auto  lg:px-12 grayscale hover:grayscale-0 transition-all ease duration-300">
            <Image
              src={Me}
              width={400}
              height={550}
              placeholder="blur"
              alt="AdiDharma"
              className="rounded-full w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>

    {/* Section 2 */}
    <section id="about" style={sectionStyle} className="section">
      {/* ...isi section About Anda... */}
      <div className="relative md:h-screen w-screen gap-4 flex justify-center items-center flex-col overflow-hidden">
        <div className="z-0 mb-48 md:mb-0  md:absolute top-1/4  md:right-[10%] md:-translate-y-16 ">
          <motion.div
            className="bg-slate-300 rounded-sm h-[400px] md:h-[600px] w-[80vw] md:w-[30vw] grayscale hover:grayscale-0"
            initial={{
              x: 300,
              opacity: 0,
              z: -100,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
              z: 0,
            }}
            transition={{
              delay: 0.5,
              type: "spring",
              stiffness: 100,
              damping: 20,
            }}
          >
            <Image
              src={MeAbout}
              layout="fill"
              className="object-cover"
              alt="AdiDharma"
              placeholder="blur"
            />
          </motion.div>
        </div>
        <div className="z-10 w-full absolute md:w-auto  md:left-[10%] top-[60%] md:top-1/3 col-span-2 flex flex-col justify-center items-start md:items-start text-start px-10 py-5">
          <motion.h1
            className="bg-white lg:bg-transparent bg-opacity-50 px-3 md-px-0 text-black text-5xl md:text-8xl font-bold"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.1,
              type: "spring",
            }}
          >
            About Me
          </motion.h1>
          <Hr />
          <motion.p
            className="title  text-xl mt-4 tracking-wider text-gray-500 leading-[1.7rem] mb-5"
            initial={{ x: -100, opacity: 0, color: "#6b7280" }}
            whileInView={{ x: 0, opacity: 1, color: "#111827" }}
            transition={{ delay: 0.2, type: "spring" }}
            viewport={{ once: false, amount: 0.7 }}
          >
            A brief introduction about me and my interest.
          </motion.p>
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.3,
              type: "spring",
            }}
          >
            <Button variation="primary">
              <Link href="/about">Click Me</Link>
            </Button>
            <Button variation="secondary">
              <a href="#projects">Scoll Down 👇</a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Section 3 */}
    <section id="projects" style={sectionStyle} className="section">
      {/* ...isi section Projects Anda... */}
      <div className="relative md:h-screen w-screen gap-4 p-10 flex justify-center items-center flex-col overflow-hidden">
        <div className="z-0 mb-48 md:mb-0  md:absolute top-1/4  md:right-[10%] md:-translate-y-16 ">
          <motion.div
            className="bg-slate-300 rounded-sm h-[400px] md:h-[600px] w-[80vw] md:w-[30vw] grayscale hover:grayscale-0 "
            initial={{
              x: 300,
              opacity: 0,
              z: -100,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
              z: 0,
            }}
            transition={{
              delay: 0.5,
              type: "spring",
              stiffness: 100,
              damping: 20,
            }}
          >
            <Image
              src={ProjectAll}
              layout="fill"
              className="object-cover"
              alt="AdiDharma Setup"
              placeholder="blur"
            />
          </motion.div>
        </div>
        <div className="z-10 w-full absolute md:w-auto  md:left-[10%] top-[60%] md:top-1/3 col-span-2 flex flex-col justify-center items-start md:items-start text-start px-10 py-5">
          <motion.h1
            className="bg-white lg:bg-transparent bg-opacity-50 px-3 md-px-0 text-black text-5xl md:text-8xl font-bold"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.1,
              type: "spring",
            }}
          >
            My Projects
          </motion.h1>
          <Hr />
          <motion.p
            className="title  text-xl mt-4 tracking-wider text-gray-500 leading-[1.7rem] mb-5"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              type: "spring",
            }}
          >
            Here are a few projects I&apos;ve completed and some that I&apos;m
            <br /> currently working on.
          </motion.p>
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.3,
              type: "spring",
            }}
          >
            <Button variation="primary">
              <Link href="/projects">Click Me</Link>
            </Button>
            <Button variation="secondary">
              <a href="#contact">Scoll Down 👇</a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Section 4 */}
    <section id="contact" style={sectionStyle} className="section">
      {/* ...isi section Contact Anda... */}
      <div className="relative md:h-screen w-screen  gap-4 p-10 flex justify-center items-center flex-col overflow-hidden">
        <div className="z-0 mb-48 md:mb-0  md:absolute top-1/4  md:right-[10%] md:-translate-y-16 ">
          <motion.div
            className="bg-slate-300 rounded-sm h-[400px] md:h-[600px] w-[80vw] md:w-[30vw] grayscale hover:grayscale-0"
            initial={{
              x: 300,
              opacity: 0,
              z: -100,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
              z: 0,
            }}
            transition={{
              delay: 0.5,
              type: "spring",
              stiffness: 100,
              damping: 20,
            }}
          >
            <Image
              src={Setup}
              layout="fill"
              className="object-cover"
              alt="AdiDharma Setup"
              placeholder="blur"
            />
          </motion.div>
        </div>
        <div className="z-10 w-full absolute md:w-auto  md:left-[10%] top-[60%] md:top-1/3 col-span-2 flex flex-col justify-center items-start md:items-start text-start px-10 overflow-hidden">
          <motion.h1
            className="bg-white lg:bg-transparent bg-opacity-50 px-3 md-px-0 text-black text-5xl md:text-8xl font-bold mb-3"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.1,
              type: "spring",
            }}
          >
            Get In Touch
          </motion.h1>
          <Hr />
          <motion.p
            className="title text-xl mt-4 tracking-wider text-gray-500 leading-[1.7rem] md:mb-5"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              type: "spring",
            }}
          >
            Let&apos;s connect! I&apos;m open to new ideas, challenges, and{" "}
            <br />
            meaningful conversations.
          </motion.p>
          <motion.p
            className="title text-xl mt-4 tracking-wider text-gray-500 leading-[1.7rem] mb-5"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.3,
              type: "spring",
            }}
          >
            {/* <a href="">adidarmap@gmail.com</a> */}
          </motion.p>
          {/* icons */}
          <div className="flex justify-center items-center space-x-4">
            <motion.a
              href="https://api.whatsapp.com/send/?phone=%2B6281355643587&text&type=phone_number&app_absent=0"
              className="flex justify-center items-center bg-gray-700 w-14 h-14 rounded-full text-gray-100 hover:bg-gray-400 transition-all ease-in-out duration-300"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                y: { delay: 0.1 },
                opacity: { delay: 0.2 },
              }}
            >
              <FontAwesomeIcon icon={faWhatsapp} className="text-3xl" />
            </motion.a>

            <motion.a
              href="https://github.com/adidarma24"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center bg-gray-700 w-14 h-14 rounded-full text-gray-100 hover:bg-gray-400 transition-all ease-in-out duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                y: { delay: 0.2 },
                opacity: { delay: 0.3 },
              }}
            >
              <FontAwesomeIcon icon={faGithub} className="text-3xl" />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/adidarma2407/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center bg-gray-700 w-14 h-14 rounded-full text-gray-100 hover:bg-gray-400 transition-all ease-in-out duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                y: { delay: 0.3 },
                opacity: { delay: 0.4 },
              }}
            >
              <FontAwesomeIcon icon={faInstagram} className="text-3xl" />
            </motion.a>
            <motion.a
              href="www.linkedin.com/in/adidarmap"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center bg-gray-700 w-14 h-14 rounded-full text-gray-100 hover:bg-gray-400 transition-all ease-in-out duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                y: { delay: 0.4 },
                opacity: { delay: 0.5 },
              }}
            >
              <FontAwesomeIcon icon={faLinkedin} className="text-3xl" />
            </motion.a>
            <motion.a
              href="https://discordapp.com/users/bloody#6118"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center bg-gray-700 w-14 h-14 rounded-full text-gray-100 hover:bg-gray-400 transition-all ease-in-out duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                y: { delay: 0.5 },
                opacity: { delay: 0.6 },
              }}
            >
              <FontAwesomeIcon icon={faDiscord} className="text-3xl" />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default MyPage;
