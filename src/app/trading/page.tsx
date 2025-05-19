import Link from "next/link";
import { FaArrowRight, FaChartLine } from 'react-icons/fa';

export default function Trading() {
    return (
        <div className="min-h-screen bg-[#18181c] flex flex-col items-center justify-center px-6 text-center">
            <FaChartLine size={48} className="text-teal-400 mb-6" />

            <h1 className="text-4xl font-bold mb-4 text-white">Trading Page Coming Soon</h1>

            <p className="text-[#8f8f99] max-w-xl mb-6">
                I’m working on a deep dive into my trading strategies, tools, and dashboards —
                all grounded in data, structure, and discipline.
            </p>

            <Link
                href="https://www.tradingview.com/u/ottohines1"
                target="_blank"
                className="inline-flex items-center space-x-2 text-teal-400 hover:underline"
            >
                <span>Follow me on TradingView</span>
                <FaArrowRight size={14} />
            </Link>
        </div>
    );
}