"use client";
import { useTheme } from "next-themes";
import ShineBorder from "@/components/magicui/shine-border";

import Image from "next/image";
import Link from "next/link";
import {Button} from "@nextui-org/button";
import { Tabs } from "@/components/ui/tab";

export default function TabsDemo() {
    const theme = useTheme();
    const tabs = [
        {
        title:<div className="relative h-[25px] w-[131.45px]">
                    <Image src="/projects/loka.png" alt="loka" fill></Image> 
                </div>,
        value: "lokantara",
        content: (
            <ShineBorder 
                className="lg:w-full md:w-fit overflow-hidden relative h-fit p-10 text-xl md:text-4xl font-bold gap-4 place-items-center"
                color={["#7BC0FF"]}>
                <LokaImg />
            </ShineBorder>
        ),
        },
        {
        title:<div className="relative h-[25px] w-[139.94px]">
                    <Image src="/projects/buangbijak.png" alt="buangbijak" fill objectFit="contain"></Image>
                </div>,
        value: "buangbijak",
        content: (
            <ShineBorder 
                className="lg:w-full md:w-fit overflow-hidden relative h-fit p-10 text-xl md:text-4xl font-bold gap-4 place-items-center"
                color={["#7BC0FF"]}>
                <BuangbijakImg />
            </ShineBorder>
        ),
        },
        {
        title: <div className="relative w-[72.78px] h-[25px]">
                    <Image src="/projects/uride.png" alt="uride" fill></Image>
                </div>,
        value: "uride",
        content: (
            <ShineBorder 
                className="lg:w-full md:w-fit overflow-hidden relative h-fit p-10 text-xl md:text-4xl font-bold gap-4 place-items-center"
                color={["#7BC0FF"]}>
                <UrideImg />
            </ShineBorder>
        ),
        },
        {
        title: <div className="relative h-[25px] w-[76.58px]">
                    <Image src="/projects/aimo.png" alt="aimo" fill></Image>
                </div>,
        value: "aimo",
        content: (
            <ShineBorder 
                className="lg:w-full md:w-fit overflow-hidden relative h-fit p-10 text-xl md:text-4xl font-bold gap-4 place-items-center"
                color={["#7BC0FF"]}>
                <AimoImg />
            </ShineBorder>
        ),
        },
    ];

  return (
    <div id="projects" className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col justify-center max-w-5xl mx-auto w-full items-start gap-4">
      <h1 className="mx-auto justify-center items-center text-center font-extrabold text-[36px] md:text-[48px] lg:text-[64px] bg-gradient-text text-transparent bg-clip-text">My Projects</h1>
      <Tabs tabs={tabs} tabClassName="px-8" />
    </div>
  );
}

const LokaImg = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-12 h-fit w-fit justify-between place-items-center px-3 md:px-6 pb-3 md:pb-4 lg:pb-6">

            <div className="flex flex-col gap-6">
                <div className="relative h-[20px] w-[105.2px]">
                    <Image src="/projects/loka.png" alt="loka" fill></Image> 
                </div>
                <h1 className="font-bold w-full md:max-w-[640px] lg:max-w-[480px] text-[28px] lg:text-[32px] leading-tight">Gateway to Unique Travel Experiences</h1>
                <p className="text-justify font-thin text-[#999999] w-full min-w-0 md:max-w-[640px] lg:max-w-[480px] text-[14px] leading-normal"><span className="font-semibold">Lokantara</span> offers a fresh perspective on Indonesia's diverse destinations, guiding travelers through iconic locations with interactive, gamified routes. The platform provides up-to-date information on tourist spots, cultural heritage, and local cuisine, promoting domestic tourism and fostering pride in Indonesia. With features like a translator, currency calculator, nearby friends, and one-click emergency assistance, Lokantara makes travel engaging and practical.</p>
                <Link href="">
                    <Button color="default" variant="flat" className="px-[32px] py-[8px] text-thin">
                        See Prototype
                    </Button>
                </Link>
            </div>

            <div className="relative h-[320px] w-[260.35px] md:h-[400px] md:w-[325.43px] rounded-3xl pt-4 hidden md:flex">
                <Image src="/projects/show-lokantara.png" alt="showloka" fill></Image>
            </div>

        </div>
    )
}

