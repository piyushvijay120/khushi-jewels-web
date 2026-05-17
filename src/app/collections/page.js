'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import WhatsAppButton from '@/components/WhatsAppButton';
import Link from 'next/link';
import products from '@/data/products.json';
import { CONTACT_CONFIG } from '@/config/contact';

const GOLD = '#d4af37';
const GOLD_GRAD = 'linear-gradient(135deg, #b8962e 0%, #d4af37 50%, #b8962e 100%)';
const categories = ['All', 'Rings', 'Necklaces', 'Earrings', 'Bangles', 'Bridal Sets'];

function FilterButton({ cat, active, onClick }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onClick={onClick}
      style={{
        padding: '9px 20px',
        fontSize: '12.5px',
        fontWeight: 600,
        border: `1px solid ${active ? GOLD : (hovered ? 'rgba(212,175,55,0.4)' : '#e5e7eb')}`,
        background: active ? GOLD_GRAD : (hovered ? 'rgba(212,175,55,0.05)' : '#fff'),
        color: active ? '#050c18' : (hovered ? GOLD : '#4b5563'),
        cursor: 'pointer',
        transition: 'all 0.2s',
        letterSpacing: '0.03em',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {cat}
    </button>
  );
}

function CollectionsContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [viewAllHover, setViewAllHover] = useState(false);

  useEffect(() => {
    const category = searchParams.get('category') || 'All';
    setSelectedCategory(category);
  }, [searchParams]);

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter((p) => p.category === selectedCategory);

  return (
    <>
      {/* ─── STICKY FILTER BAR ────────────────────────────────── */}
      <div style={{ background: '#fff', paddingTop: '14px', paddingBottom: '14px', position: 'sticky', top: '72px', zIndex: 30, borderBottom: '1px solid #f3f4f6', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
        <div className="sc">
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '8px' }}>
            <span style={{ color: '#9ca3af', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', marginRight: '8px' }}>Filter:</span>
            {categories.map((cat) => (
              <FilterButton
                key={cat}
                cat={cat}
                active={selectedCategory === cat}
                onClick={() => setSelectedCategory(cat)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ─── PRODUCTS GRID ────────────────────────────────────── */}
      <section style={{ background: '#fafaf8', paddingTop: '3.5rem', paddingBottom: '4rem' }}>
        <div className="sc">
          {filteredProducts.length > 0 ? (
            <>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem', flexWrap: 'wrap', gap: '8px' }}>
                <p style={{ color: '#9ca3af', fontSize: '13.5px' }}>
                  Showing{' '}
                  <span style={{ fontWeight: 700, color: '#111' }}>{filteredProducts.length}</span>{' '}
                  {selectedCategory === 'All' ? 'pieces' : selectedCategory}
                </p>
                <span style={{ color: GOLD, fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em' }}>Khushi Jewels</span>
              </div>
              <div style={{ display: 'grid', gap: '1.5rem' }} className="coll-grid">
                {filteredProducts.map((product) => (
                  <Link key={product.id} href={`/product/${product.id}`} style={{ textDecoration: 'none', display: 'flex', height: '100%' }}>
                    <ProductCard product={product} />
                  </Link>
                ))}
              </div>
            </>
          ) : (
            <div style={{ textAlign: 'center', paddingTop: '6rem', paddingBottom: '6rem' }}>
              <div style={{ width: '64px', height: '64px', background: 'rgba(212,175,55,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem' }}>
                <svg style={{ width: '32px', height: '32px', color: GOLD }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 style={{ fontFamily: 'var(--font-playfair)', fontWeight: 700, color: '#111', fontSize: '1.5rem', marginBottom: '8px' }}>No Products Found</h3>
              <p style={{ color: '#9ca3af', marginBottom: '2rem' }}>Let us help you find what you're looking for.</p>
              <button
                onClick={() => setSelectedCategory('All')}
                style={{ background: viewAllHover ? 'linear-gradient(135deg, #a07820 0%, #c9a332 50%, #a07820 100%)' : GOLD_GRAD, color: '#050c18', padding: '14px 32px', fontSize: '13px', fontWeight: 700, letterSpacing: '0.05em', border: 'none', cursor: 'pointer', transition: 'opacity 0.2s' }}
                onMouseEnter={() => setViewAllHover(true)}
                onMouseLeave={() => setViewAllHover(false)}
              >
                View All Products
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default function Collections() {
  const [callHover, setCallHover] = useState(false);

  return (
    <>
      <Navbar />

      {/* ─── PAGE HEADER ──────────────────────────────────────── */}
      <section style={{ paddingTop: '5rem', paddingBottom: '5rem', position: 'relative', overflow: 'hidden', background: 'linear-gradient(135deg, #040c17 0%, #071828 55%, #040c17 100%)' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at bottom left, rgba(212,175,55,0.12), transparent 60%)', pointerEvents: 'none' }} />
        <div className="sc" style={{ position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1.25rem' }}>
            <div style={{ width: '16px', height: '1px', background: GOLD }} />
            <span style={{ color: GOLD, fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase' }}>Our Collections</span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-playfair)', fontWeight: 700, color: '#fff', fontSize: 'clamp(2.5rem, 6vw, 4rem)', lineHeight: 1.12, marginBottom: '1.25rem' }}>
            Discover Exquisite<br />
            <span style={{ color: GOLD }}>Jewellery</span>
          </h1>
          <p style={{ color: '#9ca3af', fontSize: '1.125rem', maxWidth: '32rem', lineHeight: 1.75 }}>
            Handcrafted jewellery for every style, occasion, and milestone.
          </p>
        </div>
      </section>

      <Suspense fallback={
        <div style={{ paddingTop: '5rem', paddingBottom: '5rem', textAlign: 'center', color: '#9ca3af' }}>Loading collections...</div>
      }>
        <CollectionsContent />
      </Suspense>

      {/* ─── CUSTOM DESIGN CTA ────────────────────────────────── */}
      <section style={{ background: '#fff', paddingTop: '5rem', paddingBottom: '5rem' }}>
        <div className="sc">
          <div style={{ padding: 'clamp(2.5rem, 5vw, 4rem)', textAlign: 'center', position: 'relative', overflow: 'hidden', background: 'linear-gradient(135deg, #040c17, #071828)' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(212,175,55,0.1), transparent 70%)', pointerEvents: 'none' }} />
            <div style={{ position: 'relative' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '1.25rem' }}>
                <div style={{ width: '16px', height: '1px', background: GOLD }} />
                <span style={{ color: GOLD, fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase' }}>Custom Jewellery</span>
                <div style={{ width: '16px', height: '1px', background: GOLD }} />
              </div>
              <h2 style={{ fontFamily: 'var(--font-playfair)', fontWeight: 700, color: '#fff', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', lineHeight: 1.2, marginBottom: '1.25rem' }}>
                Can't Find What<br />You're Looking For?
              </h2>
              <p style={{ color: '#9ca3af', fontSize: '1.125rem', marginBottom: '2.5rem', maxWidth: '28rem', margin: '0 auto 2.5rem' }}>
                We create custom jewellery tailored entirely to your design, budget, and occasion.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
                <a
                  href={`tel:${CONTACT_CONFIG.phoneNumber}`}
                  style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', background: callHover ? 'linear-gradient(135deg, #a07820 0%, #c9a332 50%, #a07820 100%)' : GOLD_GRAD, color: '#050c18', padding: '14px 36px', fontSize: '13px', fontWeight: 700, letterSpacing: '0.05em', textDecoration: 'none', transition: 'opacity 0.2s' }}
                  onMouseEnter={() => setCallHover(true)}
                  onMouseLeave={() => setCallHover(false)}
                >
                  <svg style={{ width: '18px', height: '18px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call for Custom Design
                </a>
                <a
                  href={`https://wa.me/${CONTACT_CONFIG.whatsappNumber}?text=${encodeURIComponent('Hi! I am interested in custom jewellery design. Can we discuss?')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', border: '1px solid #374151', color: '#d1d5db', padding: '14px 36px', fontSize: '13px', fontWeight: 700, letterSpacing: '0.05em', textDecoration: 'none', transition: 'all 0.2s' }}
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
