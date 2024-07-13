"use client";
import { useEffect, useState } from "react";
import { mulish, sourceSans } from "../app/fonts";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    var body = document.getElementById("body-tdp");

    if (!body) return;
    
    if (isMenuOpen) {
      body.style.height = '100vh';
      body.style.overflow = 'hidden';
    } else {
      body.style.height = 'auto';
      body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  return (
    <header
      className={`${mulish.className} absolute z-40 top-0 left-0 w-full text-text-white flex justify-center`}
    >
      <nav className="flex justify-evenly items-center mt-5 w-full px-4 lg:px-10 xl:px-0 xl:w-4/5 2xl:w-3/5">
        <div className="hidden lg:block w-1/4">
          <a className="hover:underline text-xl uppercase" href="/home">
            home
          </a>
          <a
            className="hover:underline text-xl uppercase ml-8 lg:ml-16"
            href="/blog"
          >
            blog
          </a>
        </div>

        <h2
          className={`${sourceSans.className} text-xl md:text-3xl lg:text-4xl lg:text-center font-bold uppercase grow px-1 lg:px-5`}
        >
          pramuditha chamikara
        </h2>

        <div className="hidden lg:block text-end w-1/4">
          <a
            className="hover:underline text-xl uppercase mr-5 lg:mr-10"
            href="/about"
          >
            about
          </a>
          <a
            className="text-xl uppercase py-2 px-6 border border-border-secondary hover:bg-button-focus hover:border-2 hover:px-[23px]"
            href="#lets-start"
          >
            hire&nbsp;me
          </a>
        </div>

        <div className="lg:hidden cursor-pointer" onClick={() => setIsMenuOpen(true)}>
          <Image src="/icons/menu.svg" alt="menu icon" width={40} height={60} />
        </div>
      </nav>

      <div className={`${isMenuOpen ? 'block' : 'hidden'} z-[1000] absolute top-0 left-0 w-screen h-screen bg-[#3E0141] text-text-white`}>
        <nav className="flex flex-col lg:ml-16">
          <div className="flex pr-5">
            <h2
              className={`${sourceSans.className} text-3xl lg:text-4xl lg:text-center font-bold uppercase grow px-10 py-10`}
            >
              pramuditha chamikara
            </h2>

            <Image
              className="cursor-pointer"
              src="/icons/cross.svg"
              alt="cross icon"
              width={40}
              height={40}
              onClick={() => setIsMenuOpen(false)}
            />
          </div>
          <div className="ml-16 px-4 py-4">
            <a className="hover:underline text-2xl uppercase" href="/home">
              home
            </a>
          </div>

          <div className="ml-16 px-4 py-4">
            <a className="hover:underline text-2xl uppercase" href="/blog">
              blog
            </a>
          </div>

          <div className="ml-16 px-4 py-4">
            <a className="hover:underline text-2xl uppercase" href="/about">
              about
            </a>
          </div>

          <div className="mt-10 ml-16">
            <a
              className=" text-2xl uppercase py-2 px-6 border border-border-secondary hover:bg-button-focus hover:border-2 hover:px-[23px]"
              href="#lets-start"
            >
              hire&nbsp;me
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

