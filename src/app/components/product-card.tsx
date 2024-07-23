import { Box, Card, Flex, Heading, Inset, Text } from '@radix-ui/themes'

interface ProductCardProps {
  id: string
  image: string
  name: string
  summary: string
  category: string
  slug: string
}

export default function ProductCard({
  id,
  image,
  name,
  summary,
  category,
  slug,
}: ProductCardProps) {
  return (
    <Card size="1">
      <Inset clip="padding-box" side="top" pb="current">
        <img
          width="280"
          height="270"
          src={image}
          style={{ borderRadius: 'var(--radius-1)' }}
        />
      </Inset>

      <Flex align="end" justify="between" mb="1">
        <Box>
          <Heading as="h3" size="4">
            {name}
          </Heading>
        </Box>

        {/* <Text as="div" size="6" weight="bold">
          $149
        </Text> */}
      </Flex>

      <Text as="p" size="3" color="gray" mb="4">
        {summary}
      </Text>

      <Text as="p" size="3" color="gray" mb="4">
        {category}
      </Text>
    </Card>
  )
}
