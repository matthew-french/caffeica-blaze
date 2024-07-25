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
    <>
      <div className="relative bg-gray-100 overflow-hidden">
        <div className="">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Your Impressive</span>{' '}
                  <span className="block text-red-600 xl:inline">
                    Hero Section
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-30">
                  This is your attention-grabbing 25-word description. Make it
                  count and leave a lasting impression on your visitors!
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Button
                      size="xl"
                      variant="secondary"
                      className="py-[10px] text-[21px] md:py-[28px] md:text-[23px]"
                    >
                      See on GitHub
                    </Button>
                    <a
                      href="#"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                    >
                      Get started
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <div className="relative h-56 w-full sm:h-72 md:h-96 lg:h-full">
            <div className="absolute inset-0 bg-black transform -skew-y-6 sm:-skew-y-3 lg:-skew-y-6 xl:-skew-y-3"></div>
            <img
              className="absolute inset-0 w-full h-full object-cover transform skew-y-6 sm:skew-y-3 lg:skew-y-6 xl:skew-y-3"
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
              alt="Hero image"
            />
          </div>
        </div>
      </div>

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
          <Link
            href="https://git.new/commerce"
            target="_blank"
            prefetch={false}
          >
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
    </>
  )
}
