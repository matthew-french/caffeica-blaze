export default {
  name: 'product',
  type: 'document',
  title: 'Product',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name of Product',
    },
    {
      name: 'images',
      type: 'array',
      title: 'Product Images',
      of: [{type: 'image'}],
    },
    {
      name: 'summary',
      type: 'text',
      title: 'Short summary of product',
      required: true,
      validation: (rule: any) => rule.required().min(25).max(140),
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description of product',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Product Slug',
      options: {
        source: 'name',
      },
    },
    {
      name: 'volume',
      type: 'number',
      title: 'Volume of drinks per day',
    },
    {
      name: 'connection',
      type: 'string',
      title: 'Water connection',
    },
    {
      name: 'screen',
      type: 'string',
      title: 'Screen Type',
    },
    {
      name: 'paymentMethod',
      type: 'string',
      title: 'Payment Method',
    },
    {
      name: 'requirements',
      type: 'string',
      title: 'Specific drink requirements',
    },
    {
      name: 'video',
      type: 'url',
      title: 'Product Video',
    },
    {
      name: 'feature',
      title: 'Featured Product',
      type: 'boolean',
    },
    {
      name: 'brand',
      title: 'Product Brand',
      type: 'reference',
      to: [
        {
          type: 'brand',
        },
      ],
    },
    {
      name: 'category',
      title: 'Product Category',
      type: 'reference',
      to: [
        {
          type: 'category',
        },
      ],
    },
  ],
}
