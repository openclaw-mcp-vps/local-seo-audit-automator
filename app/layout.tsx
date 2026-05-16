import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Local SEO Audit Automator – Fix NAP Inconsistencies Fast",
  description: "Automated local SEO audits for small businesses. Crawl Google My Business, Yelp, and Facebook for NAP inconsistencies and get actionable fix reports."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="e32b2e86-e30f-40bd-a427-50345220bfca"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
