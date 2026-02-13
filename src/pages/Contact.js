import { useRef } from "react";
import emailjs from "@emailjs/browser";

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
    <section className="min-h-screen bg-gray-900 text-white px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Contact Me
        </h2>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-gray-800 p-8 rounded-xl shadow-lg space-y-6"
        >
          <input
            type="text"
            name="name"   // matches {{name}}
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-md bg-gray-700 outline-none"
          />

          <input
            type="email"
            name="email"  // matches {{email}}
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-md bg-gray-700 outline-none"
          />

          {/* 🔥 REQUIRED because template uses {{title}} */}
          <input
            type="text"
            name="title"   // matches {{title}}
            placeholder="Subject"
            required
            className="w-full p-3 rounded-md bg-gray-700 outline-none"
          />

          <textarea
            name="message"  // matches {{message}}
            placeholder="Your Message"
            rows="5"
            required
            className="w-full p-3 rounded-md bg-gray-700 outline-none"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-white text-black py-3 rounded-md font-semibold hover:opacity-90"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
