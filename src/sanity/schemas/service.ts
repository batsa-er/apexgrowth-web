import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: r => r.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' }, validation: r => r.required() }),
    defineField({ name: 'number', title: 'Display Number', type: 'string', placeholder: '01' }),
    defineField({ name: 'tagline', title: 'Tagline', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 4 }),
    defineField({ name: 'detail', title: 'Detailed Description', type: 'text', rows: 8 }),
    defineField({ name: 'outcomes', title: 'Outcomes / Deliverables', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'price', title: 'Price Label', type: 'string', placeholder: 'From $8,000 / mo' }),
    defineField({ name: 'order', title: 'Order', type: 'number' }),
  ],
  preview: { select: { title: 'title', subtitle: 'tagline' } },
})
