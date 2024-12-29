'use client'
import React from 'react'
import ContactForm from "./ContactForm";
import { AiOutlineGithub } from "react-icons/ai";
import { SiLinkedin } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md"; 
import { BsTwitterX } from "react-icons/bs";


function ContactPage() {
  return (
    <section id="contact" className="w-full min-h-screen flex flex-col lg:flex-row items-center justify-center gap-8 p-4 md:p-8">
      {/* Left Section */}
      <div className="w-full lg:w-1/2 flex flex-col items-center p-6 lg:items-start space-y-4 lg:space-y-8">
        <h2 className="text-4xl font-bold">Let's Connect</h2>
        <p className="text-lg text-gray-600 max-w-md text-center lg:text-left">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </p>
        
        {/* Email Button */}
        <a 
        href="mailto:emmanuel@abhishikt.com?subject=Let's Connect!&body=Hi, I'd like to connect with you!"
        className="inline-flex items-center gap-2 flex-wrap justify-center lg:justify-start"
        >
        <button className="bg-[#ffffff] hover:bg-[#dadada] text-black px-6 py-2 rounded-full font-semibold flex items-center gap-2">
            <MdEmail className="text-xl" />
            Connect via Email
        </button>
        </a>


        {/* Social Icons */}
        <div className="flex space-x-6 mt-6">
          <a href="https://github.com/abhishiktemmanuel" 
             className="text-3xl hover:text-gray-600 transition-colors"
             target="_blank" 
             rel="noopener noreferrer">
            <AiOutlineGithub />
          </a>
          
          <a href="https://x.com/iam_abhishikt" 
             className="text-3xl hover:text-gray-600 transition-colors"
             target="_blank" 
             rel="noopener noreferrer">
            <BsTwitterX />
          </a>
          <a href="https://www.linkedin.com/in/abhishikt-emmanuel-prakash-651a43174/" 
             className="text-3xl hover:text-blue-600 transition-colors"
             target="_blank" 
             rel="noopener noreferrer">
            <SiLinkedin />
          </a>
          <a href="https://www.instagram.com/iam_abhishikt/" 
             className="text-3xl hover:text-pink-600 transition-colors"
             target="_blank" 
             rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2">
        <ContactForm />
      </div>
    </section>
  )
}

export default ContactPage










