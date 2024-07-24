export default {
  name: 'category',
  type: 'document',
  title: 'Categories',
  fields: [
    {
      name: 'name',
      title: 'Name of Category',
      type: 'string',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Category Slug',
      options: {
        source: 'name',
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input: string) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    },
    {
      name: 'index',
      type: 'number',
      title: 'Order in List',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Category Image',
    },
  ],
}
