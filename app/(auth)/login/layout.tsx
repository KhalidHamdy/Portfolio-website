export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html>
        <body className="auth-page">{children}</body>
      </html>
    </>
  );
}
