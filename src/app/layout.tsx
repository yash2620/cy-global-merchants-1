import type { Metadata } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CY Global Merchants | Premium Indian Sustainable & Wellness Exporter",
  description: "CY Global Merchants exports premium Indian wellness, handcrafted decorative brassware, organic incense sticks, yoga equipment, and organic cotton tote bags worldwide.",
  metadataBase: new URL("https://www.cyglobalmerchants.com"),
  keywords: [
    "Indian Exporter",
    "Export Company India",
    "International Trade Company",
    "Exporter of Incense Sticks",
    "Brass Handicrafts Exporter",
    "Yoga Products Exporter",
    "Cotton Tote Bag Exporter",
    "Global Buyer Search",
    "Export Sourcing Pune",
    "Indian Sustainable Products",
    "Real Estate Investment Pune",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "CY Global Merchants | Indian Sustainable & Wellness Lifestyle Exporter",
    description: "Premium Indian wellness commodities, handcrafted decoratives, yoga accessories, and tote bags exported globally.",
    url: "https://www.cyglobalmerchants.com",
    siteName: "CY Global Merchants",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CY Global Merchants Sourcing",
      },
    ],
    locale: "en_US",
    type: "website",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${outfit.variable} dark scroll-smooth`}>
      <head>
        {/* Google Analytics 4 (Placeholder Hook for production) */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}></script>
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}
        
        {/* Microsoft Clarity (Placeholder Hook for production) */}
        {process.env.NEXT_PUBLIC_CLARITY_ID && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(c,l,a,r,i,t,y){
                    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window,document,"clarity","script","${process.env.NEXT_PUBLIC_CLARITY_ID}");
              `,
            }}
          />
        )}
      </head>
      <body className="bg-primary-black text-premium-white min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-grow pt-24">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
