import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "ct9pi7c932tek5do9pknsimw",   // your project ID
  dataset: "production",
  useCdn: true,            // `false` if you want fresh data
  apiVersion: "2023-10-01" // use a recent date
});
