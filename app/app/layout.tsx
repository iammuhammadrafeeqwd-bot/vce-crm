export const metadata = {
  title: "VCE CRM",
  description: "Internal CRM for Visa Consultancy Experts",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
