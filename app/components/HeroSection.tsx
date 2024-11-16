// 'use client'
// import Image from 'next/image'
// import React from 'react'
// import { TypeAnimation } from 'react-type-animation';
// import {motion} from 'framer-motion'
// import Link from 'next/link';
// import { AuroraBackground } from './aurora-background';

// export default function HeroSection() {
//   return (
//     <AuroraBackground>
//     <motion.div
//       initial={{ opacity: 0.0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{
//         delay: 0.3,
//         duration: 0.8,
//         ease: "easeInOut",
//       }}
//       className="relative flex flex-col gap-4 items-center justify-center px-4"
//     >
//     <section>
//         <div className="mx-auto px-14 my-4 grid grid-cols-1 lg:grid-cols-12">
//             <div className="col-span-7 place-self-center text-center sm:text-left">
//                 <h1 className='text-white mb-4 text-3xl md:text-4xl lg:text-6xl font-extrabold'>
//                     <span className='text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600'>Hello, I'm {" "}</span> <br /> 
//                     <TypeAnimation
//                         sequence={[
//                             // Same substring at the start will only be typed out once, initially
//                             'Ahyaan Hassan',
//                             1000, // wait 1s before replacing "Mice" with "Hamsters"
//                             'Data Scientist',
//                             1000,
//                             'a Coder',
//                             1000,
//                             'a Learner.',
//                             1000
//                         ]}
//                         wrapper="span"
//                         speed={50}
//                         style={{display: 'inline-block' }}
//                         repeat={Infinity}
//                         className='mt-4 '
//                     />
//                 </h1>
//                 {/* <p className='text-gray-400 text-base sm:text-lg lg:text-xl mb-6'>
//                     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum vero sunt ea deleniti sint facere minus tempora totam nihil quod vel velit quibusdam veniam ducimus explicabo, nisi qui non? Facilis facere itaque fugiat unde reiciendis, nemo pariatur magni nesciunt rem explicabo, dolore voluptas laboriosam maiores culpa, voluptatum repudiandae veritatis. Aperiam.
//                 </p> */}
//                 <div className="">
//                     <Link
//                         href="#contact"
//                         className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-red-500 to-orange-500 hover:bg-slate-200 text-white"
//                     >
//                         Hire Me
//                     </Link>
//                     <Link
//                         href="https://drive.google.com/file/d/1-NSgR-piyowAPihAlJPVeYQ657-4pOdI/view?usp=drive_link"
//                         className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-red-500 to-orange-500 hover:bg-slate-800 text-white mt-3"
//                     >
//                         <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
//                             Download CV
//                         </span>
//                     </Link>
//                 </div>
//             </div>
//             <div className="col-span-5 place-self-center mt-4 lg:mt-0">
//                 <div className="rounded-full w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] bg-[#181818] relative overflow-hidden">
//                     <Image 
//                         src={'/images/hero-image3.png'}
//                         alt='hero image'
//                         width={400}
//                         height={400}
//                         className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
//                     />
//                 </div>                
//             </div>
//         </div>
//     </section>
//     </motion.div>
//     </AuroraBackground>
//   )
// }
'use client'
import Image from 'next/image'
import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import {motion} from 'framer-motion'
import Link from 'next/link';
import { AuroraBackground } from './aurora-background';

export default function HeroSection() {
  return (
    <AuroraBackground>
    <motion.div
      initial={{ opacity: 0.0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="relative flex flex-col gap-4 items-center justify-center px-4"
    >
    <section>
        <div className="mx-auto px-14 my-4 grid grid-cols-1 lg:grid-cols-12">
            <div className="col-span-7 place-self-center text-center sm:text-left">
                <h1 className='text-white mb-4 text-3xl md:text-4xl lg:text-6xl font-extrabold'>
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600'>Hello, I'm {" "}</span> <br /> 
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'Ahyaan Hassan',
                            1000, // wait 1s before replacing "Mice" with "Hamsters"
                            'Data Scientist',
                            1000,
                            'a Coder',
                            1000,
                            'a Learner.',
                            1000
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{display: 'inline-block' }}
                        repeat={Infinity}
                        className='mt-4 '
                    />
                </h1>
                <div className="">
                    <Link
                        href="#contact"
                        className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 to-red-500 hover:bg-slate-200 text-white"
                    >
                        Hire Me
                    </Link>
                    <Link
                        href="https://drive.google.com/file/d/1-NSgR-piyowAPihAlJPVeYQ657-4pOdI/view?usp=sharing"
                        className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 to-red-500 hover:bg-slate-800 text-white mt-3"
                    >
                        <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                            Download CV
                        </span>
                    </Link>
                </div>
            </div>
            <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                <div className="rounded-full w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] bg-[#181818] relative overflow-hidden">
                    <Image 
                        src={'/images/hero-image3.png'}
                        alt='hero image'
                        width={400}
                        height={400}
                        className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                    />
                </div>                
            </div>
        </div>
    </section>
    </motion.div>
    </AuroraBackground>
  )
}

