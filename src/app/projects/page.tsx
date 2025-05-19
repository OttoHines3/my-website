import Link from "next/link";
import { FolderKanban, Code, Brain, MonitorSmartphone, Rocket, LineChart } from 'lucide-react';


const items = [
    {
        title: "Iv-tracker",
        description: "Tracks implied volatility across strikes and expirations for any ticker.",
        link: "https://github.com/OttoHines3/iv-tracker",
        icon: <LineChart size={20} className="text-green-400" />
    },
    {
        title: "Adopt-me",
        description: "A mock pet adoption app built to practice React routing and state.",
        link: "https://github.com/OttoHines3/adopt-me",
        icon: <MonitorSmartphone size={20} className="text-indigo-400" />
    },
    {
        title: "Vintel",
        description: "Landing page for an automotive diagnostics company with purchase flow.",
        link: "https://github.com/OttoHines3/vintel", // link to live page if it's public
        icon: <Rocket size={20} className="text-red-400" />
    },
    {
        title: "Mood",
        description: "AI-powered journal that tracks your mood based on daily entries.",
        link: "https://github.com/OttoHines3/mood",
        icon: <Brain size={20} className="text-fuchsia-400" />
    },
    {
        title: "Venture-app",
        description: "Tool for drafting and organizing startup ideas and pitches.",
        link: "https://github.com/OttoHines3/venture-app",
        icon: <FolderKanban size={20} className="text-slate-400" />
    },
    {
        title: "Td-app",
        description: "Monitors open interest changes for all options on a given ticker.",
        link: "https://github.com/OttoHines3/td-app",
        icon: <LineChart size={20} className="text-emerald-400" />
    },
];

export default function Projects() {
    return (
        <div>
            <div className="flex flex-col max-w-xl m-20 space-y-7 sm:text-left ">
                <h1 className=" font-semibold text-4xl font-sans ">
                    Projects I have built to sharpen my skills and explore ideas.
                </h1>
                <p className="text-[#8f8f99]">From full stack web apps to trading tools and micro experiments, these are some of the things
                    I&apos;ve created to solve problems, test concepts, or just have fun building. Some are polished,
                    others are still evolving - but all of them reflect my curiosity and obsession with clean,
                    purposeful development.</p>
            </div>
            <div className="grid grid-cols-3 grid-row-2 m-20 space-y-10 space-x-10 sm:grid-cols-2 lg:grid-cols-3 ">
                {items.map((obj, index) => (
                    <div className="flex flex-col space-y-3 hover:bg-[#232323] rounded-xl p-4 hover:shadow-lg hover:scale-[1.01] hover:-translate-y-1" key={index}>
                        <div className="w-fit p-2 rounded-full ">
                            {obj.icon}
                        </div>
                        <h2 className="text-lg">{obj.title}</h2>
                        <p className="text-[#8f8f99]"> {obj.description} </p>

                        <Link href={obj.link} className="flex flex-col sm:flex-row items-center justify-start gap-1 hover:text-green-300 text-sm mt-2"> <Code size={15} className="shrink-0" /> <p className="break-words">github.com</p></Link>
                    </div>
                )

                )}
            </div>
        </div>
    )
}