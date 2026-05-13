"use client";

import { useAuth } from "@/context/AuthContext";
import Header from "@/components/pages/admin/shared/header";
import MainContent from "@/components/pages/admin/adminMainContent";


export default function AdminPage() {
  const { user, getInitials } = useAuth();

  if (!user) return null;

  return (

    <div className="flex flex-col bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen w-full text-white">

      <Header heading="Welcome back! 👋"/>

      <MainContent user={user} />
    </div>
  );
}