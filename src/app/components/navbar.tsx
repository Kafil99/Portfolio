import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navigation() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-[#1a0b2e] text-white">
      <div className="flex items-center">
        <Image
          src="/logo.png"
          alt="Logo"
          className="w-10 h-10 md:w-12 md:h-12"
          width={48} 
          height={48} 
          priority 
        />
        <span className="font-bold text-xl">KAFEEL AHMED</span>
      </div>

      <div className="hidden md:flex space-x-6">
        <Link href="/" className="hover:text-gray-300">Home</Link>
        <Link href="/about" className="hover:text-gray-300">About Me</Link>
        <Link href="/services" className="hover:text-gray-300">Projects</Link>
        <Link href="/contact" className="hover:text-gray-300">Contact</Link>
      </div>

      <button className="bg-white text-purple-900 px-6 py-2 rounded-full font-medium">
        <Link href="/contact">
          Hire me
        </Link>
      </button>
    </nav>
  );
}
