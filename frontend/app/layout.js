import { Raleway } from "next/font/google";
import "./globals.css";
import Topbar from "@/components/layout/topbar";
import FloatingSidebar from "@/components/ui/floating-sidebar";
import { siteConfig } from "@/data/site";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-raleway",
});

export const metadata = {
  title: `${siteConfig.name} | ${siteConfig.tagline}`,
  description: "Advanced plywood manufacturing with termite and borer proof technology. Premium boards, doors, and laminates."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={raleway.variable}>
      <body suppressHydrationWarning className="font-sans">
        <Topbar />
        <FloatingSidebar />
        {children}
      </body>
    </html>
  );
}