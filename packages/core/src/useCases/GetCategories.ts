import { Category } from '../domain/Category'
import { CategoryRepository } from '../domain/CategoryRepository'

interface GetCategoriesUseCase {
    execute: () => Promise<Category[]>
}

export class GetCategories implements GetCategoriesUseCase {
    
    constructor(private categoryRepo: CategoryRepository) { }

    async execute() {
        return this.categoryRepo.getCategories()
    }
}