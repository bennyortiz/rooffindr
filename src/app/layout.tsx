import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/sonner";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
  fallback: ['system-ui', 'sans-serif'],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RoofFindr | Texas Roofing Directory",
  description: "Connect with trusted local roofing professionals across Texas. Find verified roofers, compare services, and make confident decisions for your roofing project.",
  keywords: "roofing, Texas roofers, roof repair, roofing contractors, roofing directory, find roofers, Texas roofing professionals",
  authors: [{ name: "RoofFindr" }],
  creator: "RoofFindr",
  publisher: "RoofFindr",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://rooffindr.com"),
  openGraph: {
    title: "RoofFindr | Texas Roofing Directory",
    description: "Connect with trusted local roofing professionals across Texas",
    url: "https://rooffindr.com",
    siteName: "RoofFindr",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RoofFindr | Texas Roofing Directory",
    description: "Connect with trusted local roofing professionals across Texas",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${jakartaSans.variable} ${geistMono.variable} font-sans antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          
          <main className="flex-1">
            {children}
          </main>
          
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
