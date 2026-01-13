
import React, { useState } from "react";
import { database } from "./config/firebase_config";
import { ref, push } from "firebase/database";
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SendIcon from '@mui/icons-material/Send';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const dbRef = ref(database, "contacts");
      await push(dbRef, formData);
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending message: ", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative py-24 bg-[#1a1a1a] text-white overflow-hidden" id="contact">

      {/* Background Decoration */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="mb-16">
          <h6 className="text-xl font-semibold text-green-500 mb-2 tracking-widest text-left">05. CONTACT</h6>
          <h2 className="text-4xl md:text-5xl font-bold text-white flex items-center gap-4">
            <span className="bg-gradient-to-r from-green-400 to-green-600 w-16 h-1.5 rounded-full"></span>
            <span>Get In Touch</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

          {/* Left Column: Contact Info */}
          <div className="flex-1 space-y-8">
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-lg">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="space-y-6">
              <ContactItem icon={<EmailIcon className="text-green-500" />} title="Email" value="sarathmullath2003@gmail.com" link="mailto:sarathmullath2003@gmail.com" />
              <ContactItem icon={<PhoneIcon className="text-green-500" />} title="Phone" value="+91 9544587196" link="tel:+919544587196" />
              <ContactItem icon={<LocationOnIcon className="text-green-500" />} title="Location" value="Kerala, India" />
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="flex-1">
            <form onSubmit={handleSubmit} className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 shadow-2xl space-y-6 group hover:border-green-500/30 transition-all duration-500">

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-gray-400 font-medium ml-1">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all duration-300 placeholder-gray-600"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-400 font-medium ml-1">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all duration-300 placeholder-gray-600"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-400 font-medium ml-1">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all duration-300 placeholder-gray-600"
                  placeholder="What's on your mind?"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-green-500 hover:bg-green-600 text-black font-bold py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 transform active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending...' : 'Send Message'}
                {!loading && <SendIcon fontSize="small" />}
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

const ContactItem = ({ icon, title, value, link }) => (
  <div className="flex items-center gap-4 bg-gray-900/30 p-4 rounded-xl border border-gray-800/50 hover:bg-gray-800/50 transition-colors">
    <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center border border-green-500/20">
      {icon}
    </div>
    <div>
      <h4 className="text-sm text-gray-400 font-medium">{title}</h4>
      {link ? (
        <a href={link} className="text-lg font-semibold text-white hover:text-green-400 transition-colors">
          {value}
        </a>
      ) : (
        <p className="text-lg font-semibold text-white">{value}</p>
      )}
    </div>
  </div>
);
