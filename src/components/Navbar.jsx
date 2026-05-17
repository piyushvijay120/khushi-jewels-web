'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { CONTACT_CONFIG } from '@/config/contact';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/collections', label: 'Collections' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setIsOpen(false); }, [pathname]);

  return (
    <nav
      style={{ animation: 'navEnter 0.55s cubic-bezier(0.22,1,0.36,1) both', position: 'sticky', top: 0, zIndex: 50, width: '100%', background: '#fff', transition: 'box-shadow 0.3s ease', boxShadow: scrolled ? '0 4px 28px rgba(0,0,0,0.09)' : 'none', borderBottom: scrolled ? 'none' : '1px solid #f3f4f6' }}
    >
      <div style={{ maxWidth: '88rem', margin: '0 auto', width: '100%', paddingLeft: 'clamp(1.25rem, 4vw, 4rem)', paddingRight: 'clamp(1.25rem, 4vw, 4rem)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>

          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', flexShrink: 0 }}>
            <div style={{ width: '38px', height: '38px', background: 'linear-gradient(135deg, #b8962e 0%, #d4af37 50%, #b8962e 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#050c18', fontSize: '15px', fontWeight: 700, fontFamily: 'var(--font-playfair)', flexShrink: 0 }}>
              ◆
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-playfair)', fontWeight: 700, color: '#111', fontSize: '17px', lineHeight: 1.2 }}>Khushi Jewels</div>
              <div style={{ fontSize: '9px', color: '#d4af37', letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 600, lineHeight: 1.3 }}>Premium Gold</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <ul style={{ display: 'none', listStyle: 'none', margin: 0, padding: 0, gap: '4px' }} className="md-nav">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href} style={{ display: 'inline-block' }}>
                  <Link href={link.href} style={{ position: 'relative', display: 'block', padding: '8px 16px', fontSize: '13.5px', fontWeight: 500, color: isActive ? '#d4af37' : '#4b5563', textDecoration: 'none', transition: 'color 0.2s' }}>
                    {link.label}
                    <span style={{ position: 'absolute', bottom: 0, left: '1rem', right: '1rem', height: '2px', background: '#d4af37', transform: isActive ? 'scaleX(1)' : 'scaleX(0)', transformOrigin: 'left', transition: 'transform 0.25s ease', display: 'block' }} />
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Desktop right */}
          <div style={{ display: 'none', alignItems: 'center', gap: '20px' }} className="md-right">
            <a href={`tel:${CONTACT_CONFIG.phoneNumber}`} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13.5px', color: '#4b5563', fontWeight: 500, textDecoration: 'none', transition: 'color 0.2s' }}>
              <svg style={{ width: '14px', height: '14px', flexShrink: 0 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {CONTACT_CONFIG.phoneNumber}
            </a>
            <Link href="/collections" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'linear-gradient(135deg, #b8962e 0%, #d4af37 50%, #b8962e 100%)', color: '#050c18', padding: '10px 22px', fontSize: '13px', fontWeight: 700, textDecoration: 'none', letterSpacing: '0.05em', transition: 'opacity 0.2s' }}>
              Shop Now
              <svg style={{ width: '13px', height: '13px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>

          {/* Mobile burger */}
          <button
            style={{ display: 'none', padding: '8px', background: 'none', border: 'none', cursor: 'pointer', color: '#374151' }}
            className="md-burger"
            onClick={() => setIsOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <div style={{ width: '22px', height: '16px', position: 'relative' }}>
              <span style={{ position: 'absolute', top: isOpen ? '7px' : '0px', width: '100%', height: '2px', backgroundColor: 'currentColor', transform: isOpen ? 'rotate(45deg)' : 'none', transition: 'top 0.2s ease, transform 0.2s ease 0.18s', display: 'block' }} />
              <span style={{ position: 'absolute', top: '7px', width: '100%', height: '2px', backgroundColor: 'currentColor', opacity: isOpen ? 0 : 1, transition: 'opacity 0.15s ease', display: 'block' }} />
              <span style={{ position: 'absolute', top: isOpen ? '7px' : '14px', width: '100%', height: '2px', backgroundColor: 'currentColor', transform: isOpen ? 'rotate(-45deg)' : 'none', transition: 'top 0.2s ease, transform 0.2s ease 0.18s', display: 'block' }} />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        <div style={{ maxHeight: isOpen ? '520px' : '0px', opacity: isOpen ? 1 : 0, overflow: 'hidden', transition: 'max-height 0.35s ease, opacity 0.25s ease', borderTop: '1px solid #f3f4f6' }} className="md-hidden-menu">
          <div style={{ padding: '16px 0', display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link key={link.href} href={link.href} style={{ display: 'block', padding: '12px', fontSize: '14px', fontWeight: 500, color: isActive ? '#d4af37' : '#374151', background: isActive ? '#fffdf0' : 'transparent', borderLeft: isActive ? '3px solid #d4af37' : '3px solid transparent', textDecoration: 'none', transition: 'all 0.2s' }}>
                  {link.label}
                </Link>
              );
            })}
            <div style={{ paddingTop: '12px', marginTop: '8px', borderTop: '1px solid #f3f4f6', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a href={`tel:${CONTACT_CONFIG.phoneNumber}`} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 12px', fontSize: '14px', color: '#4b5563', fontWeight: 500, textDecoration: 'none' }}>
                <svg style={{ width: '16px', height: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {CONTACT_CONFIG.phoneNumber}
              </a>
              <Link href="/collections" style={{ display: 'block', background: 'linear-gradient(135deg, #b8962e 0%, #d4af37 50%, #b8962e 100%)', color: '#050c18', textAlign: 'center', padding: '14px', fontSize: '14px', fontWeight: 700, textDecoration: 'none', letterSpacing: '0.05em' }}>
                Shop Now →
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .md-nav { display: flex !important; }
          .md-right { display: flex !important; }
          .md-burger { display: none !important; }
          .md-hidden-menu { display: none !important; }
        }
        @media (max-width: 767px) {
          .md-nav { display: none !important; }
          .md-right { display: none !important; }
          .md-burger { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
