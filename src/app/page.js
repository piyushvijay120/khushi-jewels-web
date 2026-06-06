'use client';

import { useState, useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import WhatsAppButton from '@/components/WhatsAppButton';
import Link from 'next/link';
import products from '@/data/products.json';
import { CONTACT_CONFIG } from '@/config/contact';

const heroSlides = [
  { img: '/images/new-jewellery/IMG-20260605-WA0031.jpg', label: 'Bridal Collections' },
  { img: '/images/new-jewellery/IMG-20260605-WA0022.jpg', label: 'Crystal Necklaces' },
  { img: '/images/new-jewellery/IMG-20260605-WA0017.jpg', label: 'Pearl Ring Collection' },
  { img: '/images/new-jewellery/IMG-20260605-WA0010.jpg', label: 'Premium Bracelets' },
  { img: '/images/new-jewellery/IMG-20260605-WA0033.jpg', label: 'Exclusive Ornaments' },
];

const missionTabs = {
  'Our Mission': [
    'To make certified 22K gold jewellery accessible to every family.',
    'To honour every occasion with handcrafted, authentic pieces.',
    'To uphold the highest standards of purity and artisanship.',
  ],
  'Our Vision': [
    'To be the most trusted jewellery destination in the region.',
    'To blend timeless tradition with elegant contemporary design.',
    'To create heirlooms that outlast generations.',
  ],
  'Our Values': [
    'Full transparency in pricing and gold purity certification.',
    'Respect for every customer\'s trust and investment.',
    'Unwavering passion for craftsmanship, beauty, and quality.',
  ],
};

const steps = [
  { num: '01', title: 'Browse Our Collection', desc: 'Explore rings, necklaces, earrings, bangles, and bridal sets — online or visit our store.' },
  { num: '02', title: 'Contact Our Team', desc: 'Reach us via WhatsApp or call. Our experts guide you to the perfect piece.' },
  { num: '03', title: 'Confirm & Customise', desc: 'Select size, design, and material. We confirm pricing and your delivery timeline.' },
  { num: '04', title: 'Receive Your Jewel', desc: 'Your jewellery arrives with premium packaging and a hallmark authenticity certificate.' },
];

const GOLD = '#d4af37';
const GOLD_GRAD = 'linear-gradient(135deg, #b8962e 0%, #d4af37 50%, #b8962e 100%)';
const NAVY = 'linear-gradient(135deg, #040c17 0%, #071828 55%, #040c17 100%)';
const BEIGE = '#F5EFE6';

export default function Home() {
  const featured = products.slice(0, 4);
  const [tab, setTab] = useState('Our Mission');
  const [heroIdx, setHeroIdx] = useState(0);
  const timerRef = useRef(null);

  const startTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setHeroIdx((i) => (i + 1) % heroSlides.length), 5000);
  };

  const goSlide = (i) => { setHeroIdx((i + heroSlides.length) % heroSlides.length); startTimer(); };

  useEffect(() => { startTimer(); return () => clearInterval(timerRef.current); }, []);

  useEffect(() => {
    let obs;
    // Double rAF ensures layout is settled before we check positions
    const raf = requestAnimationFrame(() => requestAnimationFrame(() => {
      const els = document.querySelectorAll('[data-anim]');
      // Immediately reveal elements already in viewport
      els.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) el.classList.add('in-view');
      });
      obs = new IntersectionObserver(
        (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in-view'); obs.unobserve(e.target); } }),
        { threshold: 0.05, rootMargin: '0px 0px -30px 0px' }
      );
      els.forEach((el) => { if (!el.classList.contains('in-view')) obs.observe(el); });
    }));
    return () => { cancelAnimationFrame(raf); obs?.disconnect(); };
  }, []);

  return (
    <>
      <Navbar />

      {/* ══ HERO ══════════════════════════════════════════════════ */}
      <section style={{ minHeight: '100vh', width: '100%', position: 'relative', overflow: 'hidden', background: '#040c17', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

        {/* Sliding background images */}
        {heroSlides.map((slide, i) => (
          <div key={i} style={{ position: 'absolute', inset: 0, transition: 'opacity 1.2s ease', opacity: i === heroIdx ? 1 : 0 }}>
            <img src={slide.img} alt={slide.label} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.45) saturate(1.15)' }} />
          </div>
        ))}

        {/* Overlays */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(4,12,23,0.5) 0%, rgba(4,12,23,0.15) 40%, rgba(4,12,23,0.15) 60%, rgba(4,12,23,0.75) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(212,175,55,0.06) 1px, transparent 1px)', backgroundSize: '44px 44px' }} />

        {/* Left gold lines */}
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 'clamp(80px,14vw,220px)', overflow: 'hidden', pointerEvents: 'none' }}>
          <div style={{ position: 'absolute', top: '-10%', left: '20%', width: '1.5px', height: '120%', background: 'linear-gradient(to bottom, transparent, #d4af37 25%, #f0d060 50%, #d4af37 75%, transparent)', transform: 'rotate(-22deg)', transformOrigin: 'top left', opacity: 0.65 }} />
          <div style={{ position: 'absolute', top: '-10%', left: '42%', width: '1px', height: '120%', background: 'linear-gradient(to bottom, transparent, #d4af37 30%, #d4af37 70%, transparent)', transform: 'rotate(-22deg)', transformOrigin: 'top left', opacity: 0.3 }} />
        </div>

        {/* Right gold lines */}
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 'clamp(80px,14vw,220px)', overflow: 'hidden', pointerEvents: 'none' }}>
          <div style={{ position: 'absolute', top: '-10%', right: '20%', width: '1.5px', height: '120%', background: 'linear-gradient(to bottom, transparent, #d4af37 25%, #f0d060 50%, #d4af37 75%, transparent)', transform: 'rotate(22deg)', transformOrigin: 'top right', opacity: 0.65 }} />
          <div style={{ position: 'absolute', top: '-10%', right: '42%', width: '1px', height: '120%', background: 'linear-gradient(to bottom, transparent, #d4af37 30%, #d4af37 70%, transparent)', transform: 'rotate(22deg)', transformOrigin: 'top right', opacity: 0.3 }} />
        </div>

        {/* Top & bottom gold hairlines */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(to right, transparent, rgba(212,175,55,0.5), transparent)' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(to right, transparent, rgba(212,175,55,0.3), transparent)' }} />

        {/* Hero content */}
        <div style={{ position: 'relative', zIndex: 10, width: '100%', paddingTop: '8rem', paddingBottom: '8rem', paddingLeft: 'clamp(1.5rem, 6vw, 6rem)', paddingRight: 'clamp(1.5rem, 6vw, 6rem)' }}>
          <div style={{ maxWidth: '52rem', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}>

            {/* Diamond icon */}
            <div className="h-lbl" style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.75rem' }}>
              <div style={{ width: '50px', height: '50px', border: '1.5px solid rgba(212,175,55,0.55)', transform: 'rotate(45deg)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: GOLD, fontSize: '17px', transform: 'rotate(-45deg)', display: 'block', lineHeight: 1 }}>◆</span>
              </div>
            </div>

            {/* Slide label */}
            <div className="h-lbl" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '2.25rem' }}>
              <span style={{ display: 'block', width: '2.5rem', height: '1px', background: `linear-gradient(to right, transparent, ${GOLD})` }} />
              <span style={{ color: GOLD, fontSize: '11px', fontWeight: 600, letterSpacing: '0.42em', textTransform: 'uppercase', minWidth: '14rem', textAlign: 'center' }}>
                {heroSlides[heroIdx].label}
              </span>
              <span style={{ display: 'block', width: '2.5rem', height: '1px', background: `linear-gradient(to left, transparent, ${GOLD})` }} />
            </div>

            <h1 style={{ fontFamily: 'var(--font-playfair)', margin: '0 0 2rem 0' }}>
              <span className="h-ln1" style={{ display: 'block', fontWeight: 700, color: '#fff', fontSize: 'clamp(50px, 9vw, 108px)', lineHeight: 1.0 }}>Timeless</span>
              <span className="h-ln2" style={{ display: 'block', fontWeight: 400, fontStyle: 'italic', color: GOLD, fontSize: 'clamp(50px, 9vw, 108px)', lineHeight: 1.0 }}>Elegance,</span>
              <span className="h-ln3" style={{ display: 'block', fontWeight: 700, color: '#fff', fontSize: 'clamp(26px, 4.5vw, 58px)', lineHeight: 1.18, marginTop: '0.5rem' }}>for Every Occasion</span>
            </h1>

            <p className="h-sub" style={{ color: 'rgba(255,255,255,0.72)', fontSize: 'clamp(15px, 1.3vw, 18px)', lineHeight: 1.8, marginBottom: '2.5rem', maxWidth: '34rem', marginLeft: 'auto', marginRight: 'auto' }}>
              Handcrafted 22K gold jewellery by master artisans. Certified authentic pieces for life's most cherished moments.
            </p>

            <div className="h-cta" style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginBottom: '3.5rem' }}>
              <Link href="/collections" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: GOLD_GRAD, color: '#050c18', padding: '1rem 2.5rem', fontSize: '12px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', textDecoration: 'none' }}>
                Explore Collections
                <svg style={{ width: '1rem', height: '1rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </Link>
              <a href={`https://wa.me/${CONTACT_CONFIG.whatsappNumber}?text=${encodeURIComponent(CONTACT_CONFIG.whatsappMessages.general)}`} target="_blank" rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', border: '1.5px solid rgba(212,175,55,0.5)', color: 'rgba(212,175,55,0.95)', padding: '1rem 2.5rem', fontSize: '12px', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', textDecoration: 'none' }}>
                Chat With Us
              </a>
            </div>

            {/* Stats */}
            <div className="h-stat" style={{ borderTop: '1px solid rgba(212,175,55,0.18)', paddingTop: '2.5rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '3rem' }}>
              {[{ val: '100%', label: 'Authentic Gold' }, { val: '500+', label: 'Happy Families' }, { val: '20+', label: 'Years Crafting' }].map((s) => (
                <div key={s.label} style={{ textAlign: 'center' }}>
                  <p style={{ fontFamily: 'var(--font-playfair)', fontWeight: 700, fontSize: '2.6rem', color: GOLD, margin: 0 }}>{s.val}</p>
                  <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.45)', marginTop: '0.3rem', letterSpacing: '0.12em', textTransform: 'uppercase', margin: 0 }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Slide controls */}
        <div style={{ position: 'absolute', bottom: '2rem', left: 0, right: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', zIndex: 10 }}>
          <button onClick={() => goSlide(heroIdx - 1)} style={{ width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.5)' }}>
            <svg style={{ width: '20px', height: '20px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
          {heroSlides.map((_, i) => (
            <button key={i} onClick={() => goSlide(i)} style={{ width: i === heroIdx ? '24px' : '7px', height: '7px', background: i === heroIdx ? GOLD : 'rgba(255,255,255,0.35)', border: 'none', cursor: 'pointer', borderRadius: i === heroIdx ? '4px' : '50%', transition: 'all 0.35s ease', padding: 0 }} />
          ))}
          <button onClick={() => goSlide(heroIdx + 1)} style={{ width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.5)' }}>
            <svg style={{ width: '20px', height: '20px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </section>

      {/* ══ MARQUEE TICKER ═══════════════════════════════════════ */}
      <div style={{ background: GOLD_GRAD, padding: '13px 0', overflow: 'hidden', position: 'relative' }}>
        <div className="marquee-track">
          {[...Array(2)].map((_, gi) => (
            <div key={gi} style={{ display: 'flex', alignItems: 'center', gap: '0' }}>
              {['Feel Powerful in Gold', 'Hallmark Certified', 'Premium 22K Gold', 'Free Consultation', 'Handcrafted Artisan Pieces', 'Authentic & Certified', 'Bridal Collections Available', 'Custom Designs Welcome'].map((text, i) => (
                <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '1.5rem', paddingLeft: '2.5rem', paddingRight: '2.5rem', fontSize: '11.5px', fontWeight: 700, color: '#050c18', letterSpacing: '0.18em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
                  {text}
                  <span style={{ color: 'rgba(5,12,24,0.35)', fontSize: '8px' }}>◆</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ══ CATEGORY STRIP ════════════════════════════════════════ */}
      <section style={{ background: '#fff', borderTop: '1px solid #f3f4f6', borderBottom: '1px solid #f3f4f6' }}>
        <div data-anim style={{ maxWidth: '80rem', marginLeft: 'auto', marginRight: 'auto', paddingLeft: 'clamp(1.25rem, 4vw, 3rem)', paddingRight: 'clamp(1.25rem, 4vw, 3rem)', paddingTop: '1.25rem', paddingBottom: '1.25rem', display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
          {['Rings', 'Necklaces', 'Earrings', 'Bangles', 'Bridal Sets'].map((cat) => (
            <Link key={cat} href={`/collections?category=${cat}`} style={{ display: 'inline-block', padding: '10px 28px', border: '1px solid #e5e7eb', color: '#4b5563', fontSize: '14px', fontWeight: 500, textDecoration: 'none', transition: 'all 0.2s' }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = GOLD; e.currentTarget.style.color = '#b8962e'; e.currentTarget.style.background = '#fffdf0'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#e5e7eb'; e.currentTarget.style.color = '#4b5563'; e.currentTarget.style.background = 'transparent'; }}>
              {cat}
            </Link>
          ))}
        </div>
      </section>

      {/* ══ COLLECTION CARDS ══════════════════════════════════════ */}
      <section style={{ background: BEIGE, paddingTop: '5rem', paddingBottom: '5rem', width: '100%' }}>
        <div style={{ maxWidth: '80rem', marginLeft: 'auto', marginRight: 'auto', paddingLeft: 'clamp(1.25rem, 4vw, 3rem)', paddingRight: 'clamp(1.25rem, 4vw, 3rem)' }}>

          <div data-anim style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <span style={{ display: 'block', width: '2rem', height: '1px', background: GOLD }} />
              <span style={{ color: GOLD, fontWeight: 600, fontSize: '11px', letterSpacing: '0.35em', textTransform: 'uppercase' }}>Collections</span>
              <span style={{ display: 'block', width: '2rem', height: '1px', background: GOLD }} />
            </div>
            <h2 style={{ fontFamily: 'var(--font-playfair)', fontWeight: 700, color: '#111', fontSize: 'clamp(26px, 3.5vw, 50px)', margin: 0 }}>The Collections You've Been Waiting For</h2>
          </div>

          {/* Big cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
            {[
              { label: 'Bridal Collections', href: '/collections?category=Bridal Sets', desc: 'Complete your special day with our exquisite bridal jewellery sets.', img: '/images/new-jewellery/IMG-20260605-WA0031.jpg' },
              { label: 'Crystal Necklaces', href: '/collections?category=Necklaces', desc: 'Handcrafted crystal bead chokers and silver necklaces for every occasion.', img: '/images/new-jewellery/IMG-20260605-WA0034.jpg' },
            ].map((card, i) => (
              <div data-anim data-anim-d={String(i + 1)} key={card.label}>
                <Link href={card.href} style={{ display: 'block', textDecoration: 'none' }}>
                  <div style={{ position: 'relative', overflow: 'hidden', height: 'clamp(260px, 30vw, 440px)' }}
                    onMouseEnter={(e) => { e.currentTarget.querySelector('img').style.transform = 'scale(1.08)'; e.currentTarget.querySelector('.card-bar').style.width = '5rem'; }}
                    onMouseLeave={(e) => { e.currentTarget.querySelector('img').style.transform = 'scale(1)'; e.currentTarget.querySelector('.card-bar').style.width = '3rem'; }}>
                    <img src={card.img} alt={card.label} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.7s ease' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(3,8,18,0.92) 0%, rgba(3,8,18,0.3) 55%, rgba(3,8,18,0.05) 100%)' }} />
                    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '2.25rem' }}>
                      <p style={{ color: GOLD, fontSize: '10px', fontWeight: 600, letterSpacing: '0.35em', textTransform: 'uppercase', marginBottom: '0.6rem', margin: '0 0 0.6rem 0' }}>Khushi Jewels</p>
                      <h3 style={{ fontFamily: 'var(--font-playfair)', fontWeight: 700, color: '#fff', fontSize: 'clamp(20px, 2.2vw, 32px)', margin: '0 0 1rem 0' }}>{card.label}</h3>
                      <div className="card-bar" style={{ height: '2px', background: GOLD, width: '3rem', marginBottom: '1rem', transition: 'width 0.5s ease' }} />
                      <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '14px', margin: 0, lineHeight: 1.6 }}>{card.desc}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Small cards */}
          <div style={{ display: 'grid', gap: '1.5rem' }} className="small-cat-grid">
            {[
              { label: 'Rings', href: '/collections?category=Rings', img: '/images/new-jewellery/IMG-20260605-WA0017.jpg' },
              { label: 'Silver Jewellery', href: '/collections?category=Bangles', img: '/images/new-jewellery/IMG-20260605-WA0006.jpg' },
              { label: 'Bangles', href: '/collections?category=Bangles', img: '/images/new-jewellery/IMG-20260605-WA0010.jpg' },
            ].map((cat, i) => (
              <div data-anim data-anim-d={String(i + 1)} key={cat.label}>
                <Link href={cat.href} style={{ display: 'block', textDecoration: 'none' }}>
                  <div style={{ position: 'relative', overflow: 'hidden', height: 'clamp(160px, 18vw, 260px)' }}
                    onMouseEnter={(e) => { e.currentTarget.querySelector('img').style.transform = 'scale(1.08)'; e.currentTarget.querySelector('.sm-bar').style.width = '3rem'; }}
                    onMouseLeave={(e) => { e.currentTarget.querySelector('img').style.transform = 'scale(1)'; e.currentTarget.querySelector('.sm-bar').style.width = '2rem'; }}>
                    <img src={cat.img} alt={cat.label} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.7s ease' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(3,8,18,0.9) 0%, rgba(3,8,18,0.2) 55%, transparent 100%)' }} />
                    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1.5rem' }}>
                      <h3 style={{ fontFamily: 'var(--font-playfair)', fontWeight: 700, color: '#fff', fontSize: '1.5rem', margin: '0 0 0.5rem 0' }}>{cat.label}</h3>
                      <div className="sm-bar" style={{ height: '2px', background: GOLD, width: '2rem', transition: 'width 0.5s ease' }} />
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          <div data-anim style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link href="/collections" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#b8962e', fontSize: '14px', fontWeight: 600, textDecoration: 'none', transition: 'gap 0.2s' }}>
              View All Collections
              <svg style={{ width: '16px', height: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ══ ABOUT ═════════════════════════════════════════════════ */}
      <section style={{ background: '#fff', paddingTop: '5rem', paddingBottom: '5rem', width: '100%' }}>
        <div style={{ maxWidth: '80rem', marginLeft: 'auto', marginRight: 'auto', paddingLeft: 'clamp(1.25rem, 4vw, 3rem)', paddingRight: 'clamp(1.25rem, 4vw, 3rem)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'start' }}>

            {/* Left — image collage */}
            <div data-anim>
              <div style={{ display: 'grid', gap: '12px' }} className="collage-grid">
                <div style={{ overflow: 'hidden', height: '17rem' }}>
                  <img src="/images/new-jewellery/IMG-20260605-WA0033.jpg" alt="Jewellery craftsmanship" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }} />
                </div>
                <div style={{ overflow: 'hidden', height: '17rem', marginTop: '2.5rem' }}>
                  <img src="/images/new-jewellery/IMG-20260605-WA0018.jpg" alt="Silver pearl rings collection" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }} />
                </div>
              </div>
              {/* Stats bar */}
              <div style={{ marginTop: '12px', padding: '1.75rem 2rem', background: NAVY, display: 'grid', gap: '1rem', textAlign: 'center' }} className="about-stats-grid">
                {[{ val: '20+', label: 'Years' }, { val: '500+', label: 'Customers' }, { val: '22K', label: 'Certified' }, { val: '50+', label: 'Designs' }].map((s) => (
                  <div key={s.label}>
                    <p style={{ fontFamily: 'var(--font-playfair)', fontWeight: 700, fontSize: '1.6rem', color: GOLD, margin: 0 }}>{s.val}</p>
                    <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '11px', margin: '4px 0 0 0', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — content */}
            <div data-anim data-anim-d="2" style={{ paddingTop: '0.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1rem' }}>
                <span style={{ display: 'block', width: '1.5rem', height: '1px', background: GOLD }} />
                <span style={{ color: GOLD, fontWeight: 600, fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase' }}>Our Story</span>
              </div>
              <h2 style={{ fontFamily: 'var(--font-playfair)', fontWeight: 700, color: '#111', fontSize: 'clamp(26px, 3.2vw, 44px)', lineHeight: 1.2, margin: '0 0 2rem 0' }}>
                Crafting Excellence<br />for Every Occasion
              </h2>

              {/* Tabs */}
              <div style={{ display: 'flex', borderBottom: '1px solid #e5e7eb', marginBottom: '1.75rem', gap: '0' }}>
                {Object.keys(missionTabs).map((t) => (
                  <button key={t} onClick={() => setTab(t)} style={{ padding: '14px 20px', fontSize: '13px', fontWeight: 600, cursor: 'pointer', background: 'none', border: 'none', borderBottom: tab === t ? `2px solid ${GOLD}` : '2px solid transparent', marginBottom: '-1px', color: tab === t ? '#b8962e' : '#9ca3af', transition: 'all 0.2s', whiteSpace: 'nowrap' }}>
                    {t}
                  </button>
                ))}
              </div>

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2.25rem 0', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {missionTabs[tab].map((pt, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', color: '#4b5563', fontSize: '15px', lineHeight: 1.65 }}>
                    <svg style={{ width: '20px', height: '20px', color: GOLD, flexShrink: 0, marginTop: '2px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {pt}
                  </li>
                ))}
              </ul>

              <Link href="/about" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: GOLD_GRAD, color: '#050c18', padding: '14px 32px', fontSize: '13px', fontWeight: 700, letterSpacing: '0.06em', textDecoration: 'none' }}>
                Our Full Story
                <svg style={{ width: '16px', height: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══ STEPS ═════════════════════════════════════════════════ */}
      <section style={{ background: BEIGE, paddingTop: '5rem', paddingBottom: '5rem', width: '100%' }}>
        <div style={{ maxWidth: '80rem', marginLeft: 'auto', marginRight: 'auto', paddingLeft: 'clamp(1.25rem, 4vw, 3rem)', paddingRight: 'clamp(1.25rem, 4vw, 3rem)' }}>

          <div data-anim style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <span style={{ display: 'block', width: '2rem', height: '1px', background: GOLD }} />
              <span style={{ color: GOLD, fontWeight: 600, fontSize: '11px', letterSpacing: '0.35em', textTransform: 'uppercase' }}>How It Works</span>
              <span style={{ display: 'block', width: '2rem', height: '1px', background: GOLD }} />
            </div>
            <h2 style={{ fontFamily: 'var(--font-playfair)', fontWeight: 700, color: '#111', fontSize: 'clamp(26px, 3.5vw, 48px)', margin: 0 }}>Simple Steps. Perfect Jewel.</h2>
          </div>

          <div style={{ display: 'grid', gap: '1.5rem', marginBottom: '2rem' }} className="steps-grid">
            {steps.map((step, i) => (
              <div data-anim data-anim-d={String(i + 1)} key={i}
                style={{ transition: 'transform 0.4s ease' }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.querySelector('.step-top').style.width = '100%'; e.currentTarget.querySelector('.step-num').style.background = GOLD; e.currentTarget.querySelector('.step-num').style.color = '#050c18'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.querySelector('.step-top').style.width = '0%'; e.currentTarget.querySelector('.step-num').style.background = '#fffdf0'; e.currentTarget.querySelector('.step-num').style.color = '#b8962e'; }}>
                <div style={{ background: '#fff', height: '100%', border: '1px solid #e9e3d8', overflow: 'hidden', transition: 'border-color 0.3s, box-shadow 0.3s' }}>
                  <div className="step-top" style={{ height: '3px', background: GOLD, width: '0%', transition: 'width 0.5s ease' }} />
                  <div style={{ padding: '2rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                      <div className="step-num" style={{ width: '56px', height: '56px', border: `2px solid ${GOLD}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-playfair)', fontWeight: 700, fontSize: '1.25rem', flexShrink: 0, background: '#fffdf0', color: '#b8962e', transition: 'all 0.3s' }}>
                        {step.num}
                      </div>
                      {i < 3 && <div style={{ flex: 1, height: '1px', background: '#e5e7eb' }} />}
                    </div>
                    <h3 style={{ fontFamily: 'var(--font-playfair)', fontWeight: 700, color: '#111', fontSize: '1.1rem', margin: '0 0 0.75rem 0', lineHeight: 1.3 }}>{step.title}</h3>
                    <p style={{ color: '#6b7280', fontSize: '14px', lineHeight: 1.7, margin: 0 }}>{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Steps CTA bar */}
          <div style={{ background: GOLD_GRAD, padding: '1.75rem 2rem', display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center', justifyContent: 'space-between', marginTop: '0' }}>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontFamily: 'var(--font-playfair)', fontWeight: 700, fontSize: '1.4rem', color: '#050c18', margin: '0 0 0.25rem 0' }}>Ready to own your perfect jewel?</p>
              <p style={{ fontSize: '14px', color: 'rgba(5,12,24,0.7)', margin: 0 }}>Get in touch — our experts will guide you step by step.</p>
            </div>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <a href={`tel:${CONTACT_CONFIG.phoneNumber}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#fff', color: '#050c18', padding: '12px 32px', fontSize: '14px', fontWeight: 600, textDecoration: 'none', whiteSpace: 'nowrap' }}>
                <svg style={{ width: '16px', height: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                Call Us
              </a>
              <a href={`https://wa.me/${CONTACT_CONFIG.whatsappNumber}`} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', border: '1.5px solid rgba(5,12,24,0.3)', color: '#050c18', padding: '12px 32px', fontSize: '14px', fontWeight: 600, textDecoration: 'none', whiteSpace: 'nowrap' }}>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══ FEATURED PRODUCTS ═════════════════════════════════════ */}
      <section style={{ background: '#fff', paddingTop: '5rem', paddingBottom: '5rem', width: '100%' }}>
        <div style={{ maxWidth: '80rem', marginLeft: 'auto', marginRight: 'auto', paddingLeft: 'clamp(1.25rem, 4vw, 3rem)', paddingRight: 'clamp(1.25rem, 4vw, 3rem)' }}>

          <div data-anim style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '1.25rem', marginBottom: '3rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '0.75rem' }}>
                <span style={{ display: 'block', width: '1.5rem', height: '1px', background: GOLD }} />
                <span style={{ color: GOLD, fontWeight: 600, fontSize: '11px', letterSpacing: '0.35em', textTransform: 'uppercase' }}>Featured Collection</span>
                <span style={{ display: 'block', width: '1.5rem', height: '1px', background: GOLD }} />
              </div>
              <h2 style={{ fontFamily: 'var(--font-playfair)', fontWeight: 700, color: '#111', fontSize: 'clamp(26px, 3.5vw, 46px)', margin: 0 }}>Our Best Sellers</h2>
            </div>
            <Link href="/collections" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#b8962e', fontSize: '14px', fontWeight: 600, textDecoration: 'none', flexShrink: 0 }}>
              View All Collections
              <svg style={{ width: '16px', height: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </Link>
          </div>

          <div style={{ display: 'grid', gap: '1.25rem' }} className="product-grid">
            {featured.map((product, i) => (
              <div data-anim data-anim-d={String(i + 1)} key={product.id}>
                <Link href={`/product/${product.id}`} style={{ display: 'flex', textDecoration: 'none', height: '100%' }}>
                  <ProductCard product={product} />
                </Link>
              </div>
            ))}
          </div>
          <style>{`
            .product-grid { grid-template-columns: repeat(4, 1fr); }
            @media (max-width: 1024px) { .product-grid { grid-template-columns: repeat(3, 1fr); } }
            @media (max-width: 640px)  { .product-grid { grid-template-columns: repeat(2, 1fr); } }
          `}</style>
        </div>
      </section>

      {/* ══ VIDEO SHOWCASE ════════════════════════════════════════ */}
      <section style={{ background: '#040c17', paddingTop: '5rem', paddingBottom: '5rem', width: '100%', overflow: 'hidden' }}>
        <div style={{ maxWidth: '80rem', marginLeft: 'auto', marginRight: 'auto', paddingLeft: 'clamp(1.25rem, 4vw, 3rem)', paddingRight: 'clamp(1.25rem, 4vw, 3rem)' }}>
          <div data-anim style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <span style={{ display: 'block', width: '2rem', height: '1px', background: GOLD }} />
              <span style={{ color: GOLD, fontWeight: 600, fontSize: '11px', letterSpacing: '0.35em', textTransform: 'uppercase' }}>From Our Store</span>
              <span style={{ display: 'block', width: '2rem', height: '1px', background: GOLD }} />
            </div>
            <h2 style={{ fontFamily: 'var(--font-playfair)', fontWeight: 700, color: '#fff', fontSize: 'clamp(26px, 3.5vw, 46px)', margin: 0 }}>Khushi Jewels in Motion</h2>
          </div>
          <div data-anim style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'relative', width: '100%', maxWidth: '420px', borderRadius: '4px', overflow: 'hidden', boxShadow: '0 24px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(212,175,55,0.2)' }}>
              <video
                src="/images/new-jewellery/VID-20260605-WA0019.mp4"
                autoPlay
                muted
                loop
                playsInline
                style={{ width: '100%', display: 'block', objectFit: 'cover' }}
              />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1.5rem', background: 'linear-gradient(to top, rgba(4,12,23,0.9), transparent)' }}>
                <p style={{ color: GOLD, fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', margin: '0 0 4px 0' }}>Khushi Jewels</p>
                <p style={{ color: '#fff', fontSize: '14px', margin: 0 }}>Exclusive silver &amp; crystal collection — Jaipur</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIALS ══════════════════════════════════════════ */}
      <section style={{ background: BEIGE, paddingTop: '5rem', paddingBottom: '5rem', width: '100%' }}>
        <div style={{ maxWidth: '80rem', marginLeft: 'auto', marginRight: 'auto', paddingLeft: 'clamp(1.25rem, 4vw, 3rem)', paddingRight: 'clamp(1.25rem, 4vw, 3rem)' }}>

          <div data-anim style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <span style={{ display: 'block', width: '2rem', height: '1px', background: GOLD }} />
              <span style={{ color: GOLD, fontWeight: 600, fontSize: '11px', letterSpacing: '0.35em', textTransform: 'uppercase' }}>Testimonials</span>
              <span style={{ display: 'block', width: '2rem', height: '1px', background: GOLD }} />
            </div>
            <h2 style={{ fontFamily: 'var(--font-playfair)', fontWeight: 700, color: '#111', fontSize: 'clamp(26px, 3.5vw, 48px)', margin: 0 }}>What Our Customers Say</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.75rem' }}>
            {[
              { name: 'Priya Sharma', role: 'Bride, 2024', review: 'The bridal set was beyond beautiful. Every guest complimented the craftsmanship. I couldn\'t be happier with Khushi Jewels.' },
              { name: 'Anjali Patel', role: 'Regular Customer', review: 'Perfect service from browse to delivery. The necklace arrived exactly as shown — pure, certified, and stunning.' },
              { name: 'Rahul Desai', role: 'Gift Buyer', review: 'Bought earrings as an anniversary gift. The quality and packaging were exceptional. Will definitely return.' },
            ].map((r, i) => (
              <div data-anim data-anim-d={String(i + 1)} key={i}
                style={{ background: '#fff', border: '1px solid rgba(212,175,55,0.18)', position: 'relative', overflow: 'hidden', transition: 'transform 0.4s ease, box-shadow 0.4s ease' }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.09)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
                {/* Gold left accent */}
                <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '4px', background: GOLD_GRAD }} />
                {/* Glow */}
                <div style={{ position: 'absolute', top: 0, right: 0, width: '6rem', height: '6rem', background: 'radial-gradient(circle at top right, rgba(212,175,55,0.07), transparent 70%)', pointerEvents: 'none' }} />
                {/* Content — ALL inline styles for guaranteed padding */}
                <div style={{ paddingTop: '2rem', paddingRight: '2rem', paddingBottom: '2rem', paddingLeft: '2.25rem' }}>
                  <div style={{ fontFamily: 'var(--font-playfair)', fontWeight: 700, fontSize: '4.5rem', color: 'rgba(212,175,55,0.18)', lineHeight: 1, marginBottom: '0.75rem', userSelect: 'none' }}>"</div>
                  <p style={{ color: '#374151', fontSize: '15px', lineHeight: 1.75, marginBottom: '1.5rem', margin: '0 0 1.5rem 0' }}>{r.review}</p>
                  <div style={{ display: 'flex', gap: '3px', marginBottom: '1.25rem' }}>
                    {[...Array(5)].map((_, si) => (
                      <svg key={si} style={{ width: '16px', height: '16px' }} fill={GOLD} viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingTop: '1.25rem', borderTop: '1px solid #f3f4f6' }}>
                    <div style={{ width: '40px', height: '40px', background: GOLD_GRAD, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontFamily: 'var(--font-playfair)', fontWeight: 700, fontSize: '14px', color: '#050c18' }}>
                      {r.name[0]}
                    </div>
                    <div>
                      <p style={{ fontWeight: 600, color: '#111', fontSize: '14px', margin: 0 }}>{r.name}</p>
                      <p style={{ color: '#9ca3af', fontSize: '12px', margin: '2px 0 0 0' }}>{r.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TRUST BADGES ═════════════════════════════════════════ */}
      <section style={{ background: '#fff', borderTop: '1px solid #f3f4f6', borderBottom: '1px solid #f3f4f6' }}>
        <div style={{ display: 'grid' }} className="trust-grid">
          {[
            { icon: '◆', title: '100% Authentic Gold', desc: 'Hallmark certified with purity guarantee' },
            { icon: '◈', title: 'Free Consultation', desc: 'Expert guidance on every purchase' },
            { icon: '◉', title: 'Premium Packaging', desc: 'Luxury gift box on every order' },
            { icon: '◎', title: 'Lifetime Support', desc: 'Cleaning, repair & buyback service' },
          ].map((badge, i) => (
            <div key={i} style={{ padding: '1.75rem', borderRight: i < 3 ? '1px solid #f3f4f6' : 'none', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '44px', height: '44px', background: 'rgba(212,175,55,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: GOLD, fontSize: '18px', flexShrink: 0 }}>
                {badge.icon}
              </div>
              <div>
                <p style={{ fontWeight: 700, color: '#111', fontSize: '13px', marginBottom: '3px' }}>{badge.title}</p>
                <p style={{ color: '#9ca3af', fontSize: '12px', lineHeight: 1.5 }}>{badge.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <style>{`
          .trust-grid { grid-template-columns: repeat(4, 1fr); }
          @media (max-width: 768px) { .trust-grid { grid-template-columns: 1fr 1fr; } }
          @media (max-width: 480px) { .trust-grid { grid-template-columns: 1fr; } }
          .steps-grid { grid-template-columns: repeat(4, 1fr); }
          @media (max-width: 900px) { .steps-grid { grid-template-columns: repeat(2, 1fr); } }
          @media (max-width: 480px) { .steps-grid { grid-template-columns: 1fr; } }
        `}</style>
      </section>

      {/* ══ DARK CTA ══════════════════════════════════════════════ */}
      <section style={{ background: 'linear-gradient(135deg, #0b0b0b 0%, #1a1108 40%, #0b0b0b 100%)', paddingTop: '6rem', paddingBottom: '6rem', textAlign: 'center', position: 'relative', overflow: 'hidden', width: '100%' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(212,175,55,0.08) 1px, transparent 1px)', backgroundSize: '36px 36px', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(212,175,55,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(to right, transparent, rgba(212,175,55,0.5), transparent)' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(to right, transparent, rgba(212,175,55,0.3), transparent)' }} />

        <div data-anim style={{ maxWidth: '40rem', marginLeft: 'auto', marginRight: 'auto', paddingLeft: 'clamp(1.25rem, 5vw, 3rem)', paddingRight: 'clamp(1.25rem, 5vw, 3rem)', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <span style={{ display: 'block', width: '2rem', height: '1px', background: `linear-gradient(to right, transparent, ${GOLD})` }} />
            <span style={{ color: GOLD, fontSize: '11px', fontWeight: 600, letterSpacing: '0.38em', textTransform: 'uppercase' }}>Get In Touch</span>
            <span style={{ display: 'block', width: '2rem', height: '1px', background: `linear-gradient(to left, transparent, ${GOLD})` }} />
          </div>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontWeight: 700, color: '#fff', fontSize: 'clamp(30px, 4.5vw, 60px)', lineHeight: 1.1, margin: '0 0 1.25rem 0' }}>
            Ready to Find Your<br /><span style={{ color: GOLD }}>Perfect Jewel?</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '16px', lineHeight: 1.75, marginBottom: '2.5rem' }}>
            Our experts are here to help you find or create the perfect piece for your most special moments.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            <a href={`tel:${CONTACT_CONFIG.phoneNumber}`} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', background: GOLD_GRAD, color: '#050c18', padding: '1rem 2.5rem', fontSize: '12px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', textDecoration: 'none' }}>
              <svg style={{ width: '16px', height: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              Call Us Now
            </a>
            <a href={`https://wa.me/${CONTACT_CONFIG.whatsappNumber}?text=${encodeURIComponent(CONTACT_CONFIG.whatsappMessages.general)}`} target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', border: '1.5px solid rgba(212,175,55,0.45)', color: 'rgba(212,175,55,0.9)', padding: '1rem 2.5rem', fontSize: '12px', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', textDecoration: 'none' }}>
              WhatsApp Chat
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
