'use client'

import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

const TAB_DATA = [
  {
    title: "Experiencia",
    id: "Experiencia",
    content: (
      <ul className='list-disc mt-2'>
        <li>Brand Partnerships Executive - PedidosYa <span className='text-[#ADB7BE]'>| 2023</span></li>
        <li>Trade Marketing Execution Analyst - Backus AB InBev <span className='text-[#ADB7BE]'>| 2022</span></li>
        <li>Brand Development Representative - Backus AB InBev <span className='text-[#ADB7BE]'>| 2021</span></li>
        <li>Trade Marketing Intern - Backus AB InBev <span className='text-[#ADB7BE]'>| 2020</span></li>
        <li>Finance Intern - Backus AB InBev <span className='text-[#ADB7BE]'>| 2019</span></li>
      </ul>
    )
  },
  {
    title: "Skills",
    id: "Skills",
    content: (
      <ul className='list-disc mt-2'>
        <li>Autodidacta</li>
        <li>Aprendizaje Rápido</li>
        <li>Negociación</li>
        <li>Liderazgo</li>
        <li>Creatividad</li>
      </ul>
    )
  },
]

const About = () => {
  const [tab, setTab] = useState ("Experiencia");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab (id);
    });
  }

  return (
    <section className='text-white mt-32'>
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <Image 
          src="/foto1.jpeg"
          width={400}
          height={400}
          className='rounded-xl'
        />
        <div>
          <h2 className='text-4xl font-bold text-white mb-4'>¿Quién soy?</h2>
          <p className='text-base lg:text-lg'>Bachiller de Administración de la ULima con experiencia en Trade Marketing, 
            Ventas y Finanzas. Amante del buen servicio al cliente, encontrando soluciones de manera creativa, 
            analítica y orientada a resultados.
          </p>
          <div className='flex flex-row mt-8'>
            <TabButton selectTab={() => handleTabChange("Experiencia")} active={tab === "Experiencia"}>
              Experiencia
            </TabButton>
            <TabButton selectTab={() => handleTabChange("Skills")} active={tab === "Skills"}>
              Skills
            </TabButton>
          </div>
          <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  )
}

export default About