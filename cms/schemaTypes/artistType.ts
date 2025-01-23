import {defineField, defineType} from 'sanity'
import { ActivityIcon } from '@sanity/icons';
export const artistType = defineType({
  name: 'artist',
  title: 'Artist',
  icon: ActivityIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
  ],
})