import React from 'react'

import cac from '../../../../public/icons/cac.svg'
import cbn from '../../../../public/icons/cbn.svg'
import cf from '../../../../public/icons/cf.svg'
import efcc from '../../../../public/icons/efcc.svg'
import firs from '../../../../public/icons/firs.svg'
import icpc from '../../../../public/icons/icpc.svg'
import squard from '../../../../public/icons/squard.svg'
import gmonie from '../../../../public/icons/gmonie.svg'
import Image from 'next/image'

const partnerList = [
  {
    name: 'Central Bank of Nigeria',
    logo: cbn,
  },
  {
    name: 'FIRS',
    logo: firs,
  },

  {
    name: 'Corporate Affairs Commission',
    logo: cf,
  },
  {
    name: 'CAC',
    logo: cac,
  },
  {
    name: 'ICPC',
    logo: icpc,
  },
  {
    name: 'EFCC',
    logo: efcc,
  },
  {
    name: 'SQUARD',
    logo: squard,
  },
  {
    name: 'GMONIE',
    logo: gmonie,
  },
]

function Partners() {
  return (
    <section
      id="partners"
      className="pt-[38px] pb-[119px] text-center px-[77px]"
    >
      <h3 className="text-secondary font-semibold text-[40px] mb-2.5 ">
        Our Partners
      </h3>
      <p className="text-[16px] font-normal text-dark mb-16">
        We’re partnered with reputable
        organizations to deliver trustworthy
        experience to our users.
      </p>
      <div className="h-[50px] w-full">
        <ul className="flex flex-wrap justify-between items-center  w-full">
          {partnerList.map((partner) => (
            <li key={partner.name} className="">
              <Image
                src={partner.logo}
                alt={partner.name}
                className=""
                width={50}
                height={50}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Partners
