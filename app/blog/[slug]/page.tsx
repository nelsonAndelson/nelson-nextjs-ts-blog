import { getBlogBySlug } from "@/actions/blog-actions";
import { IFullBlog } from "@/app/lib/interface";
import { urlFor } from "@/app/lib/sanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { IoMdPricetag } from "react-icons/io";
import { IoTimeOutline } from "react-icons/io5";

const BlogPost = async ({ params }: { params: { slug: string } }) => {
  const getBlog = async () => {
    const blog = await getBlogBySlug(params.slug);
    return blog;
  };

  const blog: IFullBlog = await getBlog();
  console.log(blog.smallDesc);

  return (
    <section className="mx-4 mt-4 sm:mx-16 md:mx-32 lg:mx-64 xl:mx-96">
      <h1 className="text-center font-bold text-3xl my-4">{blog.title}</h1>
      <Image
        src={urlFor(blog.imageUrl).url()}
        alt={blog.title}
        layout="responsive"
        width={700}
        height={400}
      />
      <div className="flex flex-row gap-5 mt-2 ">
        <span className="py-1 flex flex-row gap-1 items-center text-sm">
          <IoTimeOutline />
          <span>{blog.duration}</span>
        </span>
        <span className="py-1 flex flex-row gap-1 items-center text-sm">
          <IoMdPricetag />
          <span>{blog.category}</span>
        </span>
      </div>

      <p className="text-gray-300 my-2">{blog.smallDesc}</p>

      <section className="w-full mt-4 prose prose-neutral prose-md prose-p:text-gray-300 prose-headings:text-white ">
        <PortableText value={blog.content} />
      </section>
    </section>
  );
};

export default BlogPost;
