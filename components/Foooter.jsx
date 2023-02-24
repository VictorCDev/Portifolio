import React from 'react'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'

const Foooter = () => {
    return (
        <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
            <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0"></hr>
            <div className='mx-auto p-4 flex flex-col text-center  md:flex-row md:justify-between'>
                <div><h1 className='text-xl font-burtons dark:text-white'>© developbyvh</h1></div>
                <div className='flex flex-row items-center justify-center space-x-2 mb-1'>
                    <a
                        href="https://www.linkedin.com/in/victor-hugo-0326b5b7/"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <AiFillLinkedin
                            className="hover:-translate-y-1 transition-transform cursor-pointer  dark:text-neutral-100"
                            size={30}
                        />
                    </a>
                    <a href="https://github.com/VictorCDev?tab=repositories" rel="noreferrer" target="_blank">
                        <AiFillGithub
                            className="hover:-translate-y-1 transition-transform cursor-pointer  dark:text-neutral-100"
                            size={30}
                        />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Foooter