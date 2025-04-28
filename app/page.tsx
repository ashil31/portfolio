"use client";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Project from "./components/Project";
import Experience from "./components/Experiences";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

export default function Home() {

  const [isDarkmode, setIsDarkmode] = useState(false);

  useEffect(() => {
    if(localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {  
      setIsDarkmode(true);
    }else {
      setIsDarkmode(false);
    }
  }, []);
  
  useEffect(() => {
    if (isDarkmode) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "";
    }
  }
  , [isDarkmode]);

  return (
    <>
      <Navbar isDarkmode={isDarkmode} setIsDarkmode={setIsDarkmode} />
      <Header isDarkmode={isDarkmode} setIsDarkmode={setIsDarkmode} />
      <About isDarkmode={isDarkmode} setIsDarkmode={setIsDarkmode} />
      <Project isDarkmode={isDarkmode} setIsDarkmode={setIsDarkmode} />
      <Experience isDarkmode={isDarkmode} setIsDarkmode={setIsDarkmode} />
      <Contact isDarkmode={isDarkmode} setIsDarkmode={setIsDarkmode} />
      <Footer isDarkmode={isDarkmode} setIsDarkmode={setIsDarkmode} />
    </>
  );
}
