import EducationMainContent from "@/components/pages/admin/education/educationMainContent"
import Header from "@/components/pages/admin/shared/header"

function Page() {
    return (
         <div className="flex flex-col bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen w-full text-white">

            <Header heading="Education Management" description='Here you can manage your education' />

            <EducationMainContent />

        </div>
    )
}

export default Page