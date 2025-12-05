'use client';

import Image from "next/image";
import { trackWhatsAppClick } from "../../lib/analytics";
import styles from "../page.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerBrand}>
          <Image
            src="/logo-circle.svg"
            alt="Allo Logo"
            width={80}
            height={80}
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
          <div>
            <h4>Legal</h4>
            <ul>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/legal">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} Allo. All rights reserved.</p>
      </div>
    </footer>
  );
}
