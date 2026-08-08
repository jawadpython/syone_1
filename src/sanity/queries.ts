import { defineQuery } from "next-sanity";

export const FOUNDERS_QUERY = defineQuery(`
  *[_type == "founder"] | order(order asc) {
    _id, name, role, shortBio, bio, linkedin, initials,
    "photoUrl": photo.asset->url
  }
`);

export const CASE_STUDIES_QUERY = defineQuery(`
  *[_type == "caseStudy"] | order(order asc) {
    _id, title, category, challenge, value,
    metrics[]{ value, label },
    "imageUrl": image.asset->url
  }
`);

export const EXPERTISES_QUERY = defineQuery(`
  *[_type == "expertise"] | order(order asc) {
    _id, title, description, icon
  }
`);

export const HOME_PAGE_QUERY = defineQuery(`*[_type == "homePage" && _id == "homePage"][0]`);
export const APPROACH_PAGE_QUERY = defineQuery(`*[_type == "approachPage" && _id == "approachPage"][0]`);
export const TEAM_PAGE_QUERY = defineQuery(`*[_type == "teamPage" && _id == "teamPage"][0]`);
export const CONTACT_PAGE_QUERY = defineQuery(`*[_type == "contactPage" && _id == "contactPage"][0]`);
export const EXPERTISES_PAGE_QUERY = defineQuery(`*[_type == "expertisesPage" && _id == "expertisesPage"][0]`);
export const CASES_PAGE_QUERY = defineQuery(`*[_type == "casesPage" && _id == "casesPage"][0]`);
export const SITE_SETTINGS_QUERY = defineQuery(`*[_type == "siteSettings" && _id == "siteSettings"][0]`);
