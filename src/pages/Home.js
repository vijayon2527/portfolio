import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import Resume from "../assets/resume.pdf";
import Profile from "../assets/Vijay.jpg"; // Add your photo here
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";


const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-6 transition-colors duration-300"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE - TEXT */}
        <div className="text-center md:text-left">

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
  Hi, I'm Vijay Kumar
  <br />
  <span className="text-blue-500">
    <TypeAnimation
      sequence={[
        "Full Stack Developer",
        2000,
        "React Developer",
        2000,
        "Django Developer",
        2000,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
  </span>
</h1>


          <p className="text-gray-600 dark:text-gray-400 text-lg mb-6">
            Full Stack Developer specializing in React.js & Django REST API.
            I build scalable web applications with clean UI and strong backend architecture.
          </p>

          {/* Buttons */}
          <div className="flex md:justify-start justify-center gap-6 flex-wrap mb-8">

            <a
              href={Resume}
              download="Vijay_Kumar_Resume.pdf"
              className="flex items-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-3 rounded-lg font-semibold hover:scale-105 transition duration-300"
            >
              <FaDownload />
              Download Resume
            </a>

            <Link
              to="/projects"
              className="border border-gray-900 dark:border-white px-6 py-3 rounded-lg hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition"
            >
              View Projects
            </Link>

          </div>

          {/* Social Icons */}
          <div className="flex md:justify-start justify-center gap-6 text-2xl">

            <a
              href="https://github.com/vijayon2527"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-500 dark:hover:text-gray-400 transition duration-300"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/gajjala-vijay-8b5a52321/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-500 transition duration-300"
            >
              <FaLinkedin />
            </a>

          </div>
        </div>

        {/* RIGHT SIDE - IMAGE */}
        <div className="flex justify-center">
          <img
            src={Profile}
            alt="Vijay Kumar"
            className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-2xl border-4 border-gray-300 dark:border-gray-700 hover:scale-105 transition duration-500"
          />
        </div>

      </div>
    </section>
  );
};

export default Home;
