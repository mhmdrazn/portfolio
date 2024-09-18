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
        <div className='flex flex-col bg-gradient-glass gap-5 w-[366px] lg:w-[500px] lg:h-[530px] h-[450px] rounded-xl p-7'>
            <div className='relative w-[310px] h-[174.38px] lg:w-[444px] lg:h-[249.75px] overflow-clip'>
                <Image src={banner} alt={nama} fill></Image>
            </div>
            
            <div className={ukuranLogo}>
                <Image src={logo} alt={nama} fill></Image> 
            </div>

            <div className='font-extralight text-[12px] lg:text-[14px] text-justify'>
                {desc}
            </div>
            <div></div>
            <Link href={link}>
                <Button size="sm" className="px-[24px] py-[8px] bg-gradient-button">
                    See details
                </Button>
            </Link>
        </div>
        
    </div>
    
  )
}

export default projectsCard;