'use client'

import React from 'react'
import dynamic from 'next/dynamic'
import AnimatedNumber from 'react-animated-numbers';

const AnimatedNumbers = dynamic (() => {return import ("react-animated-numbers")}, {ssr: false});

const achievmentsList = [
  {
    metric: "Años de experiencia",
    value: "3+"
  },
  {
    metric: "Lanzamientos de marca",
    value: "2"
  },
  {
    metric: "Incremento ventas",
    value: "35",
    postfix: "%"
  },
  {
    prefix: "S/",
    metric: "Budget manejado",
    value: "100000"
  },
]
const LastSection = () => {
  return (
    <div className='py-8 px-4 xl:gap-16 xl:px-16 sm:py-16 mt-20 mb-24'>
      <h1 className='text-white text-4xl font-bold flex justify-center mb-16'>¿Por qué elegirme?</h1>
      <div className='border-[#33353F] border rounded-md py-8 px-17 flex flex-row items-center justify-between'>
        {achievmentsList.map ((achievment, index) => {
          return (
            <div key={index} className='flex flex-col items-center justify-center mx-4'>
              <h2 className='text-white text-4xl font-bold flex flex-row'>
                {achievment.prefix}
                <AnimatedNumbers 
                  includeComma
                  animateToNumber={parseInt(achievment.value)}
                  locale='en-US'
                  className="text-white text-4xl font-bold"
                  configs={((_, index) => {
                    return {
                      mass: 1,
                      friction: 100,
                      tensions: 140 + (index + 1),
                    }
                  })}
                />
                {achievment.postfix}
              </h2>
              <p className='text-[#ADB7BE] text-base'>{achievment.metric}</p>
            </div>
          )
        })}
      </div>
      <div className='flex flex-row justify-between mt-24'>
        <h2 className='text-[#ADB7BE] hover-effect hover:cursor-pointer'>Comprometido con objetivos</h2>
        <h2 className='text-[#ADB7BE] hover-effect hover:cursor-pointer'>Curva de Aprendizaje Rápida</h2>
        <h2 className='text-[#ADB7BE] hover-effect hover:cursor-pointer'>Nivel de Office / Inglés Avanzado</h2>
      </div>
    </div>
  )
}

export default LastSection