'use client';

import Image from "next/image";
import { trackWhatsAppClick } from "../../lib/analytics";
import styles from "../page.module.css";

export default function Navigation() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.navContainer}>
          <a href="/">
            <Image
              src="/logo-circle.svg"
              alt="Allo Logo"
              width={50}
              height={50}
              priority
              className={styles.navLogo}
            />
          </a>
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
  );
}
