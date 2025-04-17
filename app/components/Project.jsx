"use client";
import React from "react";

import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import uber from "@/assets/uber_project.png";
import micro from "@/assets/micro project.jpg";
import Image from "next/image";
import zentry from "@/assets/zentry.png";
import zoro from "@/assets/xora.png";
import ecommerce from "@/assets/ecommerce.png";


const Project = () => {
  return (
    <div id="project" className="w-full px-[12%] py-10 scroll-mt-20">
      <h2 className="text-center mb-5 text-5xl font-Ovo font-medium">
        Development Showcase
      </h2>
      <h2 className=" mx-auto text-center text-xl font-Ovo">
        A glimpse into my development endeavors
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-10">
        <CardContainer className="inter-var cursor-pointer">
          <CardBody className="bg-white hover:bg-lightHover hover:shadow-2xl relative group/card border-black/[0.8]  w-full max-w-[30rem] h-auto rounded-xl p-6 border  ">
            <div className="text-xl text-black font-medium">
              <h4>Ride-hailing Application</h4>
            </div>
            <div className="pt-4">
              <Image
                src={uber}
                className="h-60 w-full object-fill rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </div>
            <div className="flex justify-between items-center pt-4">
              <CardItem
                translateZ={20}
                as="a"
                href="https://github.com/ashil31/Ride-hailing-Application"
                target="__blank"
                className="px-4 py-2 rounded-xl text-black font-medium"
              >
                Look now →
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var cursor-pointer">
          <CardBody className="bg-white hover:bg-lightHover hover:shadow-2xl relative group/card border-black/[0.8]  w-full max-w-[30rem] h-auto rounded-xl p-6 border  ">
            <div className="text-xl text-black font-medium">
              <h4>Micro-Services</h4>
            </div>
            <div className="pt-4">
              <Image
                src={micro}
                className="h-60 w-full object-fill rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </div>
            <div className="flex justify-between items-center pt-4">
              <CardItem
                translateZ={20}
                as="a"
                href="https://github.com/ashil31/MICRO-SERVICES"
                target="__blank"
                className="px-4 py-2 rounded-xl text-black font-medium"
              >
                Look now →
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var cursor-pointer">
          <CardBody className="bg-white hover:bg-lightHover hover:shadow-2xl relative group/card border-black/[0.8]  w-full max-w-[30rem] h-auto rounded-xl p-6 border  ">
            <div className="text-xl text-black font-medium">
              <h4>Zentry Clone</h4>
            </div>
            <div className="pt-4">
              <Image
                src={zentry}
                className="h-60 w-full object-fill rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </div>
            <div className="flex justify-between items-center pt-4">
              <CardItem
                translateZ={20}
                as="a"
                href="https://zentry-ashil-gsap.netlify.app/"
                target="__blank"
                className="px-4 py-2 rounded-xl text-black font-medium"
              >
                Look now →
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var cursor-pointer">
          <CardBody className="bg-white hover:bg-lightHover hover:shadow-2xl relative group/card border-black/[0.8]  w-full max-w-[30rem] h-auto rounded-xl p-6 border  ">
            <div className="text-xl text-black font-medium">
              <h4>Xora- Saas Frontend</h4>
            </div>
            <div className="pt-4">
              <Image
                src={zoro}
                className="h-60 w-full object-fill rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </div>
            <div className="flex justify-between items-center pt-4">
              <CardItem
                translateZ={20}
                as="a"
                href="https://ashil-saas-xora.netlify.app/"
                target="__blank"
                className="px-4 py-2 rounded-xl text-black font-medium"
              >
                Look now →
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var cursor-pointer">
          <CardBody className="bg-white hover:bg-lightHover hover:shadow-2xl relative group/card border-black/[0.8]  w-full max-w-[30rem] h-auto rounded-xl p-6 border  ">
            <div className="text-xl text-black font-medium">
              <h4>E-commerce Frontend</h4>
            </div>
            <div className="pt-4">
              <Image
                src={ecommerce}
                className="h-60 w-full object-fill rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </div>
            <div className="flex justify-between items-center pt-4">
              <CardItem
                translateZ={20}
                as="a"
                href="https://ashil-saas-xora.netlify.app/"
                target="__blank"
                className="px-4 py-2 rounded-xl text-black font-medium"
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
