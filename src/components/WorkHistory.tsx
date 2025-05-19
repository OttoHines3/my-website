'use client'
import { FaBriefcase, FaDownload, FaMicrosoft, FaBuilding, FaCode } from 'react-icons/fa';
import { motion } from 'framer-motion';

const JOBS = [
    {
        company: 'Cass&York',
        title: 'Software Engineer',
        period: 'Jan 2023 – Present',
        icon: <FaCode className="text-green-400" />,
        description: 'Built performant marketing sites and internal tools using Next.js and Go.'
    },
    {
        company: 'Microsoft',
        title: 'Software Engineer Intern',
        period: 'May 2022 – Aug 2022',
        icon: <FaMicrosoft className="text-blue-500" />,
        description: 'Worked on feature improvements and debugging for internal developer tools.'
    },
    {
        company: 'Equity Residential',
        title: 'IT Support Analyst',
        period: 'Aug 2016 – Jun 2017, Jun 2018 – Aug 2018',
        icon: <FaBuilding className="text-purple-400" />,
        description: 'Provided tech support and maintained internal systems for enterprise users.'
    }
];

export default function WorkHistory() {
    return (
        <div className="p-6 border border-gray-800 rounded-2xl mt-10">
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
                            className="relative group transition-transform duration-300 transform hover:-translate-y-1 hover:shadow-lg"
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
                href="/Resume(5-17-25).pdf"
                download
                className="mt-15 inline-flex items-center justify-center w-full gap-2 px-4 py-2   rounded-lg hover:bg-gray-800 transition"
            >
                Download CV <FaDownload />
            </a>
        </div>
    );
}