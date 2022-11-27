import { Income } from 'domain/Income'
import { IncomeRepository } from 'domain/IncomeRepository'


interface ListIncomesUseCase {
    execute: () => Promise<Income[]>
}

export class ListIncomes implements ListIncomesUseCase {
    constructor(private incomeRepository: IncomeRepository) { }

    async execute() {
        return this.incomeRepository.list()
    }
}