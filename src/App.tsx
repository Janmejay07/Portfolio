import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { Code2, Database, Brain, Github, Linkedin, Mail, ExternalLink, Terminal, Cpu, Zap, Download} from 'lucide-react';

function App() {
  const { scrollYProgress } = useScroll();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeSkill, setActiveSkill] = useState<number | null>(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [cursorText, setCursorText] = useState("SYSTEM ONLINE");
  const [bootSequence, setBootSequence] = useState(true);
  const [hoveredEdu, setHoveredEdu] = useState<number | null>(null);
  const [hoveredCert, setHoveredCert] = useState<number | null>(null);
  
  useEffect(() => {
    const bootMessages = [
      "INITIALIZING SYSTEM...",
      "LOADING NEURAL INTERFACE...",
      "ESTABLISHING CONNECTION...", 
      "SYSTEM ONLINE"
    ];
    
    bootMessages.forEach((message, index) => {
      setTimeout(() => {
        setCursorText(message);
        if (index === bootMessages.length - 1) {
          setBootSequence(false);
        }
      }, index * 1000);
    });

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) - 0.5,
        y: (e.clientY / window.innerHeight) - 0.5,
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const education = [
    {
      degree: "Bachelor of Technology",
      school: "Bennett University",
      year: "2022-2026",
      description: "Specialized in Machine Learning and Artificial Intelligence"
    }
  ];

  const certifications = [
    {
      name: " Exploratory Data Analysis for Machine Learning",
      issuer: "IBM",
      year: "2023",
      badge: "🏆"
    },
    {
      name: "Back-End Development",
      issuer: "Meta",
      year: "2024",
      badge: "🎯"
    },
    {
      name: " Meta Front-End Developer",
      issuer: "Meta",
      year: "2024",
      badge: "💻"
    }
  ];

  const skills = [
    { icon: <Code2 className="w-8 h-8" />, name: "Frontend", tech: ["React", "Next.js", "TypeScript"], color: "from-cyan-500 to-blue-500" },
    { icon: <Database className="w-8 h-8" />, name: "Backend", tech: ["Node.js", "Express", "MongoDB"], color: "from-green-500 to-emerald-500" },
    { icon: <Brain className="w-8 h-8" />, name: "AI/ML", tech: ["TensorFlow", "PyTorch", "Scikit-learn"], color: "from-purple-500 to-pink-500" },
    { icon: <Terminal className="w-8 h-8" />, name: "DevOps", tech: ["Docker", "AWS", "CI/CD"], color: "from-orange-500 to-red-500" }
  ];

  const projects = [
    {
      title: " JFC",
      desc: " JFC is a football website managing club activities.",
      tech: ["React", "Node", "MongoDB", "Express"],
      image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=2070"
    },
    {
      title: " Krishi Saath",
      desc: " A web-based platform promoting sustainable agriculture with the help of advanced technology.",
      tech: ["Django", "JavaScript", "HTML", "CSS"],
      image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=2070"
    },
    {
      title: " Ez-shiksha ",
      desc: "  AI-based learning platform where people can solve difficult problems in mathematics and physics.",
      tech: ["React", "Node", "Express", "Tesseract"],
      image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=2070"
    },
    {
      title: " Jal Tantra ",
      desc: "  AI-based website for predicting future water scarcity in specific locations..",
      tech: ["HTML", "CSS", "JavaScript", "Django"],
      image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=2070"
    }
  ];

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  if (bootSequence) {
    return (
      <div className="min-h-screen bg-[#020617] flex items-center justify-center">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[#00ff94] text-2xl font-mono mb-4"
          >
            {cursorText}
            <span className="animate-pulse">_</span>
          </motion.div>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 3 }}
            className="h-1 bg-[#00ff94]"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-[#020617] text-white overflow-hidden font-mono">
      {/* Custom Cursor */}
      <motion.div
        className="fixed w-4 h-4 border-2 border-[#00ff94] rounded-full pointer-events-none z-50 mix-blend-screen"
        style={{
          x: mousePosition.x * window.innerWidth + window.innerWidth / 2 - 8,
          y: mousePosition.y * window.innerHeight + window.innerHeight / 2 - 8
        }}
      />

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-[#00ff94] origin-left z-50"
        style={{ scaleX }}
      />

      {/* Scanline Effect */}
      <div className="scanline" />

      {/* Noise Overlay */}
      <div className="fixed inset-0 cyber-noise pointer-events-none" />

      {/* Hero Section with Sci-fi Theme */}
      <div className="min-h-screen relative overflow-hidden cyber-grid">
        {/* Animated Circuit Lines */}
        <div className="absolute inset-0">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-[#00ff94] to-transparent opacity-30"
              style={{
                top: `${10 * i}%`,
                left: 0,
                right: 0,
                x: mousePosition.x * (20 + i * 5),
                y: mousePosition.y * (20 + i * 5)
              }}
            />
          ))}
        </div>

        {/* Main Content */}
        <div className="relative z-10 container mx-auto px-4 h-screen flex items-center justify-center">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 max-w-6xl w-full">
            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-left order-2 lg:order-1 "
            >
              <motion.div 
                className="relative w-80 h-80 mx-auto lg:ml-0"
                animate={{ y: [0, -20, 0] }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {/* Holographic Effect */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00ff94] to-[#00b3ff] opacity-20 blur-xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                
                {/* Rotating Borders */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute inset-0 rounded-full border-2 border-[#00ff94] opacity-30"
                    animate={{
                      rotate: [0, 360],
                      scale: [1 - i * 0.1, 1.1 - i * 0.1],
                    }}
                    transition={{
                      duration: 10 - i * 2,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                ))}

                {/* Profile Image */}
                <img
                  src="https://drive.google.com/file/d/19Km0p0fZTJrWRyqpzD6qI4jzC2wEffyv/view?usp=drive_link"
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full border-4 border-[#00ff94] relative z-10"
                />

                {/* Tech Icons Orbit */}
                {[Cpu, Zap, Brain, Terminal].map((Icon, index) => (
                  <motion.div
                    key={index}
                    className="absolute"
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                      delay: -index * 5
                    }}
                    style={{
                      transformOrigin: "center center",
                      left: "50%",
                      top: "50%",
                    }}
                  >
                    <div
                      className="relative"
                      style={{
                        transform: `translateX(150px) translateY(-12px)`,
                      }}
                    >
                      <Icon className="w-6 h-6 text-[#00ff94]" />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative inline-block"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-[#00ff94] to-[#00b3ff] opacity-50 blur" />
                <h1 className="relative text-5xl md:text-7xl font-bold mb-4 cyber-glitch">
                  Janmejay Kumar
                </h1>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative"
              >
                <h2 className="text-xl md:text-2xl text-[#00ff94] mb-6 font-light tracking-wider">
                  <span className="inline-block">
                    &lt;MERN Stack & AI/ML Developer/&gt;
                  </span>
                </h2>
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-gray-400 mb-8 max-w-xl leading-relaxed"
              >
                Exploring the frontiers of technology through innovative web solutions and artificial intelligence. Transforming ideas into digital reality.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="flex flex-wrap gap-6 justify-center lg:justify-start"
              >
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://drive.google.com/file/d/18Tn4jZC7l4KS8ENcr7RRgZvC92t134g-/view?usp=drive_link"
                  download
                  className="relative group px-8 py-3"
                >
                  <div className="absolute inset-0 bg-[#00ff94] opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
                  <div className="absolute inset-0 border border-[#00ff94]" />
                  <div className="flex items-center gap-2">
                    <Download className="w-4 h-4 text-[#00ff94]" />
                    <span className="relative text-[#00ff94] font-light tracking-wider">DOWNLOAD CV</span>
                  </div>
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#contact"
                  className="relative group px-8 py-3"
                >
                  <div className="absolute inset-0 bg-[#00ff94] opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
                  <div className="absolute inset-0 border border-[#00ff94]" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00ff94]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative text-[#00ff94] font-light tracking-wider">&gt; INITIALIZE CONTACT</span>
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#projects"
                  className="relative group px-8 py-3"
                >
                  <div className="absolute inset-0 bg-[#00ff94]" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00ff94] to-[#00b3ff] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative text-black font-light tracking-wider">&gt; VIEW PROJECTS</span>
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Binary Rain Effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(2)].map((_, side) => (
            <div
              key={side}
              className={`absolute top-0 ${side === 0 ? 'left-0' : 'right-0'} w-40 h-full opacity-10`}
            >
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="text-[#00ff94] whitespace-nowrap"
                  initial={{ y: -100 }}
                  animate={{ y: '100vh' }}
                  transition={{
                    duration: side === 0 ? 10 : 8,
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: 'linear',
                  }}
                >
                  {side === 0 ? 
                    `{0x${Math.random().toString(16).slice(2, 8)}}` :
                    `[${Math.random().toString(2).slice(2, 10)}]`
                  }
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </div>

       {/* Education Section */}
       <div className="py-32 relative flex justify-center items-center ">
      <div className="max-w-3xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-20 text-[#00ff94]"
        >
          EDUCATION.sys
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          whileHover={{ scale: 1.02 }}
          onHoverStart={() => setHoveredEdu(0)}
          onHoverEnd={() => setHoveredEdu(null)}
          className="relative bg-black/40 backdrop-blur-xl rounded-2xl p-8 border border-[#00ff94]/20 overflow-hidden text-center"
        >
          {/* Animated Background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-[#00ff94]/10 to-transparent"
            initial={{ x: '-100%' }}
            animate={hoveredEdu === 0 ? { x: '100%' } : { x: '-100%' }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />

          {/* Glowing Border Effect */}
          <AnimatePresence>
            {hoveredEdu === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 rounded-2xl border-2 border-[#00ff94] blur-sm"
              />
            )}
          </AnimatePresence>

          {/* Content */}
          <motion.div className="relative z-10">
            <motion.h3 
              className="text-2xl font-bold mb-2 text-[#00ff94]"
              animate={hoveredEdu === 0 ? { scale: 1.05 } : { scale: 1 }}
            >
              {education[0].degree}
            </motion.h3>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-xl mb-2">{education[0].school}</p>
              <p className="text-gray-400 mb-4">{education[0].year}</p>
              <p className="text-gray-300">{education[0].description}</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>

      {/* Certifications Section */}
      <div className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-20 text-[#00ff94]"
          >
            CERTIFICATIONS.dat
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.2,
                  duration: 0.6,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ scale: 1.05 }}
                onHoverStart={() => setHoveredCert(index)}
                onHoverEnd={() => setHoveredCert(null)}
                className="relative bg-black/40 backdrop-blur-xl rounded-2xl p-8 border border-[#00ff94]/20"
              >
                {/* Rotating Glow Effect */}
                <AnimatePresence>
                  {hoveredCert === index && (
                    <motion.div
                      initial={{ opacity: 0, rotate: 0 }}
                      animate={{ 
                        opacity: [0, 0.5, 0],
                        rotate: 360,
                        scale: [1, 1.2, 1]
                      }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 bg-[#00ff94]/20 rounded-2xl"
                    />
                  )}
                </AnimatePresence>

                {/* Badge Animation */}
                <motion.div 
                  className="text-4xl mb-4"
                  animate={hoveredCert === index ? { 
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0]
                  } : {}}
                  transition={{ duration: 0.5 }}
                >
                  {cert.badge}
                </motion.div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.3 + 0.2 }}
                >
                  <h3 className="text-xl font-bold mb-2 text-[#00ff94]">{cert.name}</h3>
                  <p className="text-gray-300 mb-2">{cert.issuer}</p>
                  <motion.p 
                    className="text-gray-400"
                    animate={hoveredCert === index ? { color: "#00ff94" } : {}}
                  >
                    {cert.year}
                  </motion.p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                onHoverStart={() => setActiveSkill(index)}
                onHoverEnd={() => setActiveSkill(null)}
                className="group relative"
              >
                <AnimatePresence>
                  {activeSkill === index && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="absolute inset-0 bg-[#00ff94] rounded-2xl blur-xl opacity-20"
                    />
                  )}
                </AnimatePresence>
                <div className="relative bg-black/40 backdrop-blur-xl rounded-2xl p-8 border border-[#00ff94]/20">
                  <motion.div
                    animate={activeSkill === index ? {
                      scale: [1, 1.2, 1],
                      rotate: [0, 360],
                      transition: { duration: 0.5 }
                    } : {}}
                    className="text-[#00ff94] mb-6"
                  >
                    {skill.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-4">{skill.name}</h3>
                  <div className="space-y-2">
                    {skill.tech.map((tech, i) => (
                      <motion.div
                        key={i}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="px-4 py-2 bg-[#00ff94]/10 rounded-lg text-white transform hover:translate-x-2 transition-transform duration-300"
                      >
                        {tech}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="py-32" id="projects">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-20 text-[#00ff94]"
          >
            PROJECTS.exe
          </motion.h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.3 }}
                onHoverStart={() => setHoveredProject(index)}
                onHoverEnd={() => setHoveredProject(null)}
                className="group relative bg-black/40 rounded-2xl overflow-hidden backdrop-blur-xl border border-[#00ff94]/20"
              >
                <motion.div
                  animate={{
                    scale: hoveredProject === index ? 1.1 : 1,
                    transition: { duration: 0.6 }
                  }}
                  className="absolute inset-0"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-50"
                  />
                </motion.div>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"
                  animate={{
                    opacity: hoveredProject === index ? 0.9 : 0.7,
                    transition: { duration: 0.3 }
                  }}
                />
                <motion.div
                  className="relative p-8 h-full flex flex-col justify-end"
                  animate={{
                    y: hoveredProject === index ? 0 : 20,
                    transition: { duration: 0.3 }
                  }}
                >
                  <h3 className="text-3xl font-bold mb-4 text-[#00ff94]">{project.title}</h3>
                  <p className="text-gray-300 mb-6">{project.desc}</p>
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="px-4 py-2 bg-[#00ff94]/20 backdrop-blur-sm rounded-full text-sm font-medium text-[#00ff94]"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-32" id="contact">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-16 text-[#00ff94]">ESTABLISH CONNECTION</h2>
            <div className="flex justify-center gap-12">
              {[
                { icon: <Github className="w-8 h-8" />, href: "https://github.com/Janmejay07", label: "GitHub" },
                { icon: <Linkedin className="w-8 h-8" />, href: "https://www.linkedin.com/in/janmejay-kumar-a7b89524a/", label: "LinkedIn" },
                { icon: <Mail className="w-8 h-8" />, href: "mailto:rajputrishabh066@gmail.com", label: "Email" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="group relative"
                >
                  <motion.div
                    className="absolute inset-0 bg-[#00ff94] rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  <div className="relative text-[#00ff94] hover:text-[#00b3ff] transition-colors">
                    {social.icon}
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default App;
