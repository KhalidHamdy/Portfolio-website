import Footer from "@/components/shared/footer";
import Navbar from "@/components/shared/navbar";

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
