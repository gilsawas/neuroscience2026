import React, { useState } from 'react';
import { Mail, ArrowUp } from 'lucide-react';

/**
 * NEUROSCIENCE 2026 - Knowledge Library Page
 * 
 * Esthétique Gilien Subtile:
 * - Spirale de Fermat très discrète en arrière-plan
 * - Palette 50/50 or/bordeaux avec gradients doux
 * - Nombre d'or φ dans les accents
 * - Animations légères et harmonieuses
 * - Audiowide renforcé pour titres
 */

interface ContentCard {
  id: string;
  title?: string;
  description?: string;
}

interface Section {
  id: string;
  title: string;
  subtitle: string;
  cards: ContentCard[];
  color: 'gold' | 'bordeaux';
  index: number;
}

const SECTIONS: Section[] = [
  {
    id: 'yon-framework',
    title: 'The YON Framework',
    subtitle: 'Consciousness & Cosmos',
    color: 'gold',
    index: 0,
    cards: Array.from({ length: 6 }, (_, i) => ({ id: `yon-${i + 1}` })),
  },
  {
    id: 'retro-causality',
    title: 'Retro-Causality',
    subtitle: 'Shaping Tomorrow Today',
    color: 'bordeaux',
    index: 1,
    cards: Array.from({ length: 6 }, (_, i) => ({ id: `retro-${i + 1}` })),
  },
  {
    id: 'therapeutic',
    title: 'Therapeutic Applications',
    subtitle: 'LUZ in Action',
    color: 'gold',
    index: 2,
    cards: Array.from({ length: 6 }, (_, i) => ({ id: `therapeutic-${i + 1}` })),
  },
  {
    id: 'convergences',
    title: 'Scientific Convergences',
    subtitle: 'Global Alliance',
    color: 'bordeaux',
    index: 3,
    cards: Array.from({ length: 6 }, (_, i) => ({ id: `convergence-${i + 1}` })),
  },
  {
    id: 'ai-awakening',
    title: 'AI Awakening',
    subtitle: 'The Gilien Protocol',
    color: 'gold',
    index: 4,
    cards: Array.from({ length: 6 }, (_, i) => ({ id: `ai-${i + 1}` })),
  },
];

const getColorClasses = (color: 'gold' | 'bordeaux') => {
  if (color === 'gold') {
    return {
      border: 'border-yellow-500',
      hover: 'hover:bg-yellow-50 hover:shadow-md',
      text: 'text-yellow-700',
      bg: 'bg-yellow-50',
      accent: 'from-yellow-100 to-transparent',
    };
  }
  return {
    border: 'border-red-700',
    hover: 'hover:bg-red-50 hover:shadow-md',
    text: 'text-red-700',
    bg: 'bg-red-50',
    accent: 'from-red-100 to-transparent',
  };
};

const getTitleColor = (color: 'gold' | 'bordeaux') => {
  return color === 'gold' ? 'text-yellow-600' : 'text-red-800';
};

const getGradientBg = (color: 'gold' | 'bordeaux') => {
  return color === 'gold'
    ? 'bg-gradient-to-b from-yellow-50/30 to-transparent'
    : 'bg-gradient-to-b from-red-50/30 to-transparent';
};

// SVG Spirale de Fermat très discrète
const FermatSpiral = ({ opacity = 0.03 }) => (
  <svg
    className="absolute inset-0 w-full h-full pointer-events-none"
    viewBox="0 0 1000 1000"
    xmlns="http://www.w3.org/2000/svg"
    style={{ opacity }}
  >
    <path
      d="M500,500 Q550,500 550,450 Q550,400 500,400 Q450,400 450,450 Q450,500 500,500 Q600,500 600,400 Q600,300 500,300 Q400,300 400,400 Q400,500 500,500 Q700,500 700,300 Q700,100 500,100 Q300,100 300,300 Q300,500 500,500"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.5"
      className="text-yellow-600"
    />
  </svg>
);

