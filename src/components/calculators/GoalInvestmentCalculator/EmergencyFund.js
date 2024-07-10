'use client'

import Image from 'next/image'
import ValueItem from '../ValueItem'
import { useEffect, useState } from 'react'
import { formatCurrency } from '@/util/util'

const EmergencyFund = () => {
  const [investTarget, setInvestTarget] = useState(72000000)
  const [estimatedYield, setEstimatedYield] = useState(4)
  const [investPeriod, setInvestPeriod] = useState(5)
  const [inflationRate, setInflationRate] = useState(4)

  const [monthlyInvest, setMonthlyInvest] = useState(0)
  const [totalPayable, setTotalPayable] = useState(0)

  useEffect(() => {
    const baseMonthly = investTarget / investPeriod / 12
    const inflationAmount =
      ((investTarget / investPeriod) * inflationRate) / 100 / 12
    const monthly = baseMonthly + inflationAmount
    const payable =
      investTarget + ((investTarget * estimatedYield) / 100) * investPeriod

    setTotalPayable(payable)
    setMonthlyInvest(monthly)
  }, [investTarget, estimatedYield, investPeriod, inflationRate])

  return (
    <div className="grid grid-cols-3 gap-y-12">
      <div className="col-span-3 lg:col-span-2 lg:pr-12 h-full flex flex-col justify-between gap-y-8 lg:gap-y-0">
        <ValueItem
          label="Target Jumlah Investasi Reksadana"
          min={100000}
          max={1000000000}
          step={10}
          value={investTarget}
          labelFormater={(value) => formatCurrency(value)}
          onChange={setInvestTarget}
        />
        <ValueItem
          label="Perkiraan Imbal Hasil"
          min={0}
          max={100}
          value={estimatedYield}
          labelFormater={(value) => `${value}%`}
          onChange={setEstimatedYield}
        />
        <ValueItem
          label="Periode Investasi"
          min={1}
          max={10}
          value={investPeriod}
          labelFormater={(value) => `${value} Tahun`}
          onChange={setInvestPeriod}
        />
        <ValueItem
          label="Tingkat Inflasi"
          min={1}
          max={100}
          value={inflationRate}
          labelFormater={(value) => `${value}%`}
          onChange={setInflationRate}
        />
      </div>
      <div className="flex flex-col items-center gap-y-6 p-3 col-span-3 lg:col-span-1">
        <div className="relative h-64 md:h-72 w-[90%]">
          <Image src="/images/promo.png" alt="promo" fill />
        </div>
        <div className="space-y-4 border-[0.5px] border-[#eff2f7] shadow-md rounded-md px-5 py-6 w-full">
          <div>
            <label className="text-sm md:text-base">
              Monthly Invesment Needed
            </label>
            <h3 className="text-xl xl:text-3xl font-semibold">
              {formatCurrency(monthlyInvest)}
            </h3>
          </div>
          <div>
            <label className="text-sm md:text-base">Total Amount Payable</label>
            <h3 className="text-xl xl:text-3xl font-semibold">
              {formatCurrency(totalPayable)}
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmergencyFund
