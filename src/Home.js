// home.js
import React, { useEffect } from 'react';
import './index.css';
import Navbar from './Navbar';

const HomePage = () => {
  // Smooth scroll down when user clicks the indicator
  const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight - 80, // land just past the hero
      behavior: 'smooth',
    });
  };

  // Minor accessibility: show reduced motion respect
  useEffect(() => {
    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      // nothing fancy — animations are CSS-based and will respect user setting if defined globally.
    }
  }, []);

  return (
    <>
      {/* Component-scoped tiny styles to reproduce a few hero-specific keyframes
          This avoids requiring you to add a new css file. It's safe to paste as-is. */}
      <style>{`
        /* small bobbing animation for the scroll hint */
        @keyframes hero-bob {
          0% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(-10px); opacity: 0.9; }
          100% { transform: translateY(0); opacity: 1; }
        }

        .hero-tagline {
          opacity: 0;
          transform: translateX(-30px);
          animation: hero-tagline-in 0.9s ease-out forwards;
          animation-delay: 0.5s;
        }
        @keyframes hero-tagline-in {
          to { opacity: 1; transform: translateX(0); }
        }

        .hero-headline {
          opacity: 0;
          transform: translateY(30px);
          animation: hero-headline-in 1s ease-out forwards;
          animation-delay: 0.7s;
        }
        @keyframes hero-headline-in {
          to { opacity: 1; transform: translateY(0); }
        }

        .scroll-indicator {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          user-select: none;
        }

        .scroll-indicator .arrow {
          display: inline-block;
          animation: hero-bob 2s infinite ease-in-out;
        }

        /* small responsive tweak to ensure headline scales on small screens */
        @media (max-width: 640px) {
          .hero-headline { font-size: 1.4rem !important; line-height: 1.15 !important; }
        }
      `}</style>

      <div className="HomePage">
        <Navbar />

        <div
          className="Home"
          /* note: index.css already sets background-image for .HomePage; keep using that */
          role="banner"
          aria-label="Hero - Discover your candidates"
        >
          <div style={{ maxWidth: 1100, margin: '0 auto', padding: '2rem', textAlign: 'left' }}>
            {/* Tagline row (line + text) */}
            <div className="hero-tagline" style={{ display: 'flex', alignItems: 'center', marginBottom: 18 }}>
              <span
                className="inline-line"
                /* inline-line is defined in index.css (grow animation already present) */
                aria-hidden="true"
                style={{ marginRight: 14 }}
              />
              <p
                style={{
                  margin: 0,
                  fontSize: '0.95rem',
                  color: '#fbd784',
                  fontWeight: 700,
                  letterSpacing: '3px',
                  textTransform: 'uppercase',
                  fontFamily: 'Sansita, sans-serif',
                }}
              >
                Vote Clearly. Boldly. With Insight
              </p>
            </div>

            {/* Headline */}
            <h1
              className="hero-headline"
              style={{
                margin: 0,
                color: '#fff',
                fontFamily: 'Playfair Display, serif',
                fontWeight: 600,
                fontSize: '3rem',
                lineHeight: '1.05',
                maxWidth: '760px',
                textTransform: 'none',
              }}
            >
              Discover your candidates. Track promises. Understand your government
            </h1>

            {/* Scroll indicator */}
            <div style={{ marginTop: 28 }}>
              <button
                onClick={scrollDown}
                className="scroll-indicator"
                aria-label="Scroll down to next section"
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#fff',
                  fontFamily: 'IBM Plex Mono, monospace',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  padding: 0,
                }}
              >
                <span style={{ opacity: 0.9 }}>scroll down</span>
                <span className="arrow" style={{ display: 'inline-block', transform: 'translateY(0)' }}>
                  {/* simple down arrow (SVG) */}
                  <svg width="18" height="24" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M9 20L2 10.5H16L9 20Z" fill="white" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
