import Article from "@/components/Blog/Article";
import { IArticleProps } from "./lib/interface";
import { getAllBlogs } from "@/actions/blog-actions";

export default async function Home() {
  const blogs: IArticleProps[] = await getAllBlogs();

  // console.log(blogs);

  return (
    <main className="mx-4 sm:mx-12 md:mx-16 lg:mx-32">
      <section className="py-6">
        <h1 className="font-extrabold text-2xl ">WELCOME TO MY BLOG</h1>
        <p className="mt-4">
          Thank you for stopping by. I hope you find the posts informative and
          engaging. Feel free to explore and share your thoughts in the comments
          section.
        </p>
        <p>
          Interested in more about my work? Check out{" "}
          <a
            href="https://nelsonbaguma.com"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            my portfolio
          </a>{" "}
          for a deeper dive into my projects and skills.
        </p>
      </section>

      <h1 className="text-center font-extrabold text-2xl pb-6">
        Latest Stories
      </h1>

      <section className=" grid grid-cols-1 gap-6 sm:grid-cols-1 sm:mx-8 md:grid-cols-2 md:mx-4 lg:grid-cols-2 lg:mx-8 xl:mx-32 ">
        {blogs.map((blog) => {
          return (
            <Article
              currentSlug={blog.currentSlug}
              key={blog.title}
              title={blog.title}
              duration={blog.duration}
              category={blog.category}
              smallDesc={blog.smallDesc}
              imageUrl={blog.imageUrl}
            />
          );
        })}
      </section>
    </main>
  );
}
