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
                className="w-[1000px] overflow-hidden relative h-[520px] p-10 text-xl md:text-4xl font-bold gap-4 justify-center"
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
                className="w-[1000px] overflow-hidden relative h-[520px] p-10 text-xl md:text-4xl font-bold gap-4 justify-center"
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
                className="w-[1000px] overflow-hidden relative h-[520px] p-10 text-xl md:text-4xl font-bold gap-4 justify-center"
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
                className="w-[1000px] overflow-hidden relative h-[520px] p-10 text-xl md:text-4xl font-bold gap-4 justify-center"
                color={["#7BC0FF"]}>
                <AimoImg />
            </ShineBorder>
        ),
        },
    ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col justify-center max-w-5xl mx-auto w-full items-start my-64 gap-12">
      <h1 className="text-center font-extrabold text-[64px] text-[#7791FF]">My Projects</h1>
      <Tabs tabs={tabs} />
    </div>
  );
}

const LokaImg = () => {
    return (
        <div className="flex gap-12 h-[1500px] w-full justify-between">
            <div className="flex flex-col gap-6">
                <div className="relative h-[20px] w-[105.2px]">
                    <Image src="/projects/loka.png" alt="loka" fill></Image> 
                </div>
                <h1 className="font-bold max-w-[320px] text-[32px]">Gateway to Unique Travel Experiences</h1>
                <p className="font-thin text-[#999999] max-w-[470px] text-[14px] leading-6"><span className="font-semibold">Lokantara</span> offers a fresh perspective on Indonesia's diverse destinations, guiding travelers through iconic locations with interactive, gamified routes. The platform provides up-to-date information on tourist spots, cultural heritage, and local cuisine, promoting domestic tourism and fostering pride in Indonesia. With features like a translator, currency calculator, nearby friends, and one-click emergency assistance, Lokantara makes travel engaging and practical.</p>
                <Link href="">
                    <Button color="default" variant="flat" className="px-[32px] py-[8px] text-thin">
                        See Prototype
                    </Button>
                </Link>
            </div>
            <div className="relative h-[400px] w-[325.43px] rounded-3xl pt-4">
                <Image src="/projects/show-lokantara.png" alt="showloka" fill></Image>
            </div>
        </div>
    )
}

const BuangbijakImg = () => {
    return (
        <div className="flex gap-12 h-[1500px] w-full justify-between">
            <div className="flex flex-col gap-6">
                <div className="relative h-[20px] w-[111.95px]">
                    <Image src="/projects/buangbijak.png" alt="loka" fill></Image> 
                </div>
                <h1 className="font-bold max-w-[320px] text-[32px]">Transforming Waste for a Cleaner Future</h1>
                <p className="font-thin text-[#999999] max-w-[400px] text-[14px] leading-6"> <span className="font-semibold">BuangBijak</span> is a mobile app that promotes sustainable waste management by connecting users with recycling services and offering rewards for waste collection. The app provides an on-demand service for garbage collectors, making disposal efficient and accessible. It also features a platform for sharing or selling used items, encouraging a more sustainable and eco-friendly community.</p>
                <Link href="https://intip.in/PrototypeBuangBijak">
                    <Button color="default" variant="flat" className="px-[32px] py-[8px] text-thin">
                        See Prototype
                    </Button>
                </Link>
            </div>
            <div className="relative h-[400px] w-[413.53px] rounded-3xl pt-4">
                <Image src="/projects/show-buangbijak.png" alt="showloka" fill></Image>
            </div>
        </div>
    )
}

const UrideImg = () => {
    return (
        <div className="flex gap-20 h-[1500px] w-full justify-between">
            <div className="flex flex-col gap-6">
                <div className="relative h-[20px] w-[58.22px]">
                    <Image src="/projects/uride.png" alt="uride" fill></Image> 
                </div>
                <h1 className="font-bold max-w-[360px] text-[32px]">Your On-Demand Vehicle Care Solution</h1>
                <p className="font-thin text-[#999999] max-w-[460px] text-[14px] leading-6"> <span className="font-semibold">URide</span> URide tackles the challenges motor vehicle users in Indonesia face by offering on-demand repair services and vehicle health monitoring. The platform promotes routine maintenance awareness and provides access to skilled mechanics, ensuring safer and more reliable driving experiences. Additionally, URide supports workshop businesses with transparent pricing and quality repairs, offering a comprehensive solution for vehicle maintenance.</p>
                <Link href="https://www.figma.com/proto/irgoRWbKsUTcinAQKS0K2D/URide?type=design&node-id=75-661&t=I4ODSpyIZ2bMxR9T-0&scaling=scale-down&page-id=75%3A661&starting-point-node-id=579%3A1668">
                    <Button color="default" variant="flat" className="px-[32px] py-[8px] text-thin">
                        See Prototype
                    </Button>
                </Link>
            </div>
            <div className="relative h-[412.5px] w-[275px] rounded-3xl pt-4">
                <Image src="/projects/show-uride.png" alt="showuride" fill></Image>
            </div>
        </div>
    )
}

const AimoImg = () => {
    return (
        <div className="flex px-10 gap-40 h-[1500px] w-full justify-between">
            <div className="flex flex-col gap-6">
                <div className="relative h-[20px] w-[61.26px]">
                    <Image src="/projects/aimo.png" alt="aimo" fill></Image> 
                </div>
                <h1 className="font-bold max-w-[360px] text-[32px]">Empowering Mothers Against Postpartum Depression</h1>
                <p className="font-thin text-[#999999] max-w-[460px] text-[14px] leading-6"> <span className="font-semibold">Aimo</span> is a mental health app designed to reduce the risk of postpartum depression (PPD) in expectant mothers. It offers literacy-based education, early prevention, and personalized post-birth guidance using the Edinburgh Postnatal Depression Scale (EPDS). Aimo ensures comprehensive support by involving husbands, family, friends, and healthcare professionals in assisting mothers experiencing PPD.</p>
                <Link href="https://www.figma.com/proto/oa0GcifcAdurFxMFdaa3Bo/Aimo?node-id=233-2616&t=BCEM1VluA9MNekoN-1&scaling=contain&page-id=9%3A3&starting-point-node-id=233%3A2616">
                    <Button color="default" variant="flat" className="px-[32px] py-[8px] text-thin">
                        See Prototype
                    </Button>
                </Link>
            </div>
            <div className="relative h-[400px] w-[197.36px] rounded-3xl pt-4">
                <Image src="/projects/show-aimo.png" alt="showaimo" fill></Image>
            </div>
        </div>
    )
}
