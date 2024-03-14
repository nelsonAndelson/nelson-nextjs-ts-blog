"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import { IHeaderMenu } from "@/app/lib/interface";
import { Button } from "../ui/button";

const headerMenus: IHeaderMenu[] = [
  { id: 0, name: "Home", href: "home" },
  { id: 1, name: "Services", href: "https://nelsonbaguma.com/#services" },
  { id: 2, name: "Skills", href: "skill" },
  { id: 3, name: "Portfolio", href: "portfolio" },
  { id: 4, name: "Contact", href: "contactus" },
];

const useScrollPosition = (): Boolean => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 200) setScrolled(true);
      else setScrolled(false);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return scrolled;
};

export default function Header() {
  const [isOpen, setOpen] = useState(false);
  const isScrolled = useScrollPosition();
  console.log(isOpen);

  return (
    <header className={`mt-0 p-4 ${isScrolled ? "bg-white" : "bg-none"}`}>
      <section className="flex flex-row items-center justify-between">
        <div className="logo">
          <Link href="https://nelsonbaguma.com" passHref>
            <Image
              src="/img/nelson-logo2.svg"
              width={100}
              height={35}
              alt="Logo"
            />
          </Link>
        </div>
        {/* <butt
            className="lg:hidden mobile_toggle w-[40px] flex flex-col"
            onClick={() => setIsOpenMenu(!isOpenMenu)}
          > */}
        <button className="px-btn px-btn-theme flex flex-row items-center gap-3">
          <AiFillHome />
          <span>View Portfolio</span>
        </button>
      </section>
    </header>
  );
}
