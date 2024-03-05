import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "zt9n737q",
  dataset: "production",
  apiVersion: "2024-03-02",
  useCdn: false,
});
