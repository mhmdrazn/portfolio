import Image from "next/image";
import Link from "next/link";

export default function hero() {
    return (
        <main>
            <section id="home" className = "w-full h-screen bg-black items-center flex justify-center">
                <div className="h-[581px] w-[1208.66px] absolute -z-0">
                    <Image src="/hero/web.svg" alt="web" fill></Image>
                </div>

                <div className="h-[293px] w-[1480px] absolute -z-0 mb-32">
                    <Image src="/hero/island.svg" alt="island" fill></Image>
                </div>

                <div className="container flex justify-center z-20 place-self-end mb-32">
                    <div className="space-y-6 justify-center">
                        <div className = "flex-row space-y-1">
                            <h1 className = "text-[72px] font-extrabold text-shadow-white">Design. Develop. Delight</h1>
                            <div className = " items-center justify-center">
                                <p className = "text-[28px] font-medium justify-center text-center">I am <span>Muhammad Razan</span></p>
                                <p className = "text-[24px] font-medium justify-center text-center">A passionate UI/UX Designer</p>
                            </div>
                        </div>

                        <div className="space-x-4 flex justify-center">
                            <Link href="https://drive.google.com/uc?export=download&id=1MTfq-1S3hDR8pdZ0bQFNoxDhGcc6zcin">
                                <button className="w-32 px-[16px] py-[8px] rounded-[8px] bg-gradient-glass text-[#ABABAB] hover:bg-[#999999] ease-in-out duration-400 hover:text-[#121212] font-normal" id="portfolio">Portfolio</button>
                            </Link>
                            <Link href="https://drive.google.com/uc?export=download&id=1_QeC48sM0Mtt9k8J0UGyCVvhDEdYoAeD">
                                <button className="w-32 px-[16px] py-[8px] rounded-[8px] bg-gradient-glass text-[#ABABAB] hover:bg-[#999999] ease-in-out duration-400 hover:text-[#121212] font-normal" id="cv">CV</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}