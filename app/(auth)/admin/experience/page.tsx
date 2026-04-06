import ExperienceMainContent from "@/components/pages/admin/experience/experienceMainContent"
import Header from "@/components/pages/admin/shared/header"

function Page() {
    return (
        <div className="flex flex-col bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen w-full text-white">

            <Header heading="Experience Management" description='Here you can manage your experience' />

            <ExperienceMainContent />

        </div>
    )
}

export default Page