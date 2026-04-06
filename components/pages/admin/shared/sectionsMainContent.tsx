import Section from "@/components/helpers/section"
import Description from "@/components/typography/description"
import Heading from "@/components/typography/heading"
import { IconBrandGithub, IconWorldWww } from "@tabler/icons-react";
import Link from "next/link";


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
                <Heading size="sm" className="font-bold text-white">{title}</Heading>
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md transition-colors">
                    Add new {title}
                </button>
            </div>
            <hr />
            <div>
                {data && data.length > 0 ? (
                    <>
                        {data.map((item) => (
                            <>
                            <div key={item.id} className="text-gray-300 mt-4 space-y-2 border border-gray-600 rounded-xl hover:border-orange-400 transition-all p-4">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <Heading size="sm" className="font-bold">
                                            {item.title}
                                        </Heading>
                                        <Description size="sm" className="text-orange-400">{item.institute}</Description>
                                    </div>
                                    <Description size="sm" className="text-gray-300">
                                        {item.start_date ? `${item.start_date} - ${item.end_date}` : `${item.end_date}`}
                                    </Description>
                                </div>
                                <Description size="sm" className="text-gray-300 mt-2">
                                    {item.description}
                                </Description>
                                {(item.live_demo_link || item.github_link) && (
                                    <div className="flex gap-4">
                                        {item.live_demo_link && (
                                            <Link href={item.live_demo_link || "#"} target="_blank" className="text-orange-400 hover:text-orange-300 transition-colors">
                                                <IconWorldWww/>
                                            </Link>
                                        )}
                                        {item.github_link && (
                                            <Link href={item.github_link || "#"} target="_blank" className="text-orange-400 hover:text-orange-300 transition-colors">
                                                <IconBrandGithub/>
                                            </Link>
                                        )}
                                    </div>
                                )}
                            </div>
                            </>
                        ))}
                    </>
                ) : (
                    <p className="text-gray-400 py-4">You haven't added any {title.toLowerCase()} yet. Start by clicking the "Add New {title}" button above!</p>
                )}
            </div >
           
        </Section>
    )
}

export default SectionsMainContent