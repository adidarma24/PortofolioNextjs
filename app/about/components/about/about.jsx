import Image from "next/image";
// import Card from "./spotify/card";
import { motion } from "framer-motion";
import Me1 from "@/public/image/me1.jpg";
import Me2 from "@/public/image/me2.jpg";
import Me3 from "@/public/image/me3.webp";
import Hr from "@/components/Hr";

function Title() {
  return (
    <div className="mt-10 flex flex-col justify-start items-center w-full pl-10 md:pl-32">
      <div className="flex justify-center items-center flex-col my-5 self-start ">
        <Hr variant="long"></Hr>
        <h1 className="text-3xl font-bold mt-3">Who Am I?</h1>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <>
      <Title />
      <div className="relative mx-auto container gap-4 px-10 grid grid-cols-1 md:grid-cols-2 mb-10">
        {/* Images Section */}
        <div className="flex flex-col items-start mb-5">
          <div className="relative w-full aspect-square">
            {[Me1, Me2, Me3].map((img, i) => {
              const positions = [
                "absolute top-28 left-10 w-[50%]",
                "absolute top-16 right-28 w-[30%]",
                "absolute bottom-16 right-20 w-[40%]",
              ];
              const delays = [0, 0.3, 0.5];
              return (
                <div
                  key={i}
                  className={`${positions[i]} aspect-square grayscale hover:grayscale-0 transition-all duration-300`}
                >
                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0.5,
                      x: i === 0 ? 100 : -100,
                      y: 40,
                    }}
                    whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                    transition={{
                      delay: delays[i],
                      type: "spring",
                      stiffness: 60,
                    }}
                    viewport={{ once: false, amount: 0.5 }}
                    className="w-full h-full"
                  >
                    <Image
                      src={img}
                      alt="AdiDharma"
                      layout="fill"
                      objectFit="cover"
                      placeholder="blur"
                    />
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
        {/* Text Section */}
        <motion.div
          className="flex flex-col items-start mb-5 md:px-10"
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, type: "spring" }}
        >
          <motion.h2
            className="text-2xl font-bold tracking-wider mb-3"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.7 }}
          >
            ADI DHARMA PUTRA
          </motion.h2>
          <motion.p
            className="text-gray-600 text-justify title text-lg"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: false, amount: 0.7 }}
          >
            Hey there, I&rsquo;m ADI DHARMA PUTRA, a
            <span className="text-black font-medium">
              {" "}
              passionate Web Developer{" "}
            </span>
            currently starting my career in
            <span className="text-black font-medium">
              {" "}
              Laravel Development.{" "}
            </span>
            Hailing from Sidoarjo, East Java, Indonesia, I graduated with a
            bachelor’s degree in
            <span className="text-black font-medium">
              {" "}
              Sistem Informasi{" "}
            </span>{" "}
            from
            <span className="text-black font-medium"> STIKI Malang </span>I
            specialize in building responsive and dynamic web applications using
            <span className="text-black font-medium">
              {" "}
              PHP and Laravel, and I continue to develop my skills in Full Stack
              development.{" "}
            </span>{" "}
            Although I’m still at the beginning of my journey, I’m highly
            motivated to grow in the Laravel ecosystem—learning about RESTful
            APIs, MVC architecture, and best practices for scalable web
            solutions. I’m also always curious about modern design trends and
            tools that support better user experiences. In today’s fast-paced
            tech world, I believe in the power of{" "}
            <span className="text-black font-medium">
              {" "}
              continuous learning and collaboration.{" "}
            </span>{" "}
            Let’s connect and build something impactful together!
          </motion.p>
          {/* <Card /> */}
        </motion.div>
      </div>
    </>
  );
}
