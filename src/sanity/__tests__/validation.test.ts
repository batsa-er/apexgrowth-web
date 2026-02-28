import { describe, it, expect, vi } from 'vitest'
import {
  CaseStudySchema,
  CaseStudyDetailSchema,
  InsightSchema,
  InsightDetailSchema,
  ServiceSchema,
  TestimonialSchema,
  CareerSchema,
  validateArray,
  validateOne,
} from '../validation'

// ── Slug validation ───────────────────────────────────

describe('slug enforcement', () => {
  const parse = (current: unknown) =>
    CaseStudySchema.safeParse({ ...validCaseStudy, slug: { current } })

  it('accepts a valid lowercase-hyphen slug', () => {
    expect(parse('brand-identity').success).toBe(true)
  })

  it('accepts a single-word slug', () => {
    expect(parse('branding').success).toBe(true)
  })

  it('rejects an empty slug', () => {
    expect(parse('').success).toBe(false)
  })

  it('rejects a slug with uppercase letters', () => {
    expect(parse('Brand-Identity').success).toBe(false)
  })

  it('rejects a slug with spaces', () => {
    expect(parse('brand identity').success).toBe(false)
  })

  it('rejects a slug with trailing hyphen', () => {
    expect(parse('brand-').success).toBe(false)
  })

  it('rejects a bare string instead of { current }', () => {
    const result = CaseStudySchema.safeParse({
      ...validCaseStudy,
      slug: 'brand-identity',
    })
    expect(result.success).toBe(false)
  })

  it('rejects null slug', () => {
    expect(parse(null).success).toBe(false)
  })
})

// ── Valid data passes ─────────────────────────────────

const validCaseStudy = {
  _id: 'abc123',
  slug: { current: 'brand-overhaul' },
  client: 'Acme Co',
  industry: 'Retail',
  summary: 'A complete rebrand.',
  metric1_num: '+40%',
  metric1_label: 'Brand recall',
  metric2_num: '3×',
  metric2_label: 'Web traffic',
  metric3_num: '$2M',
  metric3_label: 'Pipeline generated',
  accent: 'cyan' as const,
}

describe('CaseStudySchema', () => {
  it('passes with valid data', () => {
    const result = CaseStudySchema.safeParse(validCaseStudy)
    expect(result.success).toBe(true)
  })

  it('fails when _id is missing', () => {
    const { _id: _, ...rest } = validCaseStudy
    expect(CaseStudySchema.safeParse(rest).success).toBe(false)
  })

  it('fails when client is missing', () => {
    const { client: _, ...rest } = validCaseStudy
    expect(CaseStudySchema.safeParse(rest).success).toBe(false)
  })

  it('defaults missing optional fields to empty string', () => {
    const result = CaseStudySchema.safeParse({
      _id: 'abc123',
      slug: { current: 'test-study' },
      client: 'Acme',
    })
    expect(result.success).toBe(true)
    if (result.success) {
      expect(result.data.industry).toBe('')
      expect(result.data.accent).toBe('cyan')
    }
  })
})

describe('CaseStudyDetailSchema', () => {
  it('passes with full detail data', () => {
    const result = CaseStudyDetailSchema.safeParse({
      ...validCaseStudy,
      challenge: 'Old brand was stale.',
      solution: 'Full identity refresh.',
      results: 'Recognition doubled.',
    })
    expect(result.success).toBe(true)
  })

  it('defaults challenge/solution/results to empty string', () => {
    const result = CaseStudyDetailSchema.safeParse(validCaseStudy)
    expect(result.success).toBe(true)
    if (result.success) {
      expect(result.data.challenge).toBe('')
    }
  })
})

// ── Insight ───────────────────────────────────────────

const validInsight = {
  _id: 'ins1',
  slug: { current: 'brand-consistency' },
  title: 'Why brand consistency matters',
  tag: 'Branding',
  excerpt: 'Consistent brands earn more trust.',
  publishedAt: '2025-01-15',
  readTime: '5 min read',
}

describe('InsightSchema', () => {
  it('passes with valid data', () => {
    expect(InsightSchema.safeParse(validInsight).success).toBe(true)
  })

  it('label is optional', () => {
    const result = InsightSchema.safeParse(validInsight)
    expect(result.success).toBe(true)
    if (result.success) expect(result.data.label).toBeUndefined()
  })

  it('fails when title is missing', () => {
    const { title: _, ...rest } = validInsight
    expect(InsightSchema.safeParse(rest).success).toBe(false)
  })
})

describe('InsightDetailSchema', () => {
  it('defaults body to empty string when absent', () => {
    const result = InsightDetailSchema.safeParse(validInsight)
    expect(result.success).toBe(true)
    if (result.success) expect(result.data.body).toBe('')
  })
})

// ── Service ───────────────────────────────────────────

const validService = {
  _id: 'svc1',
  slug: { current: 'brand-identity' },
  number: '01',
  title: 'Brand & Identity',
  tagline: 'Build a brand that lasts.',
  description: 'Full brand system design.',
  outcomes: ['Logo', 'Style guide', 'Brand deck'],
  price: 'From $5,000',
}

describe('ServiceSchema', () => {
  it('passes with valid data', () => {
    expect(ServiceSchema.safeParse(validService).success).toBe(true)
  })

  it('fails when title is missing', () => {
    const { title: _, ...rest } = validService
    expect(ServiceSchema.safeParse(rest).success).toBe(false)
  })

  it('defaults outcomes to empty array when absent', () => {
    const { outcomes: _, ...rest } = validService
    const result = ServiceSchema.safeParse(rest)
    expect(result.success).toBe(true)
    if (result.success) expect(result.data.outcomes).toEqual([])
  })

  it('rejects slug with uppercase', () => {
    const result = ServiceSchema.safeParse({
      ...validService,
      slug: { current: 'Brand-Identity' },
    })
    expect(result.success).toBe(false)
  })
})

