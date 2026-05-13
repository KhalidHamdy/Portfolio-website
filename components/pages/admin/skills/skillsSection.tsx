import Heading from "@/components/typography/heading";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import AddSkillDialog from "./addSkillDialog";
import { IconEdit, IconTrash } from "@tabler/icons-react";

interface SkillsSectionProps {
  title: string;
  skills?: string[]; // Optional prop for skills data
}

function SkilsSection({ title, skills }: SkillsSectionProps) {
  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl p-6 border border-gray-600 hover:border-orange-400 transition-all hover:shadow-lg hover:shadow-orange-500/20 mb-4">
      <div className="flex justify-between items-center pb-4">
        <Heading size="sm" className="font-bold text-white">
          {title} Skills
        </Heading>
        <Dialog>
          <AddSkillDialog title={title} />
          <DialogTrigger asChild>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md transition-colors self-end">
              Add new {title}
            </Button>
          </DialogTrigger>
        </Dialog>
      </div>
      <hr />
      <div>
        {skills && skills.length > 0 ? (
          <ul className="mt-4 space-y-2">
            {skills.map((skill, index) => (
              <li
                key={index}
                className="group flex justify-between items-center text-gray-300 w-full border border-gray-600 rounded-md px-4 py-2 hover:bg-gray-600 transition-colors"
              >
                <span>{skill}</span>
                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <button className="p-1 bg-gray-500 hover:bg-gray-400 rounded-md text-white transition-colors shadow-sm" title="Edit">
                    <IconEdit size={16} />
                  </button>
                  <button className="p-1 bg-red-600/80 hover:bg-red-500 rounded-md text-white transition-colors shadow-sm" title="Delete">
                    <IconTrash size={16} />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-400 py-4">
            You haven't added any skills yet. Start by clicking the "Add New
            Skill" button above!
          </p>
        )}
      </div>
    </div>
  );
}

export default SkilsSection;
