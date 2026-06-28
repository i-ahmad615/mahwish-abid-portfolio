import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

interface ServiceStage {
  num: string;
  title: string;
  description: string;
}

export default function Services() {
  const [openIdx, setOpenIdx] = useState<number | null>(0); // Default open first item

  const stages: ServiceStage[] = [
    {
      num: "01",
      title: "BRIEFING",
      description: "The architectural kickoff. We establish core project parameters, machine learning goals, and design guidelines. Deciding on whether to construct predictive diagnostics, CV tracking, or sleek accessible redesigns.",
    },
    {
      num: "02",
      title: "ANALYTICS",
      description: "Deep dive data research and modeling analysis. Preprocessing data, analyzing statistical correlations with Scikit-learn, and engineering features—including implementing class imbalance remedies like Borderline-SMOTE.",
    },
    {
      num: "03",
      title: "PROTOTYPING",
      description: "Transforming interactive ideas into wireframe schemas. Building low-fidelity skeletons in Figma, Axure RP, and Pencil AI to outline interactive system screens and coordinate spatial gestures for touchless interaction.",
    },
    {
      num: "04",
      title: "DESIGN",
      description: "Crafting modern high-fidelity digital canvases. Designing beautiful, accessible UI components with perfect high-contrast typography, customizable responsive grids, and reusable custom dark-mode systems.",
    },
    {
      num: "05",
      title: "ADAPTIVE",
      description: "Optimizing code and styles for various device footprints. Building highly flexible layouts in React.js and Tailwind CSS that work elegantly across ultra-wide desktop monitors, laptops, and mobile screens.",
    },
    {
      num: "06",
      title: "THE FINAL",
      description: "Rigorous quality assurance testing and deployment. Running extensive testing processes (such as 50+ detailed SQA test cases), checking API inputs, verifying cross-browser stability, and deploying secure web apps.",
    },
  ];

  const toggleItem = (idx: number) => {
    if (openIdx === idx) {
      setOpenIdx(null);
    } else {
      setOpenIdx(idx);
    }
  };

  return (
    <section
      id="services"
      className="relative py-32 w-full bg-[#0d1116] border-t border-white/5 flex items-center justify-center overflow-hidden px-6 md:px-12 lg:px-24"
    >
      {/* Background radial highlight */}
      <div className="absolute left-[30%] top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00df8f]/3 rounded-full blur-[150px] pointer-events-none"></div>

      <div 
        className="w-full max-w-4xl mx-auto flex flex-col space-y-16"
        id="services-container"
      >
        {/* Section Heading */}
        <div className="space-y-4 text-center">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-xs font-mono font-bold tracking-widest text-[#00df8f] uppercase"
            id="services-tag"
          >
            HOW I WORK // DESIGN WORKFLOW
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-white leading-none uppercase"
            id="services-heading"
          >
            STAGES OF WEBSITE <br className="hidden sm:block" />
            <span className="text-transparent text-stroke-accent text-glow-green">DEVELOPMENT</span><span className="text-[#00df8f]">.</span>
          </motion.h2>
        </div>

        {/* Accordion List container */}
        <div className="divide-y divide-white/10" id="services-accordion-list">
          {stages.map((stage, idx) => {
            const isOpen = openIdx === idx;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                className="group py-6 sm:py-8"
                id={`services-stage-${idx}`}
              >
                {/* Header Row */}
                <button
                  onClick={() => toggleItem(idx)}
                  className="w-full flex items-center justify-between text-left cursor-pointer focus:outline-none"
                  id={`services-stage-btn-${idx}`}
                >
                  <div className="flex items-center gap-6 sm:gap-10">
                    {/* Stage number */}
                    <span className="font-mono text-sm sm:text-base font-bold text-gray-500 group-hover:text-[#00df8f] transition-colors duration-300">
                      {stage.num}
                    </span>

                    {/* Stage Title */}
                    <h3 className="font-display text-xl sm:text-3xl font-bold text-white group-hover:text-gray-200 transition-colors duration-300 tracking-tight">
                      {stage.title}
                    </h3>
                  </div>

                  {/* Toggle button */}
                  <div 
                    className={`w-10 h-10 rounded-full border border-white/10 group-hover:border-[#00df8f]/50 flex items-center justify-center text-gray-400 group-hover:text-[#00df8f] transition-all duration-300 ${
                      isOpen ? "bg-white/5 border-[#00df8f]/30" : ""
                    }`}
                    id={`services-stage-icon-box-${idx}`}
                  >
                    <AnimatePresence mode="wait">
                      {isOpen ? (
                        <motion.div
                          key="minus"
                          initial={{ rotate: -90, opacity: 0 }}
                          animate={{ rotate: 0, opacity: 1 }}
                          exit={{ rotate: 90, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Minus size={16} />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="plus"
                          initial={{ rotate: 90, opacity: 0 }}
                          animate={{ rotate: 0, opacity: 1 }}
                          exit={{ rotate: -90, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Plus size={16} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </button>

                {/* Body Row (Collapsible descriptive text) */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                      id={`services-stage-body-${idx}`}
                    >
                      <div className="pl-12 sm:pl-16 pr-4 pt-4 sm:pt-6 pb-2">
                        <p className="text-gray-400 font-sans text-sm sm:text-base leading-relaxed font-light max-w-2xl">
                          {stage.description}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
