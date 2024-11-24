import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="w-full min-h-screen bg-[#1A0B2E] text-white px-4 py-16 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            About <span className="text-orange-500">Me</span>
          </h2>
          <div className="w-24 h-0.5 bg-orange-500 mx-auto mt-2"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <div className="relative w-64 h-64 mx-auto md:w-96 md:h-96">
              <Image
                src="/profilepic.png"
                alt="Profile"
                width={384}
                height={384}
                className="rounded-2xl"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Fullstack Developer & Web Designer
            </h3>

            <p className="text-gray-300 mb-4">
              I&#39;m a passionate Fullstack Developer and Web Designer with
              experience in building dynamic, user-friendly websites. I have a solid
              understanding of front-end and back-end technologies, including HTML, CSS, TypeScript, Node.js, and Next.js.
              My goal is to create seamless, responsive web experiences that solve real-world problems.
            </p>

            <p className="text-gray-300 mb-8">
              I&#39;m a student actively learning web development,
              constantly improving my skills in full-stack development and web design.
            </p>

            <button className="px-6 py-3 rounded-full bg-orange-500 hover:bg-orange-600 
            transition-colors text-white font-medium overflow-hidden shadow-lg transition-transform 
            duration-300 hover:scale-105 hover:shadow-xl">
              <Link href="/contact" className="hover:text-gray-300">Contact Me</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
