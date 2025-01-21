import { defineField, defineType } from 'sanity';
import { HomeIcon } from '@sanity/icons';

export const venueType = defineType({
  name: 'venue',
  title: 'Venue',
  icon: HomeIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
  ],
})