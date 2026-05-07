import { BlockquoteIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const quoteType = defineType({
  name: 'quote',
  title: 'Quote',
  type: 'document',
  icon: BlockquoteIcon,
  fields: [
    defineField({
      name: 'quoteText',
      title: 'Quote',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'attribution',
      title: 'Attribution',
      type: 'string',
      description: 'The person this quote is from',
      validation: (Rule) => Rule.required(),
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
      quoteText: 'quoteText',
      attribution: 'attribution',
    },
    prepare({ quoteText, attribution }) {
      return {
        title: attribution || 'Unknown',
        subtitle: quoteText
          ? quoteText.slice(0, 60) + (quoteText.length > 60 ? '…' : '')
          : '',
      }
    },
  },
})