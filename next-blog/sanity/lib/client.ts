import { createClient } from "next-sanity";

export const sanityClient = createClient({
  apiVersion: "2025-08-31",
  dataset: "nextblog",
  projectId: "tvfzk6e6",
  useCdn: false,
});