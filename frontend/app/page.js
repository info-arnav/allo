'use client';

import Image from "next/image";
import styles from "./page.module.css";
import { trackWhatsAppClick, trackCTAClick, trackEmailClick, trackOrderIntent } from "../lib/analytics";

export default function Home() {
  // Structured data for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Allo',
    description: 'Hyperlocal commerce platform connecting customers to neighborhood stores for instant delivery',
    url: 'https://www.allo.co.in',
    logo: 'https://www.allo.co.in/logo.png',
    image: 'https://www.allo.co.in/logo.png',
    priceRange: '₹₹',
    areaServed: [
      {
        '@type': 'Place',
        name: 'Hauz Khas, Delhi'
      },
      {
        '@type': 'Place',
        name: 'Greater Kailash, Delhi'
      },
      {
        '@type': 'Place',
        name: 'Defence Colony, Delhi'
      },
      {
        '@type': 'Place',
        name: 'Panchsheel, Delhi'
      },
      {
        '@type': 'Place',
        name: 'Saket, Delhi'
      }
    ],
    serviceType: 'Hyperlocal Delivery Service'
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className={styles.page}>
        {/* Hero Section */}
        <header className={styles.header}>
          <nav className={styles.nav}>
            <div className={styles.navContainer}>
              <Image
                src="/logo.svg"
                alt="Allo Logo"
                width={120}
                height={40}
                priority
                className={styles.navLogo}
              />
              <a 
                href="https://wa.me/919999999999" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.ctaButton}
                onClick={() => trackWhatsAppClick('navigation')}
              >
                Order on WhatsApp
              </a>
            </div>
          </nav>
        </header>

        <main className={styles.main}>
          {/* Hero */}
          <section className={styles.hero}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>
                Your Neighborhood,<br />
                <span className={styles.gradient}>Delivered.</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Get groceries, fresh food, and essentials from real kirana stores and neighborhood shops delivered to your door in minutes. 
                Support local businesses, not dark stores.
              </p>
              <div className={styles.heroCta}>
                <a 
                  href="https://wa.me/919999999999?text=Hi%20Allo!%20I%20want%20to%20order" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.primaryButton}
                  onClick={() => {
                    trackWhatsAppClick('hero');
                    trackOrderIntent();
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" fill="currentColor"/>
                  </svg>
                  Start Ordering
                </a>
                <div className={styles.serviceArea}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  <span>Hauz Khas • GK • Defence Colony • Panchsheel • Saket</span>
                </div>
              </div>
            </div>
            <div className={styles.heroImage}>
              <Image
                src="/logo-circle.svg"
                alt="Allo - Hyperlocal Commerce"
                width={500}
                height={500}
                priority
                className={styles.heroLogo}
              />
            </div>
          </section>

          {/* How It Works */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>How It Works</h2>
            <p className={styles.sectionSubtitle}>Order anything in three simple steps</p>
            <div className={styles.steps}>
              <div className={styles.step}>
                <div className={styles.stepNumber}>1</div>
                <h3>Message Us</h3>
                <p>Send a WhatsApp with what you need — text or photo, we get it</p>
              </div>
              <div className={styles.step}>
                <div className={styles.stepNumber}>2</div>
                <h3>We Confirm</h3>
                <p>We check availability with nearby stores and send you the price</p>
              </div>
              <div className={styles.step}>
                <div className={styles.stepNumber}>3</div>
                <h3>Delivered Fast</h3>
                <p>Your order arrives from local stores, usually within 30 minutes</p>
              </div>
            </div>
          </section>

          {/* Features */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Why Choose Allo?</h2>
            <div className={styles.features}>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>⚡</div>
                <h3>Lightning Fast</h3>
                <p>Minutes, not hours. From stores that are already in your neighborhood.</p>
              </div>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>🏪</div>
                <h3>Real Local Stores</h3>
                <p>From the kirana and shops you already trust. We support real businesses, not ghost kitchens or dark stores.</p>
              </div>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>💬</div>
                <h3>Simple WhatsApp</h3>
                <p>No app to download. Just message us like you'd message a friend.</p>
              </div>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>🥬</div>
                <h3>Fresh & Local</h3>
                <p>Real food from real stores. Fresh groceries, snacks, medicines — from shops in your area.</p>
              </div>
            </div>
          </section>

          {/* Vision */}
          <section className={`${styles.section} ${styles.visionSection}`}>
            <div className={styles.visionContent}>
              <h2 className={styles.sectionTitle}>The Future is Local</h2>
              <p className={styles.visionText}>
                Today, we're delivering groceries and essentials. Tomorrow, everything in your neighborhood becomes accessible.
              </p>
              <div className={styles.brandGrid}>
                <span>Fashion</span>
                <span>Footwear</span>
                <span>Electronics</span>
                <span>Cosmetics</span>
                <span>Home Decor</span>
                <span>Lifestyle</span>
                <span>Accessories</span>
                <span>Wellness</span>
              </div>
              <p className={styles.visionTagline}>
                <strong>No reason to go to the mall unless you want to — not because you need to.</strong>
              </p>
              <p className={styles.visionDescription}>
                We're building the infrastructure that makes every store in your city digitally reachable. 
                Fast access, huge selection, zero friction — powered by the shops that already exist around you.
              </p>
            </div>
          </section>

          {/* CTA Section */}
          <section className={styles.ctaSection}>
            <h2>Ready to try Allo?</h2>
            <p>Join hundreds of neighbors who've already made the switch</p>
            <a 
              href="https://wa.me/919999999999?text=Hi%20Allo!%20I%20want%20to%20order" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.primaryButton}
              onClick={() => {
                trackWhatsAppClick('cta_section');
                trackOrderIntent();
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" fill="currentColor"/>
              </svg>
              Order Now on WhatsApp
            </a>
          </section>
        </main>

        {/* Footer */}
        <footer className={styles.footer}>
          <div className={styles.footerContent}>
            <div className={styles.footerBrand}>
              <Image
                src="/logo.svg"
                alt="Allo Logo"
                width={100}
                height={33}
              />
              <p>Making your neighborhood your marketplace</p>
            </div>
            <div className={styles.footerLinks}>
              <div>
                <h4>Service Areas</h4>
                <ul>
                  <li>Hauz Khas</li>
                  <li>Greater Kailash</li>
                  <li>Defence Colony</li>
                  <li>Panchsheel</li>
                  <li>Saket</li>
                </ul>
              </div>
              <div>
                <h4>Contact</h4>
                <ul>
                  <li><a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppClick('footer')}>WhatsApp</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <p>&copy; {new Date().getFullYear()} Allo. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
