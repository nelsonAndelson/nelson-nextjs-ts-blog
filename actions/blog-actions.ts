import { client } from "@/app/lib/sanity";

export async function getAllBlogs() {
  const query = `*[_type == "blog"] | order(_createdAt desc){
  title,
  "currentSlug": slug.current,
    duration,
    category,
    "smallDesc":smallDescription,
    "imageUrl":titleImage,
}`;

  const data = await client.fetch(query);

  return data;
}

export async function getBlogBySlug(slug: string) {
  const query = `*[_type == "blog" && slug.current == '${slug}']{
  title,
  duration,
  category,
  "smallDesc":smallDescription,
  "imageUrl":titleImage,
  content
}`;

  const data = await client.fetch(query);

  return data[0];
}
