"use client";
import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { HiOutlineX } from 'react-icons/hi';
import { HiMenuAlt3 } from 'react-icons/hi';

export default function navbar() {
    const [show, setShow] = useState(false);
    const controls = useAnimation();

    React.useEffect(() => {
        if (show) {
            controls.start({opacity: 1, x:0});
        } else {
            controls.start({opacity: 0, y:0});
        }
    }, [show, controls]);

    const handleOnClick = () => {
        setShow(!show);
    }

    return (
        <div className='fixed flex flex-col z-50'>
            
            <div className='bg-[#121212] bg-opacity-50 backdrop-blur-xl w-full px-6 py-5 flex flex-col items-left h-fit'>
                <div className='flex justify-between md:justify-between w-full md:max-w-[14400px] gap-24 mx-auto'>

                    <div className='relative h-[25px] w-[25px]'>
                        <Image src="/navbar/logo-z.svg" alt='logo' fill></Image>
                    </div>

                    <div className='hidden md:flex gap-12'>
                        <ul className='flex gap-12'>
                            <a href="#home"><li className="listnavbar">Home</li></a>
                            <a href="#aboutme"><li className="listnavbar">About Me</li></a>
                            <a href="#experiences"><li className="listnavbar">Experiences</li></a>
                            <a href="#projects"><li className="listnavbar">Projects</li></a>
                            <a href="#contacts"><li className="listnavbar">Contacts</li></a>
                        </ul>
                    </div>

                    <div>
                        {show ? (
                            <HiOutlineX 
                            size={25} 
                            className='cursor-pointer md:hidden'
                            onClick={() => setShow(false)}/>
                        ) : (
                            <HiMenuAlt3 
                            size={25} 
                            className='cursor-pointer md:hidden'                    
                            onClick={() => setShow(true)}/>
                        )}
                    </div>
                </div>            
            </div>  

                        
            <div className='w-screen h-full bg-opacity-90 '>
                <motion.ul
                    initial={{ opacity: 0, y: -50 }}
                    animate={controls}
                    transition={{ duration: 0.3 }}
                    className={`flex flex-col gap-8 items-start px-8 w-full h-screen pt-6 bg-[#121212] bg-opacity-30 backdrop-blur-xl md:hidden ${show ? 'block' : 'hidden'}`}                >
                    <a href="#home" onClick={handleOnClick}><li className="listnavbar">Home</li></a>
                    <a href="#aboutme" onClick={handleOnClick}><li className="listnavbar">About Me</li></a>
                    <a href="#experiences" onClick={handleOnClick}><li className="listnavbar">Experiences</li></a>
                    <a href="#projects" onClick={handleOnClick}><li className="listnavbar">Projects</li></a>
                    <a href="#contacts" onClick={handleOnClick}><li className="listnavbar">Contacts</li></a>
                </motion.ul>
            </div>
        </div>
        
        
    )
}
