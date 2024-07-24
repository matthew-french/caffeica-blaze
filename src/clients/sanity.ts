import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const sanity = createClient({
  projectId: 'a1ne9dhc',
  dataset: 'production',
  apiVersion: '2022-03-25',
  useCdn: true,
})

const builder = imageUrlBuilder(sanity)

export function urlFor(source: any) {
  return builder.image(source)
}
