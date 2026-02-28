import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  fields: [
    defineField({ name: 'client', title: 'Client Name', type: 'string', validation: r => r.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'client' }, validation: r => r.required() }),
    defineField({ name: 'industry', title: 'Industry', type: 'string' }),
    defineField({ name: 'summary', title: 'Summary', type: 'text', rows: 3 }),
    defineField({ name: 'challenge', title: 'The Challenge', type: 'text', rows: 5 }),
    defineField({ name: 'solution', title: 'Our Approach', type: 'text', rows: 5 }),
    defineField({ name: 'results', title: 'The Results', type: 'text', rows: 5 }),
    defineField({ name: 'metric1_num', title: 'Metric 1 Number', type: 'string' }),
    defineField({ name: 'metric1_label', title: 'Metric 1 Label', type: 'string' }),
    defineField({ name: 'metric2_num', title: 'Metric 2 Number', type: 'string' }),
    defineField({ name: 'metric2_label', title: 'Metric 2 Label', type: 'string' }),
    defineField({ name: 'metric3_num', title: 'Metric 3 Number', type: 'string' }),
    defineField({ name: 'metric3_label', title: 'Metric 3 Label', type: 'string' }),
    defineField({
      name: 'accent', title: 'Accent Color', type: 'string',
      options: { list: ['purple', 'cyan', 'gold'] },
    }),
    defineField({ name: 'published', title: 'Published', type: 'boolean', initialValue: true }),
  ],
  preview: { select: { title: 'client', subtitle: 'industry' } },
})
