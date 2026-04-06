import CertificationMainContent from "@/components/pages/admin/certification/certificationMainContent"
import Header from "@/components/pages/admin/shared/header"

function Page() {
    return (

        <div className="flex flex-col bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen w-full text-white">

            <Header heading="Certification Management" description='Here you can manage your certifications' />
            <CertificationMainContent />

        </div>
     )
}

export default Page