import Footer from "@/components/shared/footer";
import Navbar from "@/components/shared/navbar";
import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <html>
        <body>
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </>
  );
}

export default Layout;
