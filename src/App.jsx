import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Menu, X, ChevronRight, Wine, Star, Utensils, MapPin, Calendar, Instagram } from 'lucide-react';

// --- DATA FROM BRIEF ---

const content = {
  hero: {
    headline: "Savor Tuscan Heritage in Dubai Marina",
    subheadline: "Since 1985, La Bella Vita has welcomed discerning guests to a refined sanctuary of authentic Italian cuisine, where family recipes meet seasonal elegance and our sommelier's curated wine pairings elevate every moment.",
    cta: "Reserve Your Exclusive Table"
  },
  about: {
    heading: "Our Story",
    text: "Founded in 1985 by the Rossi family, La Bella Vita embodies the timeless warmth of a Tuscan villa, transplanted to the vibrant shores of Dubai Marina. Our journey began with Nonna Maria's cherished recipes, now artfully reimagined by award-winning Chef Giovanni Rossi, whose expertise has earned acclaim at Italy's prestigious Gambero Rosso awards. In this upscale haven, we blend authentic Tuscan traditions with sustainable, seasonal ingredients, creating experiential dining that feels intimately personal. To craft unforgettable evenings of refined indulgence, honoring Italian heritage while fostering connections through exquisite flavors, impeccable service, and a warm, inviting ambiance that transports you to Tuscany's sun-kissed hills.",
    values: [
      "Authenticity: Rooted in family traditions and time-honored Tuscan recipes.",
      "Excellence: Led by Chef Rossi's award-winning innovation and our sommelier's expert wine pairings.",
      "Sustainability: Committed to seasonal, ethically sourced ingredients for harmonious, eco-conscious dining.",
      "Hospitality: A welcoming embrace, like family gathering around the villa table.",
      "Exclusivity: Curated experiences for those who appreciate the finer nuances of refined cuisine."
    ]
  },
  services: [
    {
      title: "Homemade Pasta Mastery",
      description: "Indulge in our daily-crafted pastas, from pappardelle with wild boar ragù to delicate ravioli filled with ricotta and seasonal herbs, all drawing from Nonna's 1985 recipes and paired with velvety Chianti.",
      image: "https://images.unsplash.com/photo-1551183053-bf91b1d3116c?auto=format&fit=crop&q=80&w=800",
      cta: "Book Your Pasta Experience Today"
    },
    {
      title: "Wood-Fired Pizza Artistry",
      description: "Our blazing oven yields crusts kissed by fire, topped with premium mozzarella, San Marzano tomatoes, and foraged wild mushrooms— a nod to Tuscan simplicity, complemented by crisp Vermentino whites.",
      image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&q=80&w=800",
      cta: "Secure Your Pizza Reservation Now"
    },
    {
      title: "Curated Wine Pairings",
      description: "Explore our vaulted cellar of over 200 Tuscan labels, guided by our sommelier for seamless pairings with Chef Rossi's creations, from robust Brunello to ethereal Super Tuscans.",
      image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=800",
      cta: "Reserve a Wine Tasting Session"
    },
    {
      title: "Private Dining Exclusives",
      description: "Host intimate events in our secluded alcoves, featuring bespoke menus of Tuscan classics and Chef's specials, with dedicated wine service for up to 20 guests.",
      image: "https://images.unsplash.com/photo-1550966871-3ed3c47e2ce2?auto=format&fit=crop&q=80&w=800",
      cta: "Inquire About Your Private Event"
    }
  ],
  portfolio: {
    headline: "Signature Tuscan Creations",
    description: "Behold our gallery of Chef Giovanni Rossi's award-winning dishes, each a vivid testament to authentic Italian heritage. These visuals capture the artistry of seasonal ingredients and traditional techniques, inviting you to envision your next refined meal—complete with suggested wine pairings. Reservations recommended for these exclusives.",
    items: [
      {
        title: "Pappardelle al Cinghiale",
        desc: "Hand-rolled pasta enveloped in rich wild boar ragù, slow-simmered with Tuscan herbs; paired with a bold Chianti Classico for earthy depth.",
        image: "https://images.unsplash.com/photo-1626844131082-256783844137?auto=format&fit=crop&q=80&w=800"
      },
      {
        title: "Pizza Margherita Bianca",
        desc: "Wood-fired with burrata, fresh basil, and truffle oil on a gluten-free base; complemented by a light Pinot Grigio to highlight subtle elegance.",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800"
      },
      {
        title: "Ravioli di Ricotta e Spinaci",
        desc: "Delicate pockets of sheep's milk ricotta and wild spinach, drizzled in sage butter; elevated by a floral Vernaccia di San Gimignano.",
        image: "https://images.unsplash.com/photo-1587740908056-9d83aa4699f4?auto=format&fit=crop&q=80&w=800"
      },
      {
        title: "Bistecca alla Fiorentina",
        desc: "Dry-aged T-bone steak grilled to perfection, served family-style with rosemary; matched with a robust Brunello di Montalcino for ultimate indulgence.",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800"
      },
      {
        title: "Tiramisù Classico",
        desc: "Layers of mascarpone cream, espresso-soaked savoiardi, and cocoa dust; finished with a sip of Vin Santo for a sweet, nostalgic close.",
        image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&q=80&w=800"
      }
    ]
  },
  contact: {
    headline: "Reserve Your Tuscan Escape",
    body: "Step into La Bella Vita's warm embrace in Dubai Marina, where every reservation promises an evening of sophisticated serenity and unforgettable flavors. Share your occasion—romantic dinner, family gathering, or wine exploration—and our team will curate the perfect experience. Easy online booking available; limited tables ensure exclusivity. Follow us on Instagram for behind-the-scenes chef stories and seasonal updates.",
    cta: "Book Now – Spaces Fill Quickly"
  }
};

