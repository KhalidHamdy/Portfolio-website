import Section from "@/components/helpers/section";
import Heading from "@/components/typography/heading";
import { useAuth } from "@/context/AuthContext";

interface HeaderProps {
  heading: string
  description?: string
}


function Header({ heading, description }: HeaderProps) {
  const { user, getInitials } = useAuth();

  return (
    <div className="border-b border-gray-700 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
      <Section className="flex items-center justify-between">
        <div>
          <Heading size="md" className="font-bold text-white mb-2">{heading}</Heading>
          <p className="text-gray-400 text-lg">
            {description ? description : user?.displayName ?? user?.email}
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
            {getInitials()}
          </div>
        </div>
      </Section>
    </div>
  )
}

export default Header