'use client'
import Button from "@/helper/Button";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import Cell from '@/assets/cell.png'
import Image from 'next/image'
import dynamic from 'next/dynamic'

const MotionDiv = dynamic(() => import('framer-motion').then((mod) => mod.motion.div), {
  ssr: false
})

export const Hero = () => {
  return (
    <section className="h-[80vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[90vh] flex flex-col items-center justify-center relative overflow-hidden">

      <MotionDiv 
        className="absolute h-36 w-36 sm:h-60 sm:w-48 md:h-64 md:w-64 lg:h-96 lg:w-96 xl:h-[30rem] xl:w-[30rem] flex items-center justify-center overflow-hidden rounded-full "
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <div className="relative w-full h-full">
          <Image 
            src={Cell} 
            alt="Cancer cell" 
            fill
            className="object-cover filter contrast-[2]"
          />
        </div>
      </MotionDiv>

      <div className="relative text-center px-4 sm:px-6 md:px-8 flex flex-col items-center justify-center">
        <h1 className="text-5xl sm:text-7xl sm:mt-[160px] md:text-8xl md:mt-[145px] lg:text-[150px] lg:mt-[150px] xl:text-[10rem] font-bold tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text">
          Hope - AI
        </h1>

        <div className="mt-8 sm:mt-[80px] md:mt-12 lg:mt-16 xl:mt-20">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/70">
            Empowering <span className="font-bold text-red-700">Cancer Care</span> with AI-driven Insights
          </p>
        </div>

        <div className="flex justify-center mt-6 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-16">
          <Button>
            Start Healing
          </Button>
        </div>
      </div>

      <ShootingStars />
      <StarsBackground />
    </section>
  );
};
