"use client";

import { useAuth } from "@/context/AuthContext";
import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import Description from "@/components/typography/description";
import Header from "@/components/pages/admin/shared/header";
import MainContent from "@/components/pages/admin/mainContent";

export default function AdminPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/login");
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-full animate-spin mb-4">
            <div className="w-10 h-10 bg-gray-900 rounded-full"></div>
          </div>
          <p className="text-gray-300">Authenticating...</p>
        </div>
      </div>
    );
  }

  if (!user) return null;

  const getInitials = () => {
    if (user.displayName) {
      return user.displayName
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2);
    }
    return user.email?.[0]?.toUpperCase() ?? "U";
  };

  return (

    <div className="flex flex-col bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen w-full text-white">

      <Header heading="Welcome back! 👋" description={getInitials()} user={user} />

      <MainContent user={user} />
    </div>
  );
}