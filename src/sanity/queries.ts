import { defineQuery } from "next-sanity";

export const FOUNDERS_QUERY = defineQuery(`
  *[_type == "founder"] | order(order asc) {
    _id,
    name,
    role,
    shortBio,
    bio,
    linkedin,
    initials,
    "photoUrl": photo.asset->url
  }
`);

export const CASE_STUDIES_QUERY = defineQuery(`
  *[_type == "caseStudy"] | order(order asc) {
    _id,
    title,
    category,
    challenge,
    value,
    metrics[]{ value, label },
    "imageUrl": image.asset->url
  }
`);

export const EXPERTISES_QUERY = defineQuery(`
  *[_type == "expertise"] | order(order asc) {
    _id,
    title,
    description,
    icon
  }
`);
