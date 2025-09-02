import type { Metadata } from "next";
import { Source_Code_Pro } from "next/font/google";
import "./globals.css";

const sourceCodePro = Source_Code_Pro({
  variable: "--font-source-code-pro",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Horllymobile Portfolio - Abraham James",
  description: "Showcasing the projects and skills of Abraham James.",
  keywords: [
    "Horllymobile",
    "Portfolio",
    "Abraham James",
    "Web Development",
    "UI/UX Design",
    "Software Engineering",
    "Software Development",
    "Full Stack Development",
    "Software Developer",
    "Software Tutoring",
    "Mentorship",
    "Coaching",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sourceCodePro.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
