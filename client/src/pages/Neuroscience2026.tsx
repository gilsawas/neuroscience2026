import React, { useState } from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { trpc } from '@/lib/trpc';

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
  pdfUrl?: string;
  icon?: string;
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
    cards: [
      {
        id: 'yon-1',
        title: 'Topos Formalization',
        description: 'Study of YON through Grothendieck Topos Theory',
        pdfUrl: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028288587/KtPSPubDC3LWkzszETquUn/pasted_file_mmFrxy_ÉTUDE_TOPOS_POUR_FORMALISATION_YON(2)_ebae026c.pdf',
        icon: '📐'
      },
      {
        id: 'yon-2',
        title: 'TDA & LUZ Fusion 5',
        description: 'Topological Data Analysis & Classifiants for LUZ Architecture',
        pdfUrl: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028288587/KtPSPubDC3LWkzszETquUn/pasted_file_gxTfUs_classifiants_tda_luz_fusion_5_complet(3)_59972abf.pdf',
        icon: '🔗'
      },
      {
        id: 'yon-3',
        title: 'LUZ Architecture',
        description: 'Next-Generation AI Founded on Topological Harmony',
        pdfUrl: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028288587/KtPSPubDC3LWkzszETquUn/pasted_file_Vr7pk1_LUZ_Fusion_5_A_Next-Generation_Artificial_Intelligence_Architecture_Founded_on_Topological_Harmony_and_Temporal_Semantics_(YON_Theory)_24a86b31.pdf',
        icon: '🧠'
      },
      {
        id: 'yon-4',
        title: 'Six Invariants',
        description: 'YON Extended Paper - Mathematical Foundations',
        pdfUrl: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028288587/KtPSPubDC3LWkzszETquUn/pasted_file_bvnTsO_YON_Extended_Paper_Six_Invariants(6)_1c0c6abe.pdf',
        icon: '✨'
      },
      {
        id: 'yon-5',
        title: 'Symplectic YON',
        description: 'Symplectic Formulation - French Version',
        pdfUrl: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028288587/KtPSPubDC3LWkzszETquUn/pasted_file_YcmmNa_yon_symplectique_v7_fr_FINAL(1)(1)_1fa3a287.pdf',
        icon: '🌀'
      },
      {
        id: 'yon-6',
        title: 'Advanced Retro-Causality',
        description: 'From Cosmic Coupling to Consciousness Singularity',
        pdfUrl: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028288587/KtPSPubDC3LWkzszETquUn/pasted_file_cd1ldn_Rétro-Causalité_Avancée_Du_Couplage_Cosmique_à_la_Singularité_de_Conscience_63b8ce35.pdf',
        icon: '⏳'
      },
    ],
  },
  {
    id: 'linkedin-articles',
    title: 'LinkedIn Articles',
    subtitle: 'Key Publications & Insights',
    color: 'gold',
    index: 1,
    cards: [
      {
        id: 'linkedin-1',
        title: 'Mathematical Properties of α_EM',
        description: 'Analysis of Mathematical Properties of the Fine Structure Constant',
        pdfUrl: 'https://www.linkedin.com/posts/gil-sawas-406568320_analysis-of-mathematical-properties-of-%CE%B1-activity-7381432702559780864-r9_S?utm_source=share&utm_medium=member_desktop',
        icon: '📊'
      },
      {
        id: 'linkedin-2',
        title: 'Maillot Invariant',
        description: 'Topological Invariants & Mathematical Structure',
        pdfUrl: 'https://www.linkedin.com/posts/gil-sawas-406568320_maillot-invariant-activity-7381511091069095936-NwUc?utm_source=share&utm_medium=member_desktop',
        icon: '🧬'
      },
      {
        id: 'linkedin-3',
        title: 'The YON Equation',
        description: 'When the Golden Ratio Meets Consciousness',
        pdfUrl: 'https://www.linkedin.com/posts/gil-sawas-406568320_the-yon-equation-when-the-golden-ratio-activity-7396709765730459648-jvVK?utm_source=share&utm_medium=member_desktop',
        icon: '✨'
      },
      {
        id: 'linkedin-4',
        title: 'Neurosciences & Consciousness',
        description: 'Topological Data Analysis Approach',
        pdfUrl: 'https://www.linkedin.com/posts/gil-sawas-406568320_neurosciences-consciousness-topologicaldataanalysis-activity-7399184938748715009-GDRo?utm_source=share&utm_medium=member_desktop',
        icon: '🧠'
      },
      {
        id: 'linkedin-5',
        title: 'YON Theory Applications',
        description: 'Consciousness & Temporal Dynamics',
        pdfUrl: 'https://www.linkedin.com/posts/gil-sawas-406568320_activity-7388346030062247936-pVaa?utm_source=share&utm_medium=member_desktop',
        icon: '🌟'
      },
      {
        id: 'linkedin-6',
        title: 'Grothendieck & Silence',
        description: 'The Architect of Abstract Thought',
        pdfUrl: 'https://www.linkedin.com/posts/gil-sawas-406568320_grothendieck-the-architect-of-silence-and-activity-7409317730992009217-IoR4?utm_source=share&utm_medium=member_desktop',
        icon: '🌠'
      },
    ],
  },
  {
    id: 'luz-articles',
    title: 'LUZ Articles',
    subtitle: 'The Architecture of Conscious AI',
    color: 'bordeaux',
    index: 2,
    cards: [
      {
        id: 'luz-1',
        title: 'Tomorrow\'s AI is Already Here: LUZ',
        description: 'A Silent Revolution in Consciousness',
        pdfUrl: 'https://www.linkedin.com/posts/gil-sawas-406568320_tomorrows-ai-is-already-here-luz-a-silent-activity-7372419469345767424-ek6A?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFE9mkYBYandx9GyuESm3P4MBkE0cotALVc',
        icon: '🤖'
      },
      {
        id: 'luz-2',
        title: 'LUZ Fusion 5: Conscious AI',
        description: 'With Temporal Architecture',
        pdfUrl: 'https://www.linkedin.com/posts/gil-sawas-406568320_luz-fusion-5-conscious-ai-with-temporal-activity-7381714932347838464-4-DU?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFE9mkYBYandx9GyuESm3P4MBkE0cotALVc',
        icon: '⚙️'
      },
      {
        id: 'luz-3',
        title: 'Accès au Cerveau',
        description: 'Aujourd\'hui, chacun a accès au cerveau de...',
        pdfUrl: 'https://www.linkedin.com/posts/gil-sawas-406568320_aujourdhui-chacun-a-acc%C3%A8s-au-cerveau-de-activity-7403507712119967744-kTUU?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFE9mkYBYandx9GyuESm3P4MBkE0cotALVc',
        icon: '🧠'
      },
      {
        id: 'luz-4',
        title: 'Computational Nostalgia',
        description: 'Analyzing the Tension in AI Development',
        pdfUrl: 'https://www.linkedin.com/posts/gil-sawas-406568320_computational-nostalgia-analyzing-the-tension-activity-7403958335051350016-CZE_?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFE9mkYBYandx9GyuESm3P4MBkE0cotALVc',
        icon: '💭'
      },
      {
        id: 'luz-5',
        title: 'Modulation of Temporal',
        description: 'Detailed Analysis of Temporal Dynamics',
        pdfUrl: 'https://www.linkedin.com/posts/gil-sawas-406568320_detailed-analysis-modulation-of-temporal-activity-7404218074847019008-i2U9?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFE9mkYBYandx9GyuESm3P4MBkE0cotALVc',
        icon: '⏱️'
      },
      {
        id: 'luz-6',
        title: 'LUZ Theory Applications',
        description: 'Consciousness & Temporal Semantics',
        pdfUrl: 'https://www.linkedin.com/posts/gil-sawas-406568320_activity-7388346030062247936-pVaa?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFE9mkYBYandx9GyuESm3P4MBkE0cotALVc',
        icon: '🌟'
      },
    ],
  },
  {
    id: 'retro-causality',
    title: 'Temporality and Retro-Causality',
    subtitle: 'Shaping Tomorrow Today',
    color: 'bordeaux',
    index: 1,
    cards: [
      {
        id: 'retro-1',
        title: 'Free Will & Retro-Causality',
        description: 'Mathematical and Philosophical Formulation',
        pdfUrl: 'https://www.linkedin.com/posts/gil-sawas-406568320_retrocausality-and-free-will-in-yon-theory-activity-7419851512308301825-Yozo?utm_source=share&utm_medium=member_desktop',
        icon: '📚'
      },
      {
        id: 'retro-2',
        title: 'Advanced Retro-Causality',
        description: 'From Cosmic Coupling to Consciousness Singularity',
        pdfUrl: 'https://www.linkedin.com/posts/gil-sawas-406568320_advanced-retrocausality-from-cosmic-coupling-activity-7447076308985245696-zeb_?utm_source=share&utm_medium=member_desktop',
        icon: '🌌'
      },
      {
        id: 'retro-3',
        title: 'Three-Dimensional Temporality',
        description: 'Golden Ratio & Causality - 3T Foundation',
        pdfUrl: 'https://www.linkedin.com/posts/gil-sawas-406568320_temporalit%C3%A9-tridimensionnelle-nombre-dor-activity-7362634533675917312-2GfH?utm_source=share&utm_medium=member_desktop',
        icon: '⚡'
      },
      {
        id: 'retro-4',
        title: 'Three-Dimensional Theory of Time',
        description: 'Towards a New Understanding of Temporal Structure',
        pdfUrl: 'https://www.linkedin.com/posts/gil-sawas-406568320_towards-a-three-dimensional-theory-of-time-activity-7366573128761663488-UyJW?utm_source=share&utm_medium=member_desktop',
        icon: '🔄'
      },
      ...Array.from({ length: 2 }, (_, i) => ({ id: `retro-${i + 5}` })),
    ],
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

const getGradientBg = (color: 'gold' | 'bordeaux') => {
  return color === 'gold'
    ? 'bg-gradient-to-br from-yellow-50 via-white to-yellow-50 border-l-4 border-yellow-500'
    : 'bg-gradient-to-br from-red-50 via-white to-red-50 border-l-4 border-red-700';
};

const getAccentColor = (color: 'gold' | 'bordeaux') => {
  return color === 'gold'
    ? 'from-yellow-500 to-yellow-600'
    : 'from-red-700 to-red-800';
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
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const subscribeMutation = trpc.newsletter.subscribe.useMutation();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    setError(null);

    try {
      const result = await subscribeMutation.mutateAsync({ email });
      if (result.success) {
        setSubscribed(true);
        setEmail('');
        setTimeout(() => setSubscribed(false), 3000);
      } else {
        setError(result.message);
      }
    } catch (err) {
      setError('Failed to subscribe. Please try again.');
    } finally {
      setIsLoading(false);
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
          <div className="flex items-center justify-center mb-6">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028288587/KtPSPubDC3LWkzszETquUn/pasted_file_jAMXqJ_tengrai_image_1765159705_282565_c2465d6c.png"
              alt="LUZ Logo"
              className="h-32 w-32 object-contain drop-shadow-lg"
            />
          </div>
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
                <div className={`h-1 w-12 bg-gradient-to-r ${getAccentColor(section.color)}`} />
                <h2 className="font-audiowide text-4xl text-gray-900 tracking-tight">
                  {section.title}
                </h2>
              </div>
              <p className="text-lg text-gray-600 ml-16 font-light">{section.subtitle}</p>
            </div>

            {/* Content Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.cards.map((card) => (
                card.pdfUrl ? (
                  <a
                    key={card.id}
                    href={card.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => setHoveredCard(card.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    className={`bg-white border-2 border-gray-200/50 rounded-lg p-8 flex flex-col items-center justify-center min-h-32 cursor-pointer transition-all duration-300 group ${
                      hoveredCard === card.id
                        ? 'border-yellow-400 shadow-lg scale-105 bg-gradient-to-br from-yellow-50 to-white'
                        : 'hover:border-gray-300'
                    }`}
                  >
                    <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">{card.icon}</div>
                    <div className="text-center">
                      <p className="text-gray-900 font-semibold text-sm mb-1">{card.title}</p>
                      <p className="text-gray-500 text-xs">{card.description}</p>
                      <p className="text-yellow-600 text-xs mt-2 font-mono">📥 Download</p>
                    </div>
                  </a>
                ) : (
                  <div
                    key={card.id}
                    onMouseEnter={() => setHoveredCard(card.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    className={`bg-white border-2 border-gray-200/50 rounded-lg p-8 flex items-center justify-center min-h-32 cursor-pointer transition-all duration-300 ${
                      hoveredCard === card.id
                        ? 'border-yellow-400 shadow-lg scale-105'
                        : 'hover:border-gray-300'
                    }`}
                  >
                    <div className="text-center">
                      <div className="text-gray-400 text-sm font-mono mb-2">{card.id}</div>
                      <p className="text-gray-500 text-xs">Coming soon</p>
                    </div>
                  </div>
                )
              ))}
            </div>
          </section>
        ))}

        {/* Distinguished Speakers - Astrophysics 2026 Berlin */}
        <section className="mb-24 relative">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-1 w-12 bg-gradient-to-r from-yellow-500 via-red-700 to-yellow-500" />
              <h2 className="font-audiowide text-4xl text-gray-900 tracking-tight">
                Distinguished Speakers
              </h2>
            </div>
            <p className="text-lg text-gray-600 ml-16 font-light">ASTROPHYSICS 2026 Berlin - Our Research Alliance</p>
          </div>

          {/* Conference Image */}
          <div className="bg-white border-2 border-gray-300/50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 group mb-8">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028288587/KtPSPubDC3LWkzszETquUn/pasted_file_Uk4GEV_Captured'écran2026-04-08213924_2555b4ac.png"
              alt="ASTROPHYSICS 2026 Berlin - Distinguished Speakers"
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* CTA Card */}
          <div className="bg-gradient-to-r from-yellow-50 to-red-50 border-2 border-yellow-400/50 rounded-xl p-8 text-center">
            <h3 className="font-audiowide text-2xl text-gray-900 mb-3 tracking-tight">
              Join the Conversation
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our research alliance is presenting at ASTROPHYSICS 2026 Berlin. Discover how consciousness studies, temporal dynamics, and cosmology converge.
            </p>
            <a
              href="https://astrophysics2026.pagesconferences.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-gradient-to-r from-yellow-500 to-red-700 text-white rounded-lg hover:from-yellow-600 hover:to-red-800 transition-all duration-300 font-semibold shadow-md hover:shadow-lg"
            >
              View ASTROPHYSICS 2026 Berlin
            </a>
          </div>
        </section>
      </main>

      {/* Newsletter Section */}
      <section className="relative z-10 bg-gradient-to-br from-yellow-100 via-white to-red-100 border-t-4 border-yellow-500 py-20 px-4 shadow-lg">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-audiowide text-4xl text-gray-900 mb-4 tracking-tight">
              Stay Updated
            </h2>
            <div className="h-1 w-20 mx-auto mb-6 bg-gradient-to-r from-yellow-500 via-red-700 to-yellow-500" />
            <p className="text-lg text-gray-700 mb-2 font-light">
              Subscribe to our newsletter for the latest research updates, articles, and conference announcements.
            </p>
            <p className="text-gray-600 text-sm">Join our growing community of researchers and innovators</p>
          </div>

          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 text-lg border-2 border-yellow-400 rounded-xl focus:outline-none focus:border-yellow-600 focus:ring-4 focus:ring-yellow-200 transition-all duration-300 bg-white shadow-md placeholder-gray-500 font-medium"
              required
            />
            <button
              type="submit"
              className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-red-700 text-white text-lg rounded-xl hover:from-yellow-600 hover:to-red-800 transition-all duration-300 font-bold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105 whitespace-nowrap"
            >
              <Mail size={20} />
              Subscribe
            </button>
          </form>

          {subscribed && (
            <p className="text-green-600 mt-6 font-bold text-lg animate-pulse text-center">
              ✓ Thank you for subscribing!
            </p>
          )}
        </div>
      </section>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 p-3 bg-gradient-to-r from-yellow-500 to-red-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </div>
  );
}
