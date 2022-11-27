import { describe, expect, test } from 'vitest'
import { InMemoryIncomeRepository } from 'infrastructure/mock/InMemoryIncomeRepository'
import { Income } from './Income'

describe.each([
    new InMemoryIncomeRepository()
])(`test income repositories`, (repo) => {
    test(`can save and retrieve category`, async () => {
        const theIncome = new Income('1', 'Income description', 12323, '2022-01-01', '1')
        
        repo.add(theIncome)

        expect(await repo.list()).toEqual([theIncome]) // WRN: Esto solo sirve para la implementación del repo InMemory
    })
})