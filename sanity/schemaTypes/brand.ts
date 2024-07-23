export default {
  name: 'brand',
  type: 'document',
  title: 'Brands',
  fields: [
    {
      name: 'name',
      title: 'Name of Brand',
      type: 'string',
    },
    {
      name: 'images',
      type: 'image',
      title: 'Brand Logo',
    },
    {
      name: 'summary',
      type: 'text',
      title: 'Brand Summary',
    },
  ],
}
