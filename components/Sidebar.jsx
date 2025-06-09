import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faFolderOpen,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const sections = [
  { id: "home", icon: faHome },
  { id: "about", icon: faUser },
  { id: "projects", icon: faFolderOpen },
  { id: "contact", icon: faEnvelope },
];

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState("home");

  const handleMoveToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="hidden md:flex fixed z-40 bg-gray-700 h-[50vh] w-14 flex-col justify-between items-center p-4 left-0 top-1/4 rounded-e-3xl">
      <ul className="flex flex-col justify-evenly items-center h-full text-gray-50">
        {sections.map((section, index) => (
          <li
            key={section.id}
            className={`w-10 h-10 flex items-center justify-center rounded-full transition-colors duration-300 ${
              activeSection === section.id ? "bg-gray-500" : ""
            }`}
          >
            <button onClick={() => handleMoveToSection(section.id)}>
              <FontAwesomeIcon icon={section.icon} className="text-xl" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
