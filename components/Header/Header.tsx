"use client";
import Image from "next/image";
import Link from "next/link";
import { AiFillHome } from "react-icons/ai";

export default function Header() {
  return (
    <header className={`mt-0 p-4 bg-white`}>
      <section className="flex flex-row items-center justify-between">
        <div className="logo">
          <Link href="/">
            <Image
              src="/img/nelson-logo2.svg"
              width={100}
              height={35}
              alt="Logo"
            />
          </Link>
        </div>
        <button className="px-btn px-btn-theme flex flex-row items-center gap-2">
          <AiFillHome />
          <span>Visit Portfolio</span>
        </button>
      </section>
    </header>
  );
}
