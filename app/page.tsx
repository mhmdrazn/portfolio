import Image from "next/image";
import Link from 'next/link';
import background from '../../public/grids.svg'
import ProjectSection from "@/components/projects";

export default function Home() {
  return (
    <main>
      <header className="fixed flex z-50 bg-[#000000] w-full h-20 items-center justify-center shadow-2xl">
        <ul className="flex">
          <a href="#home"><li className="listnavbar">Home</li></a>
          <a href="#aboutme"><li className="listnavbar">About Me</li></a>
          <a href="#experiences"><li className="listnavbar">Experiences</li></a>
          <a href="#projects"><li className="listnavbar">Projects</li></a>
          <a href="#contacts"><li className ="listnavbar">Contacts</li></a>
        </ul>
      </header>
      
      {/* hero */}
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

      {/* about me */}
      <section id="aboutme" className="h-fit w-full">
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
      </section>

      {/* experience */}
      <section id="experiences" className="pt-[128px] pb-16 space-x-16 flex-col mx-auto justify-center items-center w-full">
        <div className="space-x-16 flex mx-auto justify-center items-center">
          <div className="relative w-[125px] h-[128.47px] drop-shadow-xl">
            <Image src="/cup.svg" alt="cup" fill></Image>
          </div>
          <div className="space-x-4">
            <h1 className="text-center font-bold text-[48px]"> Where Have I</h1>
            <h1 className="text-center font-extrabold text-[64px] text-[#7791FF]">Worked On?</h1>
            <p  className="text-center font-thin text-[16px]">Here is my some experience in related fields.</p>
          </div>
          <div className="w-[80px] h-[186.67px] drop-shadow-xl">
            <Image src="tumbler.svg" alt="tumbler" fill></Image>
          </div>
        </div>

        <div className="flex-col">
          {/* baris pertama */}
          <div className="flex justify-center mx-auto pt-24 pb-4 gap-[32px]">
            <div className="job_container space-y-[32px]">
              <div className="flex space-between justify-between">
                <div className="flex gap-[24px]">
                  <div className="relative w-[34.05px] h-[52px]">
                    <Image src="/betau.png" alt="betau" fill></Image>
                  </div>
                  <div className="text-[24px] font-extrabold self-center">Beta.U</div>
                </div>  
                <div className="font-bold text-[20px] place-content-center">UI/UX Designer</div>
              </div>  
              <p className="font-normal text-[#ABABAB] w-[625px] text-justify pb-[32px]">
                <span className="font-medium text-white">BETA U </span>is a dynamic Software House specializing in transforming ideas into Minimum Viable Products (MVPs) swiftly and creatively. With a keen understanding of project intricacies, BETA U collaborates closely with clients to bring their visions to life. I am responsible to make a dynamic user experience and designing a user interface and ensure that all is correctively fits. As a designer, I am collaborate closely with Front end teams to achieve the product goals.
              </p>

              <Link href="https://www.instagram.com/betafor.u/">
                <button id="goto" className="flex place-content-center gap-2 px-[24px] py-[8px] rounded-[8px] bg-[#525252] text-[#ABABAB] hover:bg-[#999999] ease-in-out duration-400 hover:text-[#121212] font-medium">
                  <div className="h-[23px]">
                    Go to page
                  </div>
                  <div className="relative self-center h-[15px] w-[15px]">
                    <Image src="/export.svg" alt="export" fill></Image>
                  </div>
                </button>
              </Link>
            </div>

            <div className="job_container space-y-[32px]">
              <div className="flex space-between justify-between">
                <div className="flex gap-[24px]">
                  <div className="relative w-[59.66px] h-[52px]">
                    <Image src="/ise.png" alt="ise" fill></Image>
                  </div>
                  <div className="text-[24px] font-extrabold self-center">ISE! 2024</div>
                </div>  
                <div className="font-bold text-[20px] place-content-center">UI/UX Designer</div>
              </div>  
              <p className="font-normal text-[#ABABAB] w-[625px] text-justify pb-[52px]">
                <span className="font-medium text-white">Information Systems Expo (ISE!)</span> is an annual event organized by the Information Systems Student Association (HMSI) of ITS. It comprises a series of events in the fields of information technology and business. ISE! aims to introduce the ITS Department of Information Systems to the broader community through various works and achievements
              </p>

              <Link href="https://www.ise-its.com/">
                <button id="goto" className="flex place-content-center gap-2 px-[24px] py-[8px] rounded-[8px] bg-[#525252] text-[#ABABAB] hover:bg-[#999999] ease-in-out duration-400 hover:text-[#121212] font-medium">
                  <div className="h-[23px]">
                    Go to page
                  </div>
                  <div className="relative self-center h-[15px] w-[15px]">
                    <Image src="/export.svg" alt="export" fill className="exportcolor"></Image>
                  </div>
                </button>
              </Link>
            </div>
          </div>

          {/* baris kedua */}
          <div className="flex justify-center mx-auto p-4 gap-[32px]"> 
            {/* TEDxITS */}
            <div className="job_container space-y-[32px]">
              <div className="flex space-between justify-between">
                <div className="flex gap-[24px] h-[52px]">
                  <div className="relative w-[133.19px] h-[25px] self-center">
                    <Image src="/tedx.svg" alt="tedx" fill></Image>
                  </div>
                </div>  
                <div className="font-bold text-[20px] self-center">UI/UX Designer</div>
              </div>  
              <p className="font-normal text-[#ABABAB] w-[625px] text-justify pb-[56px]">
                <span className="font-medium text-white">TEDxITS </span>TEDxITS 2024 is an event that provides a platform for the community, especially those within the ITS environment, to share their intriguing ideas. The aim of this event is to spread ideas and concepts on new and unexplored topics. TEDxITS goal is to spark discussions, foster relationships, and build a sense of community.
              </p>

              <Link href="https://tedxits.org">
                <button id="goto" className="flex place-content-center gap-2 px-[24px] py-[8px] rounded-[8px] bg-[#525252] text-[#ABABAB] hover:bg-[#999999] ease-in-out duration-400 hover:text-[#121212] font-medium">
                  <div className="h-[23px]">
                    Go to page
                  </div>
                  <div className="relative self-center h-[15px] w-[15px]">
                    <Image src="/export.svg" alt="export" fill></Image>
                  </div>
                </button>
              </Link>
            </div>

            {/* ILITS */}
            <div className="job_container space-y-[32px]">
              <div className="flex space-between justify-between">
                <div className="flex gap-[24px]">
                  <div className="relative w-[108.12px] h-[52px]">
                    <Image src="/ilits.png" alt="ilits" fill></Image>
                  </div>
                </div>  
                <div className="font-bold text-[20px] place-content-center">UI/UX Designer</div>
              </div>  
              <p className="font-normal text-[#ABABAB] w-[625px] text-justify pb-[78px]">
                <span className="font-medium text-white">INI LHO ITS!</span> is a platform that integrates all elements of ITS to introduce ITS along with its academic and student life. It provides information about the faculties and departments at ITS while spreading the spirit of higher education to high school students across Indonesia and even the entire world.

              </p>

              <Link href="https://inilho.its.ac.id/">
                <button id="goto" className="flex place-content-center gap-2 px-[24px] py-[8px] rounded-[8px] bg-[#525252] text-[#ABABAB] hover:bg-[#999999] ease-in-out duration-400 hover:text-[#121212] font-medium">
                  <div className="h-[23px]">
                    Go to page
                  </div>
                  <div className="relative self-center h-[15px] w-[15px]">
                    <Image src="/export.svg" alt="export" fill className="exportcolor"></Image>
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* project */}
      <ProjectSection/>

      

      {/* contacts */}
      <section id="contacts" className="w-full h-fit pt-[64px] py-[32px] flex-col mx-auto justify-center items-center bg-gradient-glass">
        <h1 className="font-extrabold text-[48px] justfiy-center max-w-[572px] mx-auto items-center h-fit text-center mb-12">Dive In below to explore our collaboration!</h1>
        
        {/* baris pertama */}
        <div className="flex justify-center mx-auto p-4 gap-[32px]">
          {/* item pertama */}
          <Link href="https://github.com/mhmdrazn">
            <button className="max-w-[310px] space-y-[12px] px-[86px] py-[16px] h-fit bg-black justify-center items-center rounded-[12px] hover:bg-[#2E2E2E] shadow-xl ease-in-out duration-300">
              <div className="flex gap-[24px]">
                <div className="relative w-[30px] h-[30px] self-center">
                  <Image src="/github.png" alt="github" fill></Image>
                </div>
                <div className="font-bold text-[24px]">Github</div>
              </div>
              <div className="text-[#696969]">
                @mhmdrazn
              </div>
            </button>
          </Link>

          <Link href="https://www.linkedin.com/in/muhammadrazan/">
            <button className="w-[310px] space-y-[12px] py-[16px] h-fit bg-black justify-center items-center rounded-[12px] hover:bg-[#2E2E2E] shadow-xl ease-in-out duration-300">
              <div className="flex gap-[24px] justify-center">
                <div className="relative w-[30px] h-[30px] self-center">
                  <Image src="/linkedin.png" alt="linkedin" fill></Image>
                </div>
                <div className="font-bold text-[24px] self-center">LinkedIn</div>
              </div>
              <div className="text-[#696969]">
                Muhammad Razan
              </div>
            </button>
          </Link>

          <Link href="https://www.instagram.com/mhmdrazn/">
            <button className="w-[310px] space-y-[12px] py-[16px] h-fit bg-black justify-center items-center rounded-[12px] contact-hover hover:bg-[#2E2E2E] shadow-xl ease-in-out duration-300">
              <div className="flex gap-[24px] justify-center">
                <div className="relative w-[30px] h-[30px] self-center">
                  <Image src="/ig.png" alt="ig" fill></Image>
                </div>
                <div className="font-bold text-[24px] self-center">Instagram</div>
              </div>
              <div className="text-[#696969]">
                @mhmdrazn
              </div>
            </button>
          </Link>
        </div>

        {/* baris kedua */}
        <div className="flex justify-center mx-auto p-4 mb-[64px] gap-[32px]">
          {/* item pertama */}
          <Link href="https://dribbble.com/mhmdrazn">
            <button className="w-[310px] space-y-[12px] px-[16px] py-[16px] h-fit bg-black justify-center items-center rounded-[12px] hover:bg-[#2E2E2E] shadow-xl ease-in-out duration-300">
              <div className="flex gap-[24px] justify-center">
                <div className="relative w-[30px] h-[30px] self-center">
                  <Image src="/dribbble.png" alt="dribbble" fill></Image>
                </div>
                <div className="font-bold text-[24px]">Dribbble</div>
              </div>
              <div className="text-[#696969]">
                @mhmdrazn
              </div>
            </button>
          </Link>

          <Link href="https://medium.com/@mhmdrazn">
            <button className="w-[310px] space-y-[12px] py-[16px] h-fit bg-black justify-center items-center rounded-[12px] hover:bg-[#2E2E2E] shadow-xl ease-in-out duration-300">
              <div className="flex gap-[24px] justify-center">
                <div className="relative w-[30px] h-[30px] self-center">
                  <Image src="/medium.png" alt="medium" fill></Image>
                </div>
                <div className="font-bold text-[24px] self-center">Medium</div>
              </div>
              <div className="text-[#696969]">
                @mhmdrazn
              </div>
            </button>
          </Link>
        </div>

        <div className="flex justify-center items-center gap-3">
          <div className="w-[20px] h-[20px] relative place-content-center">
            <Image src="/c.svg" alt="c" fill></Image>
          </div>
          <div className="text-[#696969] font-semibold text-[18px]"> Muhammad Razan. All Rights Reserved.</div>
        </div>
        
      </section>

    </main>
  );
}
