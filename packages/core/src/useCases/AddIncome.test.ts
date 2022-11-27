import { expect, test } from 'vitest'
import { Income } from 'domain/Income'
import { InMemoryIncomeRepository } from 'infrastructure/mock/InMemoryIncomeRepository'
import { AddIncome } from './AddIncome'

test(`adds the new income`, async () => {
    const repo = new InMemoryIncomeRepository()
    const addIncome = new AddIncome(repo)
    const theIncome: Income = {
        id: '1',
        description: 'Income description',
        amount: 10,
        date: '2022-01-01',
        category: '1'
    }
    
    addIncome.execute(
        theIncome.id,
        theIncome.description,
        theIncome.amount,
        theIncome.date,
        theIncome.category
    )

    expect(await repo.list()).toEqual([
        new Income(
            theIncome.id,
            theIncome.description,
            theIncome.amount,
            theIncome.date,
            theIncome.category
        )
    ])
})


test(`can't add a category with the same id`, async () => {
    const repo = new InMemoryIncomeRepository()
    const addIncome = new AddIncome(repo)
    const theIncomeRepeatedData = { id: '1' }
    const theIncome = {
        description: 'Income description',
        amount: 10,
        date: '2022-01-01',
        category: '1',
        ...theIncomeRepeatedData
    }
    const incomeWithSameId = {
        description: 'Income with same id',
        amount: 16,
        date: '2022-01-02',
        category: '2',
        ...theIncomeRepeatedData
    }
    
    addIncome.execute(
        theIncome.id,
        theIncome.description,
        theIncome.amount,
        theIncome.date,
        theIncome.category
    )
    async function addSameIdIncome() {
        await addIncome.execute(
            incomeWithSameId.id,
            incomeWithSameId.description,
            incomeWithSameId.amount,
            incomeWithSameId.date,
            incomeWithSameId.category
        )
    }

    await expect(addSameIdIncome).rejects.toThrow('An income with the same id already exists.')
    expect(await repo.list()).toEqual([
        new Income(
            theIncome.id,
            theIncome.description,
            theIncome.amount,
            theIncome.date,
            theIncome.category)
    ])
})