"use client";

import Heading from "@/components/typography/heading";
import Link from "next/link";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";

const sections = [
  { name: "Skills", href: "/admin/skills" },
  { name: "Projects", href: "/admin/projects" },
  { name: "Experience", href: "/admin/experience" },
  { name: "Education", href: "/admin/education" },
  { name: "Certifications", href: "/admin/certifications" }

]

function SideBar() {
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut(auth);
    router.push("/login");
  };

  return (
    <div className="w-64 min-h-screen bg-gray-600 text-white flex flex-col border-r border-black">
      <Heading size="sm" className="p-4 font-bold border-b border-gray-700">
          Admin Dashboard
      </Heading>
      <div className="p-4">
        {sections.map((section) => (
          <Link key={section.href} href={section.href} className="block py-2 hover:bg-gray-700">
            {section.name}
          </Link>
        ))}
        
      </div>
      <footer className="mt-auto p-4 text-sm text-gray-400 border-t border-gray-700 flex flex-col gap-4">
        <Link href="/" className="block hover:text-gray-700">
          Back to your portfolio
        </Link>
        <button onClick={handleSignOut} className="text-red-600 cursor-pointer hover:text-red-800 self-start">
          Sign out
        </button>
      </footer>

      
    </div>
  )
}

export default SideBar;