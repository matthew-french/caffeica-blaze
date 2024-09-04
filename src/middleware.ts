import { NextRequest, NextResponse } from 'next/server'
import { getBucket } from '@/utils/abTesting'
import { BUCKETS } from '@/constants/index'

type RedirectEntry = {
  destination: string
  permanent: boolean
}

type Route = {
  page: string
  cookie: string
  buckets: readonly string[]
}

const ROUTES: Record<string, Route | undefined> = {
  '/': {
    page: '/home',
    cookie: 'bucket-home',
    buckets: BUCKETS.HOME,
  },
}

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  const route = ROUTES[pathname]

  if (route) {
    return handleAbTestingMiddleware(request, route)
  }

  if (isCLP(request)) {
    return handleCLPMiddleware(request)
  }

  if (isPLP(request)) {
    return handlePLPMiddleware(request)
  }

  return NextResponse.next()
}

function handleAbTestingMiddleware(request: NextRequest, route: Route) {
  let bucket = request.cookies.get(route.cookie)?.value
  let hasBucket = !!bucket

  if (!bucket || !route.buckets.includes(bucket)) {
    bucket = getBucket(route.buckets)
    hasBucket = false
  }

  const url = request.nextUrl.clone()
  url.pathname = `${route.page}/${bucket}`

  const res = NextResponse.rewrite(url)
  !hasBucket && res.cookies.set(route.cookie, bucket)

  return res
}

function handleCLPMiddleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  const page = request.nextUrl.searchParams.get('page')

  console.log('CLP page', page)

  if (page) {
    url.pathname = `category/clp/${request.nextUrl.pathname.split('/')[2]}/${page}`

    url.searchParams.delete('page')

    return NextResponse.rewrite(url)
  }

  url.pathname = `category/clp/${request.nextUrl.pathname.split('/')[2]}`

  return NextResponse.rewrite(url)
}

function handlePLPMiddleware(request: NextRequest) {
  const url = request.nextUrl.clone()

  url.pathname = `category/plp/${request.nextUrl.pathname.split('/')[2]}`

  return NextResponse.rewrite(url)
}

export const config = {
  // https://nextjs.org/docs/messages/edge-dynamic-code-evaluation
  unstable_allowDynamic: [
    '**/node_modules/lodash/lodash.js',
    '**/node_modules/reflect-metadata/Reflect.js',
  ],
  matcher: ['/', '/((?!api|_next|cache-healthcheck|health|_vercel|.*\\..*).*)'],
}

function isCLP(request: NextRequest): boolean {
  const isCategory = request.nextUrl.pathname.startsWith('/category/')
  const isInternalRoute = request.nextUrl.pathname.startsWith('/category/clp/')

  console.log('CLP isCategory', isCategory)
  console.log('CLP isInternalRoute', isInternalRoute)

  return isCategory && !isInternalRoute
}

function isPLP(request: NextRequest): boolean {
  const isCategory = request.nextUrl.pathname.startsWith('/category/')
  const isInternalRoute = request.nextUrl.pathname.startsWith('/category/plp/')

  console.log('PLP isCategory', isCategory)
  console.log('PLP isInternalRoute', isInternalRoute)

  return isCategory && !isInternalRoute
}
