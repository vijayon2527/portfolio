import { motion } from "framer-motion";
import {
  FaReact,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJs
} from "react-icons/fa";

import {
  SiDjango,
  SiMysql,
  SiTailwindcss
} from "react-icons/si";

const skills = [
  { name: "Python", icon: <FaPython />, color: "text-yellow-400" },
  { name: "Django", icon: <SiDjango />, color: "text-green-500" },
  { name: "Django REST", icon: <FaDatabase />, color: "text-green-400" },
  { name: "React.js", icon: <FaReact />, color: "text-cyan-400" },
  { name: "JavaScript", icon: <FaJs />, color: "text-yellow-300" },
  { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-500" },
  { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-500" },
  // { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-sky-400" },
  { name: "MySQL", icon: <SiMysql />, color: "text-blue-500" },
  { name: "Git", icon: <FaGitAlt />, color: "text-orange-500" },
  { name: "GitHub", icon: <FaGithub />, color: "text-gray-400" }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white"
    >
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-14">
          My Skills
        </h2>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-2xl transition duration-300 text-center cursor-pointer"
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className={`text-4xl mb-4 ${skill.color}`}
              >
                {skill.icon}
              </motion.div>
              <p className="font-semibold tracking-wide">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
