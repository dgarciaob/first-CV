'use client'

import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <section>  
      <div className='grid grid-cols-1 lg:grid-cols-12'>
        <div className='col-span-7 place-self-center'>
          <h1 className='text-white mb-4 text-4xl lg:text-6xl font-extrabold'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#5AA6EC] to-[#042DC2]'>¡Hola, soy Diego! y{" "}</span>
            <br className='mb-5'/>
            <TypeAnimation
              sequence={[
                'me encanta viajar',
                2000,
                'amo jugar padel',
                2000,
                'tengo 26 años',
                2000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className='text-[#ADB7BE] text-lg lg:text-xl mb-6'>
            Acompáñenme a conocer un poco de mi.
          </p>
          <div className='flex justify-center mt-20'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-10 h-10">
             <path fill-rule="evenodd" d="M20.03 4.72a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 11.69l6.97-6.97a.75.75 0 011.06 0zm0 6a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 111.06-1.06L12 17.69l6.97-6.97a.75.75 0 011.06 0z" clip-rule="evenodd" />
            </svg>   
          </div>
        </div>
        <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
            <Image 
              src="/testimonial-01-PhotoRoom.png"
              alt='foto perfil'
              width={300}
              height={300}
            />
        </div>
      </div>    
    </section>
  )
}

export default HeroSection