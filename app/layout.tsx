import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Agaya",
    default: "Agaya",
  },
  icons: "./favicon.ico",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
