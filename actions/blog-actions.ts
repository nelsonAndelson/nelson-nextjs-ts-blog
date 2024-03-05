// "use-server";

// type Blog = {
//   title: string;
//   currentSlug: string;
// };

// export async function getAllBlogs(): Promise<{
//   blogs?: Blog[];
//   error?: string;
// }> {
//   try {
//     const blogs = await client.fetch(`
//       *[_type == "blog"] | order(_createdAt desc) {
//         title,
//         "currentSlug": slug.current,
//       }
//     `);

//     return { blogs };
//   } catch (err) {
//     console.error(err);
//     return { error: "Something went wrong" };
//   }
// }
