import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

// On Vercel these are injected at build/run time; falls back to the dev server.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? process.env.NEXT_PUBLIC_SITE_URL
  : process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Job Tracker",
  description: "A private, local-first job search workspace that keeps every application moving.",
  openGraph: {
    title: "Job Tracker",
    description: "Your job search, organized.",
    type: "website",
    images: [{ url: "/og.png", width: 1730, height: 909, alt: "Job Tracker — Your job search, organized." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Job Tracker",
    description: "Your job search, organized.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.className}>
      <head>
        {/* Applies the saved theme before first paint so there is no light flash. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem("job-tracker-theme");if(t!=="light"&&t!=="dark"){t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}document.documentElement.classList.toggle("dark",t==="dark")}catch(e){}`,
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

