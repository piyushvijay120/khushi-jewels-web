'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import Link from 'next/link';

const GOLD = '#d4af37';
const GOLD_GRAD = 'linear-gradient(135deg, #b8962e 0%, #d4af37 50%, #b8962e 100%)';

const tabs = {
  'Our Mission': [
    'To make certified 22K gold jewellery accessible to every family.',
    'To honour every occasion with handcrafted, authentic pieces.',
    'To maintain the highest standards of purity and craftsmanship.',
  ],
  'Our Vision': [
    'To be the most trusted jewellery name in the region.',
    'To blend timeless tradition with elegant modern design.',
    'To create heirlooms that outlast generations.',
  ],
  'Our Values': [
    'Full transparency in pricing and gold certification.',
    'Deep respect for every customer\'s trust and investment.',
    'Unwavering passion for quality, beauty, and detail.',
  ],
};

const whyUs = [
  { title: 'Hallmark Certified', desc: '100% certified 22K & 18K gold — every piece includes an authenticity certificate.' },
  { title: 'Master Craftsmanship', desc: 'Artisans with 15+ years of expertise in traditional and contemporary jewellery design.' },
  { title: 'Transparent Pricing', desc: 'No hidden charges. Rates are based on live gold prices with full disclosure.' },
  { title: 'Custom Designs', desc: 'Bring your vision to life — bespoke jewellery tailored to your preferences and budget.' },
  { title: 'Secure Delivery', desc: 'Premium insured packaging for safe door-to-door delivery across India.' },
  { title: 'Lifetime Service', desc: 'Cleaning, resizing, repair, and buyback support — we stand with you for life.' },
];

