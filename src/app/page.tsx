import Image from 'next/image';
import { FaGithub, FaInstagram, FaLinkedin, FaXTwitter } from 'react-icons/fa6';


export default function Home() {
  return (
    <div className="flex flex-col m-20 max-w-xl space-y-5">
      <Image
        src="/profileIMG.jpg"
        alt='Profile Picture'
        width={64}
        height={64}
        className='rounded-full'
      />
      <h1 className="text-4xl font-bold ">Software Developer, Trader, and <br />creative builder.</h1>
      <p className="text-[#8f8f99]">I’m Otto, a full-stack developer and trader with a background in economics,
        currently based in Chicago. I build clean, high-impact web applications and develop trading systems that
        blend structure with intuition. Whether I’m refining an options model or designing a user experience,
        I care about clarity, performance, and results.</p>
      <div className="flex gap-4  text-gray-400">
        <a href="#" className="hover:text-white"><FaXTwitter size={20} /></a>
        <a href="#" className="hover:text-white"><FaInstagram size={20} /></a>
        <a href="#" className="hover:text-white"><FaGithub size={20} /></a>
        <a href="#" className="hover:text-white"><FaLinkedin size={20} /></a>
      </div>
    </div>


  );
}
