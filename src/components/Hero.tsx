import { motion } from "motion/react";
import { ArrowRight, MessageSquare, Play } from "lucide-react";

interface HeroProps {
  setView?: (v: 'portfolio' | 'contact') => void;
}

export default function Hero({ setView }: HeroProps) {
  const handleScrollTo = (id: string) => {
    if (id === "contact" && setView) {
      setView("contact");
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full bg-[#0d1116] grid-bg-overlay flex items-center justify-center overflow-hidden pt-28 pb-16 px-6 md:px-12 lg:px-24"
    >
      {/* Massive subtle background watermarks */}
      <div 
        className="absolute inset-0 pointer-events-none flex items-center justify-center select-none"
        id="hero-watermark-container"
      >
        <h1 
          className="font-display font-black text-[22vw] text-white opacity-[0.015] tracking-tighter leading-none"
          id="hero-watermark-text"
        >
          DESIGN
        </h1>
      </div>

      {/* Decorative ambient light glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#00df8f]/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#0070f3]/3 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Hero content container */}
      <div 
        className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10"
        id="hero-grid-container"
      >
        {/* Left Column (Content) */}
        <div 
          className="lg:col-span-7 flex flex-col justify-center items-start space-y-6 text-left"
          id="hero-text-column"
        >
          {/* Subheading tag */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#14181f] border border-white/5"
            id="hero-badge"
          >
            <span className="w-2 h-2 rounded-full bg-[#00df8f] animate-pulse glow-green"></span>
            <span className="text-xs font-mono font-medium tracking-widest text-[#00df8f] uppercase">
              ASPIRING AI/ML ENGINEER & UI/UX DESIGNER
            </span>
          </motion.div>

          {/* Main Headings */}
          <div className="space-y-1.5 w-full" id="hero-headings-group">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-bold tracking-tighter text-white leading-[0.85]"
              id="hero-title-solid"
            >
              INTELLIGENT
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-bold tracking-tighter text-transparent leading-[0.85] text-stroke-accent text-glow-green"
              id="hero-title-stroke"
            >
              SYSTEMS<span className="text-[#00df8f] text-stroke-accent">.</span>
            </motion.h1>
          </div>

          {/* Bio text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-gray-400 font-sans text-base sm:text-lg max-w-xl leading-relaxed font-light"
            id="hero-description"
          >
            Aspiring AI/ML Engineer and UI/UX Designer bridging the gap between machine intelligence and stunning user interaction. Hands-on experience developing healthcare prediction models, computer vision systems, and modern frontend interfaces.
          </motion.p>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 w-full sm:w-auto"
            id="hero-cta-group"
          >
            {/* View my work */}
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleScrollTo("work")}
              className="relative group bg-gradient-to-r from-[#00df8f] to-[#00b373] hover:shadow-[0_0_30px_rgba(0,223,143,0.4)] text-[#0d1116] font-bold px-8 py-4.5 rounded-full text-sm uppercase tracking-wider flex items-center justify-center gap-2.5 transition-all duration-300 cursor-pointer"
              id="hero-btn-work"
            >
              <span>View My Work</span>
              <span className="bg-[#0d1116] text-[#00df8f] w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight size={14} />
              </span>
            </motion.button>

            {/* Contact Me */}
            <motion.button
              whileHover={{ scale: 1.04, backgroundColor: "rgba(255,255,255,0.03)" }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleScrollTo("contact")}
              className="bg-[#14181f] text-white border border-white/10 hover:border-[#00df8f]/30 font-semibold px-8 py-4.5 rounded-full text-sm uppercase tracking-wider flex items-center justify-center gap-2.5 transition-all duration-300 cursor-pointer"
              id="hero-btn-contact"
            >
              <MessageSquare size={16} className="text-gray-400 group-hover:text-[#00df8f]" />
              <span>Contact Me</span>
              <span className="w-2 h-2 rounded-full bg-[#00df8f]"></span>
            </motion.button>
          </motion.div>
        </div>

        {/* Right Column (Interactive 3D ID Card Badge) */}
        <div 
          className="lg:col-span-5 flex items-center justify-center relative min-h-[480px] lg:min-h-[580px]"
          id="hero-card-column"
        >
          {/* Draggable snap-back Lanyard Card Badge container */}
          <motion.div
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragElastic={0.4}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            whileDrag={{ scale: 1.05, cursor: "grabbing" }}
            animate={{
              y: [0, -15, 0],
              rotateZ: [-1, 1, -1]
            }}
            transition={{
              y: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              },
              rotateZ: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            className="flex flex-col items-center relative z-10 cursor-grab active:cursor-grabbing select-none"
            id="hero-badge-interactive-group"
          >
            {/* Lanyard Green Strap / Strip */}
            <motion.div 
              className="w-3 sm:w-4 h-24 sm:h-32 bg-gradient-to-b from-transparent via-[#00df8f] to-[#00b373] relative origin-top shadow-[0_10px_20px_rgba(0,223,143,0.15)] flex flex-col items-center rounded-t-sm"
              animate={{
                rotate: [-2, 2, -2],
                skewX: [-1.5, 1.5, -1.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Stitching details on the ribbon */}
              <div className="absolute inset-y-0 left-0.5 right-0.5 border-l border-r border-[#0d1116]/20 border-dashed opacity-60"></div>
              {/* Subtle shining gradient line */}
              <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[2px] bg-white/20"></div>
            </motion.div>

            {/* Metal Connector Clip / Hook */}
            <div className="w-6 h-6 -my-1.5 relative z-20 flex flex-col items-center justify-center">
              {/* Silver split-ring / key-ring */}
              <div className="w-5 h-5 rounded-full border-2 border-zinc-400 bg-transparent shadow-inner"></div>
              {/* Silver lobster clasp / hook */}
              <div className="w-2.5 h-4 bg-gradient-to-r from-zinc-300 via-zinc-100 to-zinc-400 rounded-sm border border-zinc-500 -mt-2 shadow-md"></div>
            </div>

            {/* Card Holder */}
            <div
              className="w-[290px] h-[410px] sm:w-[320px] sm:h-[450px] bg-[#14181f] border border-white/10 rounded-2xl p-4 flex flex-col relative shadow-2xl shadow-black/80 select-none overflow-hidden group"
              id="hero-badge-card"
            >
              {/* Lanyard Clip Attachment design */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[1px] w-12 h-4 bg-[#0d1116] rounded-b-xl border-x border-b border-white/10 flex items-center justify-center">
                <div className="w-4 h-1.5 rounded-full bg-[#00df8f]/30"></div>
              </div>

              {/* Inner Border */}
              <div className="w-full h-full border border-white/5 rounded-xl flex flex-col p-4 justify-between bg-gradient-to-b from-[#14181f] to-[#0e1116] relative">
                
                {/* Card Header */}
                <div className="flex justify-between items-center pb-2 border-b border-white/5" id="badge-header">
                  <div>
                    <p className="text-[9px] font-mono tracking-widest text-[#00df8f] uppercase font-bold">SYSTEM ACTIVE</p>
                    <p className="text-[7px] font-mono text-gray-500 uppercase">ACCESS LEVEL // 01</p>
                  </div>
                  <div className="w-5 h-5 rounded-full border border-[#00df8f]/20 flex items-center justify-center bg-[#0d1116]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00df8f]"></span>
                  </div>
                </div>

                {/* Portrait Image container with cyberpunk styling */}
                <div 
                  className="w-full h-[200px] sm:h-[230px] rounded-lg overflow-hidden relative my-3 bg-[#0d1116] border border-white/5 group-hover:border-[#00df8f]/30 transition-colors duration-500"
                  id="badge-image-wrapper"
                >
                  {/* Underlay Image (Grayscale / Black & White) */}
                  <img
                    src="/src/assets/images/mahwish_portrait.jpg"
                    alt="Mahwish Portrait Grayscale"
                    className="w-full h-full object-cover object-center grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />

                  {/* Overlay Image (Full color, clipped to create the splitting effect) */}
                  <img
                    src="/src/assets/images/mahwish_portrait.jpg"
                    alt="Mahwish Portrait Colorful"
                    className="absolute inset-0 w-full h-full object-cover object-center animate-[scan-clip_3s_linear_infinite] pointer-events-none"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Visual scan lines */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00df8f]/3 to-transparent pointer-events-none opacity-40 mix-blend-color-dodge"></div>
                  
                  {/* Laser line overlay animated in loop with higher glow */}
                  <div className="absolute w-full h-[2px] bg-[#00df8f] top-0 animate-[scan_3s_linear_infinite] opacity-80 shadow-[0_0_8px_#00df8f]"></div>
                  
                  {/* Lanyard card watermark */}
                  <div className="absolute bottom-2 left-2 bg-black/70 backdrop-blur-md border border-white/10 px-2 py-1 rounded text-[8px] font-mono text-gray-300 tracking-wider">
                    Z-9883X
                  </div>
                </div>

                {/* Bottom of the card */}
                <div className="space-y-1.5 text-center mt-auto" id="badge-footer">
                  <h3 className="font-display font-bold text-xl text-white tracking-tight">
                    Mahwish Abid<span className="text-[#00df8f]">.</span>
                  </h3>
                  <p className="text-[11px] font-mono text-gray-400 tracking-wider uppercase">
                    AI/ML & UI/UX Designer
                  </p>
                  <div className="w-full bg-[#0d1116] rounded-md py-1 border border-white/5 flex items-center justify-around text-[7px] font-mono text-gray-500 px-2">
                    <span>ID: 2005.03</span>
                    <span className="w-1 h-1 rounded-full bg-emerald-500"></span>
                    <span>IP: SECURE</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card Help Text bubble */}
          <div className="absolute bottom-12 text-center pointer-events-none select-none">
            <span className="font-mono text-[10px] tracking-widest text-gray-500 uppercase flex items-center gap-1.5">
            </span>
          </div>
        </div>
      </div>

      {/* Embedded Scan and Clip-path animation keyframes */}
      <style>{`
        @keyframes scan {
          0% { top: 0%; }
          50% { top: 100%; }
          100% { top: 0%; }
        }
        @keyframes scan-clip {
          0% {
            clip-path: inset(0% 0% 100% 0%);
          }
          50% {
            clip-path: inset(0% 0% 0% 0%);
          }
          100% {
            clip-path: inset(0% 0% 100% 0%);
          }
        }
      `}</style>
    </section>
  );
}
