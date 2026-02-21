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

       <div className="text-center md:text-left">

          {/* Professional Tagline */}
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">
            Full Stack Web Developer
          </p>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Gajjala Vijay Kumar
          </h1>

          {/* Animated Role */}
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
            <TypeAnimation
              sequence={[
                "Python Full Stack Developer",
                2000,
                "React.js & Django Specialist",
                2000,
                "REST API & Web Application Developer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h2>

          {/* Description */}
         <p className="text-gray-600 text-lg mb-8 leading-relaxed max-w-lg">
            Python Full Stack Developer specializing in building scalable web 
            applications using Django, Django REST Framework, and React.js. 
            Strong experience in backend development, REST API design, 
            authentication systems, and modern frontend architecture.
          </p>

          {/* Buttons */}
          <div className="flex md:justify-start justify-center gap-6 flex-wrap mb-8">

            <a
              href={Resume}
              download="Vijay_Kumar_Resume.pdf"
              className="flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition duration-300"
            >
              <FaDownload />
              Download Resume
            </a>

            <Link
              to="/projects"
              className="border border-gray-900 px-6 py-3 rounded-md font-medium hover:bg-gray-900 hover:text-white transition duration-300"
            >
              View Projects
            </Link>

          </div>

          {/* Social Links */}
          <div className="flex md:justify-start justify-center gap-6 text-xl text-gray-700">
            <a
              href="https://github.com/vijayon2527"
              target="_blank"
              rel="noreferrer"
              className="hover:text-black transition duration-300"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/gajjala-vijay-8b5a52321/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-700 transition duration-300"
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
