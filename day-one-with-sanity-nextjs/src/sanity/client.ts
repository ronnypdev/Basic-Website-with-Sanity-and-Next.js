import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "mnv9mpjk",
  dataset: "production",
  apiVersion: "2024-11-01",
  useCdn: false,
});