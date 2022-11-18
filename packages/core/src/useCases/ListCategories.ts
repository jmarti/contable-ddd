import { Category } from 'domain/Category'
import { CategoryRepository } from 'domain/CategoryRepository'

interface ListCategoriesUseCase {
    execute: () => Promise<Category[]>
}

export class ListCategories implements ListCategoriesUseCase {
    
    constructor(private categoryRepo: CategoryRepository) { }

    async execute() {
        return this.categoryRepo.list()
    }
}