import React from 'react'

const skills = [
    { skill: "HTML" },
    { skill: "CSS" },
    { skill: "Javascript" },
    { skill: "Typescript" },
    { skill: "React" },
    { skill: "Angular" },
    { skill: "Flutter" },
    { skill: "Tailwind CSS" },
    { skill: "Next.js" },
    { skill: "GitHub" },
]

const AboutSection = () => {
    return (
        <section>
            <div className='my-12 pb-12 md:pt-16 md:pb-48'>
                <h1 className='text-center font-bold text-4xl'>Sobre Mim
                <hr className='w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded'></hr>
                </h1>
                <div className='flex flex-col space-y-10 items-stretch justify-center align-top py-8 md:flex-row md:text-left md:p-4 md:space-y-0 md:space-x-10 md:py-8'>
                    <div className='md:w-1/2'>
                        <h1 className='text-center text-2xl font-bold mb-6 md:text-left'>Quem sou?</h1>
                        <p className='leading-2 text-gray-800 text-xl'>
                            Estou em transição de carreira e sou apaixonado por tecnologia, sou formado em Engenharia Mecânica e em breve estarei formado em Análise e Desenvolvimento de Sistemas. <br/>
                            Atualmente faço projetos com
                            <span className='font-bold'>{" React"}</span>, 
                            <span className='font-bold'>{" Angular"}</span>, 
                            <span className='font-bold'>{" Tailwind CSS"}</span>. 
                            Procuro sempre aprimorar minhas habilidades e conhecimentos. Na Universidade e com cursos e projetos pessoais,
                            busco sempre crescimento em relação a minha vida profissional e pessoal.
                        </p>
                        
                    </div>
                    <div className='md:w-1/2'>
                        <h1 className='text-center text-2xl font-bold mb-6 md:text-left md:justify-start'>Skills</h1>
                        <div className='flex flex-wrap flex-row justify-center'>
                            {skills.map((item, idx) => {
                                return <p key={idx} className="bg-teal-600/30 px-4 py-2 mr-2 mt-2 text-gray-700 rounded font-semibold " >{item.skill}</p>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection