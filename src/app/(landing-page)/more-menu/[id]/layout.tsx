import MenuItem from '@/app/_components/landing-page/MenuItem'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getMenus } from '@/app/_lib/api' // <-- your API util
import { MenuCardType } from '@/app/_components/menuData'

export default async function BookingLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { id: string }
}) {
  // Fetch menus on the server
  const res = await getMenus()
  const menus: MenuCardType[] = res.data

  // Find the selected card
  const card = menus.find(
    (item) => item._id === params.id,
  )
  console.log(' this is the params', params)
  if (!card) {
    notFound()
  }

  // Get recommended menus
  function getRecommended(id: string) {
    return menus
      .filter((item) => item._id !== id)
      .slice(0, 4) // limit to 4
  }

  const recommended = getRecommended(card._id)

  return (
    <div className="py-10">
      <div className="relative mb-10">
        <h2 className="font-semibold text-[40px] text-center leading-[100%]">
          {card.restaurantName}
        </h2>
        <Link
          href="/more-menu"
          className="bg-secondary rounded-full p-3 absolute top-0 left-0 hover:opacity-90"
        >
          <Image
            src="/icons/back-arrow.svg"
            alt="Back"
            width={24}
            height={24}
          />
        </Link>
      </div>

      <div className="flex flex-row justify-between gap-[30px] items-start h-full ">
        {/* Left: Menu details */}
        <div className="w-full">
          <Image
            src={
              card.restaurantPhoto ||
              '/images/placeholder.jpg'
            }
            alt={card.restaurantName}
            width={600}
            height={600}
            className="rounded-[8px] object-cover h-[600px]"
          />
          <div className="space-y-2 mt-3">
            <div className="flex flex-row justify-between mt-4 text-[16px] leading-[100%] font-normal">
              <p>{card.address}</p>
              <p className="text-secondary">
                {card.premiumTable === 'yes'
                  ? 'Premium'
                  : 'Standard'}
              </p>
            </div>
            <h3 className="font-semibold text-[24px] leading-[100%]">
              {card.restaurantName}
            </h3>
            <p className="font-medium text-[24px] leading-[100%]">
              {card.pricePerTable} average price
            </p>
          </div>
        </div>

        {/* Right: Booking form (children) */}
        <div className="w-full h-[729px] border-[#E0E0E0] rounded-2xl border px-[58px] py-[52px] shadow-[0px_2px_10px_0px_#00000080]">
          {children}
        </div>
      </div>

      {/* Recommended menus */}
      <MenuItem recommended={recommended} />
    </div>
  )
}
