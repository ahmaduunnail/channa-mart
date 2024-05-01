// import { Inter } from "next/font/google";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ChannaMart",
  description: "kmudahan jual beli ikan Channa dari jari anda.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="font-prodigy text-black bg-white">{children}</body>
    </html>
  );
}
