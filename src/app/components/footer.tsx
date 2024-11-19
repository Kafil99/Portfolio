import { FaLinkedin, FaGithub, } from "react-icons/fa"; 
import { Mail } from "lucide-react";
import React from "react";
export default function Footer() {
  return (
    <footer className="w-full bg-slate-900 text-gray-300 py-4 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <span className="text-sm">©2024 Kafeel Ahmed</span>

          <div className="hidden md:flex items-center gap-4 text-sm">
            <span>Fullstack Developer</span>
            <span>•</span>
            <span>UI Designer</span>
            <span>•</span>
            <span>Next.js Developer</span>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4">
            <a target="_blank"
              href="https://www.linkedin.com/in/kafeel-ahmed-6a2b382ba/"
              className="hover:text-white transition-colors"
            >
              <FaLinkedin className="w-5 h-5" /> 
            </a>
            <a target="_blank"
              href="https://github.com/Kafil99"
              className="hover:text-white transition-colors"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href="mailto:kafilahmed417@gmail.com"
              className="hover:text-white transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <span className="text-sm">
            Designed by{" "}
            <a className="hover:text-white transition-colors">@kafeelahmed</a>
          </span>
        </div>
      </div>
    </footer>
  );
}