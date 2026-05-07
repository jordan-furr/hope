import { DocumentTextIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'


export const postType = defineType({
  name: 'post',
  title: 'Compost',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Optional — leave blank for untitled entries',
    }),
    defineField({
      name: 'mainImage',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        }),
      ],
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'text',
      rows: 6,
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      body: 'body',
      publishedAt: 'publishedAt',
    },
    prepare({ title, body, publishedAt }) {
      const date = publishedAt
        ? new Date(publishedAt).toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
          })
        : 'Undated'
      return {
        title: title || (body ? body.slice(0, 60) + (body.length > 60 ? '…' : '') : 'Untitled'),
        subtitle: date,
      }
    },
  },
})