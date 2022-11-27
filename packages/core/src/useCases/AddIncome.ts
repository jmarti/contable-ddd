import { AppError } from 'domain/AppError'
import { Income } from 'domain/Income'
import { IncomeRepository } from 'domain/IncomeRepository'

export class AddIncome {
    constructor(private incomeRepository: IncomeRepository) { }

    async execute(
        id: string,
        description: string,
        amount: number,
        date: string,
        category: string
    ) {
        const existingIncomes = await this.incomeRepository.list()

        if (existingIncomes.some(e => e.id === id)) {
            throw new AppError('An income with the same id already exists.')
        }

        const income = new Income(id, description, amount, date, category)
        this.incomeRepository.add(income)
    }
}