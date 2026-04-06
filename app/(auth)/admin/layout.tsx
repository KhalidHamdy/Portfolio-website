"use client";
import SideBar from "@/components/pages/admin/sideBar";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  
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
  return (

  <div className="flex">
  <SideBar />
  {children}
  </div>
  );
}
