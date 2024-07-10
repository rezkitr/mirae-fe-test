import { CalculatorTypeSelector, SectionTitle } from '@/components'
import { GoalInvestmentCalculator } from '@/components/calculators'

const Home = () => {
  return (
    <div className="container mx-auto py-8">
      <SectionTitle
        title="Investment Fundculator"
        subTitle="Tiba di tujuan finansial dengan terarah bersama NAVI"
      />
      <CalculatorTypeSelector />
      <div className="mt-4">
        <GoalInvestmentCalculator />
      </div>
    </div>
  )
}

export default Home
