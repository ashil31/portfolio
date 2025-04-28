import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = ({ isDarkmode, setIsDarkmode }) => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "3bb3222d-d20c-4836-9a17-bd7e8720d43b");

    const submitPromise = fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then(async (response) => {
      const data = await response.json();
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        setResult(data.message);
        throw new Error(data.message);
      }
    });

    toast.promise(submitPromise, {
      pending: "Sending...",
      success: "Email submitted successfully!",
      error: "Failed to submit email.",
    });
  };

  return (
    <div
      id="contact"
      className='z-40 relative w-full px-[12%] py-10 mt-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none'
    >
      <h2 className="text-center mb-5 text-5xl font-Ovo font-medium">
        Connect with me
      </h2>
      <h2 className="mx-auto text-center text-xl font-Ovo">Get in touch</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        "Feel free to reach out with any questions, comments, or feedback. I
        look forward to hearing from you!"
      </p>

      <form onSubmit={onSubmit} className="max-w-2xl mx-auto ">
        <div className="grid grid-cols-2 gap-6 mt-10 mb-8">
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"
            required
          />
        </div>
        <textarea
          rows="6"
          name="message"
          placeholder="Enter your message"
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-darkHover/30 dark:border-white/90"
          required
        ></textarea>

        <button
          type="submit"
          className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover"
        >
          Submit Now
          <Image src={assets.right_arrow_white} alt="submit" className="w-4" />
        </button>
      </form>

      <ToastContainer />
    </div>
  );
};

export default Contact;
