import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import {Button} from "@nextui-org/button";

type ProjectsProps = {
    nama: string;
    banner: string;
    logo: string;
    ukuranLogo: string;
    desc: string;
    link: string
};

const projectsCard: React.FC<ProjectsProps> = ({nama, banner, logo, desc, link, ukuranLogo}) => {
  return (
    <div className='flex flex-col gap-3 h-fit w-fit'>
        <div className='flex flex-col bg-gradient-glass gap-6 w-full md:w-[366px] lg:w-[500px] lg:h-[570px] md:h-[500px] h-fit rounded-2xl p-7 '>
            <div className='relative h-[220px] md:w-[310px] md:h-[193.75px] lg:w-[444px] lg:h-[277.5px] overflow-clip rounded-md'>
                <Image src={banner} alt={nama} className='object-cover' fill></Image>
            </div>
            
            <div className={ukuranLogo}>
                <Image src={logo} alt={nama} fill></Image> 
            </div>

            <div className='font-extralight text-[12px] lg:text-[14px] text-justify'>
                {desc}
            </div>
            <Link href={link}>
                <Button size="md" className="px-[24px] py-[8px] bg-gradient-button">
                    See details
                </Button>
            </Link>
        </div>
        
    </div>
    
  )
}

export default projectsCard;