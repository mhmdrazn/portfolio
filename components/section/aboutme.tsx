import Image from "next/image";
import { div } from "three/webgpu";
import { cn } from "@/lib/utils";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { CardStack } from "../ui/card-stack";
import Link from "next/link";

export default function aboutme() {
  return (
    <div className="flex mx-auto justify-center items-center pt-12 pb-32 h-fit gap-16 bg-[#121212]">
       <CardSpotlight className="h-96 w-96 justify-center items-center rounded-2xl">
          <p className="text-xl font-bold relative z-20 mt-2 text-white">
          It is Me! 👋 
          </p>
          <div className="text-neutral-200 mt-4 relative z-20 font-thin">
            Hello! I'm Muhammad <span className="bg-gradient-text text-transparent bg-clip-text font-extrabold"> Razan  </span>Parisya Putra, an Undergraduate Student. I have experienced 2+ years in UI/UX Design and a year of Front-End.
          </div>
          <p className="text-xl font-bold relative z-20 mt-8 text-white">
          Tech Stacks
          </p>
        </CardSpotlight>

        <div className="flex flex-col gap-12 items-center justify-center">
          <div className="flex gap-5 items-center">  
            <p className="text-[#999999]">Discover me on</p>
            <Link href="https://medium.com/mhmdrazn" className="flex gap-4">
              <div className="w-[30px] h-[30px] relative">
                <Image src="/contacts/medium.png" alt="medium" fill></Image>
              </div>
              <p className="text-[18px] font-semibold">Medium</p>
            </Link>
          </div>
          <CardStack items={CARDS} />
        </div>
    </div>
  )
}

const CARDS = [
  {
    id: 0,
    name: "Mechanisms of Computer Memory Retention",
    content: (
      <p>
        Memori merupakan salah satu elemen penting dalam sebuah komputer yang memiliki peran sentral dalam pemrosesan data dan program. Kita dapat mengibaratkan memori ini sebagai ingatan komputer. Fungsinya adalah untuk menyimpan data yang akan digunakan oleh komputer saat beroperasi.</p>
    ),
  },
  {
    id: 1,
    name: "The Cognitive Hub of a Computer",
    content: (
      <p>
        Bagaikan jantung dari sebuah komputer, CPU atau central processing unit merupakan unit yang bertugas untuk mengeksekusi berbagai program yang kita jalankan. Berbagai macam program seperti Microsoft Office, Safari, atau Opera, terdiri dari serangkaian operasi-operasi individu yang ...
      </p>
    ),
  },
  {
    id: 2,
    name: "Architectural and Innovations of Advanced CPU Design",
    content: (
      <p>
        Jika kita mengembangkan program kecil untuk CPU kita yang memungkinkan pembagian dua angka dengan melakukan operasi pengurangan berulang kali. Contohnya, untuk membagi 16 dengan 4, kita melakukan pengurangan berulang seperti 16 dikurangi 4, 4, 4, hingga mencapai nol atau angka negatif sebagai penanda selesai.
      </p>
    ),
  },
];

const Step = ({ title }: { title: string }) => {
  return (
    <li className="flex gap-2 items-start">
      <CheckIcon />
      <p className="text-white">{title}</p>
    </li>
  );
};
 
const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
        fill="currentColor"
        strokeWidth="0"
      />
    </svg>
  );
};