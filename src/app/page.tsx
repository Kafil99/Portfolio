import { FaGithub, FaLinkedin, } from "react-icons/fa";
import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="w-full min-h-screen bg-[#1a0b2e] text-white">


      <main className="container mx-auto px-8 py-16 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-xl text-orange-500">Hi, It's me</h2>
          <h1 className="text-5xl font-bold">KAFEEL AHMED</h1>
          <div className="flex items-center space-x-2">
            <p className="text-2xl">And I'm a</p>
            <span className="text-orange-500 text-2xl">Fullstack Developer</span>
          </div>

          <p className="text-gray-300 max-w-lg">
            Passionate frontend developer with expertise in creating responsive
            and user-friendly web applications using modern technologies and
            best practices.
          </p>

          <div className="flex space-x-4">
            <button className="bg-orange-500 text-white px-6 py-3 rounded-full flex items-center space-x-2">
              <Link href={"https://milestone-1-2-tau.vercel.app/"} target="_blank"><span>My CV</span></Link>
            </button>

            <div className="flex items-center space-x-4">
              <a
                href="https://www.linkedin.com/in/kafeel-ahmed-6a2b382ba/"
                target="_blank"
                className="hover:text-orange-500"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://github.com/Kafil99"
                target="_blank"
                className="hover:text-orange-500"
              >
                <FaGithub size={24} />
              </a>
            </div>

          </div>
        </div>

        <div className="md:w-1/2 mt-12 md:mt-0">
          <Image
            src="/computer.png"
            alt="Coding illustration"
            className="w-full h-auto"
            width={800}
            height={600}
            priority
          />
        </div>
      </main>
    </div>
  );
}
