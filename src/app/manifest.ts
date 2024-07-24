import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Caffeica Commerce | RobotJump',
    short_name: 'Caffeica Enterprise Commerce | RobotJump',
    description: 'Caffeica Enterprise Commerce | RobotJump',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
