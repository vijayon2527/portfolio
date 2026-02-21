import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2oxr16y",
        "template_jocs1ux",
        form.current,
        "iVrde0RllWYwq9m_z"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          alert("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Error: " + error.text);
        }
      );
  };

  return (
    <section className="min-h-screen bg-white text-gray-800 px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
          Contact Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          
          {/* LEFT SIDE - CONTACT DETAILS */}
          <div className="space-y-8">

            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                Let’s Connect
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Python Full Stack Developer specializing in Django and React.js.
                Open to full-time roles and project collaborations.
                Feel free to contact me via phone or email.
              </p>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4">
              <div className="bg-gray-100 p-4 rounded-full">
                <FaPhoneAlt className="text-gray-700" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <a
                  href="tel:+919999999999"
                  className="text-lg font-medium hover:text-black transition"
                >
                  +91 9160721596
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="bg-gray-100 p-4 rounded-full">
                <FaEnvelope className="text-gray-700" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <a
                  href="mailto:gajjalavijay234@gmail.com"
                  className="text-lg font-medium hover:text-black transition"
                >
                  gajjalavijay234@gmail.com
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4">
              <div className="bg-gray-100 p-4 rounded-full">
                <FaMapMarkerAlt className="text-gray-700" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="text-lg font-medium">
                  Bengaluru, India
                </p>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE - CONTACT FORM */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="bg-gray-100 p-8 rounded-2xl shadow-lg space-y-6"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
            />

            <input
              type="text"
              name="title"
              placeholder="Subject"
              required
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition duration-300"
            >
              Send Message
            </button>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;