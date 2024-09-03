"use client";
import React, { useState } from "react";
import { Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { HoveredLink } from "@/components/ui/navbar-menu";
import Image from "next/image";

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
          <Image
            src="/logos/logo-black-new.svg"
            className="w-15 mr-3"
            alt="Logo"
            width={80}
            height={75}
          />
        </div>
        <MenuItem setActive={setActive} active={active} item="Our Story">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Our Story</HoveredLink>
            <HoveredLink href="/interface-design">Our team</HoveredLink>
            <HoveredLink href="/seo">Past projects</HoveredLink>
          </div>
        </MenuItem>
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
              href="/package"
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
        
      </Menu>
    </div>
  );
}
