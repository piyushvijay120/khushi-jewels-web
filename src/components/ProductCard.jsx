'use client';

import { CONTACT_CONFIG } from '@/config/contact';

const GOLD = '#d4af37';
const GOLD_GRAD = 'linear-gradient(135deg, #b8962e 0%, #d4af37 50%, #b8962e 100%)';

export default function ProductCard({ product }) {
  const handleWhatsAppClick = (e) => {
    e.preventDefault();
    const message = `Hi! I'm interested in the ${product.name} (${product.price}). Can you provide more details?`;
    window.open(`https://wa.me/${CONTACT_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div
      style={{ background: '#fff', border: '1px solid #f0ebe0', display: 'flex', flexDirection: 'column', overflow: 'hidden', height: '100%', transition: 'transform 0.4s ease, box-shadow 0.4s ease, border-color 0.3s ease' }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.1)'; e.currentTarget.style.borderColor = GOLD; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = '#f0ebe0'; }}
    >
      {/* Image */}
      <div style={{ position: 'relative', overflow: 'hidden', height: '220px', flexShrink: 0 }}>
        <img
          src={product.image}
          alt={product.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease', display: 'block' }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.08)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
          loading="lazy"
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.35) 0%, transparent 55%)', pointerEvents: 'none' }} />
        <span style={{ position: 'absolute', top: '12px', left: '12px', background: 'rgba(0,0,0,0.55)', color: '#fff', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600, padding: '5px 10px', backdropFilter: 'blur(4px)' }}>
          {product.category}
        </span>
        {product.weight && (
          <span style={{ position: 'absolute', top: '12px', right: '12px', background: GOLD_GRAD, color: '#050c18', fontSize: '10px', fontWeight: 700, padding: '5px 10px' }}>
            {product.weight}
          </span>
        )}
      </div>

      {/* Content */}
      <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <h3 style={{ fontFamily: 'var(--font-playfair)', fontWeight: 700, color: '#111', fontSize: '1.05rem', lineHeight: 1.35, margin: '0 0 0.4rem 0' }}>
          {product.name}
        </h3>
        {product.description && (
          <p style={{ color: '#9ca3af', fontSize: '12px', lineHeight: 1.6, margin: '0 0 1rem 0', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
            {product.description}
          </p>
        )}

        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginTop: 'auto', marginBottom: '1rem' }}>
          <div>
            <p style={{ fontFamily: 'var(--font-playfair)', fontWeight: 700, color: '#111', fontSize: '1.25rem', margin: 0, lineHeight: 1 }}>{product.price}</p>
          </div>
          {product.material && (
            <div style={{ textAlign: 'right' }}>
              <p style={{ fontSize: '10px', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.1em', margin: '0 0 2px 0', fontWeight: 600 }}>Material</p>
              <p style={{ fontSize: '11px', color: '#6b7280', fontWeight: 500, margin: 0 }}>{product.material}</p>
            </div>
          )}
        </div>

        <button
          onClick={handleWhatsAppClick}
          style={{ width: '100%', background: GOLD_GRAD, color: '#050c18', padding: '12px', fontSize: '13px', fontWeight: 700, letterSpacing: '0.06em', border: 'none', cursor: 'pointer', transition: 'opacity 0.2s' }}
          onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.88'; }}
          onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
        >
          Enquire Now
        </button>
      </div>
    </div>
  );
}
