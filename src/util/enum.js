export const calulcatorTypeMenus = [
  {
    title: 'Goal Investment',
    key: 'goalInvestemt',
    isActive: true,
    iconPath: '/images/goal-investment.png',
  },
  {
    title: 'Auto Investment',
    key: 'autoInvestment',
    isActive: false,
    iconPath: '/images/auto-investment.png',
  },
  {
    title: 'Delayed Fund',
    key: 'delayedFund',
    isActive: false,
    iconPath: '/images/delay-invesment.png',
  },
]

export const goalInvestmentCalculatorTypes = [
  { title: 'Dana Darurat', key: 'emergencyFund', isActive: true },
  { title: 'Dana Pendidikan', key: 'educationFund', isActive: false },
  { title: 'Dana Liburan', key: 'vacationFund', isActive: false },
  { title: 'Dana Pensiun', key: 'retiredFund', isActive: false },
]
