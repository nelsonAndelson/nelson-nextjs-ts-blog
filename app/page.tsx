import { IBlog } from "./lib/interface";
import { client } from "./lib/sanity";

async function getAllBlogs() {
  const query =
    '*[_type == "blog"] | order(_createdAt desc) { title, "currentSlug": slug.current, }';

  const data = await client.fetch(query);

  return data;
}

export default async function Home() {
  const data: IBlog[] = await getAllBlogs();
  console.log("data");

  return (
    <main>
      <h1>Hello, welcome to my blog.</h1>
    </main>
  );
}
