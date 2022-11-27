import { Income } from 'domain/Income'
import { IncomeRepository } from 'domain/IncomeRepository'

export class InMemoryIncomeRepository implements IncomeRepository {
    private incomes: Income[] = []

    async list(): Promise<Income[]> {
        return this.incomes
    }
    
    add(incomes: Income): void {
        this.incomes.push(incomes)
    }

}