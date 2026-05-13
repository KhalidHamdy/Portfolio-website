"use client";
import Section from "@/components/helpers/section";
import Description from "@/components/typography/description";
import Heading from "@/components/typography/heading";
import { IconBrandGithub, IconWorldWww, IconEdit, IconTrash } from "@tabler/icons-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import AddItemDialog from "./addItemDialog";

interface SectionProps {
  title: string;
  data: {
    id: number;
    title: string;
    institute: string;
    start_date?: string;
    end_date: string;
    description: string;
    live_demo_link?: string;
    github_link?: string;
  }[];
}
function SectionsMainContent({ title, data }: SectionProps) {
  return (
    <Section className="my-8 p-8 bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl p-6 border border-gray-600 hover:border-orange-400 transition-all hover:shadow-lg hover:shadow-orange-500/20 mb-4">
      <div className="flex justify-between items-center pb-4">
        <Heading size="sm" className="font-bold text-white">
          {title}
        </Heading>
        <Dialog>
          <AddItemDialog title={title} />
          <DialogTrigger asChild>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md transition-colors self-end">
              Add new {title}
            </Button>
          </DialogTrigger>
        </Dialog>
      </div>
      <hr />
      <div>
        {data && data.length > 0 ? (
          <>
            {data.map((item) => (
              <div key={item.id}>
                <div className="group text-gray-300 mt-4 space-y-2 border border-gray-600 rounded-xl hover:border-orange-400 transition-all p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <Heading size="sm" className="font-bold">
                        {item.title}
                      </Heading>
                      <Description size="sm" className="text-orange-400">
                        {item.institute}
                      </Description>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <button className="p-1.5 bg-gray-700 hover:bg-gray-600 rounded-md text-gray-300 hover:text-white transition-colors shadow-sm" title="Edit">
                          <IconEdit size={18} />
                        </button>
                        <button className="p-1.5 bg-red-900/40 hover:bg-red-900/80 rounded-md text-red-400 hover:text-red-300 transition-colors shadow-sm" title="Delete">
                          <IconTrash size={18} />
                        </button>
                      </div>
                      <Description size="sm" className="text-gray-300 shrink-0">
                        {item.start_date
                          ? `${item.start_date} - ${item.end_date}`
                          : `${item.end_date}`}
                      </Description>
                    </div>
                  </div>
                  <Description size="sm" className="text-gray-300 mt-2">
                    {item.description}
                  </Description>
                  {(item.live_demo_link || item.github_link) && (
                    <div className="flex gap-4">
                      {item.live_demo_link && (
                        <Link
                          href={item.live_demo_link || "#"}
                          target="_blank"
                          className="text-orange-400 hover:text-orange-300 transition-colors"
                        >
                          <IconWorldWww />
                        </Link>
                      )}
                      {item.github_link && (
                        <Link
                          href={item.github_link || "#"}
                          target="_blank"
                          className="text-orange-400 hover:text-orange-300 transition-colors"
                        >
                          <IconBrandGithub />
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </>
        ) : (
          <p className="text-gray-400 py-4">
            You haven't added any {title.toLowerCase()} yet. Start by clicking
            the "Add New {title}" button above!
          </p>
        )}
      </div>
    </Section>
  );
}

export default SectionsMainContent;
