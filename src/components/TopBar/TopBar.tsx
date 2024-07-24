import Link from 'next/link'
// import { ProfileMenu } from "../ProfileMenu/ProfileMenu"

export async function TopBar() {
  return (
    <header className="hidden bg-white py-4 md:block bg-custom-gradient text-white">
      <div className="max-w-container-lg mx-auto flex items-center justify-between px-4">
        <Link prefetch={false} href="/" className="inter text-3xl font-bold">
          Caffeica
        </Link>

        <div>menu</div>
        {/* <ProfileMenu /> */}
      </div>
    </header>
  )
}
