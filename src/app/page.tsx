'use client'
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa6';
import WorkHistory from '@/components/WorkHistory';
import MatrixStream from '@/components/MatrixStream';
import { motion } from 'framer-motion'


export default function Home() {
  return (
    <div className="m-6 sm:m-12 md:m-20">
      <div className="flex flex-col max-w-xl space-y-5">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <Image
            src="/profileIMG.jpg"
            alt="Otto Hines"
            width={64}
            height={64}
            priority
            className="rounded-full mb-6"
          />

          <h1 className="text-3xl sm:text-4xl font-semibold font-sans">
            Software engineer, trader, and <br className="hidden sm:block" />creative builder.
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: 'easeOut' }}
        >
          <p className="text-[#8f8f99]">
            I&apos;m Otto, a full-stack engineer and trader based in Chicago. I studied Computer
            Science and Information at the University of Michigan, and I&apos;ve since shipped
            production web applications at Microsoft and Cass &amp; York. I build clean,
            high-impact web apps and the trading tools I use myself. Whether I&apos;m refining an
            options model or designing a user experience, I care about clarity, performance, and
            results.
          </p>

          <div className="flex items-center gap-6 text-gray-400 mt-6">
            <a
              href="https://github.com/ottohines3"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Otto Hines on GitHub"
              className="hover:text-teal-400 transition-colors"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/otto-hines-bb8951320"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Otto Hines on LinkedIn"
              className="hover:text-teal-400 transition-colors"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="mailto:ottohines1@gmail.com"
              aria-label="Email Otto Hines"
              className="hover:text-teal-400 transition-colors"
            >
              <FaEnvelope size={20} />
            </a>
          </div>
        </motion.div>
      </div>

      <div className="mt-12">
        <MatrixStream />
      </div>
      <WorkHistory />
    </div>
  );
}
