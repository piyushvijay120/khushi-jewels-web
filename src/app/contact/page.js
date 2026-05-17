'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { CONTACT_CONFIG } from '@/config/contact';

const GOLD = '#d4af37';
const GOLD_GRAD = 'linear-gradient(135deg, #b8962e 0%, #d4af37 50%, #b8962e 100%)';

const faqs = [
  { q: 'Are your products certified?', a: 'Yes, every piece comes with a hallmark authenticity certificate verifying gold purity.' },
  { q: 'Do you offer custom designs?', a: 'Absolutely. Contact us to discuss your requirements — we craft bespoke jewellery to your exact specifications.' },
  { q: 'What is your return policy?', a: 'We offer a 7-day return policy with a full refund in case of any manufacturing defect.' },
  { q: 'Do you offer buyback?', a: 'Yes, we provide competitive buyback rates on all jewellery purchased from us.' },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [openFaq, setOpenFaq] = useState(null);
  const [submitHover, setSubmitHover] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nSubject: ${formData.subject}\nMessage: ${formData.message}`;
    window.open(`https://wa.me/${CONTACT_CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const contactItems = [
    {
      icon: <svg style={{ width: '18px', height: '18px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>,
      label: 'Phone',
      value: CONTACT_CONFIG.phoneNumber,
      href: `tel:${CONTACT_CONFIG.phoneNumber}`,
      sub: 'Mon – Sat, 10 AM – 10 PM',
    },
    {
      icon: <svg style={{ width: '18px', height: '18px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>,
      label: 'WhatsApp',
      value: 'Start WhatsApp Chat',
      href: `https://wa.me/${CONTACT_CONFIG.whatsappNumber}`,
      sub: 'Quick responses, instant support',
      external: true,
    },
    {
      icon: <svg style={{ width: '18px', height: '18px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
      label: 'Email',
      value: CONTACT_CONFIG.email,
      href: `mailto:${CONTACT_CONFIG.email}`,
      sub: 'We reply within 24 hours',
    },
    {
      icon: <svg style={{ width: '18px', height: '18px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
      label: 'Address',
      value: CONTACT_CONFIG.address,
      sub: 'Mon – Sat: 10 AM – 10 PM  |  Sunday: Closed',
    },
  ];

  return (
    <>
      <Navbar />

      {/* ─── PAGE HEADER ──────────────────────────────────────── */}
      <section style={{ paddingTop: '6rem', paddingBottom: '6rem', position: 'relative', overflow: 'hidden', background: 'linear-gradient(135deg, #040c17 0%, #071828 55%, #040c17 100%)' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(to right, transparent, rgba(212,175,55,0.4), transparent)' }} />
        <div style={{ position: 'absolute', top: '50%', left: '-8rem', width: '20rem', height: '20rem', borderRadius: '50%', background: 'rgba(212,175,55,0.05)', filter: 'blur(60px)', pointerEvents: 'none' }} />
        <div className="sc" style={{ position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.75rem' }}>
            <div style={{ width: '32px', height: '1px', background: GOLD }} />
            <span style={{ color: GOLD, fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', fontWeight: 600 }}>Reach Out</span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-playfair)', fontWeight: 700, color: '#fff', lineHeight: 1.06, marginBottom: '1.25rem' }}>
            <span style={{ display: 'block', fontSize: 'clamp(36px, 5.5vw, 68px)' }}>We'd Love to</span>
            <span style={{ display: 'block', fontSize: 'clamp(36px, 5.5vw, 68px)', color: GOLD, fontWeight: 400, fontStyle: 'italic' }}>Hear From You</span>
          </h1>
          <p style={{ color: '#9ca3af', fontSize: '1.125rem', maxWidth: '32rem', lineHeight: 1.75 }}>
            Whether you have a question, want a custom piece, or just want to say hello — we're here.
          </p>
        </div>
      </section>

      {/* ─── CONTACT SECTION ──────────────────────────────────── */}
      <section style={{ background: '#fff', paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div className="sc">
          <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3.5rem' }}>

            {/* Left — Info */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1rem' }}>
                <div style={{ width: '24px', height: '1px', background: GOLD }} />
                <span style={{ color: GOLD, fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 600 }}>Contact Details</span>
              </div>
              <h2 style={{ fontFamily: 'var(--font-playfair)', fontWeight: 700, color: '#111', fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.2, marginBottom: '2.5rem' }}>
                Get in Touch
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {contactItems.map((item, i) => (
                  <ContactCard key={i} item={item} />
                ))}
              </div>
            </div>

            {/* Right — Form */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1rem' }}>
                <div style={{ width: '24px', height: '1px', background: GOLD }} />
                <span style={{ color: GOLD, fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 600 }}>Send a Message</span>
              </div>
              <h2 style={{ fontFamily: 'var(--font-playfair)', fontWeight: 700, color: '#111', fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.2, marginBottom: '2.5rem' }}>
                We'll Get Back<br />to You
              </h2>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div className="form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>Full Name</label>
                    <input
                      type="text" name="name" value={formData.name} onChange={handleChange} required
                      placeholder="Your Name"
                      style={{ width: '100%', padding: '12px 16px', border: '1px solid #e5e7eb', background: '#fafaf8', fontSize: '14px', outline: 'none', fontFamily: 'inherit' }}
                      onFocus={(e) => { e.target.style.borderColor = GOLD; e.target.style.background = '#fff'; }}
                      onBlur={(e) => { e.target.style.borderColor = '#e5e7eb'; e.target.style.background = '#fafaf8'; }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>Phone</label>
                    <input
                      type="tel" name="phone" value={formData.phone} onChange={handleChange} required
                      placeholder="+91 XXXXX XXXXX"
                      style={{ width: '100%', padding: '12px 16px', border: '1px solid #e5e7eb', background: '#fafaf8', fontSize: '14px', outline: 'none', fontFamily: 'inherit' }}
                      onFocus={(e) => { e.target.style.borderColor = GOLD; e.target.style.background = '#fff'; }}
                      onBlur={(e) => { e.target.style.borderColor = '#e5e7eb'; e.target.style.background = '#fafaf8'; }}
                    />
                  </div>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>Email</label>
                  <input
                    type="email" name="email" value={formData.email} onChange={handleChange} required
                    placeholder="your@email.com"
                    style={{ width: '100%', padding: '12px 16px', border: '1px solid #e5e7eb', background: '#fafaf8', fontSize: '14px', outline: 'none', fontFamily: 'inherit' }}
                    onFocus={(e) => { e.target.style.borderColor = GOLD; e.target.style.background = '#fff'; }}
                    onBlur={(e) => { e.target.style.borderColor = '#e5e7eb'; e.target.style.background = '#fafaf8'; }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>Subject</label>
                  <input
                    type="text" name="subject" value={formData.subject} onChange={handleChange} required
                    placeholder="What can we help you with?"
                    style={{ width: '100%', padding: '12px 16px', border: '1px solid #e5e7eb', background: '#fafaf8', fontSize: '14px', outline: 'none', fontFamily: 'inherit' }}
                    onFocus={(e) => { e.target.style.borderColor = GOLD; e.target.style.background = '#fff'; }}
                    onBlur={(e) => { e.target.style.borderColor = '#e5e7eb'; e.target.style.background = '#fafaf8'; }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>Message</label>
                  <textarea
                    name="message" value={formData.message} onChange={handleChange} required rows={5}
                    placeholder="Tell us about your requirements..."
                    style={{ width: '100%', padding: '12px 16px', border: '1px solid #e5e7eb', background: '#fafaf8', fontSize: '14px', outline: 'none', fontFamily: 'inherit', resize: 'none' }}
                    onFocus={(e) => { e.target.style.borderColor = GOLD; e.target.style.background = '#fff'; }}
                    onBlur={(e) => { e.target.style.borderColor = '#e5e7eb'; e.target.style.background = '#fafaf8'; }}
                  />
                </div>
                <button
                  type="submit"
                  style={{ width: '100%', background: submitHover ? 'linear-gradient(135deg, #a07820 0%, #c9a332 50%, #a07820 100%)' : GOLD_GRAD, color: '#050c18', padding: '16px', fontSize: '13px', fontWeight: 700, letterSpacing: '0.06em', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', transition: 'opacity 0.2s' }}
                  onMouseEnter={() => setSubmitHover(true)}
                  onMouseLeave={() => setSubmitHover(false)}
                >
                  Send Message
                  <svg style={{ width: '16px', height: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
                <p style={{ fontSize: '12px', color: '#9ca3af', textAlign: 'center' }}>
                  Your message will be sent via WhatsApp for a faster response.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MAP ──────────────────────────────────────────────── */}
      <section style={{ background: '#fafaf8', paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div className="sc">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '12px' }}>
              <div style={{ width: '24px', height: '1px', background: GOLD }} />
              <span style={{ color: GOLD, fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 600 }}>Find Us</span>
              <div style={{ width: '24px', height: '1px', background: GOLD }} />
            </div>
            <h2 style={{ fontFamily: 'var(--font-playfair)', fontWeight: 700, color: '#111', fontSize: 'clamp(2rem, 4vw, 3rem)' }}>Our Location</h2>
          </div>
          <div style={{ overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.08)', height: '384px', border: '1px solid #e5e7eb' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.6718220381997!2d77.2304!3d28.6328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd289999999d%3A0x9999999999999999!2sJewellery%20Market!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, display: 'block' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* ─── FAQ ──────────────────────────────────────────────── */}
      <section style={{ background: '#fff', paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div className="sc" style={{ maxWidth: '52rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '12px' }}>
              <div style={{ width: '24px', height: '1px', background: GOLD }} />
              <span style={{ color: GOLD, fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 600 }}>FAQ</span>
              <div style={{ width: '24px', height: '1px', background: GOLD }} />
            </div>
            <h2 style={{ fontFamily: 'var(--font-playfair)', fontWeight: 700, color: '#111', fontSize: 'clamp(2rem, 4vw, 3rem)' }}>Frequently Asked Questions</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ border: '1px solid #e5e7eb', overflow: 'hidden' }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 24px', textAlign: 'left', background: openFaq === i ? '#fafaf5' : '#fff', border: 'none', cursor: 'pointer', transition: 'background 0.2s' }}
                >
                  <span style={{ fontWeight: 600, color: '#111', fontSize: '14px', paddingRight: '1rem' }}>{faq.q}</span>
                  <svg
                    style={{ width: '16px', height: '16px', color: GOLD, flexShrink: 0, transition: 'transform 0.2s', transform: openFaq === i ? 'rotate(45deg)' : 'rotate(0deg)' }}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
                {openFaq === i && (
                  <div style={{ padding: '0 24px 20px', borderTop: '1px solid #f3f4f6' }}>
                    <p style={{ color: '#6b7280', fontSize: '13.5px', lineHeight: 1.75, paddingTop: '16px' }}>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />

      <style>{`
        @media (min-width: 1024px) {
          .contact-grid { grid-template-columns: 1fr 1fr !important; gap: 5rem !important; }
        }
        @media (min-width: 640px) {
          .form-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </>
  );
}

function ContactCard({ item }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      style={{ display: 'flex', gap: '1rem', padding: '1.25rem', background: hovered ? '#fff' : '#fafaf8', border: `1px solid ${hovered ? 'rgba(212,175,55,0.3)' : '#f3f4f6'}`, transition: 'all 0.2s' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ width: '42px', height: '42px', background: 'rgba(212,175,55,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: GOLD, flexShrink: 0 }}>
        {item.icon}
      </div>
      <div>
        <p style={{ color: '#9ca3af', fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '4px' }}>{item.label}</p>
        {item.href ? (
          <a
            href={item.href}
            target={item.external ? '_blank' : undefined}
            rel={item.external ? 'noopener noreferrer' : undefined}
            style={{ fontWeight: 600, color: '#111', fontSize: '13.5px', textDecoration: 'none', display: 'block' }}
          >
            {item.value}
          </a>
        ) : (
          <p style={{ fontWeight: 600, color: '#111', fontSize: '13.5px' }}>{item.value}</p>
        )}
        {item.sub && <p style={{ color: '#9ca3af', fontSize: '12px', marginTop: '2px' }}>{item.sub}</p>}
      </div>
    </div>
  );
}
