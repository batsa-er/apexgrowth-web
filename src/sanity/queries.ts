import { client } from './client'

// ── Case Studies ──────────────────────────────────────
export async function getCaseStudies() {
  return client.fetch(`*[_type == "caseStudy" && published == true] | order(_createdAt desc) {
    _id, slug, client, industry, summary,
    metric1_num, metric1_label,
    metric2_num, metric2_label,
    metric3_num, metric3_label,
    accent
  }`)
}

export async function getCaseStudy(slug: string) {
  return client.fetch(`*[_type == "caseStudy" && slug.current == $slug][0]`, { slug })
}

// ── Insights ──────────────────────────────────────────
export async function getInsights() {
  return client.fetch(`*[_type == "insight" && published == true] | order(publishedAt desc) {
    _id, slug, title, tag, label, excerpt, publishedAt, readTime
  }`)
}

export async function getInsight(slug: string) {
  return client.fetch(`*[_type == "insight" && slug.current == $slug][0]`, { slug })
}

// ── Services ──────────────────────────────────────────
export async function getServices() {
  return client.fetch(`*[_type == "service"] | order(order asc) {
    _id, slug, number, title, tagline, description, outcomes, price
  }`)
}

// ── Testimonials ──────────────────────────────────────
export async function getTestimonials() {
  return client.fetch(`*[_type == "testimonial" && published == true] | order(featured desc) {
    _id, quote, name, role, initials, featured
  }`)
}

// ── Careers ───────────────────────────────────────────
export async function getCareers() {
  return client.fetch(`*[_type == "career" && published == true] | order(_createdAt desc) {
    _id, title, department, type, location, excerpt, applyUrl
  }`)
}
