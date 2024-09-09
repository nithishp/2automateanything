
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const Author = ({ author }) => (
  <div>
    <Card className="p-6 sm:p-12 shadow-md">
      <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
        <Image
          height={100}
          width={100}
          src={author.photo.url}
          alt={author.name}
          className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start bg-gray-500 border-gray-300"
        />
        <div className="flex flex-col">
            <h6 className="text-xs">Blog written by</h6>
          <h4 className="text-lg font-semibold text-center md:text-left">
            {author.name}
          </h4>
          <p className="">{author.bio}</p>
        </div>
      </div>
      
    </Card>
  </div>
);

export default Author;
