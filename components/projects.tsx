import Image from "next/image";
import Link from "next/link";

export default function projects() {
    return (
        <main id="projects">

            <section id="buangbijak" className="pt-[64px] pb-[64px] justify-center items-center flex-col">
                <div className="pt-16 pb-16 space-y-6">
                    <h1 className="text-center font-extrabold text-[64px] text-[#7791FF]">My Projects</h1>
                    <div className="text-center font-thin text-[16px]">Below is some of my highlighted project.</div>
                    <div className="flex justify-center items-center gap-[96px]">
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
                </div>

                {/* showcase */}

                {/* lokantara */}
                <div className="flex flex-col justify-center items-center gap-8 py-4">
                    <div className="flex flex-row justify-center items-center py-6 space-x-24">
                        <div className="relative h-[491.72px] w-[400px] rounded-3xl justify-center shadow-3xl shadow-[#525252]">
                            <Image src="/projects/show-lokantara.png" alt="showloka" fill></Image>
                        </div>
                        <div className="flex-col items-start space-y-6">
                            <div className="relative h-[45px] w-[236.61px]">
                                <Image src="/projects/loka.png" alt="loka" fill></Image> 
                            </div>
                            <p className="font-normal text-[#ABABAB] w-[590px] text-justify">Focusing on the Nusantara subtheme, this app offers unforgettable travel experiences and promotes unique  destinations across Indonesia. Lokantara provides up-to-date information on tourist spots, cultural richness, and local cuisine, supporting domestic tourism and fostering pride in Indonesia's heritage. 
                            </p>
                            <p className="font-normal text-[#ABABAB] w-[590px] text-justify">
                                Lokantara is an online tour platform for local and international travelers in Indonesia, offering interactive and gamified travel experiences. It guides travelers to iconic spots with gamified routes and includes features like a translator, currency calculator, nearby friends, and a one-click emergency assistance.
                            </p>
                            <p className="font-normal text-[#ABABAB] w-[590px] text-justify">
                                The platform also provides event information and a marketplace where users can exchange points earned from visiting attractions and completing quests for local Indonesian crafts, enhancing the travel experience with engaging and practical tools.
                            </p>
                            <Link href="">
                                <button id="prototype" className="mt-6 flex place-content-center gap-2 px-[24px] py-[8px] rounded-[8px] bg-[#525252] text-[#ABABAB] hover:bg-[#999999] ease-in-out duration-400 hover:text-[#121212] font-medium">
                                    <div className="h-[23px]">
                                        Prototype
                                    </div>
                                    <div className="relative self-center h-[15px] w-[15px]">
                                        <Image src="/export.svg" alt="export" fill></Image>
                                    </div>
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className="mx-auto relative w-[1000px] h-[562.5px]">
                        <Image src="/projects/page-loka.png" alt="pageloka" fill></Image>
                    </div>
                </div>

                {/* buangbijak */}
                <div className="flex flex-col justify-center items-center gap-8 py-4">
                    <div className="flex flex-row justify-center items-center py-6 space-x-[54px]">
                    <div className="flex-col items-start space-y-6">
                            <div className="relative h-[45px] w-[236px]">
                                <Image src="/projects/buangbijak.png" alt="buangbiijak" fill></Image> 
                            </div>
                            <p className="font-normal text-[#ABABAB] w-[500px] text-justify">
                                BuangBijak is a mobile application designed to promote sustainable waste management and environmental cleanliness. By connecting users with recycling services and providing rewards in the form of points for every waste collection, BuangBijak encourages the creation of a cleaner environment. The app features an on-demand service for garbage collectors, making waste disposal more efficient and accessible. 
                            </p>
                            <p className="font-normal text-[#ABABAB] w-[500px] text-justify">
                                Additionally, BuangBijak offers a platform for users to share or sell used items that are still in good condition, further reducing the accumulation of waste. Through these comprehensive features, BuangBijak aims to facilitate the collection, classification, and recycling of unused items, fostering a more sustainable and eco-friendly community.                            
                            </p>
                            <Link href="https://intip.in/PrototypeBuangBijak">
                                <button id="prototype" className="mt-6 flex place-content-center gap-2 px-[24px] py-[8px] rounded-[8px] bg-[#525252] text-[#ABABAB] hover:bg-[#999999] ease-in-out duration-400 hover:text-[#121212] font-medium">
                                    <div className="h-[23px]">
                                        Prototype
                                    </div>
                                    <div className="relative self-center h-[15px] w-[15px]">
                                        <Image src="/export.svg" alt="export" fill></Image>
                                    </div>
                                </button>
                            </Link>
                        </div>
                        <div className="relative h-[514.6px] w-[532px] rounded-3xl justify-center shadow-3xl shadow-[#525252]">
                            <Image src="/projects/show-buangbijak.png" alt="showbubij" fill></Image>
                        </div>
                    </div>

                    <div className="mx-auto relative w-[1000px] h-[562.5px]">
                        <Image src="/projects/page-buangbijak.png" alt="pagebubij" fill></Image>
                    </div>
                </div>

                {/* URide */}
                <div className="flex flex-col justify-center items-center gap-8 py-4">
                    <div className="flex flex-row justify-center items-center py-12 space-x-[64px]">
                        <div className="flex-col items-start space-y-6">
                            <div className="relative h-[45px] w-[131px]">
                                <Image src="/projects/uride.png" alt="uride" fill></Image> 
                            </div>
                            <p className="font-normal text-[#ABABAB] w-[421px] text-justify">
                                URide addresses common challenges faced by motor vehicle users in Indonesia, offering on-demand repair services and vehicle health monitoring. It aims to enhance awareness of routine maintenance and provide efficient access to skilled mechanics, promoting safer and more reliable driving experiences.                              
                            </p>
                            <p className="font-normal text-[#ABABAB] w-[421px] text-justify">
                            URide also fosters opportunities for workshop businesses while ensuring transparent pricing and quality repairs, thereby creating a comprehensive solution for motor vehicle maintenance and assistance.
                            </p>
                            <Link href="https://www.figma.com/proto/irgoRWbKsUTcinAQKS0K2D/URide?type=design&node-id=75-661&t=I4ODSpyIZ2bMxR9T-0&scaling=scale-down&page-id=75%3A661&starting-point-node-id=579%3A1668 ">
                                <button id="prototype" className="mt-6 flex place-content-center gap-2 px-[24px] py-[8px] rounded-[8px] bg-[#525252] text-[#ABABAB] hover:bg-[#999999] ease-in-out duration-400 hover:text-[#121212] font-medium">
                                    <div className="h-[23px]">
                                        Prototype
                                    </div>
                                    <div className="relative self-center h-[15px] w-[15px]">
                                        <Image src="/export.svg" alt="export" fill></Image>
                                    </div>
                                </button>
                            </Link>
                        </div>
                        <div className="relative h-[382px] w-[601px] rounded-3xl justify-center shadow-3xl shadow-[#525252]">
                            <Image src="/projects/show-uride.png" alt="showuride" fill></Image>
                        </div>
                    </div>

                    <div className="mx-auto relative w-[1000px] h-[562.5px]">
                        <Image src="/projects/page-buangbijak.png" alt="pagebubij" fill></Image>
                    </div>
                </div>
            </section>
        </main>
    )
}