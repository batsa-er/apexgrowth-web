import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'career',
  title: 'Career',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Job Title', type: 'string', validation: r => r.required() }),
    defineField({ name: 'department', title: 'Department', type: 'string' }),
    defineField({ name: 'type', title: 'Type', type: 'string', options: { list: ['Full-time', 'Part-time', 'Contract', 'Internship'] } }),
    defineField({ name: 'location', title: 'Location', type: 'string' }),
    defineField({ name: 'excerpt', title: 'Excerpt', type: 'text', rows: 3 }),
    defineField({ name: 'applyUrl', title: 'Apply URL', type: 'url' }),
    defineField({ name: 'published', title: 'Published', type: 'boolean', initialValue: true }),
  ],
  preview: { select: { title: 'title', subtitle: 'department' } },
})
