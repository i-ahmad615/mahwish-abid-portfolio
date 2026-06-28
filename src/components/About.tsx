import { motion } from "motion/react";

export default function About() {
  const skills = [
    "Supervised Learning",
    "Ensemble Learning",
    "Model Evaluation",
    "Agentic AI (n8n)",
    "Prompt Engineering",
    "Multi-Agent AI Systems",
    "OpenCV",
    "MediaPipe",
    "React.js",
    "JavaScript (ES6+)",
    "HTML5 / CSS3",
    "Tailwind CSS",
    "Figma & Canva",
    "Axure RP & Pencil AI",
    "Wireframing & Prototyping",
    "Pandas & NumPy",
    "Scikit-learn",
    "Selenium & Postman",
    "Git & GitHub",
    "Jira & Agile Project Management",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 15, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15,
      },
    },
  };

  return (
    <section
      id="about"
      className="relative py-32 w-full bg-[#0d1116] border-t border-white/5 flex items-center justify-center overflow-hidden px-6 md:px-12 lg:px-24"
    >
      {/* Background graphic elements */}
      <div className="absolute right-[-100px] top-[10%] w-[300px] h-[300px] bg-[#00df8f]/3 rounded-full blur-[100px] pointer-events-none"></div>

      <div 
        className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start"
        id="about-container"
      >
        {/* Left Column (Info) */}
        <div 
          className="lg:col-span-6 flex flex-col space-y-8"
          id="about-info-column"
        >
          {/* Header */}
          <div className="space-y-4">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-xs font-mono font-bold tracking-widest text-[#00df8f] uppercase"
              id="about-tag"
            >
              ABOUT ME // THE PROFILE
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-4xl sm:text-5xl lg:text-[4rem] font-bold tracking-tighter text-white leading-[0.95]"
              id="about-heading"
            >
              ENGINEERING WITH INTELLIGENCE<span className="text-[#00df8f]">.</span>
            </motion.h2>
          </div>

          {/* Description paragraphs */}
          <div className="space-y-6 text-gray-400 font-sans text-base sm:text-lg leading-relaxed font-light">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              id="about-para-1"
            >
              I am an aspiring AI/ML Engineer with hands-on experience in machine learning, computer vision, and intelligent application development. Currently pursuing a BS in Computer Sciences at Lahore Garrison University (GPA 3.5), I combine deep theoretical models with pristine user experience.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              id="about-para-2"
            >
              By aligning data processing, ensemble learning, and computer vision with modern Frontend Development and professional UI/UX Design, I build end-to-end intelligent systems. My mission is to construct functional, accessible solutions that solve real-world problems.
            </motion.p>
          </div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 gap-8 pt-8 border-t border-white/5"
            id="about-stats"
          >
            {/* Stat 1 */}
            <div className="space-y-1">
              <h3 className="font-display text-4xl sm:text-5xl font-black text-[#00df8f] tracking-tight">
                3.5 <span className="text-xl sm:text-2xl font-bold font-sans text-white">GPA</span>
              </h3>
              <p className="text-xs font-mono text-gray-500 uppercase tracking-widest">
                Lahore Garrison University (BS CS)
              </p>
            </div>

            {/* Divider line */}
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-white/10"></div>
              {/* Stat 2 */}
              <div className="pl-8 space-y-1">
                <h3 className="font-display text-4xl sm:text-5xl font-black text-[#00df8f] tracking-tight">
                  4+ <span className="text-xl sm:text-2xl font-bold font-sans text-white">Projects</span>
                </h3>
                <p className="text-xs font-mono text-gray-500 uppercase tracking-widest">
                  AI/ML, CV, and UI redesigns
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column (Toolkit Card) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 w-full"
          id="about-toolkit-column"
        >
          {/* Glassmorphism card container */}
          <div className="glass-card rounded-2xl p-8 sm:p-10 relative overflow-hidden shadow-2xl">
            {/* Background neon hint */}
            <div className="absolute top-[-50px] left-[-50px] w-48 h-48 bg-[#00df8f]/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="space-y-6 relative z-10">
              <div className="flex justify-between items-center pb-4 border-b border-white/5">
                <div>
                  <h3 className="font-display font-bold text-xl text-white">
                    MY DIGITAL TOOLKIT
                  </h3>
                  <p className="text-xs font-mono text-gray-400 mt-1 uppercase">
                    Advanced skills & ecosystem expertise
                  </p>
                </div>

              </div>

              {/* Skills chip container */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-2.5 pt-2"
                id="skills-wrapper"
              >
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.05,
                      borderColor: "#00df8f",
                      color: "#00df8f",
                      boxShadow: "0 0 15px rgba(0, 223, 143, 0.3)",
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="cursor-pointer bg-[#0d1116] border border-white/10 text-gray-300 font-sans text-xs sm:text-sm px-4.5 py-2.5 rounded-full transition-colors duration-300 tracking-wide font-medium"
                    id={`skill-chip-${index}`}
                  >
                    {skill}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
