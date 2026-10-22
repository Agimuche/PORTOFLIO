import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Agim Uchechukwu Portfolio",
  description:
    "Portfolio of Agim Uchechukwu Chigozie Daniel, a Full-Stack Software Engineer & Environmental Health Scientist specialized in modern web and mobile development.",
  openGraph: {
    title: "Agim Uchechukwu Portfolio",
    description:
      "Portfolio of Agim Uchechukwu Chigozie Daniel, a Full-Stack Software Engineer & Environmental Health Scientist specialized in modern web and mobile development.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agim Uchechukwu Portfolio",
    description:
      "Portfolio of Agim Uchechukwu Chigozie Daniel, a Full-Stack Software Engineer & Environmental Health Scientist specialized in modern web and mobile development.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const saved = localStorage.getItem('theme');
                  if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark-theme');
                  } else {
                    document.documentElement.classList.remove('dark-theme');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased`}>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
