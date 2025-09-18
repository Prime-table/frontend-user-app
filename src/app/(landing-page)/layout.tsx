import '../globals.css'

import Navbar from '../_components/Navbar'
import Footer from '../_components/Footer'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Navbar />
      <main className="px-[77px] mt-[150px]">
        {children}
      </main>
      {/* <Faqs /> */}
      <Footer />
    </>
  )
}
