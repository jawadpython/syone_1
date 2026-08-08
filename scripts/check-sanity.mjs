import { createClient } from "next-sanity";

const client = createClient({
  projectId: "odtvyfdu",
  dataset: "production",
  apiVersion: "2026-08-07",
  useCdn: false,
});

const founders = await client.fetch(
  `*[_type == "founder"]|order(order asc){name, "role": role.fr, "shortBio": shortBio.fr}`
);
const cases = await client.fetch(
  `*[_type == "caseStudy"]|order(order asc)[0...2]{"title": title.fr, "challenge": challenge.fr}`
);

console.log("FOUNDERS:");
console.log(JSON.stringify(founders, null, 2));
console.log("CASES:");
console.log(JSON.stringify(cases, null, 2));
