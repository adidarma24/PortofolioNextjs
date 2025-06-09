import "./globals.css";
import Navbar from "@/components/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "./nprogress.css";
import { Analytics } from "@vercel/analytics/react";
import Chat from "@/components/Chat";
import ClientTopProgressBar from "@/components/ClientTopProgressBar";

export const metadata = {
  title: "Adi Dharma | Portofolio",

  description:
    "Hi, I’m Adi Dharma a passionate and adaptable Junior Full-Stack Developer with strong skills in Laravel, PHP, MySQL, JavaScript, and modern web tools.",

  author: "Adi Dharma",
  siteUrl: "",
  applicationName: "AdiDharma",

  keywords: [
    "Adi Dharma",
    "Full-Stack Developer",
    "Laravel",
    "PHP",
    "MySQL",
    "Adi",
    "Dharma",
    "adi",
  ],

  openGraph: {
    type: "website",
    url: "",
    title: "Adi Dharma | Portofolio",
    site_name: "Adi Dharma | Portofolio",
    description: "My name is Adi Dharma, This is my portofolio website.",
    width: 1200,
    height: 630,
    images: [
      {
        url: "/og-image-rev.png",
        alt: "Adi Dharma Portofolio",
      },
    ],
    site_name: "Adi Dharma | Portofolio",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientTopProgressBar />
        <Navbar />
        {children}
        <Chat />
        <Analytics />
      </body>
    </html>
  );
}