const BuangbijakImg = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-12 h-fit w-fit justify-between place-items-center px-3 md:px-6 pb-3 md:pb-4 lg:pb-6">
            <div className="flex flex-col gap-6">
                <div className="relative h-[20px] w-[111.95px]">
                    <Image src="/projects/buangbijak.png" alt="loka" fill></Image> 
                </div>
                <h1 className="font-bold w-full md:max-w-[640px] lg:max-w-[480px] text-[28px] lg:text-[32px] leading-tight">Transforming Waste for a Cleaner Future</h1>
                <p className="text-justify font-thin text-[#999999] w-full md:max-w-[640px] lg:max-w-[480px] text-[14px] leading-normal"> <span className="font-semibold">BuangBijak</span> is a mobile app that promotes sustainable waste management by connecting users with recycling services and offering rewards for waste collection. The app provides an on-demand service for garbage collectors, making disposal efficient and accessible. It also features a platform for sharing or selling used items, encouraging a more sustainable and eco-friendly community.</p>
                <Link href="https://intip.in/PrototypeBuangBijak">
                    <Button color="default" size="sm" variant="flat" className="px-[32px] py-[8px] text-thin">
                        See Prototype
                    </Button>
                </Link>
            </div>
            <div className="relative h-[280px] w-[289.47px] md:h-[400px] md:w-[413.53px] rounded-3xl pt-4 hidden md:flex">
                <Image src="/projects/show-buangbijak.png" alt="showloka" fill></Image>
            </div>
        </div>
    )
}

const UrideImg = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 h-fit w-fit justify-between place-items-center px-3 md:px-6 pb-3 md:pb-4 lg:pb-6">
            <div className="flex flex-col gap-6">
                <div className="relative h-[20px] w-[58.22px]">
                    <Image src="/projects/uride.png" alt="uride" fill></Image> 
                </div>
                <h1 className="font-bold w-full md:max-w-[640px] lg:max-w-[480px] text-[24px] lg:text-[32px] leading-tight">Your On-Demand Vehicle Care Solution</h1>
                <p className="text-justify font-thin text-[#999999] w-full md:max-w-[640px] lg:max-w-[480px] text-[14px] leading-normal"> <span className="font-semibold">URide</span> addresses challenges faced by motor vehicle users in Indonesia with on-demand repair services and vehicle health monitoring. The platform promotes maintenance awareness and connects users to skilled mechanics, ensuring safer driving. It also supports workshops with transparent pricing and quality repairs, offering a comprehensive vehicle maintenance solution.</p>
                <Link href="https://www.figma.com/proto/irgoRWbKsUTcinAQKS0K2D/URide?type=design&node-id=75-661&t=I4ODSpyIZ2bMxR9T-0&scaling=scale-down&page-id=75%3A661&starting-point-node-id=579%3A1668">
                    <Button color="default" variant="flat" className="px-[32px] py-[8px] text-thin">
                        See Prototype
                    </Button>
                </Link>
            </div>
            <div className="relative h-[400px] w-[266.7px] md:h-[412.5px] md:w-[275px] rounded-3xl pt-4 hidden md:flex">
                <Image src="/projects/show-uride.png" alt="showuride" fill></Image>
            </div>
        </div>
    )
}

const AimoImg = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-12 h-fit w-fit justify-between place-items-center px-3 md:px-6 pb-3 md:pb-4 lg:pb-12 lg:pt-4">
            <div className="flex flex-col gap-6">
                <div className="relative h-[25px] w-[76.58px]">
                    <Image src="/projects/aimo.png" alt="aimo" fill></Image> 
                </div>
                <h1 className="font-bold w-full md:max-w-[640px] lg:max-w-[480px] text-[24px] lg:text-[32px] leading-tight">Empowering Mothers Against Postpartum Depression</h1>
                <p className="text-justify font-thin text-[#999999] w-full md:max-w-[640px] lg:max-w-[480px] text-[14px] leading-normal"> <span className="font-semibold">Aimo</span> is a mental health app designed to reduce the risk of postpartum depression (PPD) in expectant mothers. It offers literacy-based education, early prevention, and personalized post-birth guidance using the Edinburgh Postnatal Depression Scale (EPDS). Aimo ensures comprehensive support by involving husbands, family, friends, and healthcare professionals in assisting mothers experiencing PPD.</p>
                <Link href="https://intip.in/PrototypeBuangBijak">
                    <Button color="default" variant="flat" className="px-[32px] py-[8px] text-thin">
                        See Prototype
                    </Button>
                </Link>
            </div>
            <div className="relative h-[300px] w-[280.57px] md:h-[400px] md:w-[374.09px] rounded-3xl pt-4 hidden md:flex">
                <Image src="/projects/show-aimo.png" alt="showaimo" fill></Image>
            </div>
        </div>
    )
}