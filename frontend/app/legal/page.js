'use client';

import { useState } from 'react';
import styles from '../page.module.css';

export default function Legal() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.legalContainer}>
          <h1 className={styles.legalTitle}>Terms of Service</h1>
          <p className={styles.legalSubtitle}>
            Please read these terms carefully before using Allo's services.
          </p>
          <p className={styles.legalDate}>Last updated: December 6, 2025</p>

          <div className={styles.accordion}>
            {/* Acceptance of Terms */}
            <div className={styles.accordionItem}>
              <button
                className={styles.accordionHeader}
                onClick={() => toggleSection('acceptance')}
              >
                <span>Acceptance of Terms</span>
                <span className={`${styles.accordionIcon} ${openSection === 'acceptance' ? styles.open : ''}`}>+</span>
              </button>
              {openSection === 'acceptance' && (
                <div className={styles.accordionContent}>
                  <p>
                    By using Allo's services, you agree to these terms. If you don't agree, please don't use our service.
                  </p>
                  <p>
                    Currently, Allo operates as a proof of concept (POC) via WhatsApp. We reserve the right to modify 
                    or discontinue services at any time.
                  </p>
                </div>
              )}
            </div>

            {/* Service Description */}
            <div className={styles.accordionItem}>
              <button
                className={styles.accordionHeader}
                onClick={() => toggleSection('service')}
              >
                <span>Service Description</span>
                <span className={`${styles.accordionIcon} ${openSection === 'service' ? styles.open : ''}`}>+</span>
              </button>
              {openSection === 'service' && (
                <div className={styles.accordionContent}>
                  <h3>What We Offer</h3>
                  <p>
                    Allo connects you to local kirana stores and neighborhood shops for home delivery of groceries, 
                    essentials, and other products. We act as an intermediary between you and local businesses.
                  </p>
                  
                  <h3>Service Areas</h3>
                  <p>
                    Currently available in: Hauz Khas, Greater Kailash, Defence Colony, Panchsheel, and Saket.
                  </p>

                  <h3>How It Works</h3>
                  <ul>
                    <li>You send us a WhatsApp message with your order</li>
                    <li>We check availability with partner stores</li>
                    <li>We confirm pricing and estimated delivery time</li>
                    <li>We coordinate delivery to your address</li>
                  </ul>

                  <h3>No Guarantees</h3>
                  <p>
                    As we're in POC phase, we cannot guarantee product availability, specific delivery times, 
                    or service continuity. We'll do our best to fulfill every order.
                  </p>
                </div>
              )}
            </div>

            {/* Orders and Payments */}
            <div className={styles.accordionItem}>
              <button
                className={styles.accordionHeader}
                onClick={() => toggleSection('orders')}
              >
                <span>Orders and Payments</span>
                <span className={`${styles.accordionIcon} ${openSection === 'orders' ? styles.open : ''}`}>+</span>
              </button>
              {openSection === 'orders' && (
                <div className={styles.accordionContent}>
                  <h3>Placing Orders</h3>
                  <p>
                    Orders are placed via WhatsApp. We'll confirm availability and price before fulfillment. 
                    An order is only confirmed once we send you a confirmation message.
                  </p>
                  
                  <h3>Pricing</h3>
                  <p>
                    Prices are determined by the partner store and may include a delivery fee. Final price 
                    will be confirmed before your order is processed.
                  </p>

                  <h3>Payment Methods</h3>
                  <p>
                    We accept UPI, cash on delivery, and other payment methods as communicated during the order process.
                  </p>

                  <h3>Cancellations</h3>
                  <p>
                    You can cancel an order before it's dispatched by messaging us. Once dispatched, cancellations 
                    may not be possible. Refunds are handled case-by-case.
                  </p>
                </div>
              )}
            </div>

            {/* Delivery */}
            <div className={styles.accordionItem}>
              <button
                className={styles.accordionHeader}
                onClick={() => toggleSection('delivery')}
              >
                <span>Delivery</span>
                <span className={`${styles.accordionIcon} ${openSection === 'delivery' ? styles.open : ''}`}>+</span>
              </button>
              {openSection === 'delivery' && (
                <div className={styles.accordionContent}>
                  <h3>Delivery Times</h3>
                  <p>
                    We aim to deliver within 30 minutes but cannot guarantee exact timing. Actual delivery time 
                    depends on store availability, distance, and current demand.
                  </p>
                  
                  <h3>Delivery Area</h3>
                  <p>
                    Delivery is available only within our service areas. We may decline orders outside these zones.
                  </p>

                  <h3>Receiving Orders</h3>
                  <p>
                    Someone must be available at the delivery address to receive the order. If no one is available, 
                    we may leave the order at your doorstep or return it to the store.
                  </p>

                  <h3>Quality Issues</h3>
                  <p>
                    If you receive damaged or incorrect items, contact us immediately via WhatsApp. We'll work with 
                    the store to resolve the issue.
                  </p>
                </div>
              )}
            </div>

            {/* User Responsibilities */}
            <div className={styles.accordionItem}>
              <button
                className={styles.accordionHeader}
                onClick={() => toggleSection('responsibilities')}
              >
                <span>User Responsibilities</span>
                <span className={`${styles.accordionIcon} ${openSection === 'responsibilities' ? styles.open : ''}`}>+</span>
              </button>
              {openSection === 'responsibilities' && (
                <div className={styles.accordionContent}>
                  <h3>Accurate Information</h3>
                  <p>
                    You must provide accurate delivery addresses and contact information. We're not responsible 
                    for failed deliveries due to incorrect information.
                  </p>
                  
                  <h3>Prohibited Use</h3>
                  <p>You may not:</p>
                  <ul>
                    <li>Order illegal or prohibited items</li>
                    <li>Use the service to harm others</li>
                    <li>Abuse or harass delivery personnel or store staff</li>
                    <li>Attempt to defraud Allo or partner stores</li>
                  </ul>

                  <h3>Age Restrictions</h3>
                  <p>
                    Some products (alcohol, tobacco) have age restrictions. You must be of legal age to order such items 
                    and may be required to show ID upon delivery.
                  </p>
                </div>
              )}
            </div>

            {/* Liability */}
            <div className={styles.accordionItem}>
              <button
                className={styles.accordionHeader}
                onClick={() => toggleSection('liability')}
              >
                <span>Limitation of Liability</span>
                <span className={`${styles.accordionIcon} ${openSection === 'liability' ? styles.open : ''}`}>+</span>
              </button>
              {openSection === 'liability' && (
                <div className={styles.accordionContent}>
                  <h3>Service As-Is</h3>
                  <p>
                    Allo is provided "as is" during this POC phase. We make no warranties about service availability, 
                    reliability, or quality.
                  </p>
                  
                  <h3>Product Quality</h3>
                  <p>
                    Products are sourced from partner stores. While we work with trusted businesses, we're not liable 
                    for product quality issues beyond facilitating resolution with the store.
                  </p>

                  <h3>Limitation</h3>
                  <p>
                    To the maximum extent permitted by law, Allo's liability is limited to the order value. 
                    We're not liable for indirect, incidental, or consequential damages.
                  </p>
                </div>
              )}
            </div>

            {/* Changes to Terms */}
            <div className={styles.accordionItem}>
              <button
                className={styles.accordionHeader}
                onClick={() => toggleSection('changes')}
              >
                <span>Changes to Terms</span>
                <span className={`${styles.accordionIcon} ${openSection === 'changes' ? styles.open : ''}`}>+</span>
              </button>
              {openSection === 'changes' && (
                <div className={styles.accordionContent}>
                  <p>
                    We may update these terms at any time. Changes will be posted here with an updated date. 
                    Continued use of the service means you accept the new terms.
                  </p>
                </div>
              )}
            </div>

            {/* Contact */}
            <div className={styles.accordionItem}>
              <button
                className={styles.accordionHeader}
                onClick={() => toggleSection('contact')}
              >
                <span>Contact & Disputes</span>
                <span className={`${styles.accordionIcon} ${openSection === 'contact' ? styles.open : ''}`}>+</span>
              </button>
              {openSection === 'contact' && (
                <div className={styles.accordionContent}>
                  <h3>Questions or Issues</h3>
                  <p>
                    For questions about these terms or to resolve disputes, contact us at info@allo.co.in 
                    or via WhatsApp.
                  </p>
                  
                  <h3>Governing Law</h3>
                  <p>
                    These terms are governed by the laws of India. Any disputes will be subject to the 
                    jurisdiction of courts in Delhi.
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className={styles.legalFooter}>
            <p>Questions about these terms?</p>
            <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer">
              Contact us on WhatsApp
            </a>
            <span> or email </span>
            <a href="mailto:info@allo.co.in">info@allo.co.in</a>
          </div>
        </div>
      </main>
    </div>
  );
}
