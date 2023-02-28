import React from "react";
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { BsArrowDown } from 'react-icons/bs'
import Image from 'next/image';


const HeroSection = () => {
    return (
        <section>
            <div className="flex flex-col text-center items-center justify-center my-10 md:py-32 md:flex-row md:space-x-40">
                <div className="sm:pb-5 py-10">
                    <Image className="rounded-full shadow-2xl" src="/headshot2.jpeg" alt="" width={300} height={300} />
                </div>
                <div>
                    <h2 className="text-2xl">Olá, meu nome é</h2>
                    <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl '>Victor Hugo</h2>
                    <h3 className='text-2xl py-2 md:text-3xl dark:text-white'>sou Desenvolvedor Front-End</h3>
                    <div className='text-5xl flex justify-center gap-16 py-3 text-gray-700 dark:text-white'>
                        <a href="https://www.linkedin.com/in/victor-hugo-0326b5b7/" rel="noreferrer" target="_blank" >
                            <AiFillLinkedin className="hover:-translate-y-1 transition-transform cursor-pointer "  />
                        </a>
                        <a href="https://github.com/VictorCDev?tab=repositories" rel="noreferrer" target="_blank">
                            <AiFillGithub className="hover:-translate-y-1 transition-transform cursor-pointer " />
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex flex-row justify-center md:pt-16">
                <BsArrowDown size={40} className="animate-bounce" />
            </div>
        </section>
    )
}

export default HeroSection

