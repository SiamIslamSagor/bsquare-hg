import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ErrorBoundary } from "@/components/layout/error-boundary";
import { CustomCursor } from "@/components/ui/custom-cursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BSquare | Creative Digital Agency",
  description:
    "We create beautiful digital experiences that inspire and engage. Web design, development, branding, and digital marketing services.",
  keywords:
    "digital agency, web design, web development, branding, ui/ux design, digital marketing",
  authors: [{ name: "BSquare Agency" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bsquare.agency",
    title: "BSquare | Creative Digital Agency",
    description:
      "We create beautiful digital experiences that inspire and engage. Web design, development, branding, and digital marketing services.",
    siteName: "BSquare",
  },
  twitter: {
    card: "summary_large_image",
    title: "BSquare | Creative Digital Agency",
    description:
      "We create beautiful digital experiences that inspire and engage. Web design, development, branding, and digital marketing services.",
    creator: "@bsquare",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} min-h-screen bg-background text-foreground antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ErrorBoundary>
            <CustomCursor />
            <Navbar />
            <main
              className="flex min-h-screen flex-col pt-16"
              suppressHydrationWarning
            >
              {children}
            </main>
            <Footer />
          </ErrorBoundary>
        </ThemeProvider>
      </body>
    </html>
  );
}
