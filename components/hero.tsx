import Image from "next/image";
import Link from "next/link";

export default function hero() {
    return (
        <main>
            <section id="home" className = "w-full h-[920px] items-center flex justify-center">
                <div className="container flex items-center justify-center self-center">
                <div className="space-y-10">
                    <div className = "flex-row">
                    <h1 className = "text-[72px] font-extrabold">Hi Over There!</h1>
                    <div className = "items-center justify-center">
                        <p className = "text-[48px] font-medium">I am Muhammad Razan. </p>
                        <p className = "text-[20px] font-regular">A passionate UI/UX Designer</p>
                    </div>
                    </div>

                    <div className="space-x-4">
                    <Link href="https://drive.google.com/uc?export=download&id=1MTfq-1S3hDR8pdZ0bQFNoxDhGcc6zcin">
                        <button className="px-[27px] py-[8px] rounded-[8px] bg-gradient-glass text-[#ABABAB] hover:bg-[#999999] ease-in-out duration-400 hover:text-[#121212] font-normal" id="portfolio">Portfolio</button>
                    </Link>
                    <Link href="https://drive.google.com/uc?export=download&id=1_QeC48sM0Mtt9k8J0UGyCVvhDEdYoAeD">
                        <button className="px-[27px] py-[8px] rounded-[8px] bg-gradient-glass text-[#ABABAB] hover:bg-[#999999] ease-in-out duration-400 hover:text-[#121212] font-normal" id="cv">CV</button>
                    </Link>
                    </div>
                </div>
                <div className = "relative w-[360px] h-[360px]">
                    <Image src="pentool.svg" alt="pentool" fill></Image>
                </div>
                </div>
            </section>
        </main>
    )
}