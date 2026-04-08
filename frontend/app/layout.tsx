import type { Metadata } from "next";
import "@/src/styles/globals.css";

export const metadata: Metadata = {
  title: "Ajayeswaran Raja · Cloud & DevOps Engineer",
  description:
    "Portfolio of Ajayeswaran Raja — OCI-certified Cloud Engineer, DevOps practitioner, and Corporate Trainer with 2,500+ students trained.",
  keywords: ["Cloud Engineer", "DevOps", "OCI", "Oracle Cloud", "Portfolio", "Ajayeswaran"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
