import { useAuth } from "@/context/AuthContext";
import { UNSTABLE_REVALIDATE_RENAME_ERROR } from "next/dist/lib/constants";

interface HeaderProps {
    heading : string 
    description: string
    user: any
}


function Header({heading, description, user}: HeaderProps) {

    return (
         <div className="py-4 px-8 border-b border-gray-700 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">{heading}</h1>
            <p className="text-gray-400 text-lg">{user.displayName ?? user.email}</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
              {description}
            </div>
          </div>
      </div>
    )
}

export default Header