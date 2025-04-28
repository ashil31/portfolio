"use client";
import React from "react";

import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import uber from "@/assets/uber_project.png";
import micro from "@/assets/micro project.jpg";
import Image from "next/image";
import zentry from "@/assets/zentry.png";
import zoro from "@/assets/xora.png";
import ecommerce from "@/assets/ecommerce.png";

const Project = ({isDarkmode, setIsDarkmode}) => {
  return (
    <div id="project" className="w-full px-[12%] py-10 scroll-mt-20">
      <h2 className="text-center mb-5 text-5xl font-Ovo font-medium">
        Development Showcase
      </h2>
      <h2 className=" mx-auto text-center text-xl font-Ovo">
        A glimpse into my development endeavors
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-10">
        {/* project 1 */}
        <CardContainer className="inter-var cursor-pointer">
          <CardBody className="bg-white hover:bg-lightHover hover:shadow-2xl relative group/card border-black/[0.8]  w-full max-w-[30rem] h-auto rounded-xl p-6 border dark:bg-transparent dark:hover:bg-darkHover dark:border-white/50">
            <div className="text-xl text-black font-medium dark:text-white">
              <h4>Ride-hailing Application</h4>
            </div>
            <div className="pt-4">
              <Image
                src={uber}
                className="h-40 w-full object-fill rounded-xl group-hover/card:shadow-xl "
                alt="thumbnail"
              />
            </div>
            <div className="grid grid-cols-3 gap-4 pt-3 mt-2">
              <p className="border p-1 text-center rounded-lg hover:bg-lightHover hover:shadow-2xl dark:hover:bg-darkTheme transition-all duration-300">
                ReactJs
              </p>
              <p title="Google-maps-API" className="border p-1 text-center rounded-lg truncate hover:bg-lightHover hover:shadow-2xl dark:hover:bg-darkTheme transition-all duration-300">
                Google-maps-API              
              </p>
              <p className="border p-1 text-center rounded-lg hover:bg-lightHover hover:shadow-2xl dark:hover:bg-darkTheme transition-all duration-300">
                SocketIO
              </p>
              <p className="border p-1 text-center rounded-lg hover:bg-lightHover hover:shadow-2xl dark:hover:bg-darkTheme transition-all duration-300">
                ExpressJs
              </p>
              <p className="border p-1 text-center rounded-lg hover:bg-lightHover hover:shadow-2xl dark:hover:bg-darkTheme transition-all duration-300">
                MongoDB
              </p>
              <p title="Monolithic architecture" className="border p-1 text-center rounded-lg truncate hover:bg-lightHover hover:shadow-2xl dark:hover:bg-darkTheme transition-all duration-300">
              Monolithic 
              </p>
            </div>

            <div className="flex justify-between items-center pt-2 -mb-3">
              <CardItem
                translateZ={20}
                as="a"
                href="https://github.com/ashil31/Ride-hailing-Application"
                target="__blank"
                className="px-4 py-2 rounded-xl text-black font-medium dark:text-white"
              >
                Look now →
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
        {/* project 2 */}
        <CardContainer className="inter-var cursor-pointer">
          <CardBody className="bg-white hover:bg-lightHover hover:shadow-2xl relative group/card border-black/[0.8]  w-full max-w-[30rem] h-auto rounded-xl p-6 border dark:bg-transparent dark:hover:bg-darkHover dark:border-white/50 ">
            <div className="text-xl text-black font-medium dark:text-white">
              <h4>Micro-Services</h4>
            </div>
            <div className="pt-4">
              <Image
                src={micro}
                className="h-40 w-full object-fill rounded-xl group-hover/card:shadow-x "
                alt="thumbnail"
              />
            </div>
            <div className="grid grid-cols-3 gap-4 pt-3 mt-2">
              <p className="border p-1 text-center rounded-lg hover:bg-lightHover hover:shadow-2xl dark:hover:bg-darkTheme transition-all duration-300">
                RabbitMQ
              </p>
              <p title="Microservices-architecture" className="border p-1 text-center rounded-lg truncate hover:bg-lightHover hover:shadow-2xl dark:hover:bg-darkTheme transition-all duration-300">
                Microservices-architecture              
              </p>
              <p title="RESTFUL-WEBSERVICES" className="border p-1 text-center rounded-lg truncate hover:bg-lightHover hover:shadow-2xl dark:hover:bg-darkTheme transition-all duration-300">
                RESTFUL-WEBSERVICES
              </p>
              <p title="Express-http-proxy" className="border p-1 text-center rounded-lg truncate hover:bg-lightHover hover:shadow-2xl dark:hover:bg-darkTheme transition-all duration-300">
                Express-http-proxy
              </p>
              <p className="border p-1 text-center rounded-lg hover:bg-lightHover hover:shadow-2xl dark:hover:bg-darkTheme transition-all duration-300">
                MongoDB
              </p>
              <p title="" className="border p-1 text-center rounded-lg truncate hover:bg-lightHover dark:hover:bg-darkTheme hover:shadow-2xl transition-all duration-300">
                Amqplib 
              </p>
            </div>
            <div className="flex justify-between items-center pt-2 -mb-3">
              <CardItem
                translateZ={20}
                as="a"
                href="https://github.com/ashil31/MICRO-SERVICES"
                target="__blank"
                className="px-4 py-2 rounded-xl text-black font-medium dark:text-white"
              >
                Look now →
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
        {/* project 3 */}
        <CardContainer className="inter-var cursor-pointer">
          <CardBody className="bg-white hover:bg-lightHover hover:shadow-2xl relative group/card border-black/[0.8]  w-full max-w-[30rem] h-auto rounded-xl p-6 border dark:bg-transparent dark:hover:bg-darkHover dark:border-white/50 ">
            <div className="text-xl text-black font-medium dark:text-white">
              <h4>Zentry Clone</h4>
            </div>
            <div className="pt-4">
              <Image
                src={zentry}
                className="h-40 w-full object-fill rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </div>
            <div className="grid grid-cols-3 gap-4 pt-3 mt-2 mb-14">
              <p title="GreenSock Animation Platform" className="border p-1 text-center rounded-lg truncate hover:bg-lightHover hover:shadow-2xl dark:hover:bg-darkTheme transition-all duration-300">
                GSAP
              </p>
              <p title="" className="border p-1 text-center rounded-lg truncate hover:bg-lightHover hover:shadow-2xl dark:hover:bg-darkTheme transition-all duration-300">
                ReactJs              
              </p>
              <p title="" className="border p-1 text-center rounded-lg truncate hover:bg-lightHover hover:shadow-2xl dark:hover:bg-darkTheme transition-all duration-300">
                TailwindCSS
              </p>
            </div>
            <div className="flex justify-between items-center pt-2 -mb-3">
              <CardItem
                translateZ={20}
                as="a"
                href="https://zentry-ashil-gsap.netlify.app/"
                target="__blank"
                className="px-4 py-2 rounded-xl text-black font-medium dark:text-white"
              >
                Look now →
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
        {/* project 4  */}
        <CardContainer className="inter-var cursor-pointer">
          <CardBody className="bg-white hover:bg-lightHover hover:shadow-2xl relative group/card border-black/[0.8]  w-full max-w-[30rem] h-auto rounded-xl p-6 border dark:bg-transparent dark:hover:bg-darkHover dark:border-white/50 ">
            <div className="text-xl text-black font-medium dark:text-white">
              <h4>Xora- Saas Frontend</h4>
            </div>
            <div className="pt-4">
              <Image
                src={zoro}
                className="h-50 w-full object-fill rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </div>
            <div className="grid grid-cols-3 gap-4 pt-3 mt-2 mb-14">
              <p title="" className="border p-1 text-center rounded-lg truncate hover:bg-lightHover hover:shadow-2xl dark:hover:bg-darkTheme transition-all duration-300">
                ReactJs              
              </p>
              <p title="" className="border p-1 text-center rounded-lg truncate hover:bg-lightHover hover:shadow-2xl dark:hover:bg-darkTheme transition-all duration-300">
                TailwindCSS
              </p>
            </div>
            <div className="flex justify-between items-center pt-2 -mb-3">
              <CardItem
                translateZ={20}
                as="a"
                href="https://ashil-saas-xora.netlify.app/"
                target="__blank"
                className="px-4 py-2 rounded-xl text-black font-medium dark:text-white"
              >
                Look now →
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
        {/* project 5 */}
        <CardContainer className="inter-var cursor-pointer">
          <CardBody className="bg-white hover:bg-lightHover hover:shadow-2xl relative group/card border-black/[0.8]  w-full max-w-[30rem] h-auto rounded-xl p-6 border dark:bg-transparent dark:hover:bg-darkHover dark:border-white/50 ">
            <div className="text-xl text-black font-medium dark:text-white">
              <h4>E-commerce Frontend</h4>
            </div>
            <div className="pt-6">
              <Image
                src={ecommerce}
                className="h-50 w-full object-fill rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </div>
            <div className="grid grid-cols-3 gap-4 pt-3 mt-2 mb-16">
              <p title="" className="border p-1 text-center rounded-lg truncate hover:bg-lightHover hover:shadow-2xl dark:hover:bg-darkTheme transition-all duration-300">
                ReactJs              
              </p>
              <p title="" className="border p-1 text-center rounded-lg truncate hover:bg-lightHover hover:shadow-2xl dark:hover:bg-darkTheme transition-all duration-300">
                TailwindCSS
              </p>
            </div>
            <div className="flex justify-between items-center pt-2 -mb-3">
              <CardItem
                translateZ={20}
                as="a"
                href="https://ashil-ecommerce-app.netlify.app/"
                target="__blank"
                className="px-4 py-2 rounded-xl text-black font-medium dark:text-white"
              >
                Look now →
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </div>
    </div>
  );
};

export default Project;
