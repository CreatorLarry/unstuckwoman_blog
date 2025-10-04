import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "1v0dc0vw",   // your project ID
  dataset: "production",
  useCdn: true,            // `false` if you want fresh data
  apiVersion: "2023-10-01" // use a recent date
});
