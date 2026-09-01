'use client'
import { FaBriefcase, FaDownload, FaMicrosoft, FaBuilding, FaCode } from 'react-icons/fa';
import { motion } from 'framer-motion';

const JOBS = [
    {
        company: 'Cass & York',
        title: 'Software Engineer',
        period: '2023 – 2025',
        icon: <FaCode className="text-green-400" />,
        description:
            'Shipped web apps and marketing sites in React, Next.js, and Remix for logistics, automotive, and construction clients — including full-stack features on a logistics platform backed by PostgreSQL.'
    },
    {
        company: 'Microsoft',
        title: 'Software Engineer Intern',
        period: 'Summer 2022',
        icon: <FaMicrosoft className="text-blue-500" />,
        description:
            'Built a cross-platform To-Do integration for Microsoft Teams and Dynamics 365 in React and TypeScript, plus a reusable component library adopted across multiple Teams extensions.'
    },
    {
        company: 'Equity Residential',
        title: 'IT Support Analyst',
        period: '2016 – 2018',
        icon: <FaBuilding className="text-purple-400" />,
        description:
            'Supported 200+ corporate employees across Windows deployments, system reimaging, and hardware troubleshooting, and hardened security with Symantec Encryption.'
    }
];

export default function WorkHistory() {
    return (
        <div className="p-4 sm:p-6 border border-gray-800 rounded-2xl mt-10">
            <div className="flex items-center space-x-2 mb-6">
                <FaBriefcase className="text-xl text-gray-400" />
                <h3 className="text-lg font-semibold">Work Experience</h3>
            </div>

            <div className="relative pl-6 before:absolute before:top-0 before:left-5 before:w-0.5 before:h-full before:bg-gray-700">
                <ul className="space-y-10">
                    {JOBS.map(({ company, title, period, icon, description }, index) => (
                        <motion.li
                            key={company}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="relative group transition-transform duration-300 transform hover:-translate-y-1"
                        >
                            <div className="absolute left-[-6px] top-1.5 w-6 h-6 flex items-center justify-center rounded-full bg-gray-900 border border-gray-700 shadow-md">
                                {icon}
                            </div>
                            <div className="ml-10">
                                <h4 className="font-semibold text-white">{company}</h4>
                                <p className="text-sm text-gray-400">{title}</p>
                                <p className="text-sm text-gray-500 italic">{period}</p>
                                <p className="text-sm text-gray-400 mt-1">{description}</p>
                            </div>
                        </motion.li>
                    ))}
                </ul>
            </div>

            <a
                href="/Resume_Otto_Hines.pdf"
                download
                className="mt-12 inline-flex items-center justify-center w-full gap-2 px-4 py-2 border border-gray-800 rounded-lg hover:bg-gray-800 hover:border-gray-700 transition"
            >
                Download CV <FaDownload />
            </a>
        </div>
    );
}
