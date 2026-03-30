import "./globals.css";
import Topbar from "@/components/layout/topbar";
import { siteConfig } from "@/data/site";

export const metadata = {
  title: `${siteConfig.name} | ${siteConfig.tagline}`,
  description: "Advanced plywood manufacturing with termite and borer proof technology. Premium boards, doors, and laminates."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Topbar />
        {children}
      </body>
    </html>
  );
}