"use client";
import React, { useState } from "react";
import { Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { HoveredLink } from "@/components/ui/navbar-menu";
import Image from "next/image";
import Link from "next/link";

export function NavbarDemo() {
  return (

      <Navbar className="top-2 hidden md:block" />
    
  );
}

function Navbar({ className }) {
  const [active, setActive] = useState(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <div>
          <Link href="/">
            <Image
              src="/logos/logo-black-new.svg"
              className="w-15 mr-3"
              alt="Logo"
              width={80}
              height={75}
            />
          </Link>
        </div>
        <MenuItem
          setActive={setActive}
          href="/story"
          active={active}
          item="Our Story"
        ></MenuItem>
        <MenuItem
          setActive={setActive}
          active={active}
          item="Intelligent Automation"
        >
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Intelligent Process Automation"
              href="https://algochurn.com"
              src="/images/process.svg"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Use Case"
              href="https://tailwindmasterkit.com"
              src="/images/story.svg"
              description="Production ready Tailwind css components for your next project"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Web Growth Package"
              href="/webdev"
              src="/images/website.png"
              description="Want an AWESOME!! website to impress your client? We can help you"
            />
            <ProductItem
              title="Digital Growth Package"
              href="/package"
              src="/images/digital.png"
              description="Our digital marketing package helps you beat the competition out of the RING!!"
            />
          </div>
        </MenuItem>
        <MenuItem
          setActive={setActive}
          active={active}
          href="/blog"
          item="Blog"
        />
      </Menu>
    </div>
  );
}
