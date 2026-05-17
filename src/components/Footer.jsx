'use client';

import Link from 'next/link';
import { useState } from 'react';
import { CONTACT_CONFIG } from '@/config/contact';

const GOLD = '#d4af37';
const GOLD_GRAD = 'linear-gradient(135deg, #b8962e 0%, #d4af37 50%, #b8962e 100%)';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/collections', label: 'Collections' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact Us' },
];

const collectionLinks = [
  { href: '/collections?category=Rings', label: 'Rings' },
  { href: '/collections?category=Necklaces', label: 'Necklaces' },
  { href: '/collections?category=Earrings', label: 'Earrings' },
  { href: '/collections?category=Bangles', label: 'Bangles' },
  { href: '/collections?category=Bridal Sets', label: 'Bridal Sets' },
];

function FooterLink({ href, children }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      href={href}
      style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13.5px', color: hovered ? GOLD : '#9ca3af', textDecoration: 'none', transition: 'color 0.2s', lineHeight: 1.5 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span style={{ width: '4px', height: '4px', background: hovered ? GOLD : '#4b5563', borderRadius: '50%', flexShrink: 0, transition: 'background 0.2s' }} />
      {children}
    </Link>
  );
}

function SocialBtn({ href, label, children }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      style={{ width: '36px', height: '36px', background: hovered ? GOLD_GRAD : '#111827', border: `1px solid ${hovered ? GOLD : '#374151'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: hovered ? '#050c18' : '#9ca3af', transition: 'all 0.25s', cursor: 'pointer', flexShrink: 0 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </a>
  );
}

function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [btnHover, setBtnHover] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) { setSubmitted(true); setEmail(''); }
  };

  return (
    <div style={{ borderBottom: '1px solid #1a2335', paddingBottom: '3rem', marginBottom: '3rem' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', alignItems: 'flex-start', justifyContent: 'space-between' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
            <div style={{ width: '20px', height: '1px', background: GOLD }} />
            <span style={{ color: GOLD, fontSize: '10px', fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase' }}>Newsletter</span>
          </div>
          <h3 style={{ fontFamily: 'var(--font-playfair)', fontWeight: 700, color: '#fff', fontSize: '1.4rem', lineHeight: 1.3, marginBottom: '6px' }}>
            Exclusive Offers & New Arrivals
          </h3>
          <p style={{ color: '#9ca3af', fontSize: '13.5px' }}>Subscribe to get priority access to new collections and special offers.</p>
        </div>
        {submitted ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: GOLD, fontSize: '14px', fontWeight: 600 }}>
            <svg style={{ width: '20px', height: '20px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
            Thank you for subscribing!
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '0', width: '100%', maxWidth: '480px' }}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              style={{ padding: '13px 18px', background: '#111827', border: '1px solid #1f2937', borderRight: 'none', color: '#fff', fontSize: '13.5px', outline: 'none', flex: 1, minWidth: 0, fontFamily: 'inherit' }}
              onFocus={(e) => { e.target.style.borderColor = GOLD; }}
              onBlur={(e) => { e.target.style.borderColor = '#1f2937'; }}
            />
            <button
              type="submit"
              style={{ padding: '13px 22px', background: btnHover ? 'linear-gradient(135deg, #a07820 0%, #c9a332 50%, #a07820 100%)' : GOLD_GRAD, color: '#050c18', fontSize: '12px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', border: 'none', cursor: 'pointer', whiteSpace: 'nowrap', transition: 'opacity 0.2s', flexShrink: 0 }}
              onMouseEnter={() => setBtnHover(true)}
              onMouseLeave={() => setBtnHover(false)}
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer style={{ background: 'linear-gradient(135deg, #020810 0%, #050f1e 50%, #020810 100%)', color: '#fff' }}>
      <div style={{ height: '2px', background: GOLD_GRAD }} />

      <div className="sc" style={{ paddingTop: '4rem', paddingBottom: '2.5rem' }}>
        <NewsletterForm />

        {/* Main grid */}
        <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2.5rem', marginBottom: '3rem' }}>

          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.25rem' }}>
              <div style={{ width: '40px', height: '40px', background: GOLD_GRAD, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#050c18', fontSize: '16px', fontWeight: 700, fontFamily: 'var(--font-playfair)', flexShrink: 0 }}>
                ◆
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-playfair)', fontWeight: 700, color: '#fff', fontSize: '17px', lineHeight: 1.2 }}>Khushi Jewels</div>
                <div style={{ fontSize: '9px', color: GOLD, letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 600 }}>Premium Gold</div>
              </div>
            </div>

            <p style={{ color: '#9ca3af', fontSize: '13.5px', lineHeight: 1.75, marginBottom: '1.5rem', maxWidth: '260px' }}>
              Trusted jewellery crafted with love — handmade 22K gold pieces for life's most precious moments.
            </p>

            <div style={{ display: 'flex', gap: '8px', marginBottom: '1.5rem' }}>
              <SocialBtn href={CONTACT_CONFIG.social.instagram} label="Instagram">
                <svg style={{ width: '15px', height: '15px' }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </SocialBtn>
              <SocialBtn href={`https://wa.me/${CONTACT_CONFIG.whatsappNumber}`} label="WhatsApp">
                <svg style={{ width: '15px', height: '15px' }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </SocialBtn>
            </div>
          </div>

          {/* Menu */}
          <div>
            <h3 style={{ fontSize: '11px', fontWeight: 700, color: '#fff', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>Menu</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {navLinks.map((link) => <FooterLink key={link.href} href={link.href}>{link.label}</FooterLink>)}
            </div>
          </div>

          {/* Collections */}
          <div>
            <h3 style={{ fontSize: '11px', fontWeight: 700, color: '#fff', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>Collections</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {collectionLinks.map((link) => <FooterLink key={link.href} href={link.href}>{link.label}</FooterLink>)}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 style={{ fontSize: '11px', fontWeight: 700, color: '#fff', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>Contact</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '1.5rem' }}>
              <a href={`tel:${CONTACT_CONFIG.phoneNumber}`} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#9ca3af', textDecoration: 'none', fontSize: '13.5px' }}>
                <svg style={{ width: '14px', height: '14px', color: GOLD, flexShrink: 0 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {CONTACT_CONFIG.phoneNumber}
              </a>
              <a href={`mailto:${CONTACT_CONFIG.email}`} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#9ca3af', textDecoration: 'none', fontSize: '13.5px', wordBreak: 'break-all' }}>
                <svg style={{ width: '14px', height: '14px', color: GOLD, flexShrink: 0 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {CONTACT_CONFIG.email}
              </a>
            </div>

            <div style={{ padding: '1rem', background: 'rgba(212,175,55,0.07)', border: '1px solid rgba(212,175,55,0.15)' }}>
              <p style={{ color: GOLD, fontSize: '10px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '6px' }}>Store Hours</p>
              <p style={{ color: '#9ca3af', fontSize: '12.5px', lineHeight: 1.7 }}>{CONTACT_CONFIG.hours.weekdays}</p>
              <p style={{ color: '#9ca3af', fontSize: '12.5px', lineHeight: 1.7 }}>{CONTACT_CONFIG.hours.sunday}</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid #1a2335', paddingTop: '1.5rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
          <p style={{ color: '#6b7280', fontSize: '13px' }}>&copy; 2026 Khushi Jewels. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Link href="/contact" style={{ color: '#6b7280', fontSize: '13px', textDecoration: 'none' }}>Privacy Policy</Link>
            <Link href="/contact" style={{ color: '#6b7280', fontSize: '13px', textDecoration: 'none' }}>Refund Policy</Link>
          </div>
        </div>
      </div>
      <style>{`
        @media (min-width: 640px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (min-width: 1024px) {
          .footer-grid { grid-template-columns: 2fr 1fr 1fr 1.5fr !important; }
        }
      `}</style>
    </footer>
  );
}
