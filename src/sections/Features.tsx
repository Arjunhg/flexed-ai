'use client';
import { DotLottieCommonPlayer, DotLottiePlayer } from "@dotlottie/react-player";
import productImage from '@/assets/product-image.png';
import { ComponentPropsWithoutRef, useEffect, useRef, useState } from "react";
import { animate, motion, useMotionTemplate, useMotionValue, ValueAnimationTransition } from "framer-motion";

const tabs = [
  {
    icon: "/assets/lottie/vroom.lottie",
    title: "User-friendly dashboard",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 150,
  },
  {
    icon: "/assets/lottie/click.lottie",
    title: "One-click optimization",
    isNew: false,
    backgroundPositionX: 98,
    backgroundPositionY: 100,
    backgroundSizeX: 135,
  },
  {
    icon: "/assets/lottie/stars.lottie",
    title: "Smart keyword generator",
    isNew: true,
    backgroundPositionX: 100,
    backgroundPositionY: 27,
    backgroundSizeX: 177,
  },
];

const FeatureTab = (props: (typeof tabs)[number] & ComponentPropsWithoutRef<'div'> & {selected:boolean}) => {

  const dotLottieRef = useRef<DotLottieCommonPlayer>(null);
  const tabRef = useRef<HTMLDivElement>(null);

  const handleTabHover = () => {

    if(dotLottieRef.current === null) return;
    dotLottieRef.current.seek(0);
    dotLottieRef.current.play();
  }

  const xPercentage = useMotionValue(0);
  const yPercentage = useMotionValue(0);
  const maskImage = useMotionTemplate`radial-gradient(80px 80px at ${xPercentage}% ${yPercentage}%,black,transparent)`;

  useEffect(() => {

    if(!tabRef.current || !props.selected) return;

    xPercentage.set(0);
    yPercentage.set(0);

    const { height, width } = tabRef.current?.getBoundingClientRect();

    const circumference = height * 2 + width * 2;
    const times = [0, width / circumference, (width+height) / circumference, (width * 2 + height) / circumference ,1]
    
    const options: ValueAnimationTransition = {
      times,
      duration: 4,
      repeat: Infinity,
      ease: 'linear',
      repeatType: 'loop'
    }

    animate(xPercentage, [0, 100, 100, 0, 0], options);

    animate(yPercentage, [0, 0, 100, 100, 0], options);

  }, [props.selected])

  return(
      // rounded-xl = 12px
    <div 
      ref={tabRef}
      onMouseEnter={handleTabHover} 
      onClick={props.onClick}
      className="border border-white/15 flex p-2.5 rounded-xl gap-2.5 items-center lg:flex-1 relative">

        {
          props.selected && (
            <motion.div 
              style={{ maskImage }}
              className="absolute inset-0 -m-px rounded-xl border border-[#A369FF]">  
            </motion.div>
          )
        }

      
      <div className="h-12 w-12 border border-white/15 rounded-lg inline-flex items-center justify-center">
        <DotLottiePlayer 
          ref = {dotLottieRef}
          src={props.icon} 
          className="h-5 w-5" 
          autoplay 
          // loop
        />
      </div>

      <div className="font-medium">{props.title}</div>

      {
        // text-xs  = 12px
        props.isNew && <div className="text-xs rounded-full px-2 py-0.5 bg-[#8c44ff] text-black font-semibold">new</div>
      }

    </div>
  )
}

export const Features = () => {

  const [selectedtab, setSelectedTab] = useState(0);

  const backgroundPostionX = useMotionValue(tabs[0].backgroundPositionX);
  const backgroundPostitionY = useMotionValue(tabs[0].backgroundPositionY);
  const backgroundSizeX = useMotionValue(tabs[0].backgroundSizeX);

  const bgPosition = useMotionTemplate`${backgroundPostionX}% ${backgroundPostitionY}%`
  const bgSize = useMotionTemplate`${backgroundSizeX}% auto`;

  const handleSelectTab = (index:number) => {

    setSelectedTab(index);

    const animateOption: ValueAnimationTransition = {
      duration: 2,
      ease: 'easeInOut',
    }

    animate(backgroundSizeX, [backgroundSizeX.get(), 100, tabs[index].backgroundSizeX], animateOption)

    animate(backgroundPostionX, [backgroundPostionX.get(), tabs[index].backgroundPositionX], animateOption)

    animate(backgroundPostitionY, [backgroundPostitionY.get(), tabs[index].backgroundPositionY], animateOption)
  }

  return (

    <section className="py-20 md:py-24">
      
      <div className="container">

        <h2 className="text-5xl md:text-6xl font-medium text-center tracking-tighter">Elevate your SEO efforts</h2>
        <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto tracking-tight text-center mt-5">From small startups to large enterprise, our AI-driven tool has revolutionized the way businesses approach SEO</p>

        <div className="mt-10 flex flex-col lg:flex-row gap-3">

          {
            tabs.map((tab, tabIndex) => (
              <FeatureTab 
                selected={selectedtab===tabIndex}
                {...tab} 
                onClick={() => handleSelectTab(tabIndex)}
                key={tab.title}/>
            ))
          }

        </div>

        <div className="border border-white/20 p-2.5 rounded-xl mt-3">
          <motion.div 
            className="aspect-video bg-cover border border-white/20 rounded-md" 
            style={{
              backgroundImage: `url(${productImage.src})`,
              backgroundPosition: bgPosition,
              backgroundSize: bgSize
            }}
          >
          </motion.div>
          {/* <Image src={productImage} alt="Product Image" className="aspect-video bg-cover border border-white/20 rounded-lg"/> */}
        </div>

      </div>

    </section>
  )
};


/*
Intial setup by superFlex
'use client'
import { useState } from 'react';
import Image from 'next/image';
import featureImage1 from '@/assets/feature1.png';
import featureImage2 from '@/assets/feature2.png';
import featureImage3 from '@/assets/feature3.png';

const features = [
  {
    title: 'Automated Insights',
    description: 'Get real-time insights and analytics to boost your SEO strategy.',
    image: featureImage1,
  },
  {
    title: 'User-Friendly Tools',
    description: 'Access a suite of tools designed for ease of use and efficiency.',
    image: featureImage2,
  },
  {
    title: '24/7 Support',
    description: 'Our team is here to help you around the clock.',
    image: featureImage3,
  },
];

export const Features = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <h2 className="text-5xl md:text-6xl text-center tracking-tighter font-medium">Features</h2>
        <p className="text-white/70 text-lg md:text-xl text-center mt-5 tracking-tight max-w-sm mx-auto">
          Discover the powerful features that make our AI SEO tool stand out.
        </p>

        <div className="mt-10 flex justify-center">
          <div className="flex gap-4">
            {features.map((feature, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-lg ${activeTab === index ? 'bg-purple-600 text-white' : 'bg-white text-purple-600'}`}
                onClick={() => setActiveTab(index)}
              >
                {feature.title}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-xl text-white/70">{features[activeTab].description}</p>
          <div className="mt-5">
            <Image src={features[activeTab].image} alt={features[activeTab].title} className="mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};
*/