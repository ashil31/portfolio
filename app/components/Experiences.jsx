import { expCards } from "@/assets/assets";
import Image from "next/image";
import React, { use } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Experiences = ({isDarkmode, setIsDarkmode}) => {

    useGSAP(() => {
        gsap.utils.toArray('.timeline-card').forEach((card) => {
            gsap.from(card, {
                xPercent: -100,
                opacity: 0,
                transformOrigin: 'left left',
                duration: 1,
                ease: 'power2.inOut',
                scrollTrigger: {
                    trigger: card,
                    start: 'top 80%',
                }
            });
        });

        gsap.to('.timeline', {
            transformOrigin: 'bottom bottom',
            ease: 'power1.inOut',
            scrollTrigger: {
                trigger: '.timeline',
                start: 'top center',
                end: '70% center',
                onUpdate: (self) => {
                    gsap.from('.timeline', {
                        scaleY: 1- self.progress,
                    });
                }
            },
        }
        );
        gsap.utils.toArray('.expText').forEach((text) => {
            gsap.from(text, {
                xPercent: 0,
                opacity: 0,
                duration: 1,
                ease: 'power2.inOut',
                scrollTrigger: {
                    trigger: text,
                    start: 'top 60%',
                }
            });
        });
    },[]);
  return (
    <div id="experience" className="w-full px-[12%] py-10 scroll-mt-20">
      <h2 className="text-center mb-5 text-5xl font-Ovo font-medium">
        Professional Experiences
      </h2>
      <h2 className=" mx-auto text-center text-xl font-Ovo">
        My journey in the tech world
      </h2>

      <div className="mt-20 relative">
        <div className="relative z-30">
          {expCards.map((card, index) => (
            <div className="w-full" key={index}>
              <div className="flex items-start">
                <div className="timeline-wrapper">
                  <div className="timeline" />
                  <div className="gradient-line w-1 h-full" />
                </div>
                <div className="expText mb-10 flex xl:gap-10 md:gap-10 gap-5 relative z-20">
                  <div className="timeline-logo">
                    <Image
                      src={card.logoPath.src}
                      alt="logo"
                      width={60}
                      height={60}
                    />
                  </div>
                  <div className="-mt-5 transition-all duration-300 hover:shadow-lg hover:shadow-gray-400 rounded-xl bg-white p-5 dark:bg-darkTheme dark:hover:border-white/70 dark:hover:shadow-none">
                    <h1 className="font-semibold text-3xl">{card.title}</h1>
                    <p className="my-1 -mb-1 text-black dark:text-white">{card.date}</p>
                    <p className="text-[#839cb5] italic">Responsibilites</p>
                    <ul className="list-disc ms-5 mt-2 flex flex-col gap-2 text-black">
                      {card.responsibilities.map((item, index) => (
                        <li key={index} className="text-lg dark:text-white">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experiences;
