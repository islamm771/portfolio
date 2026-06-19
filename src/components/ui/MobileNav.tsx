import { navLinks } from '@/utils/data'
import Link from 'next/link'

interface IProps {
  setOpen: (val: boolean) => void
}

const MobileNav = ({ setOpen }: IProps) => {
  return (
    <>
      <div
        className="fixed inset-0 z-40 bg-black/50 h-screen"
        onClick={() => setOpen(false)}
      />

      <div className="fixed left-0 top-0 z-50 h-screen w-72 bg-bg p-6 shadow-lg">
        <h2 className="mb-6 text-xl font-bold text-fg">
          Menu
        </h2>

        <div className="flex flex-col gap-5">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-fg transition-all duration-300 hover:text-primary"
            >
              {item.label}
            </Link>
          ))}

          <a
            href="/Islam_Ibrahim.pdf"
            download="Islam_Ibrahim_CV.pdf"
            className="mt-4 rounded-lg bg-primary px-4 py-2 text-white text-center">
            Download CV
          </a>
        </div>
      </div>
    </>
  )
}

export default MobileNav