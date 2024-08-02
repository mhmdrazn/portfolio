import Image from "next/image";
import Link from "next/link";

export default function hero() {
    return (
        <main>
            <section id="home" className = "w-full h-[990px] bg-black items-center flex justify-center">
                {/* <div className="justify-center items-center w-[803px] h-[386px] absolute -z-0">
                    <Image src="/hero/web.svg" alt="web" fill></Image>
                </div>
                <div className="absolute h-[143.21px] w-[374px]">
                    <Image src="/hero/code.png" alt="code" fill></Image>
                </div> */}
                <div className="w-[1347.32px] h-[478px] absolute -z-0 place-self-center mb-24">
                    <Image src="/hero/hero-bg.png" alt="hero" fill></Image>
                </div>

                <div className="w-[1313px] h-[84px] absolute place-self-start mt-[370px]">
                    <Image src="/hero/a-de.png" alt="ade" fill></Image>
                </div>

                <div className="w-[1313px] h-[79px] absolute mb-8">
                    <Image src="/hero/dev.svg" alt="dev" fill></Image>
                </div>

                <div className="container flex justify-center z-20 place-self-end mb-40">
                    <div className="space-y-6 justify-center">
                        <div className = "flex-row">
                            <h1 className = "text-[72px] font-extrabold text-shadow-white">Design. Develop. Delight</h1>
                            <div className = " items-center justify-center">
                                <p className = "text-[36px] font-medium justify-center text-center">I am <span className="text-gradient-text font-semibold">Muhammad Razan</span></p>
                                <p className = "text-[28px] font-medium justify-center text-center">A passionate UI/UX Designer</p>
                            </div>
                        </div>

                        <div className="space-x-4 flex justify-center">
                            <Link href="https://drive.google.com/uc?export=download&id=1MTfq-1S3hDR8pdZ0bQFNoxDhGcc6zcin">
                                <button className="px-[27px] py-[8px] rounded-[8px] bg-gradient-glass text-[#ABABAB] hover:bg-[#999999] ease-in-out duration-400 hover:text-[#121212] font-normal" id="portfolio">Portfolio</button>
                            </Link>
                            <Link href="https://drive.google.com/uc?export=download&id=1_QeC48sM0Mtt9k8J0UGyCVvhDEdYoAeD">
                                <button className="px-[27px] py-[8px] rounded-[8px] bg-gradient-glass text-[#ABABAB] hover:bg-[#999999] ease-in-out duration-400 hover:text-[#121212] font-normal" id="cv">CV</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}