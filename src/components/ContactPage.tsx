/// <reference types="vite/client" />
import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowLeft, Mail, Phone, MapPin, Github, Linkedin, MessageSquare, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

interface ContactPageProps {
  onClose: () => void;
}

export default function ContactPage({ onClose }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const rawKey = import.meta.env.VITE_FORMSPREE_KEY || "maqgjkpy";
  
  // Robustly clean the key: trim whitespace, strip outer quotes, or extract the ID from a full Formspree URL
  let formspreeKey = typeof rawKey === "string" ? rawKey.trim() : "maqgjkpy";
  formspreeKey = formspreeKey.replace(/^['"]|['"]$/g, "");
  if (formspreeKey.includes("/f/")) {
    formspreeKey = formspreeKey.substring(formspreeKey.lastIndexOf("/") + 1);
  }

  // Log the key to the developer console for transparent and easy debugging
  console.log("Formspree key resolved as:", formspreeKey);

  const [state, handleSubmit] = useForm(formspreeKey);

  // Clear form when submission succeeds
  useEffect(() => {
    if (state.succeeded) {
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }
  }, [state.succeeded]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <div className="min-h-screen bg-[#0d1116] text-white overflow-y-auto relative font-sans pt-28 pb-20 px-6 md:px-12 lg:px-24">
      {/* Subtle Glow Structures */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#00df8f]/5 rounded-full blur-[150px] pointer-events-none z-0" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-slate-800/10 rounded-full blur-[100px] pointer-events-none z-0" />

      {/* Header Controls */}
      <div className="max-w-7xl mx-auto mb-10 relative z-10">
        <motion.button
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={onClose}
          className="flex items-center gap-2 text-sm font-semibold tracking-wider text-gray-400 hover:text-white transition-colors duration-300 group cursor-pointer"
          id="back-to-portfolio-btn"
        >
          <ArrowLeft size={16} className="transition-transform duration-300 group-hover:-translate-x-1" />
          <span>Back to Portfolio</span>
        </motion.button>
      </div>

      {/* Main Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto relative z-10"
      >
        {/* Title Block */}
        <motion.div variants={itemVariants} className="text-center mb-16 space-y-4">
          <h1 className="font-display font-black text-5xl sm:text-7xl md:text-8xl tracking-tight text-white uppercase leading-none drop-shadow-lg">
            GET IN TOUCH<span className="text-[#00df8f]">.</span>
          </h1>
          <p className="text-gray-400 font-sans text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Have a project in mind? Let's discuss how we can bring your vision to life.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact Card & Details */}
          <motion.div variants={itemVariants} className="lg:col-span-5 space-y-8 flex flex-col">
            {/* Profile Summary Card */}
            <div className="bg-[#161b22]/50 border border-white/5 backdrop-blur-md rounded-2xl p-6 flex flex-col items-center text-center space-y-4 relative group hover:border-[#00df8f]/20 transition-all duration-500 shadow-xl shadow-black/40">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#00df8f]/5 rounded-full blur-[30px] pointer-events-none" />
              
              {/* Profile Image with mint circular gradient glow */}
              <div className="relative w-32 h-32 rounded-full p-1 bg-[#00df8f] shadow-lg shadow-[#00df8f]/10">
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-900">
                  <img
                    src="/src/assets/images/mahwish_portrait.jpg"
                    alt="Mahwish Abid"
                    onError={(e) => {
                      // Fallback if local image doesn't exist yet
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop";
                    }}
                    className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <h3 className="font-display text-2xl font-bold tracking-tight text-white">
                  Mahwish Abid<span className="text-[#00df8f]">.</span>
                </h3>
                <p className="text-xs font-mono text-[#00df8f] uppercase tracking-widest">
                  AI/ML Engineer & UI/UX Designer
                </p>
              </div>
            </div>

            {/* Structured Info Blocks */}
            <div className="space-y-4">
              {/* Email Block */}
              <div className="bg-[#161b22]/30 border border-white/5 backdrop-blur-sm rounded-xl p-4 flex items-center gap-4 hover:bg-[#161b22]/50 hover:border-[#00df8f]/20 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-[#00df8f]/10 border border-[#00df8f]/10 flex items-center justify-center text-[#00df8f]">
                  <Mail size={20} />
                </div>
                <div className="text-left">
                  <span className="block text-[10px] font-mono text-gray-500 uppercase tracking-wider">Email</span>
                  <a href="mailto:mahwishabid502@gmail.com" className="text-sm font-medium hover:text-[#00df8f] transition-colors duration-200">
                    mahwishabid502@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone Block */}
              <div className="bg-[#161b22]/30 border border-white/5 backdrop-blur-sm rounded-xl p-4 flex items-center gap-4 hover:bg-[#161b22]/50 hover:border-[#00df8f]/20 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-[#00df8f]/10 border border-[#00df8f]/10 flex items-center justify-center text-[#00df8f]">
                  <Phone size={20} />
                </div>
                <div className="text-left">
                  <span className="block text-[10px] font-mono text-gray-500 uppercase tracking-wider">Phone</span>
                  <a href="https://api.whatsapp.com/send/?phone=923098466000&text=Hi+Mahwish&type=phone_number&app_absent=0" className="text-sm font-medium hover:text-[#00df8f] transition-colors duration-200">
                    +92 309 8466000
                  </a>
                </div>
              </div>

              {/* Location Block */}
              <div className="bg-[#161b22]/30 border border-white/5 backdrop-blur-sm rounded-xl p-4 flex items-center gap-4 hover:bg-[#161b22]/50 hover:border-[#00df8f]/20 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-[#00df8f]/10 border border-[#00df8f]/10 flex items-center justify-center text-[#00df8f]">
                  <MapPin size={20} />
                </div>
                <div className="text-left">
                  <span className="block text-[10px] font-mono text-gray-500 uppercase tracking-wider">Location</span>
                  <span className="text-sm font-medium text-gray-300">Lahore, Pakistan</span>
                </div>
              </div>
            </div>

            {/* Social Links Block */}
            <div className="space-y-3 text-left">
              <span className="block text-[10px] font-mono text-gray-500 uppercase tracking-widest pl-1">Follow Me</span>
              <div className="flex gap-3">
                <motion.a
                  whileHover={{ y: -3, scale: 1.05 }}
                  href="https://github.com/Anotherone204"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-lg bg-[#161b22]/40 border border-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#00df8f]/10 hover:border-[#00df8f]/20 transition-all duration-300"
                >
                  <Github size={18} />
                </motion.a>
                <motion.a
                  whileHover={{ y: -3, scale: 1.05 }}
                  href="https://www.linkedin.com/in/i-mahwishabid615/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-lg bg-[#161b22]/40 border border-white/5 flex items-center justify-center text-gray-400 hover:text-[#00df8f] hover:bg-[#00df8f]/10 hover:border-[#00df8f]/20 transition-all duration-300"
                >
                  <Linkedin size={18} />
                </motion.a>
                <motion.a
                  whileHover={{ y: -3, scale: 1.05 }}
                  href="https://api.whatsapp.com/send/?phone=923098466000&text=Hi+Mahwish&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-lg bg-[#161b22]/40 border border-white/5 flex items-center justify-center text-gray-400 hover:text-[#00df8f] hover:bg-[#00df8f]/10 hover:border-[#00df8f]/20 transition-all duration-300"
                >
                  <MessageSquare size={18} />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Form */}
          <motion.div variants={itemVariants} className="lg:col-span-7">
            <div className="bg-[#161b22]/30 border border-white/5 backdrop-blur-md rounded-2xl p-6 sm:p-8 hover:border-[#00df8f]/10 transition-all duration-500 shadow-xl shadow-black/30 relative">
              <form onSubmit={handleSubmit} className="space-y-6 text-left">
                {/* Dual Input Row (Name + Email) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-mono text-gray-400 uppercase tracking-wider block">
                      Name *
                    </label>
                    <input
                      required
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-[#0d1116]/80 border border-white/5 focus:border-[#00df8f] rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#00df8f]/30 transition-all"
                    />
                    <ValidationError field="name" prefix="Name" errors={state.errors} className="text-xs text-rose-400 font-mono mt-1 block" />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-mono text-gray-400 uppercase tracking-wider block">
                      Email *
                    </label>
                    <input
                      required
                      type="email"
                      id="email"
                      name="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-[#0d1116]/80 border border-white/5 focus:border-[#00df8f] rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#00df8f]/30 transition-all"
                    />
                    <ValidationError field="email" prefix="Email" errors={state.errors} className="text-xs text-rose-400 font-mono mt-1 block" />
                  </div>
                </div>

                {/* Subject Input */}
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-xs font-mono text-gray-400 uppercase tracking-wider block">
                    Subject *
                  </label>
                  <input
                    required
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Project inquiry"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-[#0d1116]/80 border border-white/5 focus:border-[#00df8f] rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#00df8f]/30 transition-all"
                  />
                  <ValidationError field="subject" prefix="Subject" errors={state.errors} className="text-xs text-rose-400 font-mono mt-1 block" />
                </div>

                {/* Message Input */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-mono text-gray-400 uppercase tracking-wider block">
                    Message *
                  </label>
                  <textarea
                    required
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-[#0d1116]/80 border border-white/5 focus:border-[#00df8f] rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#00df8f]/30 transition-all resize-none"
                  />
                  <ValidationError field="message" prefix="Message" errors={state.errors} className="text-xs text-rose-400 font-mono mt-1 block" />
                </div>

                {/* Submission Status Alerts */}
                {state.succeeded && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-start gap-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 p-4 rounded-xl text-sm"
                  >
                    <CheckCircle2 size={18} className="shrink-0 mt-0.5" />
                    <div className="text-left">
                      <span className="font-semibold block">Message Sent Successfully!</span>
                      <span>Thank you. Your message has been received. I will get back to you shortly.</span>
                    </div>
                  </motion.div>
                )}

                {state.errors && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-start gap-3 bg-rose-500/10 border border-rose-500/20 text-rose-400 p-4 rounded-xl text-sm"
                  >
                    <AlertCircle size={18} className="shrink-0 mt-0.5" />
                    <div className="text-left">
                      <span className="font-semibold block">Submission Failed</span>
                      <span>Please double-check your fields and try again.</span>
                    </div>
                  </motion.div>
                )}

                {/* Submit button: Matching mint green style */}
                <motion.button
                  whileHover={{ scale: state.submitting ? 1 : 1.02, boxShadow: "0 8px 25px rgba(0, 223, 143, 0.2)" }}
                  whileTap={{ scale: state.submitting ? 1 : 0.98 }}
                  disabled={state.submitting}
                  type="submit"
                  className="w-full py-4 bg-[#00df8f] hover:bg-[#05fca1] text-[#0d1116] font-bold rounded-xl text-sm uppercase tracking-wider flex items-center justify-center gap-2.5 transition-all duration-300 cursor-pointer shadow-lg disabled:opacity-55 disabled:cursor-not-allowed"
                >
                  <Send size={15} className={`${state.submitting ? "animate-pulse" : ""}`} />
                  <span>{state.submitting ? "Sending Message..." : "Send Message"}</span>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
