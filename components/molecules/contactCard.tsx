import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { platform } from 'os';

type ContactProps = {
  href: string;
  img: string;
  username: string;
  platform: string
};

const contactCard: React.FC<ContactProps> = ({href, img, username, platform}) => {
  return (
    <Link href={href}>
      <button className="w-[240px] md:w-[310px] md:space-y-[12px] space-y-1 px-[16px] py-[16px] h-fit bg-black justify-center items-center rounded-[12px] hover:bg-[#2E2E2E] shadow-xl ease-in-out duration-300">
        <div className="flex gap-[24px] py-1 justify-center">
          <div className="hidden md:flex relative w-[30px] h-[30px] self-center">
            <Image src={img} alt={username} fill></Image>
          </div>
          <div className="flex md:hidden relative w-[20px] h-[20px] self-center">
            <Image src={img} alt={username} fill></Image>
          </div>
          <div className="font-bold md:text-[20px] text-white text-md">{platform}</div>
        </div>
        <div className="text-[#696969] md:text-[16px] text-sm">
          {username}
        </div>
      </button>
    </Link>
  )
}

export default contactCard