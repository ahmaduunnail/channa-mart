import "./globals.css";

export const metadata = {
  title: "ChannaMart",
  description: "kmudahan jual beli ikan Channa dari jari anda.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="text-black bg-white">{children}</body>
    </html>
  );
}
