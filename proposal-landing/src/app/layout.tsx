import type { Metadata } from "next";
import "../styles/globals.scss";

export const metadata: Metadata = {
  title: "Propuesta Website Hotel Ibiza — Graftly",
  description: "Propuesta de diseño y desarrollo web + integración de booking engine.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
