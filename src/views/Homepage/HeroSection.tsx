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
    <div className="relative bg-gray-100 overflow-hidden flex flex-col lg:flex-row">
      <div className="flex-1 flex flex-col justify-center relative z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
        <main className="mt-10 px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
          <div className="sm:text-center lg:text-left">
            {/* <h1 className="text-center text-[32px]/[32px] tracking-tighter sm:text-[77px]/[79px] md:text-left">
          {title}
        </h1> */}
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">Find your</span>{' '}
              <span className="block text-red-800 xl:inline">perfect</span>{' '}
              <span className="block xl:inline">brew with our</span>{' '}
              <span className="block text-red-800 xl:inline">
                leased coffee machines.
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl md:mt-5 md:text-xl lg:mx-30">
              This is your attention-grabbing 25-word description. Make it count
              and leave a lasting impression on your visitors!
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
                {/* <a
              href="#"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
            >
              Get started
            </a> */}
              </div>
            </div>
          </div>
        </main>
      </div>
      <div className="lg:flex-1 lg:relative lg:flex lg:items-center">
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
  )
}
