import {
    CalculatorIcon,
    DollarSignIcon,
    EuroIcon,
    PoundSterlingIcon,
    ClipboardCopyIcon,
    Gamepad2Icon,
    WholeWordIcon,
} from "lucide-react";
import Link from "next/link";

import React from "react";

export default function Services() {
    return (
        <div className="w-full bg-[#1a0b2e] py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-white">
                        My <span className="text-orange-500">Projects</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div className="bg-white rounded-lg p-8 text-center overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                        <div className="flex justify-center mb-4">
                            <CalculatorIcon className="w-12 h-12 text-orange-500" />
                        </div>
                        <h3 className="text-xl font-bold mb-4">Npm Calculator</h3>
                        <p className="text-gray-600">
                            &quot;This CLI-based calculator, built with TypeScript and Node.js, performs essential operations:
                            addition, subtraction, multiplication, and division. It&#39;s an efficient tool for quick calculations in the terminal,
                            showcasing a clean approach to basic arithmetic operations in a Node.js environment.&quot;
                        </p>
                        <Link href="https://github.com/Kafil99/Simple-cli-based-Calculator.git" target="_blank">
                            <button className="mt-10 px-6 py-2 bg-orange-500 text-white font-bold rounded transition-colors duration-300 hover:bg-orange-600">
                                View Code
                            </button>
                        </Link>
                    </div>

                    <div className="bg-white rounded-lg p-8 text-center rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                        <div className="flex justify-center mb-4">
                            <DollarSignIcon className="w-12 h-12 text-orange-500" />
                        </div>
                        <h3 className="text-xl font-bold mb-4">Npm Currency Converter</h3>
                        <p className="text-gray-600">
                            &quot;This CLI-based currency converter, built with TypeScript and Node.js, allows
                            users to convert between USD, EUR, GBP, INR, and PKR by simply entering the source currency,
                            target currency, and amount. It&#39;s a quick and practical tool for currency conversion in the terminal.&quot;
                        </p>
                        <Link href="https://github.com/Kafil99/currency-converter" target="_blank">
                            <button className="mt-10 px-6 py-2 bg-orange-500 text-white font-bold rounded transition-colors duration-300 hover:bg-orange-600">
                                View Code
                            </button>
                        </Link>
                    </div>

                    <div className="bg-white rounded-lg p-8 text-center overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl flex flex-col justify-between">
                        <div>
                            <div className="flex justify-center mb-4">
                                <EuroIcon className="w-12 h-12 text-orange-500" />
                                <DollarSignIcon className="w-12 h-12 text-orange-500" />
                                <PoundSterlingIcon className="w-12 h-12 text-orange-500" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Npm ATM</h3>
                            <p className="text-gray-600 mb-6">
                                &quot;This TypeScript and Node.js CLI-based ATM simulator lets users securely
                                check their balance and withdraw funds. With a default balance of $10,000,
                                users can access features by entering a secure PIN (default: 1234). Simple,
                                efficient, and ideal for practicing user authentication and financial transactions in Node.js.&quot;
                            </p>
                        </div>
                        <Link href="https://github.com/Kafil99/ATM" target="_blank">
                            <button className="px-6 py-2 bg-orange-500 text-white font-bold rounded transition-colors duration-300 hover:bg-orange-600">
                                View Code
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-lg p-8 text-center rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                        <div className="flex justify-center mb-4">
                            <Gamepad2Icon className="w-12 h-12 text-orange-500" />
                        </div>
                        <h3 className="text-xl font-bold mb-4">Npm Number Guessing</h3>
                        <p className="text-gray-600">
                            &quot;This CLI-based number guessing game, created with TypeScript and Node.js,
                            challenges players to guess a random number between 1 and 10. Simple and engaging,
                            it&#39;s perfect for practicing basic game logic and user interaction in a Node.js environment.&quot;
                        </p>
                        <Link href="https://github.com/Kafil99/Cli-Number-Guessing-Game" target="_blank">
                            <button className="mt-10 px-6 py-2 bg-orange-500 text-white font-bold rounded transition-colors duration-300 hover:bg-orange-600">
                                View Code
                            </button>
                        </Link>
                    </div>

                    <div className="bg-white rounded-lg p-8 text-center overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl flex flex-col justify-between">
                        <div>
                            <div className="flex justify-center mb-4">
                                <ClipboardCopyIcon className="w-12 h-12 text-orange-500" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Npm To-Do-List</h3>
                            <p className="text-gray-600 mb-6">
                                &quot;A simple CLI To-Do app using TypeScript and Node.js. It prompts the user to add tasks, asks if they
                                want to add more, and displays the full list when done.&quot;
                            </p>
                        </div>
                        <Link href="https://github.com/Kafil99/To-do-list" target="_blank">
                            <button className="px-6 py-2 bg-orange-500 text-white font-bold rounded transition-colors duration-300 hover:bg-orange-600">
                                View Code
                            </button>
                        </Link>
                    </div>

                    <div className="bg-white rounded-lg p-8 text-center overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl flex flex-col justify-between">
                        <div>
                            <div className="flex justify-center mb-4">
                                <WholeWordIcon className="w-12 h-12 text-orange-500" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">kafilahmed999-word-counter</h3>
                            <p className="text-gray-600 mb-6">
                                &quot;This is a CLI word counter app built with TypeScript and Node.js.
                                It prompts the user to enter text and then counts the number of words in the
                                input, providing the total word count in the terminal.&quot;
                            </p>
                        </div>
                        <Link href="https://github.com/Kafil99/Word-Counter" target="_blank">
                            <button className="px-6 py-2 bg-orange-500 text-white font-bold rounded transition-colors duration-300 hover:bg-orange-600">
                                View Code
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
