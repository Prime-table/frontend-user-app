import Footer from './_components/Footer'
import Home from './_components/home-page/Home'
import Navbar from './_components/Navbar'

export default function MainPage() {
  return (
    <>
      <Navbar />
      <main className="px-[77px] mt-[150px]">
        <Home />
      </main>
      <Footer />
    </>
  )
}
