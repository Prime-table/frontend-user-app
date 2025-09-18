import Faqs from '@/app/_components/landing-page/Faqs'
import MenuItem from '@/app/_components/landing-page/MenuItem'
import { menuCards } from '@/app/_components/menuData'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export default function BookingLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: { id: string }
}>) {
  const card = menuCards.find(
    (item) => item.id === Number(params.id),
  )

  if (!card) {
    notFound()
  }

  function getRecommended(id: number) {
    return menuCards
      .filter((item) => item.id !== id)
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 4)
  }

  const recommended = getRecommended(card.id)
  console.log('Recommended:', recommended)
  return (
    <>
      <div className="py-10">
        <div className="relative mb-10">
          <h2 className="font-semibold text-[40px] text-center leading-[100%]">
            {card.title}
          </h2>
          <Link
            href="/more-menu"
            className="bg-secondary rounded-full p-3 absolute top-0 left-0 hover:opacity-90"
          >
            <Image
              src="/icons/back-arrow.svg"
              alt="Favorite"
              width={24}
              height={24}
            />
          </Link>
        </div>
        <div className="flex flex-row justify-between gap-[30px] items-start h-full ">
          <div className="w-full">
            <Image
              src={card.image}
              alt={card.title}
              width={600}
              height={600}
              className="rounded-[8px] object-cover h-[600px] "
            />
            <div className="space-y-2 mt-3">
              <div className="flex flex-row justify-between mt-4 text-[16px]text-[20px] leading-[100%] font-normal">
                <p className="">{card.country}</p>
                <p className="text-secondary">
                  {card.rating}
                </p>
              </div>
              <h3 className=" font-semibold text-[24px] leading-[100%]">
                {card.title}
              </h3>

              <p className="font-medium text-[24px] leading-[100%]">
                {card.price} average price
              </p>
            </div>
          </div>
          <div className="w-full h-[729px] border-[#E0E0E0] rounded-2xl border px-[58px] py-[52px] shadow-[0px_2px_10px_0px_#00000080]">
            {children}
          </div>
        </div>

        <MenuItem recommended={recommended} />
      </div>
      <Faqs />
    </>
  )
}
