import localFont from 'next/font/local'
import DarkModeToggle from './DarkModeToogle'
const SalmonScript = localFont({
  src: './fonts/SalmonScript.woff',
  display: 'swap',
})

export default function Page() {
  return (
    <main className="max-w-5xl py-32 mx-auto font-sans prose dark:prose-invert">
      <h1 className={`text-center tracking-wider text-9xl text-gray-800 hover:text-gray-900 dark:text-white  ${SalmonScript.className}`}>
        <span className='text-6xl' role={"img"} >👋</span>{" "}Habari Dunia
      </h1>

      <DarkModeToggle />
    </main>
  )
}
