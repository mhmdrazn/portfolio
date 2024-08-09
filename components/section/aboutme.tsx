import Image from "next/image";

export default function aboutme() {
    <main>
        <div className="items-center justify-center w-full align-top flex mx-auto gap-28 py-32">
          <div className="relative w-[268.19px] h-[352px] object-contain">
            <Image src="/ganteng.png" alt="fotonya razan" fill></Image>
          </div>

          <div className="container flex-col h-fit w-fit space-y-6">
            <div className="text-[48px] font-extrabold">👋 It is Me!</div>
            <div className="font-thin max-w-[330px] text-justify">
              Hello! I'm <span className="font-extrabold">Muhammad Razan Parisya Putra</span>, an Undergraduate Student. I have experienced 2+ years in UI/UX Design and Front-End (just beginning 😚).
            </div>
            <div className="max-w-[330px] text-justify">
              My journey is driven by a love for creating intuitive, user-centric designs that not only look fantastic but also provide seamless experiences. Join me as I continue to innovate and make a mark in these exciting fields!
            </div>
          </div>


          <div className="space-y-4">
            <div className="text-[48px] font-extrabold">🎓 Education</div>
            <div className="relative w-[314.19px] h-[278.93px]">
              <Image src="/education.svg" alt="education" fill></Image>
            </div>
          </div>
        </div>
    </main>
}