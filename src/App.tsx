import { motion } from "motion/react";
import { 
  GraduationCap, 
  Users, 
  Trophy, 
  ShieldCheck, 
  BrainCircuit, 
  Cpu,
  BookOpen,
  Microscope,
  Palette,
  Music,
  Dribbble,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Star,
  Quote,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  MessageCircle,
  Menu,
  X,
  Check,
  FileText,
  Calendar
} from "lucide-react";
import React, { useState, useEffect } from "react";

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Programs", href: "#programs" },
    { name: "Events", href: "#events" },
    { name: "Campus", href: "#campus" },
    { name: "Staff", href: "#staff" },
    { name: "Admission", href: "#admission" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled || isMenuOpen ? "glass-nav py-3" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img 
            src="https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/00f8aadc-6745-41ae-a4b9-26d5d3ac6af6.jpg" 
            alt="KB Academy Logo" 
            className="w-12 h-12 rounded-lg object-cover shadow-lg"
            referrerPolicy="no-referrer"
          />
          <span className={`font-serif text-2xl font-bold tracking-tight ${isScrolled || isMenuOpen ? "text-kb-blue" : "text-white"}`}>KB Academy</span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8 font-medium">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleNavClick(e, link.href)}
              className={`${isScrolled || isMenuOpen ? "text-kb-blue" : "text-white"} hover:text-kb-gold transition-colors cursor-pointer`}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a 
            href="#admission" 
            onClick={(e) => handleNavClick(e, "#admission")}
            className="btn-premium btn-gold text-sm px-6 py-2.5 hidden sm:flex cursor-pointer"
          >
            Apply Now
          </a>
          
          {/* Hamburger Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`p-2 rounded-lg transition-colors z-50 ${isScrolled || isMenuOpen ? "text-kb-blue hover:bg-kb-accent/20" : "text-white hover:bg-white/10"}`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Menu Overlay - Vertical List */}
      <motion.div
        initial={false}
        animate={isMenuOpen ? { height: "100vh", opacity: 1 } : { height: 0, opacity: 0 }}
        className="fixed inset-0 overflow-hidden bg-white/98 backdrop-blur-2xl z-40"
      >
        <div className="h-full flex flex-col items-center justify-center text-center gap-10 px-6">
          <div className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-4xl font-serif font-bold text-kb-blue hover:text-kb-gold transition-all hover:scale-110 cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </div>
          <a 
            href="#admission" 
            onClick={(e) => handleNavClick(e, "#admission")}
            className="btn-premium btn-gold px-12 py-4 text-center w-full max-w-xs text-xl cursor-pointer"
          >
            Apply Now
          </a>
        </div>
      </motion.div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/26734096-a458-4537-ae0c-69df52128e95.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-kb-blue/60 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-kb-gold/20 text-kb-gold border border-kb-gold/30 text-sm font-semibold mb-6 tracking-wider uppercase">
            Excellence in Ethiopia
          </span>
          <h1 className="text-5xl md:text-7xl text-white font-bold leading-tight mb-6">
            KB Academy – Shaping <span className="text-gold-gradient italic">Future Leaders</span>
          </h1>
          <p className="text-xl text-white/80 mb-10 leading-relaxed font-light">
            Excellence in Education, Discipline, Innovation, and Character Development. We provide a world-class learning environment for the next generation of Ethiopian innovators.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#admission" className="btn-premium btn-gold group">
              Apply Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#programs" className="btn-premium border-2 border-white text-white hover:bg-white hover:text-kb-blue">
              Explore Programs
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-kb-blue">
              A Legacy of <span className="text-kb-gold">Academic Excellence</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              KB Academy is more than just a school; it's a community dedicated to nurturing the intellectual, social, and emotional growth of every student. Founded with a vision to provide international-standard education in Ethiopia, we have consistently set benchmarks in academic performance and character building.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our holistic approach ensures that students are not just prepared for exams, but for life. We integrate technology, critical thinking, and ethical values into every aspect of our curriculum.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-kb-blue mb-2">Our Mission</h4>
                <p className="text-sm text-gray-500">To empower students with knowledge, skills, and values to become global citizens and leaders.</p>
              </div>
              <div>
                <h4 className="font-bold text-kb-blue mb-2">Our Vision</h4>
                <p className="text-sm text-gray-500">To be the leading center of educational innovation and excellence in East Africa.</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/ac4d00de-4057-45da-a0a9-b965a3d039e5.jpg" 
                alt="KB Academy Students" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-kb-blue p-8 rounded-2xl text-white shadow-xl hidden lg:block">
              <div className="text-4xl font-bold text-kb-gold mb-1">15+</div>
              <div className="text-sm opacity-80 uppercase tracking-widest">Years of Excellence</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const WhyChoose = () => {
  const features = [
    { icon: BrainCircuit, title: "Modern Methods", desc: "Inquiry-based learning that fosters curiosity and critical thinking." },
    { icon: Users, title: "Qualified Teachers", desc: "International and local educators with deep expertise and passion." },
    { icon: Trophy, title: "Academic Results", desc: "Consistently high scores in national and international examinations." },
    { icon: ShieldCheck, title: "Safe Environment", desc: "A secure, nurturing campus designed for student well-being." },
    { icon: GraduationCap, title: "Character Building", desc: "Focus on integrity, discipline, and social responsibility." },
    { icon: Cpu, title: "Tech Integration", desc: "Smart classrooms and coding labs for a digital-first future." },
  ];

  return (
    <section className="section-padding bg-kb-blue text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-kb-gold/5 -skew-x-12 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose <span className="text-kb-gold">KB Academy?</span></h2>
          <p className="text-white/60 text-lg">We provide the foundation for a lifetime of success through our unique educational pillars.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group"
            >
              <div className="w-14 h-14 rounded-xl gold-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <f.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">{f.title}</h3>
              <p className="text-white/60 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Programs = () => {
  const programs = [
    { 
      title: "Kindergarten", 
      age: "3-5 Years", 
      desc: "A playful, stimulating environment where children develop early literacy, numeracy, and social skills.",
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=1972&auto=format&fit=crop"
    },
    { 
      title: "Primary School", 
      age: "6-11 Years", 
      desc: "Building strong foundations in core subjects while encouraging creative expression and physical activity.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop"
    },
    { 
      title: "Secondary School", 
      age: "12-18 Years", 
      desc: "Advanced academic preparation for university entrance with a focus on leadership and innovation.",
      image: "https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/0e1df67a-6f7a-4452-b5c8-84ff03dc0e25.jpg"
    },
    { 
      title: "Special Programs", 
      age: "All Ages", 
      desc: "Coding, Robotics, Music, Art, and Competitive Sports to nurture diverse talents and interests.",
      image: "https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/ddb0b750-5c10-496a-bb18-e74ae7ce9f02.jpg"
    },
  ];

  return (
    <section id="programs" className="section-padding bg-kb-accent/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-kb-blue mb-6">Our Academic <span className="text-kb-gold">Programs</span></h2>
            <p className="text-gray-600 text-lg">Tailored educational journeys for every stage of development, from early years to university preparation.</p>
          </div>
          <a href="#admission" className="text-kb-gold font-bold flex items-center gap-2 hover:gap-4 transition-all uppercase tracking-widest text-sm">
            View Curriculum <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="premium-card group"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={p.image} 
                  alt={p.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-bold text-kb-gold uppercase tracking-widest mb-2 block">{p.age}</span>
                <h3 className="text-xl font-bold text-kb-blue mb-3">{p.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-6">{p.desc}</p>
                <button className="text-kb-blue font-bold text-sm flex items-center gap-2 group/btn">
                  Learn More <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CampusLife = () => {
  const facilities = [
    { icon: Microscope, title: "Modern Labs", desc: "Fully equipped Science and IT laboratories." },
    { icon: BookOpen, title: "Grand Library", desc: "A vast collection of digital and print resources." },
    { icon: Dribbble, title: "Sports Complex", desc: "Football, Basketball, and Athletics facilities." },
    { icon: Palette, title: "Art Studio", desc: "Creative spaces for visual and performing arts." },
  ];

  return (
    <section id="campus" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img src="https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/a9323788-2706-4944-a614-0d6b776e784d.jpg" alt="Campus 1" className="rounded-2xl w-full aspect-square object-cover" referrerPolicy="no-referrer" />
              <img src="https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/43280108-43c1-4ad3-803c-522633baf20c.jpg" alt="Campus 2" className="rounded-2xl w-full aspect-[3/4] object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="space-y-4 pt-8">
              <img src="https://images.unsplash.com/photo-1577896851231-70ef1460370e?q=80&w=2070&auto=format&fit=crop" alt="Campus 3" className="rounded-2xl w-full aspect-[3/4] object-cover" referrerPolicy="no-referrer" />
              <img src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop" alt="Campus 4" className="rounded-2xl w-full aspect-square object-cover" referrerPolicy="no-referrer" />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-bold text-kb-blue mb-8">Vibrant <span className="text-kb-gold">Campus Life</span></h2>
            <p className="text-lg text-gray-600 mb-10">Our campus is designed to be a second home for our students, providing spaces that inspire creativity, collaboration, and physical health.</p>
            
            <div className="space-y-8">
              {facilities.map((f, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-kb-accent/30 flex items-center justify-center text-kb-gold">
                    <f.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-kb-blue mb-1">{f.title}</h4>
                    <p className="text-gray-500">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const EventsSection = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus("loading");
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      
      if (response.ok) {
        setStatus("success");
        setEmail("");
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
      }
    } catch (error) {
      console.error("Subscription error:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  const events = [
    {
      id: 1,
      title: "Annual Science Fair 2026",
      date: "April 15, 2026",
      time: "9:00 AM - 3:00 PM",
      location: "Main Campus Auditorium",
      category: "Academic",
      description: "Join us for our annual showcase of student innovation and scientific discovery. Students from all grades will present their projects.",
      image: "https://picsum.photos/seed/science/800/600"
    },
    {
      id: 2,
      title: "Inter-School Sports Tournament",
      date: "May 5, 2026",
      time: "8:30 AM - 5:00 PM",
      location: "KB Academy Sports Complex",
      category: "Sports",
      description: "Our athletes will compete against top schools in basketball, football, and track events. Come and cheer for our teams!",
      image: "https://picsum.photos/seed/sports/800/600"
    },
    {
      id: 3,
      title: "Spring Arts & Music Festival",
      date: "May 20, 2026",
      time: "4:00 PM - 8:00 PM",
      location: "School Courtyard",
      category: "Arts",
      description: "A celebration of creativity featuring student art exhibitions and live musical performances by our school band and choir.",
      image: "https://picsum.photos/seed/arts/800/600"
    }
  ];

  const news = [
    {
      id: 1,
      title: "KB Academy Wins Regional Robotics Championship",
      date: "March 10, 2026",
      summary: "Our robotics team secured first place at the regional competition, qualifying for the national finals this summer.",
      tag: "News"
    },
    {
      id: 2,
      title: "New STEM Laboratory Inauguration",
      date: "March 5, 2026",
      summary: "We are excited to announce the opening of our state-of-the-art STEM lab, equipped with the latest technology for hands-on learning.",
      tag: "Announcement"
    }
  ];

  return (
    <section id="events" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-kb-gold font-bold uppercase tracking-widest text-sm mb-4"
            >
              <Calendar className="w-5 h-5" />
              <span>What's Happening</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl lg:text-5xl font-serif font-bold text-kb-blue"
            >
              Events & Announcements
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <button className="btn-premium btn-blue px-8 py-3 flex items-center gap-2 group">
              View Full Calendar
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Events Column */}
          <div className="lg:col-span-2 space-y-8">
            <h3 className="text-2xl font-serif font-bold text-kb-blue border-b border-gray-100 pb-4 mb-8">Upcoming Events</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {events.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="relative h-64 rounded-2xl overflow-hidden mb-6 shadow-xl">
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 bg-kb-gold text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                      {event.category}
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-4 text-sm text-gray-500 font-medium">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4 text-kb-gold" />
                        {event.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4 text-kb-gold" />
                        {event.location}
                      </div>
                    </div>
                    <h4 className="text-xl font-bold text-kb-blue group-hover:text-kb-gold transition-colors">
                      {event.title}
                    </h4>
                    <p className="text-gray-500 text-sm line-clamp-2">
                      {event.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* News & Announcements Sidebar */}
          <div className="space-y-8">
            <h3 className="text-2xl font-serif font-bold text-kb-blue border-b border-gray-100 pb-4 mb-8">Latest News</h3>
            <div className="space-y-6">
              {news.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-kb-gold/30 hover:shadow-lg transition-all group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-kb-gold bg-kb-gold/10 px-2 py-1 rounded">
                      {item.tag}
                    </span>
                    <span className="text-xs text-gray-400 font-medium">{item.date}</span>
                  </div>
                  <h4 className="font-bold text-kb-blue mb-2 group-hover:text-kb-gold transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {item.summary}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-xs font-bold text-kb-blue group-hover:gap-3 transition-all">
                    Read More <ArrowRight className="w-3 h-3" />
                  </div>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-kb-blue rounded-2xl p-8 text-white relative overflow-hidden"
              >
                <div className="relative z-10">
                  <h4 className="text-xl font-serif font-bold mb-4">Stay Updated</h4>
                  <p className="text-white/70 text-sm mb-6">Subscribe to our newsletter to receive the latest news and event updates directly in your inbox.</p>
                  <form onSubmit={handleSubscribe} className="space-y-4">
                    <div className="flex gap-2">
                      <input 
                        type="email" 
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your email" 
                        className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:border-kb-gold transition-colors"
                      />
                      <button 
                        type="submit"
                        disabled={status === "loading"}
                        className="bg-kb-gold text-white p-2 rounded-lg hover:bg-kb-gold/80 transition-colors disabled:opacity-50"
                      >
                        {status === "loading" ? (
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                          <ArrowRight className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                    {status === "success" && (
                      <p className="text-kb-gold text-xs font-bold animate-pulse">Successfully subscribed!</p>
                    )}
                    {status === "error" && (
                      <p className="text-red-400 text-xs font-bold">Failed to subscribe. Try again.</p>
                    )}
                  </form>
                </div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-kb-gold/10 rounded-full blur-3xl"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Admission = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    email: "",
    phone: "+251",
    program: "Kindergarten",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting application form...", formData);
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      console.log("Response status:", response.status);
      
      let data;
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        data = await response.json();
      } else {
        const text = await response.text();
        console.error("Non-JSON response received:", text);
        data = { error: "Server returned an unexpected response. This might be a deployment issue." };
      }

      console.log("Response data:", data);

      if (response.ok) {
        setStatus("success");
        setFormData({ studentName: "", parentName: "", email: "", phone: "+251", program: "Kindergarten", message: "" });
      } else {
        const errorMsg = data.error || "Something went wrong. Please try again later.";
        console.error("Submission failed:", errorMsg);
        setErrorMessage(errorMsg);
        setStatus("error");
      }
    } catch (error) {
      console.error("Submission network error:", error);
      setErrorMessage("Network error: Could not reach the server. Please check your internet or try again later.");
      setStatus("error");
    }
  };

  return (
    <section id="admission" className="section-padding bg-kb-blue text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Join the <span className="text-kb-gold">KB Family</span></h2>
            <p className="text-white/60 text-lg mb-10">We are looking for curious minds and ambitious hearts. Our admission process is designed to identify students who will thrive in our rigorous and supportive environment.</p>
            
            <div className="space-y-10">
              <div className="flex gap-6">
                <div className="w-10 h-10 rounded-full border-2 border-kb-gold flex items-center justify-center font-bold text-kb-gold flex-shrink-0">1</div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Inquiry & Visit</h4>
                  <p className="text-white/50">Schedule a campus tour to see our facilities and meet our educators.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-10 h-10 rounded-full border-2 border-kb-gold flex items-center justify-center font-bold text-kb-gold flex-shrink-0">2</div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Application Submission</h4>
                  <p className="text-white/50">Complete the online form and submit required documents (birth certificate, transcripts).</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-10 h-10 rounded-full border-2 border-kb-gold flex items-center justify-center font-bold text-kb-gold flex-shrink-0">3</div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Assessment & Interview</h4>
                  <p className="text-white/50">Students undergo a friendly assessment to determine their academic level.</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-3xl shadow-2xl text-kb-blue"
          >
            <h3 className="text-2xl font-bold mb-6">Apply for Admission</h3>
            
            {status === "success" ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="w-10 h-10" />
                </div>
                <h4 className="text-2xl font-bold mb-2">Application Sent!</h4>
                <p className="text-gray-500 mb-8">Thank you for applying. Our admissions team will contact you shortly.</p>
                <button 
                  onClick={() => setStatus("idle")}
                  className="btn-premium btn-gold px-8 py-3"
                >
                  Send Another
                </button>
              </motion.div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                {status === "error" && (
                  <div className="p-4 bg-red-50 border border-red-100 text-red-600 rounded-xl text-sm mb-4">
                    {errorMessage}
                  </div>
                )}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Student Name</label>
                    <input 
                      type="text" 
                      required
                      value={formData.studentName}
                      onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:border-kb-gold outline-none transition-all" 
                      placeholder="John Doe" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Parent Name</label>
                    <input 
                      type="text" 
                      required
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:border-kb-gold outline-none transition-all" 
                      placeholder="Jane Doe" 
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Email Address</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:border-kb-gold outline-none transition-all" 
                      placeholder="parent@email.com" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Phone Number</label>
                    <input 
                      type="tel" 
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:border-kb-gold outline-none transition-all" 
                      placeholder="+251 911 234 567" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Program of Interest</label>
                  <select 
                    value={formData.program}
                    onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:border-kb-gold outline-none transition-all"
                  >
                    <option>Kindergarten</option>
                    <option>Primary School</option>
                    <option>Secondary School</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Message (Optional)</label>
                  <textarea 
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:border-kb-gold outline-none transition-all h-24" 
                    placeholder="Any specific questions?"
                  ></textarea>
                </div>
                {status === "error" && (
                  <p className="text-red-500 text-sm">Something went wrong. Please try again.</p>
                )}
                <button 
                  disabled={status === "loading"}
                  className="w-full btn-premium btn-gold mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? "Sending..." : "Submit Application"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Staff = () => {
  const leadershipTeam = [
    { name: "WONDWOSSEN ERQYIHUN", role: "High School Director", image: "https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/5bda03de-7053-42e1-851a-dcb1ab71b288.jpg" },
    { name: "EQUAR", role: "Vice High School Director", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop" },
    { name: "NAME", role: "Elementary Director", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1974&auto=format&fit=crop" },
    { name: "NAME", role: "General Manager", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop" },
  ];

  const placeholderStaff = Array.from({ length: 25 }, (_, i) => ({
    id: i + 1,
    name: `Staff Member ${i + 1}`,
    role: "Faculty Member",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
  }));

  return (
    <section id="staff" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-kb-blue mb-4">Meet Our <span className="text-kb-gold">Leadership</span></h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Our dedicated leadership team is committed to excellence in education and fostering a supportive environment for all students.</p>
        </div>

        {/* Leadership Team */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {leadershipTeam.map((member, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-3xl aspect-[4/5] mb-6 shadow-xl">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-kb-blue/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <div className="text-white">
                    <p className="text-kb-gold font-bold uppercase tracking-widest text-[10px] mb-1">Leadership Team</p>
                    <h4 className="text-lg font-bold leading-tight">{member.name}</h4>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-bold text-kb-blue mb-1">{member.name}</h4>
                <p className="text-kb-gold font-medium uppercase tracking-widest text-xs">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Explore More - 25 Profiles */}
        <div className="border-t border-gray-100 pt-24">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-kb-blue mb-4">Explore <span className="text-kb-gold">More Profiles</span></h3>
            <p className="text-gray-400">Discover the full breadth of our academic and support faculty.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {placeholderStaff.map((staff) => (
              <motion.div 
                key={staff.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="aspect-square rounded-2xl bg-gray-100 overflow-hidden mb-3 relative">
                  <img 
                    src={staff.image} 
                    alt={staff.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-kb-blue/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="text-center">
                  <h5 className="font-bold text-kb-blue text-sm group-hover:text-kb-gold transition-colors">{staff.name}</h5>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest">{staff.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    { name: "Abebe Kebede", role: "Parent", text: "KB Academy has transformed my daughter's confidence. The teachers truly care about individual progress.", stars: 5 },
    { name: "Sara Mohammed", role: "Alumni", text: "The foundation I received at KB Academy prepared me for my engineering studies in Europe. I'm forever grateful.", stars: 5 },
    { name: "Dawit Tadesse", role: "Parent", text: "The best private school in Addis Ababa. The focus on discipline and technology is unmatched.", stars: 5 },
  ];

  return (
    <section className="section-padding bg-kb-accent/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-kb-blue mb-4">What Our <span className="text-kb-gold">Community Says</span></h2>
          <div className="flex justify-center gap-1">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-kb-gold text-kb-gold" />)}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-white shadow-xl relative"
            >
              <Quote className="absolute top-6 right-8 w-12 h-12 text-kb-gold/10" />
              <div className="flex gap-1 mb-4">
                {[...Array(r.stars)].map((_, i) => <Star key={i} className="w-4 h-4 fill-kb-gold text-kb-gold" />)}
              </div>
              <p className="text-gray-600 italic mb-6 leading-relaxed">"{r.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center text-white font-bold">{r.name[0]}</div>
                <div>
                  <h4 className="font-bold text-kb-blue">{r.name}</h4>
                  <p className="text-xs text-gray-400 uppercase tracking-widest">{r.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <h2 className="text-4xl font-bold text-kb-blue mb-8">Get in <span className="text-kb-gold">Touch</span></h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-kb-accent/30 flex items-center justify-center text-kb-gold flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-kb-blue">Address</h4>
                  <p className="text-gray-500">Bole Sub-city, Addis Ababa, Ethiopia</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-kb-accent/30 flex items-center justify-center text-kb-gold flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-kb-blue">Phone</h4>
                  <p className="text-gray-500">+251 911 000 000</p>
                  <p className="text-gray-500">+251 116 000 000</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-kb-accent/30 flex items-center justify-center text-kb-gold flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-kb-blue">Email</h4>
                  <p className="text-gray-500">info@kbacademy.edu.et</p>
                  <p className="text-gray-500">admissions@kbacademy.edu.et</p>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4 mt-10">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-kb-blue hover:bg-kb-gold hover:text-white hover:border-kb-gold transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 rounded-3xl overflow-hidden shadow-2xl h-[450px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126115.115243144!2d38.703551!3d9.010793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sAddis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2sus!4v1711000000000!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-kb-blue text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/00f8aadc-6745-41ae-a4b9-26d5d3ac6af6.jpg" 
                alt="KB Academy Logo" 
                className="w-12 h-12 rounded-lg object-cover shadow-lg"
                referrerPolicy="no-referrer"
              />
              <span className="font-serif text-2xl font-bold tracking-tight">KB Academy</span>
            </div>
            <p className="text-white/50 leading-relaxed mb-6">
              Providing world-class education and character development in Ethiopia since 2009. Shaping the leaders of tomorrow.
            </p>
            <div className="flex gap-4">
              <CheckCircle2 className="w-5 h-5 text-kb-gold" />
              <span className="text-sm text-white/70 italic">Accredited by Ministry of Education</span>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="#about" className="hover:text-kb-gold transition-colors">About Us</a></li>
              <li><a href="#programs" className="hover:text-kb-gold transition-colors">Academic Programs</a></li>
              <li><a href="#campus" className="hover:text-kb-gold transition-colors">Campus Life</a></li>
              <li><a href="#admission" className="hover:text-kb-gold transition-colors">Admission Process</a></li>
              <li><a href="#" className="hover:text-kb-gold transition-colors">News & Events</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Programs</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="#" className="hover:text-kb-gold transition-colors">Kindergarten</a></li>
              <li><a href="#" className="hover:text-kb-gold transition-colors">Primary School</a></li>
              <li><a href="#" className="hover:text-kb-gold transition-colors">Secondary School</a></li>
              <li><a href="#" className="hover:text-kb-gold transition-colors">Special Education</a></li>
              <li><a href="#" className="hover:text-kb-gold transition-colors">Summer Camp</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Newsletter</h4>
            <p className="text-white/60 text-sm mb-6">Subscribe to get the latest updates on school events and admissions.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Your email" className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm outline-none focus:border-kb-gold w-full" />
              <button className="gold-gradient p-2 rounded-lg"><ArrowRight className="w-5 h-5" /></button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-white/40 text-sm">
          <p>© 2026 KB Academy Ethiopia. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

const VideoIntro = ({ onFinished }: { onFinished: () => void }) => {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden"
    >
      <video 
        autoPlay 
        muted 
        playsInline
        onEnded={onFinished}
        className="w-full h-full object-cover"
      >
        <source src="https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/26734096-a458-4537-ae0c-69df52128e95.mp4" type="video/mp4" />
      </video>
      <motion.button 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        onClick={onFinished}
        className="absolute bottom-10 right-10 text-white/50 hover:text-white text-sm uppercase tracking-widest flex items-center gap-2"
      >
        Skip Intro <ArrowRight className="w-4 h-4" />
      </motion.button>
    </motion.div>
  );
};

export default function App() {
  const [introFinished, setIntroFinished] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (introFinished) {
      setTimeout(() => setShowContent(true), 100);
    }
  }, [introFinished]);

  return (
    <div className="relative">
      {!introFinished && <VideoIntro onFinished={() => setIntroFinished(true)} />}
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: showContent ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <Navbar />
        <Hero />
        <About />
        <WhyChoose />
        <Programs />
        <CampusLife />
        <EventsSection />
        <Admission />
        <Staff />
        <Testimonials />
        <Contact />
        <Footer />

        <a 
          href="https://wa.me/251911000000" 
          target="_blank" 
          rel="noopener noreferrer"
          className="floating-whatsapp animate-float"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
      </motion.div>
    </div>
  );
}
