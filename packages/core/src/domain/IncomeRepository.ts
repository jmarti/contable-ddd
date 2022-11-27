import { Income } from './Income'

export interface IncomeRepository {
    list(): Promise<Income[]>
    add(income: Income): void
}