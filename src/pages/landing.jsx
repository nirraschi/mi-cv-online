/* eslint-disable no-unused-vars */

import React, { useState } from 'react'
import nirraschiImg from '.././assets/fotocv.jpeg'
import { Download, Puzzle, HeartHandshake, Github, Linkedin, Copyright } from 'lucide-react';
import { motion } from "framer-motion";
import experiences from '../assets/experiences';


const Landing = () => {

    const [mensaje, setMensaje] = useState('');

    const copiarEmail = () => {
        const email = 'nirraschi@gmail.com';
        navigator.clipboard.writeText(email).then(() => {
            setMensaje('Email copiado');
            setTimeout(() => {
                setMensaje('');
            }, 2000);
        });
    }
    const technologies = [
        { name: "JavaScript", src: "/icons/javascript.svg" },
        { name: "React", src: "/icons/react.svg" },
        { name: "Next.js", src: "/icons/next.svg" },
        { name: "Tailwind CSS", src: "/icons/tailwindcss.svg" },
        { name: "Node.js", src: "/icons/node.svg" },
        { name: "TypeScript", src: "/icons/typescript.svg" },
        { name: "HTML", src: "/icons/html.svg" },
        { name: "Redux", src: "/icons/redux.svg" },
        { name: "Framer Motion", src: "/icons/framer.svg" },
        { name: "Three.js", src: "/icons/three.svg" },
        { name: "Vite", src: "/icons/vite.svg" },
        { name: "MongoDB", src: "/icons/mongodb.svg" },
    ];

    const [hoveredItem, setHoveredItem] = useState(null);



    return (
        <div className='flex flex-col h-full max-w-full '>
            <header className='flex bg-color-claro-1 items-center pt-1'>
                <p className='text-xs m-3 font-semibold'>nirraschi@gmail.com</p>
                <button onClick={copiarEmail}
                    className='bg-white rounded-2xl p-1 px-4 text-color-oscuro text-xs   transform transition-all hover:scale-105'>Copiar</button>
                {mensaje && <p className='text-xs m-3 text-emerald-500 font-semibold'>{mensaje}</p>}
            </header>

            <div className='h-full w-full bg-color-claro-1 sm:rounded-b-[60px] rounded-b-[40px] z-10 relative pb-10'>
                <div className=' flex flex-col justify-start items-center h-full w-full mt-16 relative'>
                    <img src={nirraschiImg} alt='foto' className='
                    w-[125px] h-[125px] rounded-full mx-auto border-4 border-white
                    transform transition-transform duration-300 hover:scale-125' />

                    <div className='absolute bg-white rounded-2xl w-fit p-1 mx-auto -rotate-6 md:translate-x-24 md:translate-y-6 translate-x-20 translate-y-4'>
                        <h3 className='text-xs text-center m-1 mx-2 font-bold '>Nirvana Raschi 👋 </h3>
                    </div>

                    <div className='flex items-center px-3 bg-white rounded-2xl w-fit mx-auto md:-translate-x-36 md:-translate-y-16 -translate-x-24 -translate-y-16'>
                        <h3 className='text-xs text-center '>Open to work</h3>
                        <span className="relative text-emerald-400 text-xl ml-1">
                            <span className="absolute inset-0 blur-sm opacity-100 text-emerald-500">•</span>
                            <span className="absolute inset-0 blur-xs opacity-50 text-emerald-500">•</span>
                            •
                        </span>
                    </div>
                    <div className='flex flex-col md:w-[500px] w-fit items-center justify-center gap-4'>
                        <h1 className='sm:text-4xl text-xl text-center font-bold
                        text-transparent bg-gradient-to-r from-color-oscuro to-neutral-600 bg-clip-text'
                        >Desarrollo soluciones frontend <br />con pasión y creatividad.</h1>
                        <a
                            href="/public/Nirvana Raschi - CV.pdf"
                            download="Mi-CV.pdf"
                            className="flex items-center bg-color-oscuro rounded-2xl p-2 px-4 text-color-claro-1 text-xs my-4 transform transition-all hover:scale-110"
                        >
                            Descargar CV
                            <Download size={16} className="ml-2" />
                        </a>
                    </div>
                </div>
            </div>

            <div className='w-full h-[325px] overflow-hidden py-4 relative bg-white pt-40 z-9 mt-[-60px] rounded-b-[60px]'>
                <motion.div
                    className='flex space-x-12'
                    animate={{ x: ["0%", "-100%"] }}
                    transition={{
                        repeat: Infinity,
                        duration: 40,
                        ease: "linear",
                    }}
                    whileHover={{ x: "0%" }}
                >
                    <div className='flex flex-row space-x-20'>
                        {[...technologies, ...technologies].map((tech, index) => (
                            <div key={index} className='w-20 h-20 flex flex-col  justify-center items-center gap-2'>
                                <img src={tech.src} alt={tech.name} className='w-10 h-10 object-contain' />
                                <p className='text-xs text-center text-color-medio-1'>{tech.name}</p>
                            </div>
                        ))}

                    </div>

                </motion.div>

            </div>
            <div className=' bg-color-claro-1
                            w-full h-[700px] overflow-hidden z-[index] mt-[-60px] pt-20
                            flex flex-col justify-start items-center gap-4'>
                <div className='flex flex-col gap-4'>

                    <div className='flex flex-col md:w-[500px] items-center mt-12 gap-3'>

                        <Puzzle className='w-9 h-9 text-color-oscuro ' />
                        <h3 className='text-3xl text-center font-semibold
                                    text-transparent bg-gradient-to-r from-color-oscuro to-neutral-600 bg-clip-text'
                        >Cada Proyecto, <br /> una Pieza de mi Desarrollo</h3>

                    </div>

                    <p className='text-color-medio-2 px-4 text-center'>Cada experiencia sumó habilidades clave para mi perfil profesional.</p>


                </div>

                <div className="mt-8 md:flex-row flex flex-col gap-20 items-center justify-center text-center">
                    {experiences.map((exp) => (
                        <div
                            key={exp.id}
                            className="relative w-40 h-28 group [perspective:1000px]"
                        >
                            <div className="relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] ">

                                {/* Cara frontal */}
                                <div className="absolute w-[300px] h-full flex flex-col items-start justify-top mt-8  [backface-visibility:hidden]">
                                    <p className="text-sm font-semibold text-color-oscuro">{exp.title}</p>
                                    <p className='text-xs text-color-claro-2'>{exp.puesto}</p>
                                    <p className='text-sm text-left whitespace-pre-line mt-4'>{exp.shortDescription}</p>
                                </div>

                                {/* Cara trasera */}
                                <div className="absolute md:w-[400px] h-fit flex  items-center justify-center bg-color-medio-2 text-white rounded-sm shadow-lg p-4 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                                    <p className="text-xs whitespace-pre-line">{exp.description}</p>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

            </div>



            <div className='flex flex-col gap-4 h-[450px] w-full items-center justify-center rounded-t-[60px] mt-[-60px] bg-white'>
                <HeartHandshake className='w-[50px] h-[50px] text-color-oscuro' />
                <h3 className='text-4xl font-bold text-color-oscuro'>¡Gracias por visitar!</h3>
                <p className='text-color-oscuro mt-2'>Espero tu mensaje para que estemos en contacto.</p>
                <a href="https://wa.link/6ubr6r" target="_blank"
                    className='mt-10 bg-color-oscuro rounded-2xl p-2 px-4 text-color-claro-1 text-xs  transform transition-all hover:scale-110'>WhatsApp</a>
            </div>


            <footer className='flex items-center w-full p-4 justify-between mt-10'>
                <div className='flex items-start gap-2'>
                    <Copyright className='w-[20px] h-[20px] text-color-oscuro' />
                    <p className='text-sm'>2025 - Nirvana Raschi</p>
                </div>
                <div className='flex items-end gap-2'>
                    <a href="https://github.com/NirRaschi" target="_blank" rel="noreferrer"><Github className='w-[20px] h-[20px] text-color-oscuro' /></a>
                    <a href="https://www.linkedin.com/in/nirvanaraschi/" target="_blank" rel="noreferrer"><Linkedin className='w-[20px] h-[20px] text-color-oscuro' /></a>

                </div>

            </footer>


        </div>
    )
}

export default Landing