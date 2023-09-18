'use client'

import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';

const ChangeLifeSection = () => {
  return (
    <section className='text-white mt-20'>
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <div>
          <h2 className='text-4xl font-bold text-white mb-4'>Algo que me cambió la vida</h2>
          <p className='text-base lg:text-lg mb-10'>Conocer y practicar el Estoicismo.</p>
          <p className='text-base lg:text-lg mb-10'>
            Gracias a esta filosofía soy mejor 
            <span>
              <TypeAnimation
                sequence={[
                  'trabajador',
                  1000,
                  'hermano',
                  1000,
                  'hijo',
                  1000,
                  'humano',
                  1000,
                ]}
                wrapper="span"
                speed={60}
                repeat={Infinity}
                className='text-[#5AA6EC] ml-2'
              />
            </span>.
          </p>        
        </div>
        <Image 
          src="/stoic-quotes.jpg"
          width={400}
          height={400}
          className='rounded-xl'
        />
      </div>
    </section>
  )
}

export default ChangeLifeSection