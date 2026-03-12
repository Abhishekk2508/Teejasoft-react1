import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Blog',
  type: 'document',

  fields: [

    defineField({
      name: 'title',
      title: 'Blog Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),

    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: { source: 'title', maxLength: 96 }
    }),

    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Digital Marketing', value: 'Digital Marketing'},
          {title: 'Web Development', value: 'Web Development'},
          {title: 'Design Services', value: 'Design Services'},
          {title: 'Paid Advertising', value: 'Paid Advertising'},
          {title: 'SEO', value: 'seo'},
          {title: 'Domain & Hosting', value: 'Domain & Hosting'}
        ]
      }
    }),

    defineField({
      name: 'readTime',
      title: 'Read Time',
      type: 'string'
    }),

    defineField({
      name: 'image',
      title: 'Blog Image',
      type: 'image',
      options: { hotspot: true }
    }),

    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text'
    }),

    defineField({
      name: 'content',
      title: 'Blog Content',
      type: 'blockContent'
    }),

    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string'
    }),

    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text'
    })
  ]
})