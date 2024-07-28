import Image from "next/image";
import Link from "next/link";

export default function projects() {
    return (
        <main>
            <section id="projects" className="pt-[128px] pb-[64px] justify-center items-center flex-col space-y-6">
                <h1 className="text-center font-extrabold text-[64px] text-[#7791FF]">My Projects</h1>
                <div className="text-center font-thin text-[16px]">Below is some my highlighted project.</div>
                <div className="flex justify-center items-center gap-[96px] pt-8">
                    <div className="relative h-[45px] w-[236.61px]">
                        <Image src="/projects/loka.png" alt="loka" fill></Image> 
                    </div>
                    <div className="relative h-[45px] w-[251.9px]">
                        <Image src="/projects/buangbijak.png" alt="buangbijak" fill objectFit="contain"></Image>
                    </div>
                    <div className="relative w-[131px] h-[45px]">
                        <Image src="/projects/uride.png" alt="uride" fill></Image>
                    </div>
                    <div className="relative h-[45px] w-[137.84px]">
                        <Image src="/projects/aimo.png" alt="aimo" fill></Image>
                    </div>
                </div>

                {/* showcase */}
                <div className="flex flex-col justify-center items-center py-12 space-y-9">
                    <div className="font-normal text-[#ABABAB] w-[920px] text-center">BuangBijak, a recycling and waste management application. BuangBijak aims to connect users with recycling services to promote environmental cleanliness by facilitating the collection, classification, and recycling of unused items.</div>
                    <div className="relative h-[487px] w-[865px] rounded-3xl justify-center shadow-3xl shadow-[#525252]">
                        <Image src="/projects/show-buangbijak (1).png" alt="showbj" fill></Image>
                    </div>
                </div>
                
            </section>
        </main>
    )
}