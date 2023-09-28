import Header from '@/components/header'
import './globals.css'
import localFont from 'next/font/local'
import ActiveSectionContextProvider from '@/context/active-section'
import Footer from '@/components/footer'
import ThemeSwitch from '@/components/theme-switch'
import ThemeContextProvider from '@/context/theme-context'

const font = localFont({
  src: "../public/fonts/Vazir-Light.ttf",
  weight: '700'
})

export const metadata = {
  title: 'وبسایت هادی هاشمی',
  description: 'هادی هاشمی توسعه دهنده وبسایت',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <body className={`${font.className} bg-gray-50 text-gray-950 relative  pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}>
        <div className='bg-[#e5e7eb] absolute top-[-6rem] right-[11rem] -z-10 h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[67.85rem] dark:bg-[#1f2d49]'></div>
        <div className='bg-[#e2e8f0] absolute top-[-1rem] left-[-35rem] -z-10 h-[31.25rem] w-[50rem] rounded-full sm:w-[67.85rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] blur-[10rem] dark:bg-[#413e5e]'></div>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <ThemeSwitch />
            <Footer />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  )
}
