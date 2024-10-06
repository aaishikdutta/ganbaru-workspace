import type { Metadata } from "next";
import { Afacad } from 'next/font/google'
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const afacad = Afacad({
  variable: "--afacad",
  weight: ["400", "500", "600", "700"],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Ganbaru Workspace",
  description: "A Progressive Web App for ganbaru workspace",
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: ["ganbaru", "ganbaru workspace", "ganbaru ai", "pwa", "next-pwa"],
  authors: [
    { name: "Aaishik Dutta" }
  ],
  viewport:
    "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
  icons: [
    { rel: "icon", url: "assets/icons8-sushi-52-light-mode.png" },
    { rel: "apple-touch-icon", url: "assets/icons8-sushi-52-light-mode.png" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${afacad.variable} antialiased`}
      >
        <div className="flex flex-col min-h-screen">
          <Header />
          <div className="px-5 py-4 flex-grow h-full flex flex-col ">
          {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
