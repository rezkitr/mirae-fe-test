import { goalInvestmentCalculatorTypes } from '@/util/config'
import BaseLayout from '../BaseLayout'
import EmergencyFund from './EmergencyFund'

const GoalInvestmentCalculator = () => {
  return (
    <BaseLayout menus={goalInvestmentCalculatorTypes}>
      <EmergencyFund />
    </BaseLayout>
  )
}

export default GoalInvestmentCalculator
