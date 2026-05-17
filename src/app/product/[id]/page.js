'use client';

import { use, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import Link from 'next/link';
import products from '@/data/products.json';
import { CONTACT_CONFIG } from '@/config/contact';

const GOLD = '#d4af37';
const GOLD_GRAD = 'linear-gradient(135deg, #b8962e 0%, #d4af37 50%, #b8962e 100%)';

export default function ProductDetail({ params }) {
  const { id } = use(params);
  const productId = parseInt(id);
  const product = products.find((p) => p.id === productId);
  const [waHover, setWaHover] = useState(false);
  const [callHover, setCallHover] = useState(false);

  if (!product) {
    return (
      <>
        <Navbar />
        <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem', textAlign: 'center' }}>
          <div style={{ width: '64px', height: '64px', background: '#fef2f2', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
            <svg style={{ width: '32px', height: '32px', color: '#ef4444' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontWeight: 700, color: '#111', fontSize: '1.5rem', marginBottom: '12px' }}>Product Not Found</h2>
          <p style={{ color: '#9ca3af', marginBottom: '1.5rem' }}>This item may no longer be available.</p>
          <Link href="/collections" style={{ display: 'inline-block', background: GOLD_GRAD, color: '#050c18', padding: '12px 32px', fontSize: '13px', fontWeight: 700, textDecoration: 'none', letterSpacing: '0.05em' }}>
            Browse Collections
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  const relatedProducts = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3);

  return (
    <>
      <Navbar />

      {/* ─── BREADCRUMB ───────────────────────────────────────── */}
      <div style={{ background: '#fafaf8', borderBottom: '1px solid #f3f4f6' }}>
        <div className="sc" style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>
          <nav style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#9ca3af' }}>
            <Link href="/" style={{ color: '#9ca3af', textDecoration: 'none', transition: 'color 0.2s' }}>Home</Link>
            <svg style={{ width: '12px', height: '12px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/collections" style={{ color: '#9ca3af', textDecoration: 'none' }}>Collections</Link>
            <svg style={{ width: '12px', height: '12px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span style={{ color: '#111', fontWeight: 500 }}>{product.name}</span>
          </nav>
        </div>
      </div>

      {/* ─── PRODUCT DETAIL ───────────────────────────────────── */}
      <section style={{ background: '#fff', paddingTop: '3.5rem', paddingBottom: '4rem' }}>
        <div className="sc">
          <div className="pd-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem' }}>

            {/* Image */}
            <div style={{ position: 'relative', overflow: 'hidden', height: '480px', background: '#f9f5ee' }}>
              <img
                src={product.image}
                alt={product.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 55%)', pointerEvents: 'none' }} />
              <span style={{ position: 'absolute', top: '16px', left: '16px', background: 'rgba(0,0,0,0.55)', color: '#fff', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600, padding: '6px 12px', backdropFilter: 'blur(4px)' }}>
                {product.category}
              </span>
              {product.weight && (
                <span style={{ position: 'absolute', top: '16px', right: '16px', background: GOLD_GRAD, color: '#050c18', fontSize: '11px', fontWeight: 700, padding: '6px 12px' }}>
                  {product.weight}
                </span>
              )}
            </div>

            {/* Info */}
            <div>
              {/* Category badge */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
                <div style={{ width: '20px', height: '1px', background: GOLD }} />
                <span style={{ color: GOLD, fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 600 }}>{product.category}</span>
              </div>

              <h1 style={{ fontFamily: 'var(--font-playfair)', fontWeight: 700, color: '#111', fontSize: 'clamp(1.75rem, 4vw, 3rem)', lineHeight: 1.15, marginBottom: '1rem' }}>
                {product.name}
              </h1>

              <p style={{ fontFamily: 'var(--font-playfair)', fontWeight: 700, color: GOLD, fontSize: '2.25rem', marginBottom: '1.5rem', lineHeight: 1 }}>
                {product.price}
              </p>

              <p style={{ color: '#6b7280', lineHeight: 1.8, marginBottom: '2rem', fontSize: '15px' }}>{product.description}</p>

              {/* Specs */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
                {[
                  { label: 'Material', value: product.material },
                  { label: 'Weight', value: product.weight },
                ].map((spec) => spec.value && (
                  <div key={spec.label} style={{ background: '#fafaf8', padding: '1rem', border: '1px solid #f3f4f6' }}>
                    <p style={{ color: '#9ca3af', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 700, marginBottom: '6px' }}>{spec.label}</p>
                    <p style={{ fontWeight: 600, color: '#111', fontSize: '14px' }}>{spec.value}</p>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div style={{ borderTop: '1px solid #f3f4f6', marginBottom: '1.75rem' }} />

              {/* CTA Buttons */}
              <div className="pd-btns" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.75rem' }}>
                <a
                  href={`https://wa.me/${CONTACT_CONFIG.whatsappNumber}?text=${encodeURIComponent(CONTACT_CONFIG.whatsappMessages.product(product.name, product.price))}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', background: waHover ? 'linear-gradient(135deg, #a07820 0%, #c9a332 50%, #a07820 100%)' : GOLD_GRAD, color: '#050c18', padding: '16px 24px', fontSize: '14px', fontWeight: 700, letterSpacing: '0.04em', textDecoration: 'none', transition: 'opacity 0.2s' }}
                  onMouseEnter={() => setWaHover(true)}
                  onMouseLeave={() => setWaHover(false)}
                >
                  <svg style={{ width: '20px', height: '20px', flexShrink: 0 }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Enquire on WhatsApp
                </a>
                <a
                  href={`tel:${CONTACT_CONFIG.phoneNumber}`}
                  style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', border: `2px solid ${callHover ? GOLD : '#e5e7eb'}`, color: callHover ? GOLD : '#4b5563', background: '#fff', padding: '14px 24px', fontSize: '14px', fontWeight: 700, letterSpacing: '0.04em', textDecoration: 'none', transition: 'all 0.2s' }}
                  onMouseEnter={() => setCallHover(true)}
                  onMouseLeave={() => setCallHover(false)}
                >
                  <svg style={{ width: '18px', height: '18px', flexShrink: 0 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call to Order
                </a>
              </div>

              {/* Trust badges */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {['100% Authentic Gold', 'Hallmark Certified', 'Free Consultation'].map((badge) => (
                  <span key={badge} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#6b7280', background: '#fafaf8', border: '1px solid #f0ebe0', padding: '6px 12px' }}>
                    <svg style={{ width: '13px', height: '13px', color: GOLD, flexShrink: 0 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── RELATED PRODUCTS ─────────────────────────────────── */}
      {relatedProducts.length > 0 && (
        <section style={{ background: '#fafaf8', paddingTop: '4rem', paddingBottom: '4rem' }}>
          <div className="sc">
            <div style={{ marginBottom: '2.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                <div style={{ width: '20px', height: '1px', background: GOLD }} />
                <span style={{ color: GOLD, fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase' }}>You May Also Like</span>
              </div>
              <h2 style={{ fontFamily: 'var(--font-playfair)', fontWeight: 700, color: '#111', fontSize: '1.875rem' }}>Similar Products</h2>
            </div>
            <div className="related-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
              {relatedProducts.map((rp) => (
                <RelatedCard key={rp.id} product={rp} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
      <WhatsAppButton />

      <style>{`
        @media (min-width: 1024px) {
          .pd-grid { grid-template-columns: 1fr 1fr !important; gap: 4rem !important; }
        }
        @media (min-width: 640px) {
          .pd-btns { flex-direction: row !important; }
          .related-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
      `}</style>
    </>
  );
}

function RelatedCard({ product }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      href={`/product/${product.id}`}
      style={{ display: 'block', textDecoration: 'none', background: '#fff', border: `1px solid ${hovered ? '#d4af37' : '#f0ebe0'}`, overflow: 'hidden', transform: hovered ? 'translateY(-6px)' : 'translateY(0)', boxShadow: hovered ? '0 16px 40px rgba(0,0,0,0.1)' : 'none', transition: 'transform 0.4s ease, box-shadow 0.4s ease, border-color 0.3s ease' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ height: '176px', overflow: 'hidden', position: 'relative' }}>
        <img
          src={product.image}
          alt={product.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover', transform: hovered ? 'scale(1.08)' : 'scale(1)', transition: 'transform 0.6s ease', display: 'block' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 55%)', pointerEvents: 'none' }} />
        <span style={{ position: 'absolute', top: '8px', left: '8px', background: 'rgba(0,0,0,0.55)', color: '#fff', fontSize: '9px', letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 600, padding: '4px 10px', backdropFilter: 'blur(4px)' }}>
          {product.category}
        </span>
      </div>
      <div style={{ padding: '1.25rem' }}>
        <h3 style={{ fontFamily: 'var(--font-playfair)', fontWeight: 700, color: '#111', fontSize: '1.1rem', marginBottom: '6px' }}>{product.name}</h3>
        <p style={{ fontFamily: 'var(--font-playfair)', fontWeight: 700, color: '#d4af37', fontSize: '1.125rem' }}>{product.price}</p>
      </div>
    </Link>
  );
}
