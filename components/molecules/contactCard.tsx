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
      <button className="w-[310px] space-y-[12px] px-[16px] py-[16px] h-fit bg-black justify-center items-center rounded-[12px] hover:bg-[#2E2E2E] shadow-xl ease-in-out duration-300">
        <div className="flex gap-[24px] justify-center">
          <div className="relative w-[30px] h-[30px] self-center">
            <Image src={img} alt={username} fill></Image>
          </div>
          <div className="font-bold text-[24px]">{platform}</div>
        </div>
        <div className="text-[#696969]">
          @{username}
        </div>
      </button>
    </Link>
  )
}

export default contactCard