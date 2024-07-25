import { Button } from '@/components/Button/Button'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/utils/cn'

export function HeroSection({
  title,
  className,
}: {
  title: string
  className?: string
}) {
  return (
    <div
      className={cn(
        'flex w-full flex-col-reverse justify-between lg:flex-row',
        className
      )}
    >
      <div className="flex basis-1/2 flex-col items-center justify-start gap-16 px-4 py-20 md:items-start md:p-36">
        <h1 className="text-center text-[32px]/[32px] tracking-tighter sm:text-[77px]/[79px] md:text-left">
          {title}
        </h1>
        <Link href="https://git.new/commerce" target="_blank" prefetch={false}>
          <Button
            size="xl"
            variant="secondary"
            className="py-[10px] text-[21px] md:py-[28px] md:text-[23px]"
          >
            See on GitHub
          </Button>
        </Link>
      </div>
      <div className="flex basis-1/2 items-center justify-center bg-neutral-100">
        <div className="relative overflow-hidden h-full w-full">
          <Image
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
            alt="Hero"
            layout="responsive"
            width={1200}
            height={800}
            className="inset-0 object-cover h-full w-full"
          />
        </div>
      </div>
      {/* <div className="shrink-1 flex basis-1/2 items-center justify-center bg-neutral-100">
          <Image
            width={400}
            height={400}
            sizes="400px"
            alt="Homepage featured image"
            priority
            src={'/default-product-image.svg'}
          />
        </div> */}
    </div>
  )
}
