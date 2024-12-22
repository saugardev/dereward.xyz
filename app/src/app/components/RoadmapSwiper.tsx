'use client'

import { Swiper, SwiperSlide} from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

import { useEffect, useRef, useState } from 'react';

const milestones = [
  {
    title: 'Idea',
    description: 'The genesis of Scratch. A series of brainstorming sessions that evaluated market needs, gauging company objectives, and laying the fundamental blueprint for our ambitious project.',
    color: '#E7E0EB'
  },
  {
    title: 'Development',
    description: 'Turning vision into reality. Our team embarks on crafting the prototype, establishing the tech stack, and setting the groundwork for the first iteration of Scratch.',
    color: '#DFEFD7'
  },
  {
    title: 'Scratch v1',
    description: 'Our maiden launch! Introducing Scratch v1, featuring digital scratchable cards, a user-friendly interface, and the first layer of integration with the Blockchain.',
    color: '#D1EAFA',
  },
  {
    title: 'Scratch v2',
    description: 'The evolution continues. With enhanced features, refined UX/UI, and deeper Blockchain integration, Scratch v2 sets new industry standards for digital rewards.',
    color: '#FAE5D1'
  },
]

export default function RoadmapSwiper() {
  const [isInView, setIsInView] = useState(false);
  const swiperRef = useRef<any>({});
  const swiperContainerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInView(entry.isIntersecting);
        });
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    if (swiperContainerRef.current) {
      observer.observe(swiperContainerRef.current);
    }

    return () => {
      if (swiperContainerRef!.current) {
        observer.unobserve(swiperContainerRef!.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isInView) {
      swiperRef.current?.autoplay.start();
    } else {
      swiperRef.current?.autoplay.stop();
    }
  }, [isInView]);


  return (
    <div className='relative mt-10' ref={swiperContainerRef}>
      <Swiper
        spaceBetween={20}
        pagination={{ clickable: true }}
        onSwiper={(swiper)=> { swiperRef.current = swiper; }}
        lazyPreloadPrevNext={20}
        slidesPerView={1.5}
        className='!overflow-visible'
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        modules={[Autoplay]}
      >
        {milestones.map((milestone, index) => (
          <SwiperSlide key={index}>
            <div className="relative flex justify-between mx-auto rounded-[3rem] mr-32 w-[800px] max-w-7xl px-6 lg:flex lg:px-10 py-16 bg-[#F5F4EF] overflow-hidden hover:cursor-grab">
              <div className="flex flex-col h-[320px]">
                <h2 className="mt-4 text-4xl text-stone-700 sm:text-5xl opacity-80">{milestone.title}</h2>
                <p className="mt-10 text-2xl leading-8 text-stone-500 opacity-80">{milestone.description}</p>
              </div>
              <div className='absolute -bottom-8 text-9xl font-extralight' style={{
                color: milestone.color,
              }}>
                {index + 1 < 10 ? `0${index + 1}` : index + 1}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='absolute bottom-4 right-16 z-10 flex justify-center gap-5'>
        <button className='p-3 bg-[#C4C3BF] transition-all hover:bg-[#8d8c8a] text-white rounded-2xl focus-visible:outline-stone-700 ' onClick={()=> swiperRef.current.slidePrev()}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        <button className='p-3 bg-[#C4C3BF] transition-all hover:bg-[#8d8c8a] text-white rounded-2xl focus-visible:outline-stone-700' onClick={()=> swiperRef.current.slideNext()}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
    </div>
  );
}
 