export default function About() {
  const [activeTab, setActiveTab] = useState('Our Mission');
  const [ctaHover, setCtaHover] = useState(false);
  const [contactHover, setContactHover] = useState(false);

  return (
    <>
      <Navbar />

      {/* ─── PAGE HEADER ──────────────────────────────────────── */}
      <section style={{ paddingTop: '6rem', paddingBottom: '6rem', position: 'relative', overflow: 'hidden', background: 'linear-gradient(135deg, #040c17 0%, #071828 55%, #040c17 100%)' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(to right, transparent, rgba(212,175,55,0.4), transparent)' }} />
        <div style={{ position: 'absolute', top: '50%', right: '-8rem', width: '20rem', height: '20rem', borderRadius: '50%', background: 'rgba(212,175,55,0.05)', filter: 'blur(60px)', pointerEvents: 'none' }} />
        <div className="sc" style={{ position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.75rem' }}>
            <div style={{ width: '32px', height: '1px', background: GOLD }} />
            <span style={{ color: GOLD, fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', fontWeight: 600 }}>Who We Are</span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-playfair)', fontWeight: 700, color: '#fff', lineHeight: 1.06, marginBottom: '1.25rem' }}>
            <span style={{ display: 'block', fontSize: 'clamp(36px, 5.5vw, 68px)' }}>Our Story of</span>
            <span style={{ display: 'block', fontSize: 'clamp(36px, 5.5vw, 68px)', color: '#d4af37', fontWeight: 400, fontStyle: 'italic' }}>Timeless Craft</span>
          </h1>
          <p style={{ color: '#9ca3af', fontSize: '1.125rem', maxWidth: '32rem', lineHeight: 1.75 }}>
            For over two decades, Khushi Jewels has been crafting memories, one precious piece at a time.
          </p>
        </div>
      </section>

      {/* ─── OUR STORY ────────────────────────────────────────── */}
      <section style={{ background: '#fff', paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div className="sc">
          <div className="about-story-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3.5rem', alignItems: 'center' }}>

            {/* Left text */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1rem' }}>
                <div style={{ width: '24px', height: '1px', background: GOLD }} />
                <span style={{ color: GOLD, fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 600 }}>Our Heritage</span>
              </div>
              <h2 style={{ fontFamily: 'var(--font-playfair)', fontWeight: 700, color: '#111', fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.2, marginBottom: '2rem' }}>
                Rooted in Tradition,<br />Built on Trust
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', color: '#6b7280', fontSize: '16px', lineHeight: 1.8 }}>
                <p>Founded in 2004, Khushi Jewels began as a small family workshop with a single belief — that every family deserves jewellery crafted with integrity. What started with a handful of master artisans has grown into one of the region's most trusted names in gold jewellery.</p>
                <p>Every piece we create tells a story. Our artisans bring decades of experience and passion to each design, ensuring that rings, necklaces, bangles, and bridal sets are not just beautiful — but timeless investments.</p>
                <p>We believe in full transparency: 100% certified 22K and 18K hallmark gold, honest pricing, and authentic certificates with every purchase. No compromises.</p>
              </div>
            </div>

            {/* Right — dark stats card */}
            <div style={{ padding: '2.25rem', position: 'relative', overflow: 'hidden', background: 'linear-gradient(135deg, #040c17, #071828)' }}>
              <div style={{ position: 'absolute', top: '-3.5rem', right: '-3.5rem', width: '13rem', height: '13rem', borderRadius: '50%', background: 'rgba(212,175,55,0.06)', filter: 'blur(40px)' }} />
              <div style={{ position: 'absolute', top: '1rem', right: '1rem', fontFamily: 'var(--font-playfair)', fontSize: '100px', fontWeight: 700, color: 'rgba(212,175,55,0.06)', lineHeight: 1, pointerEvents: 'none', userSelect: 'none' }}>KJ</div>
              <div style={{ position: 'relative' }}>
                <p style={{ color: GOLD, fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '1.75rem' }}>By The Numbers</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  {[
                    { val: '20+', label: 'Years in Business' },
                    { val: '500+', label: 'Happy Customers' },
                    { val: '22K', label: 'Gold Standard' },
                    { val: '50+', label: 'Unique Designs' },
                  ].map((s) => (
                    <div key={s.label} style={{ background: 'rgba(255,255,255,0.04)', padding: '1.25rem', border: '1px solid rgba(255,255,255,0.05)' }}>
                      <p style={{ fontFamily: 'var(--font-playfair)', fontWeight: 700, color: GOLD, fontSize: '1.875rem' }}>{s.val}</p>
                      <p style={{ color: '#9ca3af', fontSize: '12px', marginTop: '6px', lineHeight: 1.4 }}>{s.label}</p>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: '1.75rem', paddingTop: '1.75rem', borderTop: '1px solid #1f2937' }}>
                  <p style={{ color: '#9ca3af', fontSize: '13.5px', lineHeight: 1.7 }}>
                    Every purchase includes a hallmark authenticity certificate verifying gold purity — our promise to every customer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MISSION / VISION / VALUES ────────────────────────── */}
      <section style={{ background: '#fafaf8', paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div className="sc">
          <div className="about-story-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3.5rem', alignItems: 'center' }}>

            {/* Left — gold card */}
            <div style={{ padding: '2.25rem', position: 'relative', overflow: 'hidden', background: 'linear-gradient(135deg, #6b4a10 0%, #8b5e1a 50%, #5a3d0d 100%)' }}>
              <div style={{ position: 'absolute', top: '-3rem', right: '-3rem', width: '12rem', height: '12rem', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', filter: 'blur(40px)' }} />
              <div style={{ position: 'absolute', bottom: '1.5rem', right: '1.5rem', fontFamily: 'var(--font-playfair)', fontSize: '150px', fontWeight: 700, color: 'rgba(255,255,255,0.04)', lineHeight: 1, pointerEvents: 'none', userSelect: 'none' }}>◆</div>
              <div style={{ position: 'relative' }}>
                <p style={{ color: 'rgba(255,220,150,0.85)', fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '1.5rem' }}>Our Purpose</p>
                <h3 style={{ fontFamily: 'var(--font-playfair)', fontWeight: 700, color: '#fff', fontSize: '2rem', lineHeight: 1.25, marginBottom: '2rem' }}>
                  Purpose Behind<br />Every Piece
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {[
                    { icon: '◆', text: 'Hallmark Certified Gold — authenticity guaranteed' },
                    { icon: '◈', text: 'Master Artisans — 15+ years of craft experience' },
                    { icon: '◉', text: 'Transparent Pricing — live gold rates, no surprises' },
                    { icon: '◎', text: 'Lifetime Support — cleaning, repair & buyback' },
                  ].map((item) => (
                    <div key={item.text} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', background: 'rgba(255,255,255,0.07)', padding: '1rem', border: '1px solid rgba(255,255,255,0.07)' }}>
                      <span style={{ color: '#f4cc6e', marginTop: '2px', flexShrink: 0 }}>{item.icon}</span>
                      <span style={{ color: 'rgba(255,235,185,0.85)', fontSize: '13.5px', lineHeight: 1.6 }}>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — tabs */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1rem' }}>
                <div style={{ width: '24px', height: '1px', background: GOLD }} />
                <span style={{ color: GOLD, fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 600 }}>What Drives Us</span>
              </div>
              <h2 style={{ fontFamily: 'var(--font-playfair)', fontWeight: 700, color: '#111', fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.2, marginBottom: '2.25rem' }}>
                Crafting with<br />Purpose
              </h2>

              {/* Tab buttons */}
              <div style={{ display: 'flex', borderBottom: '1px solid #e5e7eb', marginBottom: '1.75rem' }}>
                {Object.keys(tabs).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    style={{
                      padding: '12px 20px',
                      fontSize: '13.5px',
                      fontWeight: 600,
                      border: 'none',
                      background: 'none',
                      cursor: 'pointer',
                      borderBottom: activeTab === tab ? `2px solid ${GOLD}` : '2px solid transparent',
                      color: activeTab === tab ? GOLD : '#9ca3af',
                      marginBottom: '-1px',
                      transition: 'color 0.2s',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
                {tabs[activeTab].map((pt, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', color: '#6b7280', lineHeight: 1.7 }}>
                    <svg style={{ width: '20px', height: '20px', color: GOLD, flexShrink: 0, marginTop: '2px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {pt}
                  </li>
                ))}
              </ul>

              <Link href="/contact">
                <span
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: ctaHover ? 'linear-gradient(135deg, #a07820 0%, #c9a332 50%, #a07820 100%)' : GOLD_GRAD, color: '#050c18', padding: '14px 32px', fontSize: '13px', fontWeight: 700, letterSpacing: '0.05em', textDecoration: 'none', transition: 'opacity 0.2s', cursor: 'pointer' }}
                  onMouseEnter={() => setCtaHover(true)}
                  onMouseLeave={() => setCtaHover(false)}
                >
                  Get In Touch
                  <svg style={{ width: '16px', height: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ────────────────────────────────────── */}
      <section style={{ background: '#fff', paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div className="sc">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '12px' }}>
              <div style={{ width: '24px', height: '1px', background: GOLD }} />
              <span style={{ color: GOLD, fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 600 }}>Why Khushi Jewels</span>
              <div style={{ width: '24px', height: '1px', background: GOLD }} />
            </div>
            <h2 style={{ fontFamily: 'var(--font-playfair)', fontWeight: 700, color: '#111', fontSize: 'clamp(2rem, 4vw, 3rem)' }}>What Sets Us Apart</h2>
          </div>

          <div className="why-us-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
            {whyUs.map((item, i) => (
              <WhyCard key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── AWARDS ───────────────────────────────────────────── */}
      <section style={{ background: '#fafaf8', paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div className="sc">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '12px' }}>
              <div style={{ width: '24px', height: '1px', background: GOLD }} />
              <span style={{ color: GOLD, fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 600 }}>Recognition</span>
              <div style={{ width: '24px', height: '1px', background: GOLD }} />
            </div>
            <h2 style={{ fontFamily: 'var(--font-playfair)', fontWeight: 700, color: '#111', fontSize: 'clamp(2rem, 4vw, 3rem)' }}>Awards & Achievements</h2>
          </div>
          <div className="awards-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
            {[
              { title: 'Best Jewellery Store 2022', sub: 'Industry Excellence Award', num: '01' },
              { title: '4.8 / 5 Star Rating', sub: '500+ Verified Customer Reviews', num: '02' },
              { title: 'ISO Quality Certified', sub: 'International Quality Standards', num: '03' },
            ].map((a) => (
              <div key={a.num} style={{ background: '#fff', padding: '2rem', border: '1px solid #f3f4f6', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: '-8px', right: '-8px', fontFamily: 'var(--font-playfair)', fontWeight: 700, fontSize: '80px', color: '#fafaf5', pointerEvents: 'none', userSelect: 'none', lineHeight: 1 }}>{a.num}</div>
                <div style={{ position: 'relative' }}>
                  <div style={{ width: '40px', height: '40px', background: 'rgba(212,175,55,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: GOLD }} />
                  </div>
                  <p style={{ fontFamily: 'var(--font-playfair)', fontWeight: 700, color: '#111', fontSize: '1.25rem', marginBottom: '8px' }}>{a.title}</p>
                  <p style={{ color: '#9ca3af', fontSize: '13.5px' }}>{a.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────── */}
      <section style={{ paddingTop: '6rem', paddingBottom: '6rem', background: 'linear-gradient(135deg, #040c17 0%, #071828 55%, #040c17 100%)' }}>
        <div className="sc" style={{ textAlign: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '1.25rem' }}>
            <div style={{ width: '32px', height: '1px', background: GOLD }} />
            <span style={{ color: GOLD, fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', fontWeight: 600 }}>Visit Us</span>
            <div style={{ width: '32px', height: '1px', background: GOLD }} />
          </div>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontWeight: 700, color: '#fff', fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.2, marginBottom: '1.25rem' }}>
            Visit Our Store Today
          </h2>
          <p style={{ color: '#9ca3af', fontSize: '1.125rem', marginBottom: '3rem', maxWidth: '28rem', margin: '0 auto 3rem' }}>
            Experience the warmth of handcrafted jewellery — in person or online.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'center', alignItems: 'center' }} className="cta-btns">
            <Link href="/contact">
              <span
                style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', background: contactHover ? 'linear-gradient(135deg, #a07820 0%, #c9a332 50%, #a07820 100%)' : GOLD_GRAD, color: '#050c18', padding: '16px 40px', fontSize: '13px', fontWeight: 700, letterSpacing: '0.05em', cursor: 'pointer', transition: 'opacity 0.2s' }}
                onMouseEnter={() => setContactHover(true)}
                onMouseLeave={() => setContactHover(false)}
              >
                Contact Us
                <svg style={{ width: '16px', height: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </Link>
            <Link href="/collections" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #374151', color: '#d1d5db', padding: '16px 40px', fontSize: '13px', fontWeight: 700, letterSpacing: '0.05em', textDecoration: 'none', transition: 'border-color 0.2s, color 0.2s' }}>
              Browse Collections
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />

      <style>{`
        @media (min-width: 1024px) {
          .about-story-grid { grid-template-columns: 1fr 1fr !important; gap: 6rem !important; }
          .why-us-grid { grid-template-columns: repeat(3, 1fr) !important; }
          .awards-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (min-width: 640px) {
          .why-us-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .awards-grid { grid-template-columns: repeat(3, 1fr) !important; }
          .cta-btns { flex-direction: row !important; }
        }
      `}</style>
    </>
  );
}

function WhyCard({ item, index }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      style={{ background: hovered ? '#fff' : '#fafaf8', padding: '1.75rem', border: `1px solid ${hovered ? 'rgba(212,175,55,0.3)' : '#f3f4f6'}`, transition: 'all 0.3s', boxShadow: hovered ? '0 8px 24px rgba(0,0,0,0.07)' : 'none' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ width: '44px', height: '44px', background: hovered ? GOLD_GRAD : 'rgba(212,175,55,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: hovered ? '#050c18' : GOLD, fontFamily: 'var(--font-playfair)', fontWeight: 700, fontSize: '1.125rem', marginBottom: '1.25rem', transition: 'all 0.3s' }}>
        {index + 1}
      </div>
      <h3 style={{ fontFamily: 'var(--font-playfair)', fontWeight: 700, color: '#111', fontSize: '1.25rem', marginBottom: '8px' }}>{item.title}</h3>
      <p style={{ color: '#9ca3af', fontSize: '13.5px', lineHeight: 1.7 }}>{item.desc}</p>
    </div>
  );
}