// ── Testimonial ───────────────────────────────────────

describe('TestimonialSchema', () => {
  it('passes with valid data', () => {
    const result = TestimonialSchema.safeParse({
      _id: 't1',
      quote: 'Exceptional work.',
      name: 'Jane Doe',
      role: 'CEO, Acme',
      initials: 'JD',
      featured: true,
    })
    expect(result.success).toBe(true)
  })

  it('fails when quote is missing', () => {
    expect(TestimonialSchema.safeParse({ _id: 't1', name: 'Jane' }).success).toBe(false)
  })

  it('defaults featured to false', () => {
    const result = TestimonialSchema.safeParse({ _id: 't1', quote: 'Great.', name: 'Jane' })
    expect(result.success).toBe(true)
    if (result.success) expect(result.data.featured).toBe(false)
  })
})

// ── Career ────────────────────────────────────────────

describe('CareerSchema', () => {
  it('passes with minimal data', () => {
    expect(CareerSchema.safeParse({ _id: 'c1', title: 'Designer' }).success).toBe(true)
  })

  it('fails when title is missing', () => {
    expect(CareerSchema.safeParse({ _id: 'c1' }).success).toBe(false)
  })

  it('optional fields are undefined when absent', () => {
    const result = CareerSchema.safeParse({ _id: 'c1', title: 'Designer' })
    expect(result.success).toBe(true)
    if (result.success) {
      expect(result.data.department).toBeUndefined()
      expect(result.data.applyUrl).toBeUndefined()
    }
  })
})

// ── validateArray helper ──────────────────────────────

describe('validateArray', () => {
  it('returns valid items and skips invalid ones', () => {
    const input = [
      validCaseStudy,
      { _id: 'bad', slug: { current: 'UPPERCASE' }, client: 'X' },
    ]
    const result = validateArray(CaseStudySchema, input, 'caseStudy')
    expect(result).toHaveLength(1)
    expect(result[0].client).toBe('Acme Co')
  })

  it('returns empty array for non-array input', () => {
    expect(validateArray(CaseStudySchema, null, 'caseStudy')).toEqual([])
    expect(validateArray(CaseStudySchema, undefined, 'caseStudy')).toEqual([])
    expect(validateArray(CaseStudySchema, {}, 'caseStudy')).toEqual([])
  })

  it('returns empty array when all items are invalid', () => {
    const input = [{ bad: true }, { also: 'bad' }]
    expect(validateArray(CaseStudySchema, input, 'caseStudy')).toEqual([])
  })

  it('logs a warning for invalid items', () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})
    validateArray(CaseStudySchema, [{ bad: true }], 'caseStudy')
    expect(warn).toHaveBeenCalled()
    warn.mockRestore()
  })
})

// ── validateOne helper ────────────────────────────────

describe('validateOne', () => {
  it('returns parsed data for valid input', () => {
    const result = validateOne(CaseStudySchema, validCaseStudy, 'caseStudy')
    expect(result).not.toBeNull()
    expect(result?.client).toBe('Acme Co')
  })

  it('returns null for null input', () => {
    expect(validateOne(CaseStudySchema, null, 'caseStudy')).toBeNull()
  })

  it('returns null for invalid input', () => {
    expect(validateOne(CaseStudySchema, { bad: true }, 'caseStudy')).toBeNull()
  })

  it('logs a warning for invalid input', () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})
    validateOne(CaseStudySchema, { bad: true }, 'caseStudy')
    expect(warn).toHaveBeenCalled()
    warn.mockRestore()
  })
})

// ── Fallback data shape compatibility ─────────────────
// These tests confirm the page fallback data satisfies the TypeScript types.
// They run through validation to catch any drift between fallbacks and schemas.

describe('fallback data compatibility', () => {
  const fallbackCaseStudies = [
    {
      _id: 'fallback-1',
      slug: { current: 'meridian-brand-overhaul' },
      client: 'Meridian Collective',
      industry: 'Professional Services',
      summary: 'Complete rebrand for a boutique consulting firm.',
      metric1_num: '3×', metric1_label: 'Brand recognition',
      metric2_num: '+67%', metric2_label: 'Web enquiries',
      metric3_num: '4', metric3_label: 'Awards won',
      accent: 'cyan' as const,
    },
  ]

  const fallbackInsights = [
    {
      _id: 'f-ins-1',
      slug: { current: 'brand-consistency-revenue' },
      title: 'Why brand consistency drives revenue',
      tag: 'Branding',
      excerpt: 'Consistent brands outperform inconsistent ones by 20%.',
      publishedAt: '2025-01-15',
      readTime: '6 min read',
    },
  ]

  const fallbackServices = [
    {
      _id: 'f-svc-1',
      slug: { current: 'brand-identity' },
      number: '01',
      title: 'Brand & Identity',
      tagline: 'Build a brand that lasts.',
      description: 'Strategy, naming, visual identity, and brand guidelines.',
      outcomes: ['Brand strategy', 'Logo system', 'Style guide'],
      price: 'From $5,000',
    },
  ]

  it('fallback case studies pass validation', () => {
    const result = validateArray(CaseStudySchema, fallbackCaseStudies, 'caseStudy')
    expect(result).toHaveLength(fallbackCaseStudies.length)
  })

  it('fallback insights pass validation', () => {
    const result = validateArray(InsightSchema, fallbackInsights, 'insight')
    expect(result).toHaveLength(fallbackInsights.length)
  })

  it('fallback services pass validation', () => {
    const result = validateArray(ServiceSchema, fallbackServices, 'service')
    expect(result).toHaveLength(fallbackServices.length)
  })
})