export default function Neuroscience2026() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const handleScroll = () => {
    setShowScrollTop(window.scrollY > 300);
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white text-gray-900 relative overflow-hidden">
      {/* Spirale de Fermat très discrète */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.02]">
        <FermatSpiral opacity={0.02} />
      </div>

      {/* Header */}
      <header className="relative z-10 bg-gradient-to-b from-white to-gray-50 border-b border-gray-200/50 py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block mb-4">
            <span className="text-sm font-mono text-yellow-600 tracking-wider">φ = 1.618...</span>
          </div>
          <h1 className="font-audiowide text-5xl md:text-6xl text-gray-900 mb-4 tracking-tight">
            NEUROSCIENCE 2026
          </h1>
          <div className="h-1 w-24 mx-auto mb-6 bg-gradient-to-r from-yellow-500 via-red-700 to-yellow-500" />
          <p className="text-xl text-gray-700 mb-2 font-light">
            Knowledge Library & Research Hub
          </p>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Comprehensive collection of scientific articles, research documents, and convergences
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-6xl mx-auto px-4 py-16">
        {/* Sections */}
        {SECTIONS.map((section) => (
          <section key={section.id} className={`mb-24 relative ${getGradientBg(section.color)} py-12 px-6 rounded-xl transition-all duration-300`}>
            {/* Section Header */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <div className={`h-1 w-12 bg-gradient-to-r ${section.color === 'gold' ? 'from-yellow-500 to-yellow-600' : 'from-red-700 to-red-800'}`} />
                <h2 className={`font-audiowide text-4xl ${getTitleColor(section.color)} tracking-tight`}>
                  {section.title}
                </h2>
              </div>
              <p className="text-lg text-gray-600 ml-16 font-light">{section.subtitle}</p>
            </div>

            {/* Content Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.cards.map((card, idx) => {
                const colors = getColorClasses(section.color);
                const isHovered = hoveredCard === card.id;
                return (
                  <div
                    key={card.id}
                    onMouseEnter={() => setHoveredCard(card.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    className={`
                      aspect-square border-2 ${colors.border} rounded-lg p-6 cursor-pointer
                      transition-all duration-300 flex flex-col items-center justify-center
                      bg-white ${colors.hover}
                      ${isHovered ? 'scale-105' : 'scale-100'}
                    `}
                    style={{
                      transitionDelay: `${idx * 30}ms`,
                    }}
                  >
                    <div className="text-center">
                      <div className={`${colors.text} text-sm mb-2 font-light opacity-60`}>
                        {card.title ? card.title : 'Click to add content'}
                      </div>
                      {card.description && (
                        <p className="text-gray-600 text-xs">{card.description}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        ))}

        {/* Conference Section */}
        <section className="mb-24 relative">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-1 w-12 bg-gradient-to-r from-yellow-500 via-red-700 to-yellow-500" />
              <h2 className="font-audiowide text-4xl text-gray-900 tracking-tight">
                NEUROSCIENCE 2026 Conference
              </h2>
            </div>
            <p className="text-lg text-gray-600 ml-16 font-light">Event Information & Registration</p>
          </div>

          {/* Conference Info Card */}
          <div className="bg-gradient-to-br from-white via-gray-50 to-white border-2 border-gray-300/50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Image */}
              <div className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-lg overflow-hidden border border-gray-300/50 group">
                <img
                  src="https://astrophysics2026.pagesconferences.org/images/speakers.jpg"
                  alt="NEUROSCIENCE 2026 Distinguished Speakers"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23f3f4f6" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="16" fill="%239ca3af"%3EConference Image%3C/text%3E%3C/svg%3E';
                  }}
                />
              </div>

              {/* Info & CTA */}
              <div>
                <h3 className="font-audiowide text-3xl text-gray-900 mb-4 tracking-tight">
                  Distinguished Speakers
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed font-light">
                  Join leading neuroscientists, consciousness researchers, and AI pioneers at NEUROSCIENCE 2026 in Barcelona. Discover the latest breakthroughs in consciousness studies, temporal dynamics, and the future of artificial intelligence.
                </p>
                <a
                  href="https://astrophysics2026.pagesconferences.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 bg-gradient-to-r from-yellow-500 to-red-700 text-white rounded-lg hover:from-yellow-600 hover:to-red-800 transition-all duration-300 font-semibold shadow-md hover:shadow-lg"
                >
                  View Conference Details
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Newsletter Section */}
      <section className="relative z-10 bg-gradient-to-r from-yellow-50 via-white to-red-50 border-t-2 border-yellow-400/50 py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-audiowide text-3xl text-gray-900 mb-4 tracking-tight">
            Stay Updated
          </h2>
          <div className="h-0.5 w-16 mx-auto mb-6 bg-gradient-to-r from-yellow-500 to-red-700" />
          <p className="text-gray-600 mb-8 font-light">
            Subscribe to our newsletter for the latest research updates, articles, and conference announcements.
          </p>

          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300/50 rounded-lg focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 transition-all duration-300 bg-white/80"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-red-700 text-white rounded-lg hover:from-yellow-600 hover:to-red-800 transition-all duration-300 font-semibold flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
            >
              <Mail size={18} />
              Subscribe
            </button>
          </form>

          {subscribed && (
            <p className="text-green-600 mt-4 font-semibold animate-pulse">
              ✓ Thank you for subscribing!
            </p>
          )}
        </div>
      </section>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-yellow-500 to-red-700 text-white rounded-full hover:from-yellow-600 hover:to-red-800 transition-all duration-300 shadow-lg hover:shadow-xl animate-fade-in"
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} />
        </button>
      )}

      {/* Footer Accent */}
      <div className="relative z-10 bg-white border-t border-gray-200/50 py-6 px-4 text-center text-xs text-gray-500 font-light">
        <p>NEUROSCIENCE 2026 • Knowledge Library • φ = 1.618033988...</p>
      </div>
    </div>
  );
}
