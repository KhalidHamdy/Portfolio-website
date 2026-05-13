import Header from "@/components/pages/admin/shared/header";
import React from "react";

import AboutDetails from "@/components/pages/admin/about/aboutDetails";

function Page() {
  return (
    <div className="flex flex-col bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen w-full text-white">
      <Header
        heading="About management"
        description="Here you can talk about yourself"
      />
      <AboutDetails />
    </div>
  );
}

export default Page;
