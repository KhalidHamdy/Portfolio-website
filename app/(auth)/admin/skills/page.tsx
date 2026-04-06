"use client";
import Header from '@/components/pages/admin/shared/header';
import SkillsMainContent from '@/components/pages/admin/skills/skillsMainContent';

function SkillsPage() {
    return (
         <div className="flex flex-col bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen w-full text-white">

        <Header heading="Skills Management" description='Here you can manage your skills' />

      <SkillsMainContent/>
    </div>
    )
}

export default SkillsPage;