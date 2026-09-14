import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://beyondthepipeline.dev"),
  title: {
    default: "BeyondThePipeline — Data Engineering, Snowflake & AI",
    template: "%s — BeyondThePipeline"
  },
  description:
    "Deep dives, architectural patterns, projects, and lessons from building modern data platforms with Snowflake, dbt, Python, and AI.",
  openGraph: {
    title: "BeyondThePipeline",
    description: "Engineering data platforms. Exploring what comes next.",
    type: "website",
    url: "https://beyondthepipeline.dev"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}