// --- COMPONENTS ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = ['About', 'Services', 'Portfolio', 'Contact'];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-neutral-50 shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#hero" className={`font-display font-black text-2xl tracking-tighter ${scrolled ? 'text-primary' : 'text-neutral-50'}`}>
          La Bella Vita
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {links.map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`} 
              className={`font-body font-medium text-sm tracking-wide transition-colors duration-200 hover:text-primary ${scrolled ? 'text-neutral-900' : 'text-neutral-50'}`}
            >
              {link}
            </a>
          ))}
          <button className={`px-6 py-2 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 ${scrolled ? 'bg-primary text-white hover:bg-red-900' : 'bg-white text-primary hover:bg-neutral-100'}`}>
            Book Table
          </button>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X className={scrolled ? 'text-neutral-900' : 'text-neutral-50'} /> : <Menu className={scrolled ? 'text-neutral-900' : 'text-neutral-50'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            className="fixed inset-0 bg-neutral-50 z-40 flex flex-col justify-center items-center space-y-8 md:hidden"
          >
            {links.map((link) => (
              <a 
                key={link} 
                href={`#${link.toLowerCase()}`} 
                onClick={() => setIsOpen(false)}
                className="font-display font-bold text-3xl text-neutral-800 hover:text-primary"
              >
                {link}
              </a>
            ))}
            <button className="bg-primary text-white px-8 py-3 rounded-lg font-bold text-xl hover:bg-red-900">
              Book Table
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 400]);

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1600" 
          alt="Tuscan Dining"
          className="w-full h-full object-cover"
        />
      </motion.div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-primary/30 to-black/70 z-10" />

      <div className="relative z-20 max-w-4xl mx-auto px-6 text-center text-white">
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="font-display font-black text-5xl md:text-7xl lg:text-8xl tracking-tight mb-8 leading-tight"
        >
          {content.hero.headline}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="font-body text-lg md:text-2xl text-neutral-200 mb-12 leading-relaxed max-w-3xl mx-auto"
        >
          {content.hero.subheadline}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <button className="bg-primary text-white px-10 py-4 rounded-full font-bold text-lg tracking-wide hover:scale-105 hover:bg-red-900 hover:shadow-lg transition-all duration-300">
            {content.hero.cta}
          </button>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-32 bg-neutral-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
             <div className="relative">
              <div className="absolute -inset-4 bg-secondary/30 rounded-lg transform -rotate-3" />
              <img 
                src="https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&q=80&w=1200" 
                alt="Chef Giovanni"
                className="relative rounded-lg shadow-2xl"
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="font-display font-extrabold text-5xl text-accent mb-8">{content.about.heading}</h2>
            <p className="font-body text-neutral-600 text-lg leading-relaxed mb-8">
              {content.about.text}
            </p>
            <div className="space-y-4">
              {content.about.values.map((value, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + (i * 0.1) }}
                  className="flex items-start"
                >
                  <Star className="text-primary w-5 h-5 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-neutral-700 font-medium">{value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-32 bg-neutral-100">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display font-black text-5xl md:text-6xl text-center text-accent mb-20"
        >
          Culinary Experiences
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {content.services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-neutral-50 rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="h-64 overflow-hidden relative">
                 <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300 z-10" />
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-10">
                <h3 className="font-display font-bold text-3xl text-accent mb-4">{service.title}</h3>
                <p className="font-body text-neutral-600 mb-8 leading-relaxed">
                  {service.description}
                </p>
                <button className="flex items-center text-primary font-bold uppercase tracking-wider hover:text-red-900 group-hover:translate-x-2 transition-all">
                  {service.cta} <ChevronRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-32 bg-accent text-neutral-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="font-display font-black text-5xl md:text-6xl mb-6">{content.portfolio.headline}</h2>
          <p className="font-body text-neutral-300 text-lg">{content.portfolio.description}</p>
        </motion.div>

        <div className="space-y-32">
          {content.portfolio.items.map((item, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16`}
            >
              <div className="lg:w-1/2 overflow-hidden rounded-lg shadow-2xl">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="lg:w-1/2 space-y-6">
                <h3 className="font-display font-extrabold text-4xl text-secondary">{item.title}</h3>
                <p className="font-body text-neutral-300 text-xl leading-relaxed">
                  {item.desc}
                </p>
                <div className="pt-4">
                   <button className="border border-secondary text-secondary px-8 py-3 rounded hover:bg-secondary hover:text-accent transition-all duration-300 font-bold uppercase tracking-widest text-sm">
                    Reserve This Dish
                   </button>
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
    <section id="contact" className="py-32 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="p-16 flex flex-col justify-center bg-neutral-100">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-display font-black text-5xl text-primary mb-6"
              >
                {content.contact.headline}
              </motion.h2>
              <p className="font-body text-neutral-600 text-lg mb-10 leading-relaxed">
                {content.contact.body}
              </p>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-center text-neutral-700">
                  <MapPin className="w-6 h-6 mr-4 text-primary" />
                  <span>Dubai Marina, United Arab Emirates</span>
                </div>
                <div className="flex items-center text-neutral-700">
                  <Instagram className="w-6 h-6 mr-4 text-primary" />
                  <span>@LaBellaVitaDubai</span>
                </div>
              </div>

              <button className="w-full bg-primary text-white py-4 rounded-lg font-bold text-lg hover:bg-red-900 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                {content.contact.cta}
              </button>
            </div>
            <div className="relative min-h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=1200"
                alt="Restaurant Interior"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-accent text-neutral-300 py-12 border-t border-neutral-800">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
      <div className="mb-6 md:mb-0">
        <h3 className="font-display font-bold text-2xl text-white mb-2">La Bella Vita</h3>
        <p className="text-sm">Authentic Tuscan Dining Since 1985</p>
      </div>
      <div className="flex space-x-8 text-sm font-medium">
        <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
        <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
      </div>
      <div className="mt-6 md:mt-0 text-sm opacity-60">
        © 2023 La Bella Vita. All rights reserved.
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <main className="bg-neutral-50 text-neutral-900 selection:bg-primary selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}