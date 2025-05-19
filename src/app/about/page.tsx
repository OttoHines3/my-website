import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa6';
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
    return (
        <div className="grid grid-cols-1 m-20 md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto px-4">
            {/* Text Block */}
            <div>
                <h1 className="text-4xl font-bold mb-6">
                    I&aspos;m Otto Hines. I live in Chicago, where I build and trade with precision.
                </h1>

                <p className="mb-4 text-[#8f8f99]">
                    I’ve always had a love for systems — whether they’re built in code or revealed in markets. I started programming in high school and later studied Computer Science at the University of Michigan, drawn to the challenge of building things that are both elegant and functional.
                </p>
                <p className="mb-4 text-[#8f8f99]">
                    My early projects were nothing flashy — just tiny automations and scrappy frontends — but they taught me how to move fast, debug deeply, and keep learning. Since then, I’ve built everything from AI-connected journaling apps to trading dashboards that process options flow, volatility shifts, and real-time structure.
                </p>
                <p className="mb-4 text-[#8f8f99]">
                    These days, I spend most of my time designing and shipping full-stack web apps. I care about architecture, dev velocity, and clean abstractions — whether I’m building something for a client or myself.
                </p>
                <p className="text-[#8f8f99]">
                    Outside of software, I’m also an active trader. I trade micro futures using a strategy I developed by blending technical structure with behavioral patterns — and I’ve built many of the tools I use in that process from scratch. My goal across everything I do is simple: create things that are clean, fast, and meaningful.
                </p>
            </div>

            {/* Image + Social Block */}
            <div className="w-full max-w-[380px] mx-auto md:mx-0">
                <Image
                    src="/aboutpage.jpeg"
                    alt="picture"
                    width={380}
                    height={320}
                    className="rounded-2xl rotate-2 object-cover w-full mb-10"
                />

                {/* Social Links */}
                <div className="flex flex-col space-y-5 mb-6">
                    <Link
                        href="https://github.com/ottohines3"
                        target="_blank"
                        className="group flex items-center space-x-4"
                    >
                        <FaGithub className="text-[#8f8f99] group-hover:text-teal-400 transition" size={18} />
                        <span className="text-gray-300 group-hover:text-teal-400 transition">Follow on GitHub</span>
                    </Link>

                    <Link
                        href="https://www.linkedin.com/in/otto-hines-bb8951320"
                        target="_blank"
                        className="group flex items-center space-x-4"
                    >
                        <FaLinkedin className="text-[#8f8f99] group-hover:text-teal-400 transition" size={18} />
                        <span className="text-gray-300 group-hover:text-teal-400 transition">Follow on LinkedIn</span>
                    </Link>
                </div>

                {/* Divider */}
                <hr className="border-neutral-800 my-6" />

                {/* Email */}
                <div className="flex items-center space-x-4 group">
                    <FaEnvelope className="text-[#8f8f99] group-hover:text-teal-400 transition" size={18} />
                    <Link
                        href="mailto:ottohines1@gmail.com"
                        className="text-gray-300 group-hover:text-teal-400 transition"
                    >
                        ottohines1@gmail.com
                    </Link>
                </div>
            </div>
        </div>
    );
}