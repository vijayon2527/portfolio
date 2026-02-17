const About = () => {
  return (
    <section id="about" className="min-h-screen bg-gray-900 text-white px-6 py-20">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-12">
          About Me
        </h2>

        <div className="bg-gray-800 p-8 rounded-xl shadow-lg">
          
          <p className="text-gray-300 leading-8 mb-6">
            I am a passionate Python Full Stack Developer with hands-on experience 
            in building scalable and secure web applications using 
            <span className="text-white font-semibold"> Django, Django REST Framework, </span> 
            and 
            <span className="text-white font-semibold"> React.js</span>. 
            I specialize in developing RESTful APIs, implementing authentication systems, 
            and creating responsive, user-friendly interfaces.
          </p>

          <p className="text-gray-400 leading-8 mb-6">
            I have worked on real-world projects such as a Learning Management System (LMS) 
            and a CREAM platform, where I handled end-to-end development including 
            frontend implementation, backend API development, and database design 
            using MySQL. I focus on writing clean, maintainable, and optimized code.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">Frontend</h3>
              <ul className="text-gray-400 space-y-2">
                <li>✔ React.js</li>
                <li>✔ JavaScript (ES6+)</li>
                <li>✔ Tailwind CSS</li>
                <li>✔ Responsive UI Development</li>
                <li>✔ API Integration</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Backend</h3>
              <ul className="text-gray-400 space-y-2">
                <li>✔ Python</li>
                <li>✔ Django & Django REST Framework</li>
                <li>✔ REST API Development</li>
                <li>✔ MySQL Database</li>
                <li>✔ Authentication & Role-Based Authorization</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
