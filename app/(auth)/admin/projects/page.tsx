import ProjectMainContent from "@/components/pages/admin/projects/projectMainContent"
import Header from "@/components/pages/admin/shared/header"

function Page() {
  return (

     <div className="flex flex-col bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen w-full text-white">

        <Header heading="Projects Management" description='Here you can manage your projects' />
        <ProjectMainContent />
      </div>
  )
}

export default Page