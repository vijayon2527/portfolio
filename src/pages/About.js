const About = () => {
  return (
    <section id="about" className="min-h-screen bg-gray-900 text-white px-6 py-20">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-12">
          About Me
        </h2>

        <div className="bg-gray-800 p-8 rounded-xl shadow-lg">
          
          <p className="text-gray-300 leading-8 mb-6">
            I am a Full Stack Developer specializing in 
            <span className="text-white font-semibold"> React.js </span> 
            and 
            <span className="text-white font-semibold"> Django REST API</span>. 
            I build scalable, user-focused web applications with clean UI and 
            optimized backend logic.
          </p>

          <p className="text-gray-400 leading-8 mb-6">
            I have worked on projects like a Learning Management System (LMS) 
            and CREAM platform where I handled frontend development, backend APIs, 
            and database design using MySQL.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">Frontend</h3>
              <ul className="text-gray-400 space-y-2">
                <li>✔ React.js</li>
                <li>✔ Tailwind CSS</li>
                <li>✔ JavaScript (ES6+)</li>
                <li>✔ Responsive UI Design</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Backend</h3>
              <ul className="text-gray-400 space-y-2">
                <li>✔ Django & Django REST Framework</li>
                <li>✔ MySQL Database</li>
                <li>✔ API Development</li>
                <li>✔ Authentication & Authorization</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
