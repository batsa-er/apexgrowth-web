import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({ name: 'email', title: 'Email', type: 'string' }),
    defineField({
      name: 'address', title: 'Address', type: 'string',
      description: 'e.g. "Accra, Ghana · Remote-first"',
    }),
    defineField({
      name: 'responseTime', title: 'Response Time', type: 'string',
      description: 'e.g. "Within 24 hours"',
    }),
    defineField({ name: 'linkedinUrl', title: 'LinkedIn URL', type: 'url' }),
    defineField({ name: 'twitterUrl', title: 'X / Twitter URL', type: 'url' }),
  ],
})
