import { PhoneIcon, MailIcon, MapPinIcon } from "lucide-react";
import React from "react";
export default function Contact() {
  return (
    <div className="w-full min-h-screen bg-[#1a0b2e] text-white px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Contact</h1>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <PhoneIcon className="w-6 h-6" />
              <div>
                <p>+92 3222094816</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <MailIcon className="w-6 h-6" />
              <p>kafilahmed417@gmail.com</p>
            </div>

            <div className="flex items-center gap-4">
              <MapPinIcon className="w-6 h-6" />
              <p>Karachi, Pakistan</p>
            </div>
          </div>

          <form className="space-y-6">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 rounded bg-[#2d1f3f] border border-[#3d2d4f]"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 rounded bg-[#2d1f3f] border border-[#3d2d4f]"
            />

            <div className="grid grid-cols-2 gap-4">
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-3 rounded bg-[#2d1f3f] border border-[#3d2d4f]"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full p-3 rounded bg-[#2d1f3f] border border-[#3d2d4f]"
              />
            </div>

            <textarea
              placeholder="Your Message"
              rows={6}
              className="w-full p-3 rounded bg-[#2d1f3f] border border-[#3d2d4f]"
            />

            <button
              type="submit"
              className="px-8 py-3 rounded bg-[#2d1f3f] border border-[#3d2d4f] hover:bg-[#3d2d4f] transition-colors"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

