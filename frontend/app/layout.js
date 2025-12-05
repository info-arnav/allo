import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "./components/GoogleAnalytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title:
    "Allo - Your Neighborhood, Delivered | Hyperlocal Commerce in South Delhi",
  description:
    "Get everything you need from local stores delivered to your door in minutes. From groceries to fashion brands like H&M, Zara, Nike - order from Hauz Khas, GK, Defence Colony & more. No mall visits needed.",
  keywords:
    "hyperlocal delivery, South Delhi delivery, neighborhood commerce, Hauz Khas delivery, GK delivery, local store delivery, quick commerce, H&M delivery, Zara delivery, same day delivery Delhi",
  authors: [{ name: "Allo" }],
  creator: "Allo",
  publisher: "Allo",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.allo.co.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Allo - Your Neighborhood, Delivered",
    description:
      "Get everything you need from local stores delivered in minutes. Groceries, fashion, lifestyle - from stores you trust in your neighborhood.",
    url: "https://www.allo.co.in",
    siteName: "Allo",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Allo - Hyperlocal Commerce",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Allo - Your Neighborhood, Delivered",
    description:
      "Get everything from local stores delivered in minutes. No mall visits needed.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/logo-circle.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/logo-circle.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#F6B215" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <GoogleAnalytics GA_MEASUREMENT_ID="G-GLYXD2SJN6" />
        {children}
      </body>
    </html>
  );
}
