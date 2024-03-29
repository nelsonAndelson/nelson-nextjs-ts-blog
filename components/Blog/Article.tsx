// file path: components/Article.tsx

import Image from "next/image";
import React from "react";
import { IArticleProps } from "@/app/lib/interface";
import { Card, CardContent, CardTitle } from "../ui/card";
import { IoTimeOutline } from "react-icons/io5";
import { IoMdPricetag } from "react-icons/io";
import { BiCommentDetail } from "react-icons/bi";
import Link from "next/link";
import { urlFor } from "@/app/lib/sanity";

const Article: React.FC<IArticleProps> = ({
  title,
  duration,
  category,
  smallDesc,
  imageUrl,
  currentSlug,
}) => {
  return (
    <Card className="max-w-full overflow-hidden shadow-lg border-none relative transition-transform duration-300">
      <CardTitle className="relative w-full h-96">
        <Image
          className="h-56 object-cover transition-transform duration-500 transform hover:scale-105"
          src={urlFor(imageUrl).url()}
          alt="Sunset in the mountains"
          fill={true}
        />
      </CardTitle>
      <CardContent className="px-6 py-4 bg-[#222222] text-white  absolute bottom-0 left-0  w-[90%]">
        <div className="pt-4 pb-2 inline-flex items-center gap-2 md:text-sm">
          <span className="py-1 flex flex-row gap-1 items-center">
            <IoTimeOutline />
            <span>{duration}</span>
          </span>

          <span className="flex flex-row gap-1 items-center py-1 text-sm  ">
            <IoMdPricetag />
            <span>{category}</span>
          </span>
        </div>
        <div className="font-bold text-xl mb-2 relative">
          <Link href={`/blog/${currentSlug}`} className="relative group">
            <span className="underline decoration-current group-hover:decoration-transparent transition-all duration-500">
              {title}
            </span>
          </Link>

          <span className="absolute w-full h-[3px] hidden  bg-black left-0 bottom-[-5px]"></span>
        </div>

        <p className=" text-base text-gray-300 line-clamp-2">{smallDesc}</p>

        <section className="flex flex-row items-center gap-4 mt-4 justify-between">
          <Link href={`/blog/${currentSlug}`} className="relative group">
            <span className="underline decoration-current group-hover:decoration-transparent transition-all duration-500">
              Continue Reading
            </span>
          </Link>

          <Link
            href="#"
            className="bg-[#121212] px-2 py-1 rounded-full text-sm hover:scale-105 transition-colors duration-300"
          >
            <BiCommentDetail className="inline" /> <span>03</span>
          </Link>
        </section>
      </CardContent>
    </Card>
  );
};

export default Article;
