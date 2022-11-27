import { expect, test } from 'vitest'
import { Income } from 'domain/Income'
import { InMemoryIncomeRepository } from 'infrastructure/mock/InMemoryIncomeRepository'
import { ListIncomes } from './ListIncomes'

test(`list incomes`, async () => {
    const repo = new InMemoryIncomeRepository()
    const getIncomes = new ListIncomes(repo)
    const anyIncome: Income = {
        id: '1',
        description: 'Income description',
        amount: 10,
        date: '2022-01-01',
        category: '1'
    }
    repo.add(anyIncome)
    
    const incomes = await getIncomes.execute()
    
    expect(incomes).toStrictEqual([anyIncome])
})