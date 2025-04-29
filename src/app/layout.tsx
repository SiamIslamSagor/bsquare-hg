import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ErrorBoundary } from "@/components/layout/error-boundary";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { TransitionProvider } from "@/context/transition-context";
import { PageStateProvider } from "@/context/page-state-context";
// import { Preloader } from "@/components/layout/preloader";
import { LuxuryPreloader } from "@/components/layout/luxury-preloader";
// import { Preloader } from "@/components/layout/preloader";
// comment

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BSquare | Creative Digital Agency",
  description:
    "We create beautiful digital experiences that inspire and engage. Web design, development, branding, and digital marketing services.",
  keywords:
    "digital agency, web design, web development, branding, ui/ux design, digital marketing, bsquare, bsquaretech",
  authors: [{ name: "BSquare Agency" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bsquaretech.com",
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
            <TransitionProvider>
              <PageStateProvider>
                <LuxuryPreloader />
                {/* <Preloader /> */}
                <div className="main-content">
                  <CustomCursor />
                  <Navbar />
                  <main
                    className="flex min-h-screen flex-col pt-16"
                    suppressHydrationWarning
                  >
                    <PageWrapper>{children}</PageWrapper>
                  </main>
                  <Footer />
                </div>
              </PageStateProvider>
            </TransitionProvider>
          </ErrorBoundary>
        </ThemeProvider>

        {/* Script to handle content visibility */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            document.addEventListener('DOMContentLoaded', function() {
              const mainContent = document.querySelector('.main-content');
              const showContent = () => {
                if (mainContent) mainContent.classList.add('content-ready');
              };
              
              // Listen for a custom event from the preloader
              window.addEventListener('preloaderComplete', showContent);
              
              // Fallback in case preloader event doesn't fire
              setTimeout(showContent, 5000);
            });
          `,
          }}
        />
      </body>
    </html>
  );
}
