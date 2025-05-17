import { FaBriefcase, FaDownload } from 'react-icons/fa';

const JOBS = [
    {
        company: 'Cass&York',
        title: 'Software Engineer',
        period: 'Jan 2023 – Present'
    },
    {
        company: 'Microsoft',
        title: 'Software Engineer Intern',
        period: 'May 2022 – Aug 2022'
    },
    {
        company: 'Equity Residential',
        title: 'IT Support Analyst',
        period: 'Aug 2016 – Jun 2017, Jun 2018 – Aug 2018'
    }
];

export default function WorkHistory() {
    return (
        <div className="p-6 border border-gray-800 rounded-2xl space-y-4 mt-10">
            <div className="flex items-center space-x-2">
                <FaBriefcase className="text-xl text-gray-400" />
                <h3 className="text-lg font-semibold">Work Experience</h3>
            </div>

            <ul className="space-y-4">
                {JOBS.map(({ company, title, period }) => (
                    <li key={company} className="flex justify-between">
                        <div>
                            <p className="font-medium">{company}</p>
                            <p className="text-sm text-gray-400">{title}</p>
                        </div>
                        <span className="text-sm text-gray-400">{period}</span>
                    </li>
                ))}
            </ul>

            <a
                href="/Resume(5-17-25).pdf"
                download
                className="mt-6 inline-flex items-center justify-center w-full gap-2 px-4 py-2 border border-gray-700 rounded-lg hover:bg-gray-800 transition"
            >
                Download CV <FaDownload />
            </a>
        </div>
    );
}