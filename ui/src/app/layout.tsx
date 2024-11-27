import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sepahan Foolad Atashgah",
  description: "Sepahan Foolad Atashgah Casting Industry has produced and delivered thousands of types of industrial parts for the country's industries and world markets many times. Among these, various industries such as cement, mining, steel, copper, oil, gas and petrochemical is included.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa">
      <body
        className={`antialiased`}>
        {children}
      </body>
    </html>
  );
}
