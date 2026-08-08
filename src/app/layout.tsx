import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import ClientLayout from "@/components/layout/ClientLayout";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Guru Prasanna R | Cybersecurity Portfolio",
  description: "Cybersecurity student passionate about ethical hacking, vulnerability assessment, web security, and secure application development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#050706] text-[#f5f5f5] overflow-x-hidden selection:bg-[#39ff6a]/30 selection:text-white">
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
