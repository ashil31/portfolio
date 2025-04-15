"use client";
import { assets, infoList } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import gitub from "@/assets/git.png";
import vscode from "@/assets/vscode.png";
import mongodb from "@/assets/mongodb.png";
import reactjs from "@/assets/reactjs.png";
import nodejs from "@/assets/nodejs.png";
import expressjs from "@/assets/expressjs.png";
import cplusplus from "@/assets/cplusplus.png";
import rabbitmq from "@/assets/rabbitmq.png";
import websocket from "@/assets/websocket.png";
import gsapani from "@/assets/gsap.png";

const About = () => {
  const people = [
    {
      id: 1,
      name: "ReactJs",
      designation: "Frontend",
      image: reactjs,
    },
    {
      id: 2,
      name: "NodeJs",
      designation: "BackEnd",
      image: nodejs,
    },
    {
      id: 3,
      name: "ExpressJs",
      designation: "BackEnd",
      image: expressjs,
    },
    {
      id: 4,
      name: "MongoDB",
      designation: "BackEnd",
      image: mongodb,
    },
    {
      id: 5,
      name: "RabbitMQ",
      designation: "Messaging & Caching",
      image: rabbitmq,
    },
    {
      id: 6,
      name: "WebSocket",
      designation: "BackEnd",
      image: websocket
    },
    {
      id: 7,
      name: "GSAP",
      designation: "Frontend",
      image: gsapani
    },
    {
      id: 8,
      name: "VS COde",
      designation: "Software Engineer",
      image: vscode,
    },
    {
      id: 9,
      name: "GitHub",
      designation: "Software Engineer",
      image: gitub,
    },
  ];
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>
      <h2 className="text-center text-5xl font-Ovo">About Me</h2>

      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <div className="w-64 sm:w-80 rounded-3xl max-w-none">
          <Image
            src={assets.user_image}
            alt="user_img"
            className="w-full rounded-3xl"
          />
        </div>
        <div className="flex-1">
          <p className="mb-8 max-w-2xl font-Ovo">
            "As a self-taught software engineer from India, I have dedicated 1.5
            years+ to mastering full-stack development. My passion lies in
            creating scalable, user-centric web applications. Continuously
            seeking to expand my skill set, I am eager to contribute innovative
            solutions and collaborate with dynamic teams."
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {infoList.map(({ icon, iconDrak, title, description }, index) => (
              <li
                key={index}
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black"
              >
                <Image src={icon} alt="title" className="w-7 mt-3" />
                <h3 className="my-4 font-semibold text-gray-700">{title}</h3>
                <p className="text-gray-600 text-sm">{description}</p>
              </li>
            ))}
          </ul>
          <h4 className="my-6 text-gray-700 font-Ovo">Tools i use</h4>
          <div className="flex flex-row items-center mb-10 w-full">
            <AnimatedTooltip items={people} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
