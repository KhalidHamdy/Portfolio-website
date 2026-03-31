import Description from '@/components/typography/description';
import { auth } from '@/lib/firebase';
import { signOut } from 'firebase/auth';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface MainContentProps {
    user: any
}
const stats = [
    {
        label: "Total Projects",
        value: "3",
        icon: "🚀",
        change: "+2 this month",
    },
    { label: "Certifications", value: "6", icon: "🎓", change: "+1 this year" },
    { label: "Skills", value: "3", icon: "⚡", change: "Active" },
];

function MainContent({ user }: MainContentProps) {
    const Router = useRouter();

    const handleSignOut = async () => {
        await signOut(auth);
        Router.replace("/login");
    };

    return (
        <div className="py-4 px-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {stats.map((stat, i) => (
                    <div
                        key={i}
                        className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl p-6 border border-gray-600 hover:border-orange-400 transition-all hover:shadow-lg hover:shadow-orange-500/20"
                    >
                        <Description size="lg" className="mb-2">{stat.icon}</Description>
                        <Description size="md" className="text-gray-400 mb-2 font-bold">{stat.label}</Description>
                        <Description size="md" className="font-bold text-white mb-2">{stat.value}</Description>
                        <Description size="xs" className="text-green-400">{stat.change}</Description>
                    </div>
                ))}
            </div>

            {/* Account Info Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Account Information */}
                <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl border border-gray-600 p-4">
                    <h3 className="text-xl font-bold text-white mb-6">👤 Account Information</h3>
                    <div className="space-y-2">
                        <div className="flex justify-between items-center pb-4 border-b border-gray-600">
                            <span className="text-gray-400">Display Name</span>
                            <span className="text-white font-medium">{user.displayName ?? "—"}</span>
                        </div>
                        <div className="flex justify-between items-center pb-4 border-b border-gray-600">
                            <span className="text-gray-400">Email</span>
                            <span className="text-white font-medium text-sm">{user.email}</span>
                        </div>
                        <div className="flex justify-between items-center pb-4 border-b border-gray-600">
                            <span className="text-gray-400">Email Status</span>
                            <span
                                className={`px-3 py-1 rounded-full text-sm font-medium ${user.emailVerified ? "bg-green-900 text-green-200" : "bg-yellow-900 text-yellow-200"
                                    }`}
                            >
                                {user.emailVerified ? "✓ Verified" : "⚠ Unverified"}
                            </span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-400">Member Since</span>
                            <span className="text-white font-medium text-sm">
                                {user.metadata.creationTime
                                    ? new Date(user.metadata.creationTime).toLocaleDateString("en-US", {
                                        year: "numeric",
                                        month: "short",
                                        day: "numeric",
                                    })
                                    : "—"}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl border border-gray-600 p-6">
                    <h3 className="text-xl font-bold text-white mb-6">🔗 Quick Links</h3>
                    <div className="space-y-3">
                        <Link
                            href="/"
                            className="block px-4 py-3 bg-gray-900 hover:bg-gray-700 text-white rounded-lg transition-colors border border-gray-600 hover:border-orange-400"
                        >
                            🏠 Back to Portfolio
                        </Link>
                        <button
                            onClick={handleSignOut}
                            className="w-full px-4 py-3 bg-red-900 hover:bg-red-800 text-red-100 rounded-lg transition-colors border border-red-600 hover:border-red-400 font-medium"
                        >
                            🚪 Sign Out
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainContent;