import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMedal,
  faGraduationCap,
  faTrophy,
  faAward,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Me4 from "@/public/image/me4.jpg";
import Me5 from "@/public/image/me5.jpg";
import Me6 from "@/public/image/me6.webp";

function Wrapper({ children }) {
  // Hapus motion di sini, biarkan wrapper statis
  return (
    <div className="mx-auto container gap-10 p-10 grid grid-cols-1 my-10">
      {children}
    </div>
  );
}

export default function Education() {
  const [isExpanded, setIsExpanded] = useState(false);

  const achievementsByYear = {
    2022: [
      {
        icon: faMedal,
        title: " PPTIK & STIKI Malang",
        subtitle: "TOEFL score of 557",
        date: "Oct 2022",
        color: "from-amber-600 to-yellow-600",
      },
      {
        icon: faMedal,
        title: "EC-Council International",
        subtitle: "Ethical Hacking Fundamental (EHF)",
        date: "Oct 2022",
        color: "from-amber-600 to-yellow-600",
      },
      {
        icon: faMedal,
        title: " Badan Nasional Sertifikasi Profesi (BNSP)",
        subtitle: "Pemrograman Basis Data Level VI",
        date: "Jul 2022",
        color: "from-amber-600 to-yellow-600",
      },
    ],
    2019: [
      {
        icon: faAward,
        title: "Seminar Nasional",
        subtitle:
          "National Seminar “Enhancing Visual Performance with Ray Tracing",
        date: "Nov 2019",
        color: "from-blue-500 to-purple-600",
      },
      {
        icon: faAward,
        title: "Pelatihan Dosen dan Tenaga Laboratorium",
        subtitle: "Mengajar (lebih) Menyenagkan",
        date: "Nov 2019",
        color: "from-blue-500 to-purple-600",
      },
    ],
    2017: [
      {
        icon: faMedal,
        title: "STIKI Studen Competition 2017",
        subtitle: "Pekan Ilmiah Mahasiswa (PIM) 2017",
        date: "Nov 2017",
        color: "from-amber-600 to-yellow-600",
      },
      {
        icon: faAward,
        title: " Latihan Management Mahasiswa Tingkat Dasar",
        subtitle: "Badan Eksekutif Mahasiswa(BEM) LMMTD 2017",
        date: "Jun 2017",
        color: "from-amber-600 to-yellow-600",
      },
    ],
    2016: [
      {
        icon: faAward,
        title: " Seminar Internasional",
        subtitle: "Career And Ledership In Project Management",
        date: "Oct 2016",
        color: "from-blue-500 to-purple-600",
      },
    ],
  };

  // Flatten all achievements into a single array for easier limiting
  const allAchievements = Object.entries(achievementsByYear)
    .sort(([a], [b]) => parseInt(b) - parseInt(a))
    .flatMap(([year, achievements]) =>
      achievements.map((achievement) => ({ ...achievement, year }))
    );

  const visibleAchievements = isExpanded
    ? allAchievements
    : allAchievements.slice(0, 6);
  const hasMoreAchievements = allAchievements.length > 6;

  return (
    <Wrapper>
      <section className="grid gap-8 md:gap-12">
        {/* Header */}
        <motion.div
          className="text-center space-y-2"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: "anticipate" }}
        >
          <h1 className="text-3xl md:text-4xl font-bold tracking-tighter">
            Education
          </h1>
          <p className="text-muted-foreground max-w-[800px] mx-auto">
            Get to know more about my educational background.
          </p>
        </motion.div>
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education Section - Left */}
          <motion.div
            className="px-5"
            initial={{ opacity: 0, scale: 0.96, y: 60 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "anticipate", delay: 0.1 }}
          >
            <div className="font-medium text-lg mb-4">2016 - Present</div>
            <div>
              <h2 className="font-semibold text-xl">UBHINUS (STIKI Malang)</h2>
              <h3 className="text-md font-normal mb-3">
                S1 Sistem Informatika | Computer Science
              </h3>
              <div className="gap-4 mb-4 flex items-stretch md:h-[300px] xl:h-[400px]">
                <motion.div
                  className="flex-[1] transition-all duration-300 ease-in-out hover:flex-[3] group"
                  whileHover={{ scale: 1.04 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Image
                    src={Me5}
                    width={400}
                    height={225}
                    alt="University"
                    className="rounded-lg w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
                  />
                </motion.div>
                <motion.div
                  className="flex-[1] transition-all duration-300 ease-in-out hover:flex-[3] group"
                  whileHover={{ scale: 1.04 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Image
                    src={Me4}
                    width={400}
                    height={225}
                    alt="University"
                    className="rounded-lg w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
                  />
                </motion.div>
                <motion.div
                  className="flex-[1] transition-all duration-300 ease-in-out hover:flex-[3] group"
                  whileHover={{ scale: 1.04 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Image
                    src={Me6}
                    width={400}
                    height={225}
                    alt="University"
                    className="rounded-lg w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
                  />
                </motion.div>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-gray-600 text-justify title text-lg">
                  I aspire to become a{" "}
                  <span className="text-black font-medium">
                    professional Software Engineer.
                  </span>{" "}
                  I hold a{" "}
                  <span className="text-black font-medium">
                    Bachelor’s degree in Information Systems (S.Kom)
                  </span>{" "}
                  from STIKI Malang, which has now merged with{" "}
                  <span className="text-black font-medium">
                    UBHINUS (Bina Nusantara University).
                  </span>{" "}
                  My journey in the field of technology is driven by curiosity
                  and creativity, especially in developing{" "}
                  <span className="text-black font-medium">
                    user-friendly and useful technology solutions
                  </span>{" "}
                  for both end-users and company management. <br />
                  <br /> As a basic{" "}
                  <span className="text-black font-medium">IT instructor</span>,
                  covering{" "}
                  <span className="text-black font-medium">
                    hardware, software, and brainware
                  </span>
                  , I am actively involved in community-based teaching
                  initiatives—ranging from{" "}
                  <span className="text-black font-medium">
                    orphanages to remote villages
                  </span>{" "}
                  that lack exposure to the world of information technology.{" "}
                  <br />
                  <br /> I am passionate about{" "}
                  <span className="text-black font-medium">
                    solving real-world problems through code,
                  </span>{" "}
                  particularly in providing{" "}
                  <span className="text-black font-medium">
                    effective solutions for business needs,
                  </span>{" "}
                  both from a technical and strategic standpoint. I am committed
                  to{" "}
                  <span className="text-black font-medium">
                    continuous learning, building, and collaboration
                  </span>
                  , continuous learning, building, and collaboration, aiming to
                  grow and adapt within the ever-evolving world of technology.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-4 text-sm">
                <div className="bg-gray-300 text-black px-2 py-1 rounded-2xl"></div>
              </div>
            </div>
          </motion.div>
          {/* Achievements Section - Right */}
          <motion.div
            className="flex flex-col justify-start px-5 md:px-0"
            initial={{ opacity: 0, scale: 0.96, y: 60 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "anticipate", delay: 0.2 }}
          >
            <h2 className="font-semibold text-xl mt-7">Achievements</h2>
            <p className="text-md font-normal mb-3 md:mb-6">
              Some of my achievements during my study.
            </p>

            {/* Achievements Container with transparent bottom effect */}
            <div className="relative">
              <div className="space-y-4">
                <AnimatePresence>
                  {visibleAchievements.map((achievement, index) => (
                    <motion.div
                      key={`${achievement.year}-${index}`}
                      initial={{ opacity: 0, y: 40, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -20, scale: 0.96 }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.06,
                        ease: "anticipate",
                      }}
                    >
                      {/* Year indicator for first achievement of each year */}
                      {index === 0 ||
                      visibleAchievements[index - 1]?.year !==
                        achievement.year ? (
                        <div className="flex items-center gap-3 mb-3 mt-2">
                          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                            <span className="text-xs font-bold text-gray-600">
                              {achievement.year}
                            </span>
                          </div>
                          <div className="flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent"></div>
                        </div>
                      ) : null}

                      {/* Glassmorphism achievement card with monochrome to color effect */}
                      <motion.div
                        whileHover={{
                          scale: 1.03,
                          boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                        }}
                        className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-4 shadow-lg hover:bg-white/30 transition-all duration-300 hover:shadow-xl grayscale hover:grayscale-0"
                      >
                        <div className="flex items-center gap-4">
                          <div
                            className={`aspect-square w-10 rounded-full bg-gradient-to-r ${achievement.color} flex items-center justify-center text-primary-foreground transition-all duration-300`}
                          >
                            <FontAwesomeIcon
                              icon={achievement.icon}
                              className="text-white h-5 w-5"
                            />
                          </div>
                          <div>
                            <h3 className="font-medium">{achievement.title}</h3>
                            <p className="text-sm">{achievement.subtitle}</p>
                            <div className="text-xs text-gray-500 mt-1">
                              {achievement.date}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* Transparent bottom overlay when not expanded */}
              {!isExpanded && hasMoreAchievements && (
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-stale-300 via-stale/70 to-transparent pointer-events-none"></div>
              )}

              {/* Expand/Collapse Button */}
              {hasMoreAchievements && (
                <motion.div
                  className="flex justify-center mt-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.5, ease: "anticipate" }}
                >
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="flex items-center gap-2 px-6 py-3 bg-white/30 backdrop-blur-md border border-white/40 rounded-full hover:bg-white/40 transition-all duration-300 text-sm font-medium shadow-lg hover:shadow-xl"
                  >
                    <span>
                      {isExpanded
                        ? `Show Less`
                        : `Show ${allAchievements.length - 4} More`}
                    </span>
                    <FontAwesomeIcon
                      icon={isExpanded ? faChevronUp : faChevronDown}
                      className="h-3 w-3 transition-transform duration-300"
                    />
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </Wrapper>
  );
}
