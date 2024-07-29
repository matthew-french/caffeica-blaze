import Link from 'next/link'
import Image from 'next/image'
// import { ProfileMenu } from "../ProfileMenu/ProfileMenu"

export async function TopBar() {
  return (
    <header className="hidden bg-black py-4 md:block text-white">
      <div className="max-w-container-lg mx-auto flex items-center justify-between px-4">
        {/* <Link prefetch={false} href="/" className="inter text-3xl font-bold">
          Caffeica
        </Link> */}
        <h1>
          <Image
            src="/images/caffeica-logo.png"
            alt="Hero"
            width={129}
            height={65}
          />
        </h1>

        <div>menu</div>
        {/* <ProfileMenu /> */}
      </div>
    </header>
  )
}
