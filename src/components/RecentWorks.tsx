import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, ChevronRight, ChevronLeft } from "lucide-react";

interface Project {
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  tags: string[];
}

export default function RecentWorks() {
  const [activeIdx, setActiveIdx] = useState(0);

  const projects: Project[] = [
    {
      title: "CKD PREDICTION SYSTEM",
      category: "MACHINE LEARNING / ANALYTICS",
      description: "Developed and evaluated advanced ensemble machine learning models for Chronic Kidney Disease prediction using medical health records. Implemented Borderline-SMOTE algorithms to systematically resolve class imbalance issues and optimize clinical metrics.",
      imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop",
      tags: ["Python", "Ensemble Learning", "Borderline-SMOTE", "Scikit-Learn", "Pandas", "Healthcare AI"],
    },
    {
      title: "AI AIR CANVAS",
      category: "COMPUTER VISION / HCI",
      description: "A real-time, gesture-controlled virtual drawing application built using MediaPipe hand landmarks and OpenCV. Decodes spatial hand coordinates dynamically to allow intuitive touchless drawing on screen canvases.",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_XdGd9jIqCopPs0xXTcWkYib14EPeG3GnoVmA-MgE-AQ9Rt5yTpvlH0o&s=10",
      tags: ["OpenCV", "MediaPipe", "Python", "Real-Time Tracking", "Human-Computer Interaction"],
    },
    {
      title: "ARCH LINUX UI REDESIGN",
      category: "UI/UX DESIGN / ACCESSIDILITY",
      description: "Complete redesigned user experience and interface workspace for the Arch Linux environment. Designed interactive high-contrast prototypes utilizing Figma, Axure RP, and Pencil AI to maximize accessibility and ergonomic clarity.",
      imageUrl: "/src/assets/images/arch_linux_redesign_1782666528467.jpg",
      tags: ["Figma", "Canva", "Axure RP", "Pencil AI", "Wireframing", "HCI"],
    },
    {
      title: "WHATSAPP QUALITY TESTING",
      category: "SOFTWARE QUALITY ASSURANCE",
      description: "Designed and executed 50 robust manual test cases across mobile, desktop, and web clients. Drafted formal SQA deliverables including exhaustive test matrices, bug reports, and diagnostic test summaries.",
      imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
      tags: ["Manual Testing", "Test Strategy", "Bug Tracking", "Postman & Selenium", "SQA Reporting"],
    },
  ];

  const N = projects.length;

  const handleCardClick = (clickedIdx: number, position: number) => {
    if (position === 0) {
      // Front card clicked -> Cycle to the back (make next card active)
      setActiveIdx((activeIdx + 1) % N);
    } else {
      // Back card clicked -> Pull instantly to the front
      setActiveIdx(clickedIdx);
    }
  };

  const handlePrev = () => {
    setActiveIdx((activeIdx - 1 + N) % N);
  };

  const handleNext = () => {
    setActiveIdx((activeIdx + 1) % N);
  };

  return (
    <section
      id="work"
      className="relative py-32 w-full bg-[#0d1116] border-t border-white/5 flex items-center justify-center overflow-hidden px-6 md:px-12 lg:px-24"
    >
      {/* Subtle background overlay */}
      <div className="absolute left-[-200px] bottom-[10%] w-[500px] h-[500px] bg-[#00df8f]/2 rounded-full blur-[140px] pointer-events-none"></div>

      <div 
        className="w-full max-w-7xl mx-auto flex flex-col space-y-16"
        id="works-container"
      >
        {/* Header Section */}
        <div 
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6"
          id="works-header"
        >
          <div className="space-y-4 text-left">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-xs font-mono font-bold tracking-widest text-[#00df8f] uppercase"
              id="work-tag"
            >
              SELECTED CREATIONS // RECENT WORKS
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-white leading-none"
              id="work-heading"
            >
              RECENT WORKS<span className="text-[#00df8f]">.</span>
            </motion.h2>
          </div>

          <motion.button
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onClick={() => {
              const element = document.getElementById("contact");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="self-start sm:self-end text-xs tracking-widest font-mono font-bold text-[#00df8f] hover:text-white uppercase flex items-center gap-2 group border-b border-[#00df8f]/30 pb-1 cursor-pointer"
            id="work-all-projects-btn"
          >
            <span>START A PROJECT</span>
            <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </motion.button>
        </div>

        {/* 3D Stack and Detail Grid split */}
        <div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch pt-6"
          id="works-grid"
        >
          {/* Left Column (The 3D Stack Container) */}
          <div 
            className="lg:col-span-7 flex flex-col justify-between"
            id="works-stack-column"
          >
            {/* The Stack Box with perspective */}
            <div 
              className="relative w-full h-[320px] sm:h-[420px] md:h-[460px] perspective-container flex items-center justify-center mt-4"
              id="3d-deck-box"
            >
              {projects.map((project, i) => {
                // Calculate position relative to activeIdx
                const position = (i - activeIdx + N) % N;
                const isFront = position === 0;

                return (
                  <motion.div
                    key={i}
                    style={{ zIndex: N - position }}
                    animate={{
                      y: position * 25,
                      scale: 1 - position * 0.05,
                      rotateX: position * 3.5,
                      rotateY: isFront ? 0 : -0.5 * position,
                      opacity: position >= 3 ? 0 : 1 - position * 0.15,
                    }}
                    transition={{
                      duration: 0.85,
                      ease: [0.32, 0.72, 0, 1]
                    }}
                    onClick={() => handleCardClick(i, position)}
                    className={`absolute w-full max-w-[550px] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl origin-bottom border border-white/10 ${
                      isFront 
                        ? "cursor-pointer ring-1 ring-[#00df8f]/30 shadow-[#00df8f]/5" 
                        : "cursor-pointer"
                    }`}
                    id={`stacked-card-${i}`}
                  >
                    {/* Dark gradient vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 z-10 pointer-events-none" />

                    {/* Glowing highlight indicator on active front card */}
                    {isFront && (
                      <div className="absolute top-4 right-4 z-20 bg-black/75 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#00df8f]/30 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00df8f] animate-ping"></span>
                        <span className="text-[9px] font-mono tracking-widest text-[#00df8f] uppercase font-bold">CLICK TO CYCLE</span>
                      </div>
                    )}

                    {/* Image */}
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className={`w-full h-full object-cover transition-transform duration-700 ease-out ${
                        isFront ? "group-hover:scale-105" : "brightness-50"
                      }`}
                      referrerPolicy="no-referrer"
                    />

                    {/* Bottom Floating Title on Card (Subtle UI layer) */}
                    <div className="absolute bottom-6 left-6 right-6 z-20 flex justify-between items-end">
                      <div>
                        <p className="text-[10px] font-mono text-[#00df8f] tracking-widest uppercase mb-1 font-bold">
                          {project.category}
                        </p>
                        <h4 className="font-display font-bold text-lg sm:text-xl text-white tracking-tight">
                          {project.title}
                        </h4>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white text-xs">
                        0{i + 1}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Pagination Controls & Navigation dots */}
            <div 
              className="flex items-center justify-between mt-8 max-w-[550px] mx-auto w-full px-4"
              id="deck-controls"
            >
              {/* Manual Nav Arrows */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full border border-white/10 hover:border-[#00df8f]/40 hover:bg-white/5 transition-all flex items-center justify-center text-gray-400 hover:text-white cursor-pointer"
                  id="btn-prev-card"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full border border-white/10 hover:border-[#00df8f]/40 hover:bg-white/5 transition-all flex items-center justify-center text-gray-400 hover:text-white cursor-pointer"
                  id="btn-next-card"
                >
                  <ChevronRight size={16} />
                </button>
              </div>

              {/* Navigation dot indicators */}
              <div className="flex items-center gap-2" id="deck-dots">
                {projects.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIdx(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      i === activeIdx 
                        ? "w-8 bg-[#00df8f]" 
                        : "w-1.5 bg-white/20 hover:bg-white/40"
                    }`}
                    id={`deck-dot-${i}`}
                  />
                ))}
              </div>

              {/* Fractional counter */}
              <span className="font-mono text-xs text-gray-500 tracking-wider">
                [ 0{activeIdx + 1} // 0{N} ]
              </span>
            </div>
          </div>

          {/* Right Column (Dynamic Project Details panel) */}
          <div 
            className="lg:col-span-5 flex flex-col justify-center items-start space-y-6 pt-8 lg:pt-0 self-center"
            id="works-detail-column"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-6 flex flex-col items-start w-full text-left"
                id="works-detail-panel"
              >
                {/* Category info */}
                <span className="text-xs font-mono font-semibold text-[#00df8f] tracking-widest uppercase">
                  {projects[activeIdx].category}
                </span>

                {/* Heading */}
                <h3 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-white tracking-tighter leading-none">
                  {projects[activeIdx].title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 font-sans text-base sm:text-lg leading-relaxed font-light">
                  {projects[activeIdx].description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2" id="project-tags">
                  {projects[activeIdx].tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-mono tracking-wider font-semibold bg-[#14181f] text-gray-300 border border-white/5 px-3 py-1.5 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action CTA */}
                <div className="pt-4" id="project-explore-btn-wrapper">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      const contactSection = document.getElementById("contact");
                      if (contactSection) contactSection.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="group bg-[#14181f] text-white hover:text-[#00df8f] border border-white/10 hover:border-[#00df8f]/30 font-semibold px-6 py-3.5 rounded-full text-xs uppercase tracking-wider flex items-center gap-2 transition-all duration-300 cursor-pointer"
                    id="project-explore-btn"
                  >
                    <span>EXPLORE PROJECT</span>
                    <span className="w-5 h-5 rounded-full bg-white/5 group-hover:bg-[#00df8f]/10 text-gray-400 group-hover:text-[#00df8f] flex items-center justify-center transition-colors duration-300">
                      <ArrowUpRight size={12} />
                    </span>
                  </motion.button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
